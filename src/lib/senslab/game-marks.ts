export type GameMarkStyle = {
  bg: string;
  fg: string;
  text: string;
};

const MARKS: Record<string, GameMarkStyle> = {
  "PUBG: Battlegrounds": { bg: "#f2a900", fg: "#1a1204", text: "P" },
  Valorant: { bg: "#ff4655", fg: "#fff", text: "V" },
  "Counter-Strike 2": { bg: "#de9b35", fg: "#16120b", text: "CS" },
  "Counter-Strike: GO": { bg: "#c47b16", fg: "#16120b", text: "GO" },
  "Apex Legends": { bg: "#da292a", fg: "#fff", text: "A" },
  "Call of Duty: Warzone": { bg: "#4a8c2a", fg: "#fff", text: "WZ" },
  "Rainbow Six Siege": { bg: "#2a6adf", fg: "#fff", text: "R6" },
  Fortnite: { bg: "#7b5cff", fg: "#fff", text: "FN" },
  "Overwatch 2": { bg: "#f99e1a", fg: "#16120b", text: "OW" },
  "The Finals": { bg: "#e10600", fg: "#fff", text: "TF" },
  "Escape from Tarkov": { bg: "#9a7b4f", fg: "#fff", text: "EFT" },
  "Destiny 2": { bg: "#4a90d9", fg: "#fff", text: "D2" },
  "Marvel Rivals": { bg: "#e23636", fg: "#fff", text: "MR" },
  "Battlefield 2042": { bg: "#f5a623", fg: "#16120b", text: "BF" },
  "Helldivers 2": { bg: "#ffd100", fg: "#16120b", text: "HD" },
  "Call of Duty: Modern Warfare III": { bg: "#5a8c2a", fg: "#fff", text: "MW" },
  "Call of Duty: Black Ops 6": { bg: "#2d5a27", fg: "#fff", text: "BO" },
  "Tom Clancy's Rainbow Six Extraction": { bg: "#1f4f8a", fg: "#fff", text: "EX" },
  "Hunt: Showdown": { bg: "#7a3e1d", fg: "#f3e2c6", text: "H" },
  "Delta Force": { bg: "#3d7a3a", fg: "#fff", text: "DF" },
  "XDefiant": { bg: "#00c2ff", fg: "#041018", text: "XD" },
  "Rust": { bg: "#cd412b", fg: "#fff", text: "R" },
  "DayZ": { bg: "#8a1f1f", fg: "#fff", text: "DZ" },
  "ARK: Survival Evolved": { bg: "#2f6f4e", fg: "#fff", text: "ARK" },
  Minecraft: { bg: "#54a329", fg: "#fff", text: "MC" },
  Roblox: { bg: "#e2231a", fg: "#fff", text: "R" },
  "League of Legends": { bg: "#c8aa6e", fg: "#0a1428", text: "LOL" },
  "Teamfight Tactics": { bg: "#d4a017", fg: "#0a1428", text: "TFT" },
  "Dota 2": { bg: "#b7342a", fg: "#fff", text: "D2" },
  "Deadlock": { bg: "#6b4cff", fg: "#fff", text: "DL" },
  "Paladins": { bg: "#1aa7ec", fg: "#fff", text: "P" },
  "Splitgate": { bg: "#7c5cff", fg: "#fff", text: "SG" },
  "Quake Champions": { bg: "#c4312b", fg: "#fff", text: "Q" },
  "Diabotical": { bg: "#19d3c5", fg: "#041018", text: "DB" },
  "osu!": { bg: "#ff66aa", fg: "#fff", text: "O" },
  "Aim Lab": { bg: "#2ad4ea", fg: "#041018", text: "AL" },
  KovaaKs: { bg: "#ff7a18", fg: "#16120b", text: "K" },
  "3D Aim Trainer": { bg: "#3dd68c", fg: "#041018", text: "3D" },
  "War Thunder": { bg: "#2a6d3c", fg: "#fff", text: "WT" },
  "World of Tanks": { bg: "#9a7b2f", fg: "#fff", text: "WoT" },
  "World of Warships": { bg: "#1c5f8a", fg: "#fff", text: "WoWS" },
  "Sea of Thieves": { bg: "#0aa3c2", fg: "#041018", text: "SoT" },
  "New World": { bg: "#b08a3a", fg: "#16120b", text: "NW" },
  "Lost Ark": { bg: "#c9a227", fg: "#16120b", text: "LA" },
  "Throne and Liberty": { bg: "#6e4cff", fg: "#fff", text: "TL" },
  "Black Desert": { bg: "#8b1e1e", fg: "#fff", text: "BDO" },
  "Guild Wars 2": { bg: "#8e1e2a", fg: "#fff", text: "GW" },
  "Final Fantasy XIV": { bg: "#1e4b8e", fg: "#fff", text: "FF" },
  "Elder Scrolls Online": { bg: "#6b4a2a", fg: "#fff", text: "ESO" },
  "Star Wars Battlefront II": { bg: "#1a1a1a", fg: "#ffe81f", text: "SW" },
  "Battlefield V": { bg: "#c45c12", fg: "#fff", text: "BFV" },
  "Battlefield 1": { bg: "#a33b1c", fg: "#fff", text: "BF1" },
  "Battlefield 4": { bg: "#1f5f8a", fg: "#fff", text: "BF4" },
  "Titanfall 2": { bg: "#e24a1c", fg: "#fff", text: "TF" },
  "Halo Infinite": { bg: "#5ea832", fg: "#fff", text: "H" },
  "Gears 5": { bg: "#b11a1a", fg: "#fff", text: "G5" },
  "Doom Eternal": { bg: "#c4312b", fg: "#fff", text: "D" },
  "Ultrakill": { bg: "#e11d48", fg: "#fff", text: "UK" },
  "Deep Rock Galactic": { bg: "#c47b16", fg: "#16120b", text: "DRG" },
  "Left 4 Dead 2": { bg: "#6b8f23", fg: "#fff", text: "L4D" },
  "Back 4 Blood": { bg: "#8a1f1f", fg: "#fff", text: "B4B" },
  "Payday 2": { bg: "#1a7f3a", fg: "#fff", text: "PD" },
  "Ready or Not": { bg: "#1c3d5a", fg: "#fff", text: "RON" },
  "Ground Branch": { bg: "#3d4a3a", fg: "#fff", text: "GB" },
  "Squad": { bg: "#4a5a3a", fg: "#fff", text: "SQ" },
  "Hell Let Loose": { bg: "#5a4632", fg: "#fff", text: "HLL" },
  "Insurgency: Sandstorm": { bg: "#7a5a32", fg: "#fff", text: "IS" },
  "Arma 3": { bg: "#3a5a32", fg: "#fff", text: "A3" },
  "Arma Reforger": { bg: "#2f4a2a", fg: "#fff", text: "AR" },
};

function hashHue(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 33 + name.charCodeAt(i)) >>> 0;
  return h % 360;
}

export function markFor(name: string, short: string): GameMarkStyle {
  const hit = MARKS[name];
  if (hit) return hit;
  const hue = hashHue(name);
  return {
    bg: `hsl(${hue} 62% 42%)`,
    fg: "#fff",
    text: short.slice(0, 3),
  };
}
