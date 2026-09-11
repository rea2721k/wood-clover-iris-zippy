import type { ReactElement, SVGProps } from "react";

type Icon = (p: SVGProps<SVGSVGElement>) => ReactElement;

const base = {
  viewBox: "0 0 128 128",
  fill: "none",
};

function Svg({ children, ...p }: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p} className="size-full" aria-hidden>
      {children}
    </svg>
  );
}

const valorant: Icon = () => (
  <Svg>
    <path d="M18 108 64 20l46 88H86L64 58 42 108H18Z" fill="#fff" />
    <path d="M64 72l18 36H46L64 72Z" fill="#0f1923" />
  </Svg>
);

const cs2: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" stroke="#16120b" strokeWidth="10" />
    <path d="M86 48c-4-8-14-14-24-14-18 0-30 14-30 30s12 30 30 30c10 0 20-6 24-14" stroke="#16120b" strokeWidth="12" strokeLinecap="round" />
  </Svg>
);

const pubg: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="44" fill="#1a1204" />
    <path d="M44 84V44h22c14 0 22 8 22 20s-8 20-22 20H44Zm16-12h8c6 0 10-3 10-8s-4-8-10-8h-8v16Z" fill="#f2a900" />
  </Svg>
);

const apex: Icon = () => (
  <Svg>
    <path d="M64 16 112 108H16L64 16Z" fill="#fff" />
    <path d="M64 48 86 92H42L64 48Z" fill="#da292a" />
  </Svg>
);

const warzone: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="40" stroke="#fff" strokeWidth="8" />
    <path d="M64 28v72M28 64h72" stroke="#fff" strokeWidth="6" />
    <circle cx="64" cy="64" r="8" fill="#fff" />
  </Svg>
);

const r6: Icon = () => (
  <Svg>
    <path d="M64 14 108 36v34c0 28-18 46-44 58-26-12-44-30-44-58V36L64 14Z" fill="#fff" />
    <path d="M48 52h20c10 0 16 6 16 14 0 6-3 11-9 13l12 17H72l-10-14H60v14H48V52Zm12 20h8c4 0 6-2 6-5s-2-5-6-5h-8v10Z" fill="#1a3d8f" />
  </Svg>
);

const fortnite: Icon = () => (
  <Svg>
    <path d="M36 20h28c22 0 36 12 36 34 0 16-8 28-22 32l22 22H76L58 86H52v22H36V20Zm16 50h10c10 0 16-6 16-16s-6-16-16-16H52v32Z" fill="#fff" />
  </Svg>
);

const overwatch: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" stroke="#16120b" strokeWidth="8" />
    <circle cx="64" cy="64" r="18" fill="#16120b" />
    <path d="M64 10v28M64 90v28M10 64h28M90 64h28" stroke="#16120b" strokeWidth="8" strokeLinecap="round" />
  </Svg>
);

const finals: Icon = () => (
  <Svg>
    <rect x="22" y="28" width="84" height="72" rx="6" fill="#fff" />
    <path d="M40 48h48v10H56v8h28v10H56v14H40V48Z" fill="#e10600" />
  </Svg>
);

const eft: Icon = () => (
  <Svg>
    <rect x="18" y="28" width="92" height="72" fill="#2a2116" />
    <path d="M36 44h56v10H52v12h36v10H52v16H36V44Z" fill="#d4b483" />
  </Svg>
);

const destiny: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="44" stroke="#fff" strokeWidth="8" />
    <path d="M64 24 92 80H36L64 24Z" fill="#fff" />
  </Svg>
);

const rivals: Icon = () => (
  <Svg>
    <path d="M24 96 64 20l40 76H24Z" fill="#fff" />
    <path d="M64 48 80 80H48L64 48Z" fill="#e23636" />
  </Svg>
);

const bf: Icon = () => (
  <Svg>
    <path d="M20 64c0-24 20-40 44-40s44 16 44 40-20 40-44 40H32L20 64Z" fill="#16120b" />
    <path d="M48 48h16c10 0 16 6 16 16s-6 16-16 16H48V48Z" fill="#f5a623" />
  </Svg>
);

