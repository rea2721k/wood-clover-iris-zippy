export type Quality = "Verified" | "Community-verified" | "Calibrated" | "Estimate" | "Manual";
export type GameMode = "yaw" | "percent" | "pubg" | "manual";

export type GameProfile = {
  name: string;
  engine: string;
  mode: GameMode;
  yaw: number | null;
  quality: Quality;
  note: string;
  unit: string;
};

export const GAMES: GameProfile[] = [
  {
    "name": "Valorant",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Verified",
    "note": "Linear yaw profile",
    "unit": "scalar"
  },
  {
    "name": "Counter-Strike 2",
    "engine": "Source 2",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Linear yaw profile",
    "unit": "scalar"
  },
  {
    "name": "Counter-Strike: GO",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Legacy Source yaw",
    "unit": "scalar"
  },
  {
    "name": "Apex Legends",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Linear yaw profile",
    "unit": "scalar"
  },
  {
    "name": "Overwatch 2",
    "engine": "Blizzard Custom",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "Widely cited community constant",
    "unit": "scalar"
  },
  {
    "name": "Call of Duty: Warzone",
    "engine": "IW",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "Modern CoD family reference",
    "unit": "scalar"
  },
  {
    "name": "Call of Duty: Black Ops 6",
    "engine": "IW",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "CoD family reference",
    "unit": "scalar"
  },
  {
    "name": "Call of Duty: Black Ops 7",
    "engine": "IW",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "CoD family reference",
    "unit": "scalar"
  },
  {
    "name": "Call of Duty: Modern Warfare III",
    "engine": "IW",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "CoD family reference",
    "unit": "scalar"
  },
  {
    "name": "Call of Duty: Modern Warfare II",
    "engine": "IW",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "CoD family reference",
    "unit": "scalar"
  },
  {
    "name": "Rainbow Six Siege",
    "engine": "AnvilNext",
    "mode": "yaw",
    "yaw": 0.00572958,
    "quality": "Verified",
    "note": "Multiplier-aware game; base hipfire conversion",
    "unit": "scalar"
  },
  {
    "name": "PUBG: Battlegrounds",
    "engine": "Unreal Engine 4",
    "mode": "pubg",
    "yaw": null,
    "quality": "Calibrated",
    "note": "Non-linear sensitivity scale; scope-specific settings. Hipfire calibration uses community reference.",
    "unit": "pubg"
  },
  {
    "name": "Fortnite",
    "engine": "Unreal Engine",
    "mode": "percent",
    "yaw": 0.0286,
    "quality": "Community-verified",
    "note": "Percent slider; treat as calibrated conversion, not raw scalar",
    "unit": "percent"
  },
  {
    "name": "Delta Force",
    "engine": "Unreal Engine",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "Modern UE shooter reference",
    "unit": "scalar"
  },
  {
    "name": "Marvel Rivals",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "The Finals",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.0055,
    "quality": "Estimate",
    "note": "Empirical / approximation; verify in-game",
    "unit": "scalar"
  },
  {
    "name": "Destiny 2",
    "engine": "Tiger Engine",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "Deadlock",
    "engine": "Source 2",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "FragPunk",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Community-verified",
    "note": "UE-style reference; verify patch behavior",
    "unit": "scalar"
  },
  {
    "name": "ARC Raiders",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Estimate",
    "note": "Profile estimate; verify after major updates",
    "unit": "scalar"
  },
  {
    "name": "Escape from Tarkov",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.005,
    "quality": "Estimate",
    "note": "Horizontal X-axis approximation",
    "unit": "scalar"
  },
  {
    "name": "Halo Infinite",
    "engine": "Slipspace",
    "mode": "yaw",
    "yaw": 0.0225,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "Team Fortress 2",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Source yaw",
    "unit": "scalar"
  },
  {
    "name": "Quake Live",
    "engine": "id Tech 3",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Quake/Source-style yaw reference",
    "unit": "scalar"
  },
  {
    "name": "Quake Champions",
    "engine": "id Tech",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Community-verified",
    "note": "Common converter reference",
    "unit": "scalar"
  },
  {
    "name": "Titanfall 2",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "Helldivers 2",
    "engine": "Autodesk Stingray",
    "mode": "yaw",
    "yaw": 0.01,
    "quality": "Estimate",
    "note": "Profile estimate; verify in-game",
    "unit": "scalar"
  },
  {
    "name": "Battlefield 2042",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.002222,
    "quality": "Community-verified",
    "note": "Percentage/slider behavior requires in-game verification",
    "unit": "scalar"
  },
  {
    "name": "Battlefield V",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.002222,
    "quality": "Community-verified",
    "note": "Percentage/slider behavior requires in-game verification",
    "unit": "scalar"
  },
  {
    "name": "Battlefield 1",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.002222,
    "quality": "Community-verified",
    "note": "Percentage/slider behavior requires in-game verification",
    "unit": "scalar"
  },
  {
    "name": "Battlefield 4",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.002222,
    "quality": "Community-verified",
    "note": "Percentage/slider behavior requires in-game verification",
    "unit": "scalar"
  },
  {
    "name": "Battlefield 3",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.002222,
    "quality": "Community-verified",
    "note": "Percentage/slider behavior requires in-game verification",
    "unit": "scalar"
  },
  {
    "name": "Battlefield 6",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.0022,
    "quality": "Estimate",
    "note": "Current community/expected reference; verify against patch",
    "unit": "scalar"
  },
  {
    "name": "Rust",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.11247,
    "quality": "Community-verified",
    "note": "Common Rust sensitivity reference",
    "unit": "scalar"
  },
  {
    "name": "Hunt: Showdown 1896",
    "engine": "CryEngine",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Estimate",
    "note": "Profile estimate; scope behavior varies",
    "unit": "scalar"
  },
  {
    "name": "DOOM Eternal",
    "engine": "id Tech 7",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "DOOM (2016)",
    "engine": "id Tech 6",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Community-verified",
    "note": "Linear reference",
    "unit": "scalar"
  },
  {
    "name": "DOOM: The Dark Ages",
    "engine": "id Tech",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Estimate",
    "note": "Profile estimate",
    "unit": "scalar"
  },
  {
    "name": "Cyberpunk 2077",
    "engine": "REDengine",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Estimate",
    "note": "Profile approximation",
    "unit": "scalar"
  },
  {
    "name": "GTA V",
    "engine": "RAGE",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Estimate",
    "note": "Profile approximation",
    "unit": "scalar"
  },
  {
    "name": "Left 4 Dead 2",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Source yaw",
    "unit": "scalar"
  },
  {
    "name": "Portal 2",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Source yaw",
    "unit": "scalar"
  },
  {
    "name": "Garry's Mod",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Verified",
    "note": "Source yaw",
    "unit": "scalar"
  },
  {
    "name": "Insurgency: Sandstorm",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.014,
    "quality": "Estimate",
    "note": "Profile estimate",
    "unit": "scalar"
  },
  {
    "name": "Squad",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0093,
    "quality": "Community-verified",
    "note": "Unreal family reference",
    "unit": "scalar"
  },
  {
    "name": "Ready or Not",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0093,
    "quality": "Community-verified",
    "note": "UE profile family",
    "unit": "scalar"
  },
  {
    "name": "Hell Let Loose",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0093,
    "quality": "Community-verified",
    "note": "UE profile family",
    "unit": "scalar"
  },
  {
    "name": "Ground Branch",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0093,
    "quality": "Community-verified",
    "note": "UE profile family",
    "unit": "scalar"
  },
  {
    "name": "DayZ",
    "engine": "Enfusion",
    "mode": "yaw",
    "yaw": 0.0179,
    "quality": "Community-verified",
    "note": "Common converter reference",
    "unit": "scalar"
  },
  {
    "name": "Arma 3",
    "engine": "Real Virtuality",
    "mode": "yaw",
    "yaw": 0.0179,
    "quality": "Community-verified",
    "note": "Common converter reference",
    "unit": "scalar"
  },
  {
    "name": "Arma Reforger",
    "engine": "Enfusion",
    "mode": "yaw",
    "yaw": 0.0179,
    "quality": "Community-verified",
    "note": "Common converter reference",
    "unit": "scalar"
  },
  {
    "name": "Palworld",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "UE-style reference",
    "unit": "scalar"
  },
  {
    "name": "Sea of Thieves",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "UE-style approximation",
    "unit": "scalar"
  },
  {
    "name": "Valheim",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "7 Days to Die",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Unturned",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Deep Rock Galactic",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Warframe",
    "engine": "Evolution Engine",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Enlisted",
    "engine": "Dagor Engine",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Payday 2",
    "engine": "Diesel",
    "mode": "yaw",
    "yaw": 0.0143,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Payday 3",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "PlanetSide 2",
    "engine": "Forgelight",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Crysis Remastered",
    "engine": "CryEngine",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Wolfenstein II",
    "engine": "id Tech 6",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "ULTRAKILL",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.0149,
    "quality": "Estimate",
    "note": "Community estimate",
    "unit": "scalar"
  },
  {
    "name": "Unreal Tournament 2004",
    "engine": "Unreal Engine 2",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "UE-family approximation",
    "unit": "scalar"
  },
  {
    "name": "Tribes: Ascend",
    "engine": "Unreal Engine 3",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "UE-family approximation",
    "unit": "scalar"
  },
  {
    "name": "Paladins",
    "engine": "Unreal Engine 3",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Estimate",
    "note": "Community approximation",
    "unit": "scalar"
  },
  {
    "name": "XDefiant",
    "engine": "Snowdrop",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Community-verified",
    "note": "Call-of-Duty-like reference",
    "unit": "scalar"
  },
  {
    "name": "Splitgate 2",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Estimate",
    "note": "Profile approximation",
    "unit": "scalar"
  },
  {
    "name": "BattleBit Remastered",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.002222,
    "quality": "Community-verified",
    "note": "Community converter family reference",
    "unit": "scalar"
  },
  {
    "name": "Off The Grid",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "UE-style approximation",
    "unit": "scalar"
  },
  {
    "name": "STALZONE",
    "engine": "Unreal Engine",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "UE-style approximation",
    "unit": "scalar"
  },
  {
    "name": "World of Tanks",
    "engine": "BigWorld",
    "mode": "yaw",
    "yaw": 0.0286,
    "quality": "Estimate",
    "note": "Community approximation",
    "unit": "scalar"
  },
  {
    "name": "Hytale",
    "engine": "Unreal Engine",
    "mode": "yaw",
    "yaw": 0.0066,
    "quality": "Estimate",
    "note": "Profile approximation",
    "unit": "scalar"
  },
  {
    "name": "Arena Breakout: Infinite",
    "engine": "Unreal Engine",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Gray Zone Warfare",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "STALKER 2: Heart of Chornobyl",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Squad 44",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Bodycam",
    "engine": "Unreal Engine 5",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Marauders",
    "engine": "Unreal Engine",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Battlefield Hardline",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Star Wars Battlefront II",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Star Wars Battlefront",
    "engine": "Frostbite",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "The Division 2",
    "engine": "Snowdrop",
    "mode": "yaw",
    "yaw": 0.05,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "The Division",
    "engine": "Snowdrop",
    "mode": "yaw",
    "yaw": 0.05,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Borderlands 3",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "DOOM 3",
    "engine": "id Tech 4",
    "mode": "yaw",
    "yaw": 0.043,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Wolfenstein: The New Order",
    "engine": "id Tech 5",
    "mode": "yaw",
    "yaw": 0.043,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Metro Exodus",
    "engine": "4A Engine",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Insurgency",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Day of Infamy",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Rising Storm 2: Vietnam",
    "engine": "Unreal Engine 3",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Killing Floor 2",
    "engine": "Unreal Engine 3",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Black Mesa",
    "engine": "Source",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "S.T.A.L.K.E.R.: Call of Pripyat",
    "engine": "X-Ray",
    "mode": "yaw",
    "yaw": 0.022,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Chivalry 2",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Mordhau",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Foxhole",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.05,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Battle Brothers",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.05,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "Pavlov VR",
    "engine": "Unreal Engine 4",
    "mode": "yaw",
    "yaw": 0.07,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  },
  {
    "name": "VRChat",
    "engine": "Unity",
    "mode": "yaw",
    "yaw": 0.05,
    "quality": "Calibrated",
    "note": "Engine-based yaw calibration",
    "unit": "manual"
  }
];
