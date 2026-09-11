export type MouseProfile = {
  name: string;
  max: number | null;
  note: string;
  source: string;
};

export const MICE: MouseProfile[] = [
  {
    "name": "AUTO / ANY MOUSE",
    "max": null,
    "note": "Polling test is device-agnostic",
    "source": "Native Raw Input"
  },
  {
    "name": "Finalmouse UltralightX",
    "max": 8000,
    "note": "Up to 8K wireless",
    "source": "Finalmouse"
  },
  {
    "name": "Razer Viper V3 Pro",
    "max": 8000,
    "note": "Up to 8K with supplied receiver",
    "source": "Razer"
  },
  {
    "name": "Razer DeathAdder V4 Pro",
    "max": 8000,
    "note": "Up to 8K wired + wireless",
    "source": "Razer"
  },
  {
    "name": "Razer DeathAdder V3 Pro",
    "max": 8000,
    "note": "Up to 8K with HyperPolling",
    "source": "Razer"
  },
  {
    "name": "Razer Viper V2 Pro",
    "max": 8000,
    "note": "Receiver/dongle dependent",
    "source": "Razer"
  },
  {
    "name": "Razer Viper 8KHz",
    "max": 8000,
    "note": "8K wired",
    "source": "Razer"
  },
  {
    "name": "Logitech G PRO X SUPERLIGHT 2",
    "max": 8000,
    "note": "Up to 8K with compatible firmware/receiver",
    "source": "Logitech G"
  },
  {
    "name": "Logitech G PRO X2 SUPERSTRIKE",
    "max": 8000,
    "note": "8K report rate",
    "source": "Logitech G"
  },
  {
    "name": "Pulsar X2H v3",
    "max": 8000,
    "note": "8K dongle required",
    "source": "Pulsar"
  },
  {
    "name": "Pulsar X2H v3 eS",
    "max": 8000,
    "note": "8K class",
    "source": "Pulsar"
  },
  {
    "name": "Pulsar X2F",
    "max": 8000,
    "note": "8K wireless class",
    "source": "Pulsar"
  },
  {
    "name": "Pulsar LAB X2F",
    "max": 8000,
    "note": "Up to 8K",
    "source": "Pulsar"
  },
  {
    "name": "Endgame Gear OP1 8k v2",
    "max": 8000,
    "note": "1000/2000/4000/8000 Hz",
    "source": "Endgame Gear"
  },
  {
    "name": "Endgame Gear OP1w 4k v2",
    "max": 4000,
    "note": "Up to 4K",
    "source": "Endgame Gear"
  },
  {
    "name": "Endgame Gear XM2w 4k v2",
    "max": 4000,
    "note": "Up to 4K",
    "source": "Endgame Gear"
  },
  {
    "name": "WLmouse Beast X",
    "max": 8000,
    "note": "8K class",
    "source": "WLmouse"
  },
  {
    "name": "WLmouse Beast X Max",
    "max": 8000,
    "note": "8K class",
    "source": "WLmouse"
  },
  {
    "name": "WLmouse HUAN",
    "max": 8000,
    "note": "Up to 8K",
    "source": "WLmouse"
  },
  {
    "name": "LAMZU MAYA X",
    "max": 8000,
    "note": "8K out of box",
    "source": "LAMZU"
  },
  {
    "name": "LAMZU MAYA",
    "max": 8000,
    "note": "8K dongle compatible",
    "source": "LAMZU"
  },
  {
    "name": "LAMZU Atlantis OG V2 Pro",
    "max": 8000,
    "note": "8K class",
    "source": "LAMZU"
  },
  {
    "name": "LAMZU Atlantis Mini Pro",
    "max": 8000,
    "note": "8K class",
    "source": "LAMZU"
  },
  {
    "name": "LAMZU Atlantis Mini 4K",
    "max": 8000,
    "note": "8K class with high-polling receiver",
    "source": "LAMZU"
  },
  {
    "name": "Corsair SABRE v2 PRO",
    "max": 8000,
    "note": "Up to 8K wireless/wired",
    "source": "Corsair"
  },
  {
    "name": "ASUS ROG Harpe Ace Extreme",
    "max": 8000,
    "note": "8K with ROG Polling Rate Booster",
    "source": "ASUS ROG"
  },
  {
    "name": "Scyrox V6",
    "max": 8000,
    "note": "Up to 8K",
    "source": "Scyrox"
  },
  {
    "name": "ATK Blazing Sky F1 V3",
    "max": 8000,
    "note": "Up to 8K",
    "source": "ATK"
  },
  {
    "name": "ZOWIE U2-DW",
    "max": 4000,
    "note": "Up to 4K with enhanced receiver",
    "source": "ZOWIE"
  },
  {
    "name": "ZOWIE EC2-DW",
    "max": 4000,
    "note": "Receiver dependent",
    "source": "ZOWIE"
  },
  {
    "name": "ZOWIE FK2-DW",
    "max": 4000,
    "note": "Receiver dependent",
    "source": "ZOWIE"
  },
  {
    "name": "ZOWIE S2-DW",
    "max": 4000,
    "note": "Receiver dependent",
    "source": "ZOWIE"
  },
  {
    "name": "ZOWIE EC1-DW",
    "max": 4000,
    "note": "Receiver dependent",
    "source": "ZOWIE"
  },
  {
    "name": "ZOWIE EC3-DW",
    "max": 4000,
    "note": "Receiver dependent",
    "source": "ZOWIE"
  },
  {
    "name": "Glorious Model O 2 Wireless",
    "max": 4000,
    "note": "4K class",
    "source": "Glorious"
  },
  {
    "name": "VAXEE XE v2 Wireless",
    "max": 4000,
    "note": "4K class",
    "source": "VAXEE"
  },
  {
    "name": "SteelSeries Aerox 3 Wireless Gen 2",
    "max": 4000,
    "note": "Up to 4K",
    "source": "SteelSeries"
  },
  {
    "name": "Razer Viper V3 HyperSpeed",
    "max": 4000,
    "note": "Up to 4K",
    "source": "Razer"
  }
];
