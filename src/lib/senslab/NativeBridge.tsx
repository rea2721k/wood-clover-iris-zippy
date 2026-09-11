import { useEffect, useRef } from "react";
import { useLab } from "@/lib/lab-store";
import { matchMouseProfile, measureRefreshRate, readDisplay } from "./detect";
import { ingestStatus, nativeFetch, type NativePoll, type NativeStatus } from "./native-live";
import { MICE } from "./mice";
import { matchMonitor } from "./monitors";

export function NativeBridge() {
  const set = useLab((s) => s.set);
  const setDetected = useLab((s) => s.setDetected);
  const primed = useRef(false);
  const lastMouse = useRef("");
  const lastUlx = useRef("");
  const lastMon = useRef("");

  useEffect(() => {
    let stop = false;
    let nativeOk = false;

    async function detectWeb() {
      const d = readDisplay();
      if (d.width && d.height) set("monitorRes", `${d.width}×${d.height}`);
      try {
        const hz = await measureRefreshRate();
        if (!stop && hz) {
          set("monitorHz", hz);
          const mon = matchMonitor(hz, `${d.width}×${d.height}`);
          if (mon) set("monitorId", mon.id);
        }
      } catch {
        /* ignore */
      }
    }

    function applyMouse(name: string, vidpid: string) {
      const key = name + "|" + vidpid;
      if (key === lastMouse.current) return;
      lastMouse.current = key;
      setDetected(name, vidpid);
      const low = name.toLowerCase();
      const hit =
        (low.includes("finalmouse") || low.includes("ultralight")
          ? MICE.find((m) => m.name.startsWith("Finalmouse"))
          : null) ??
        matchMouseProfile(name) ??
        MICE.find((m) => m.name !== "AUTO / ANY MOUSE" && name.toLowerCase().includes(m.name.toLowerCase().split(" ")[0]));
      if (hit) set("mouse", hit.name);
      else if (name && !/hid-compliant|usb input|hid mouse/i.test(name)) set("mouse", name);
    }

    async function tickPoll() {
      const p = await nativeFetch<NativePoll>("/api/poll/status");
      if (stop || !p) return;
      ingestStatus({
        native: true,
        installed: true,
        installDir: "",
        poll: p,
        mice: [],
        displays: [],
      });
    }

    async function tickDevices() {
      const s = await nativeFetch<NativeStatus>("/api/status");
      if (stop) return;
      if (!s?.native) {
        if (!primed.current) {
          primed.current = true;
          void detectWeb();
        }
        return;
      }
      nativeOk = true;
      ingestStatus(s);
      const primary = s.displays?.find((d) => d.primary) ?? s.displays?.[0];
      if (primary?.refresh) {
        const key = `${primary.refresh}|${primary.width}x${primary.height}|${primary.monitorName}`;
        if (key !== lastMon.current) {
          lastMon.current = key;
          set("monitorHz", primary.refresh);
          if (primary.width && primary.height) set("monitorRes", `${primary.width}×${primary.height}`);
          set("monitorNative", true);
          const mon = matchMonitor(
            primary.refresh,
            `${primary.width}×${primary.height}`,
            `${primary.brand ?? ""} ${primary.model ?? ""} ${primary.monitorName}`,
          );
          if (mon) set("monitorId", mon.id);
        }
      }
      const ulx = s.ulx;
      if (ulx?.connected) {
        const key = `${ulx.pollHz}|${ulx.dpi}|${ulx.lodMm}|${ulx.name}|${ulx.firmware}`;
        if (key !== lastUlx.current) {
          lastUlx.current = key;
          if (ulx.pollHz && ulx.pollHz >= 125) set("mouseHz", ulx.pollHz);
          if (ulx.dpi && ulx.dpi >= 50) {
            set("dpi", ulx.dpi);
            set("srcDpi", ulx.dpi);
            set("dstDpi", ulx.dpi);
          }
          applyMouse(ulx.name || "Finalmouse UltralightX", ulx.vidpid || "");
        }
      } else {
        const hid = s.mice?.[0];
        if (hid?.name) applyMouse(hid.name, hid.vidpid);
      }
      primed.current = true;
    }

    void tickDevices();
    void tickPoll();
    const pollId = window.setInterval(() => {
      void tickPoll();
    }, 40);
    const devId = window.setInterval(() => {
      if (primed.current && !nativeOk) {
        window.clearInterval(devId);
        window.clearInterval(pollId);
        return;
      }
      void tickDevices();
    }, 1200);
    return () => {
      stop = true;
      window.clearInterval(pollId);
      window.clearInterval(devId);
    };
  }, [set, setDetected]);

  return null;
}
