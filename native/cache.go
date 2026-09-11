package main

import (
	"sync"
	"time"
)

var (
	devMu     sync.Mutex
	miceCache []MouseDev
	miceAt    time.Time
	dispCache []DisplayDev
	dispAt    time.Time
)

func cachedMice() []MouseDev {
	devMu.Lock()
	defer devMu.Unlock()
	if miceCache != nil && time.Since(miceAt) < 12*time.Second {
		return miceCache
	}
	miceCache = listMice()
	miceAt = time.Now()
	return miceCache
}

func cachedDisplays() []DisplayDev {
	devMu.Lock()
	defer devMu.Unlock()
	if dispCache != nil && time.Since(dispAt) < 20*time.Second {
		return dispCache
	}
	dispCache = listDisplays()
	dispAt = time.Now()
	return dispCache
}