const hd2: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" fill="#16120b" />
    <path d="M40 84 64 28l24 56H40Z" fill="#ffd100" />
  </Svg>
);

const lol: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="44" fill="#0a1428" />
    <path d="M64 22c18 12 28 28 28 42 0 22-12 36-28 42-16-6-28-20-28-42 0-14 10-30 28-42Z" fill="#c8aa6e" />
  </Svg>
);

const dota: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" fill="#b7342a" />
    <path d="M40 40h48v12H56v12h28v12H56v12h32v12H40V40Z" fill="#fff" />
  </Svg>
);

const rust: Icon = () => (
  <Svg>
    <rect x="20" y="20" width="88" height="88" fill="#cd412b" />
    <circle cx="64" cy="64" r="22" fill="#fff" />
  </Svg>
);

const minecraft: Icon = () => (
  <Svg>
    <rect x="24" y="24" width="80" height="80" fill="#3a7d1c" />
    <rect x="40" y="40" width="20" height="20" fill="#8b5a2b" />
    <rect x="68" y="40" width="20" height="20" fill="#8b5a2b" />
    <rect x="40" y="68" width="48" height="16" fill="#5a3a1a" />
  </Svg>
);

const hunt: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" fill="#2a140c" />
    <path d="M64 22 86 64 64 106 42 64Z" fill="#f3e2c6" />
  </Svg>
);
const halo: Icon = () => (
  <Svg>
    <ellipse cx="64" cy="64" rx="48" ry="20" stroke="#fff" strokeWidth="8" />
    <circle cx="64" cy="64" r="16" fill="#fff" />
  </Svg>
);
const titan: Icon = () => (
  <Svg>
    <path d="M32 96V32h16l16 28 16-28h16v64H80V58L64 84 48 58v38H32Z" fill="#fff" />
  </Svg>
);
const doom: Icon = () => (
  <Svg>
    <path d="M20 96 40 24h20l8 40 8-40h20L116 96H92L82 52 72 96H56L46 52 36 96H20Z" fill="#fff" />
  </Svg>
);
const cyber: Icon = () => (
  <Svg>
    <path d="M18 64 48 24h32l30 40-30 40H48L18 64Z" fill="#fcee0a" />
    <path d="M48 48h32v32H48z" fill="#0a0a0a" />
  </Svg>
);
const gta: Icon = () => (
  <Svg>
    <rect x="22" y="22" width="84" height="84" rx="8" fill="#1c7a3a" />
    <path d="M44 88V40h40v12H60v8h20v12H60v16H44Z" fill="#fff" />
  </Svg>
);
const tf2: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" fill="#c45c12" />
    <path d="M40 84 64 28l24 56H40Z" fill="#fff" />
  </Svg>
);
const deadlock: Icon = () => (
  <Svg>
    <rect x="24" y="24" width="80" height="80" rx="16" fill="#6b4cff" />
    <path d="M44 64h40M64 44v40" stroke="#fff" strokeWidth="10" />
  </Svg>
);
const delta: Icon = () => (
  <Svg>
    <path d="M64 18 110 102H18L64 18Z" fill="#fff" />
  </Svg>
);
const xdef: Icon = () => (
  <Svg>
    <path d="M28 28 64 56l36-28v24L76 64l24 20v24L64 72 28 108V84l24-20-24-20V28Z" fill="#041018" />
  </Svg>
);
const split: Icon = () => (
  <Svg>
    <circle cx="44" cy="64" r="22" stroke="#fff" strokeWidth="8" />
    <circle cx="84" cy="64" r="22" stroke="#fff" strokeWidth="8" />
  </Svg>
);
const paladins: Icon = () => (
  <Svg>
    <path d="M64 16 104 40v32c0 24-16 40-40 48-24-8-40-24-40-48V40L64 16Z" fill="#fff" />
  </Svg>
);
const warframe: Icon = () => (
  <Svg>
    <path d="M64 16 96 64 64 112 32 64Z" fill="#fff" />
  </Svg>
);
const aimlab: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="40" stroke="#041018" strokeWidth="8" />
    <circle cx="64" cy="64" r="8" fill="#041018" />
    <path d="M64 16v20M64 92v20M16 64h20M92 64h20" stroke="#041018" strokeWidth="6" />
  </Svg>
);
const ron: Icon = () => (
  <Svg>
    <rect x="28" y="40" width="72" height="52" fill="#fff" />
    <path d="M40 40c0-14 10-22 24-22s24 8 24 22" stroke="#fff" strokeWidth="8" />
  </Svg>
);
const dayz: Icon = () => (
  <Svg>
    <circle cx="64" cy="64" r="46" fill="#8a1f1f" />
    <path d="M40 72c8 12 16 18 24 18s16-6 24-18" stroke="#fff" strokeWidth="8" fill="none" />
    <circle cx="50" cy="52" r="6" fill="#fff" />
    <circle cx="78" cy="52" r="6" fill="#fff" />
  </Svg>
);
const palworld: Icon = () => (
  <Svg>
    <circle cx="64" cy="70" r="34" fill="#fff" />
    <circle cx="54" cy="66" r="6" fill="#1c3d5a" />
    <circle cx="74" cy="66" r="6" fill="#1c3d5a" />
    <ellipse cx="64" cy="36" rx="18" ry="10" fill="#fff" />
  </Svg>
);
const sw: Icon = () => (
  <Svg>
    <rect x="16" y="16" width="96" height="96" fill="#111" />
    <path d="M24 64h80M64 24v80" stroke="#ffe81f" strokeWidth="6" />
  </Svg>
);
const ultra: Icon = () => (
  <Svg>
    <rect x="20" y="20" width="88" height="88" fill="#e11d48" />
    <path d="M40 40h48v16H56v40H40V40Z" fill="#fff" />
  </Svg>
);

