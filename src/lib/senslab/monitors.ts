export type MonitorProfile = {
  id: string;
  brand: string;
  name: string;
  res: string[];
  hz: number[];
  native: string;
  conn: string;
};

export const REFRESH_RATES = [60, 75, 120, 144, 165, 180, 240, 280, 360, 400, 480, 500, 540, 600] as const;

export const POLL_RATES = [125, 250, 500, 1000, 2000, 4000, 8000] as const;

export const MONITORS_CATALOG: MonitorProfile[] = [
  { id: "detected", brand: "Detected", name: "Auto", res: ["1920×1080", "2560×1440"], hz: [60, 144, 240, 360, 400, 540], native: "1920×1080", conn: "Auto" },
  { id: "xl2586x", brand: "ZOWIE", name: "XL2586X", res: ["1920×1080"], hz: [540], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2586xp", brand: "ZOWIE", name: "XL2586X+", res: ["1920×1080"], hz: [600], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2566xp", brand: "ZOWIE", name: "XL2566X+", res: ["1920×1080"], hz: [360, 400], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2566k", brand: "ZOWIE", name: "XL2566K", res: ["1920×1080"], hz: [360], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2546xp", brand: "ZOWIE", name: "XL2546X+", res: ["1920×1080"], hz: [240, 280], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2546k", brand: "ZOWIE", name: "XL2546K", res: ["1920×1080"], hz: [240], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2540k", brand: "ZOWIE", name: "XL2540K", res: ["1920×1080"], hz: [240], native: "1920×1080", conn: "DisplayPort" },
  { id: "xl2411k", brand: "ZOWIE", name: "XL2411K", res: ["1920×1080"], hz: [144], native: "1920×1080", conn: "DisplayPort" },
  { id: "pg27aqn", brand: "ASUS", name: "ROG Swift PG27AQN", res: ["2560×1440"], hz: [360], native: "2560×1440", conn: "DisplayPort" },
  { id: "pg27aqdp", brand: "ASUS", name: "ROG Swift OLED PG27AQDP", res: ["2560×1440"], hz: [480], native: "2560×1440", conn: "DisplayPort" },
  { id: "xg27aqdmg", brand: "ASUS", name: "ROG Strix XG27AQDMG", res: ["2560×1440"], hz: [240], native: "2560×1440", conn: "DisplayPort" },
  { id: "aw2524h", brand: "Alienware", name: "AW2524H", res: ["1920×1080"], hz: [500], native: "1920×1080", conn: "DisplayPort" },
  { id: "aw2725df", brand: "Alienware", name: "AW2725DF", res: ["2560×1440"], hz: [360], native: "2560×1440", conn: "DisplayPort" },
  { id: "odyssey-g6", brand: "Samsung", name: "Odyssey G6", res: ["2560×1440"], hz: [360], native: "2560×1440", conn: "DisplayPort" },
  { id: "generic-144", brand: "Generic", name: "144 Hz panel", res: ["1920×1080", "2560×1440"], hz: [144], native: "1920×1080", conn: "DisplayPort" },
  { id: "generic-240", brand: "Generic", name: "240 Hz panel", res: ["1920×1080"], hz: [240], native: "1920×1080", conn: "DisplayPort" },
  { id: "generic-360", brand: "Generic", name: "360 Hz panel", res: ["1920×1080"], hz: [360], native: "1920×1080", conn: "DisplayPort" },
];

export function monitorById(id: string) {
  return MONITORS_CATALOG.find((m) => m.id === id) ?? MONITORS_CATALOG[0];
}

export function matchMonitor(hz: number, res?: string, name?: string) {
  const n = (name || "").toLowerCase();
  if (n) {
    const byName = MONITORS_CATALOG.find(
      (m) => m.id !== "detected" && (n.includes(m.name.toLowerCase()) || (m.brand !== "Generic" && n.includes(m.brand.toLowerCase()))),
    );
    if (byName) return byName;
  }
  const byHz = MONITORS_CATALOG.filter((m) => m.id !== "detected" && (m.hz.includes(hz) || m.hz.some((h) => Math.abs(h - hz) <= 10)));
  if (res) {
    const byRes = byHz.find((m) => m.native === res || m.res.includes(res));
    if (byRes) return byRes;
  }
  return byHz[0] ?? MONITORS_CATALOG[0];
}
