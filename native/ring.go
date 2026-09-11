package main

import (
	"sync/atomic"
	"unsafe"
)

var (
	procQPC = kernel32.NewProc("QueryPerformanceCounter")
	procQPF = kernel32.NewProc("QueryPerformanceFrequency")
	qpcFreq int64
)

func initQPC() {
	procQPF.Call(uintptr(unsafe.Pointer(&qpcFreq)))
	if qpcFreq <= 0 {
		qpcFreq = 10_000_000
	}
}

func qpcNow() int64 {
	var v int64
	procQPC.Call(uintptr(unsafe.Pointer(&v)))
	return v
}

func qpcTicks(ns int64) int64 {
	if qpcFreq <= 0 {
		return ns
	}
	return ns * qpcFreq / 1_000_000_000
}

func qpcSec(ticks int64) float64 {
	if ticks <= 0 {
		return 0
	}
	f := qpcFreq
	if f <= 0 {
		f = 10_000_000
	}
	return float64(ticks) / float64(f)
}

const ringCap = 16384 // ~2 s at 8 kHz

type stampRing struct {
	t [ringCap]int64
	n [ringCap]uint32
	w uint64
}

func (r *stampRing) add(n int, t int64) {
	if n <= 0 {
		return
	}
	if t == 0 {
		t = qpcNow()
	}
	i := atomic.AddUint64(&r.w, 1) - 1
	idx := i & (ringCap - 1)
	r.n[idx] = uint32(n)
	atomic.StoreInt64(&r.t[idx], t)
}

func (r *stampRing) window(winNs int64) (hz float64, reports int) {
	now := qpcNow()
	cut := now - qpcTicks(winNs)
	w := atomic.LoadUint64(&r.w)
	if w == 0 {
		return 0, 0
	}
	span := w
	if span > ringCap {
		span = ringCap
	}
	var n int
	var first, last int64
	start := w - span
	for i := start; i < w; i++ {
		idx := i & (ringCap - 1)
		ts := atomic.LoadInt64(&r.t[idx])
		if ts < cut || ts == 0 {
			continue
		}
		if first == 0 {
			first = ts
		}
		last = ts
		n += int(r.n[idx])
	}
	if n < 4 {
		return 0, n
	}
	dt := qpcSec(last - first)
	if dt < 0.03 {
		dt = qpcSec(now - first)
	}
	if dt < 0.03 {
		dt = 0.03
	}
	return float64(n) / dt, n
}