const tarkov = eft;

export const GAME_LOGOS: Record<string, Icon> = {
  Valorant: valorant,
  "Counter-Strike 2": cs2,
  "Counter-Strike: GO": cs2,
  "PUBG: Battlegrounds": pubg,
  "Apex Legends": apex,
  "Call of Duty: Warzone": warzone,
  "Call of Duty: Modern Warfare III": warzone,
  "Call of Duty: Black Ops 6": warzone,
  "Call of Duty: Black Ops 7": warzone,
  "Call of Duty: Modern Warfare II": warzone,
  "Battlefield 3": bf,
  "Battlefield 6": bf,
  "Battlefield Hardline": bf,
  Minecraft: minecraft,
  "Rainbow Six Siege": r6,
  Fortnite: fortnite,
  "Overwatch 2": overwatch,
  "The Finals": finals,
  "Escape from Tarkov": tarkov,
  "Destiny 2": destiny,
  "Marvel Rivals": rivals,
  "Battlefield 2042": bf,
  "Battlefield V": bf,
  "Battlefield 1": bf,
  "Battlefield 4": bf,
  "Helldivers 2": hd2,
  "League of Legends": lol,
  "Dota 2": dota,
  Rust: rust,
  "Hunt: Showdown": hunt,
  "Hunt: Showdown 1896": hunt,
  "Halo Infinite": halo,
  "Titanfall 2": titan,
  "DOOM Eternal": doom,
  "DOOM (2016)": doom,
  "DOOM: The Dark Ages": doom,
  "DOOM 3": doom,
  "Cyberpunk 2077": cyber,
  "GTA V": gta,
  "Team Fortress 2": tf2,
  "Deadlock": deadlock,
  "Delta Force": delta,
  "XDefiant": xdef,
  "Splitgate": split,
  "Splitgate 2": split,
  "Paladins": paladins,
  "Warframe": warframe,
  "Aim Lab": aimlab,
  "Ready or Not": ron,
  "DayZ": dayz,
  "Palworld": palworld,
  "Star Wars Battlefront II": sw,
  "Star Wars Battlefront": sw,
  "ULTRAKILL": ultra,
};
