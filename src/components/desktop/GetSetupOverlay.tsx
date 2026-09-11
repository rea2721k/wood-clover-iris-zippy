import { useState } from "react";
import { Download } from "lucide-react";
import { Link } from "@tanstack/react-router";

const KEY = "senslab-hide-get-setup";

export function GetSetupOverlay() {
  const [open, setOpen] = useState(() => {
    try {
      return sessionStorage.getItem(KEY) !== "1";
    } catch {
      return true;
    }
  });

  function dismiss() {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  if (!open) {
    return (
      <a
        href="/indir"
        className="absolute top-3 right-3 z-40 flex h-10 items-center gap-2 rounded-md bg-[#2ad4ea] px-3 text-sm font-semibold text-[#05080e] shadow-btn"
      >
        <Download className="size-4" />
        Setup indir
      </a>
    );
  }

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#05080e]/85 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-[#0b1520] p-6 text-center shadow-window ring-1 ring-white/10">
        <p className="text-[11px] font-semibold tracking-[0.35em] text-[#2ad4ea]">RBK</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-white">Setup dosyasını al</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          Sohbette kart çıkmıyor. Mavi butona bas. İndirme bu pencerede açılmazsa sağ üstteki
          adres çubuğuna <span className="text-white">/indir</span> yaz.
        </p>
        <a
          href="/downloads/SensLab_Windows_Setup.zip"
          download="SensLab_Windows_Setup.zip"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex h-14 items-center justify-center gap-2 rounded-xl bg-[#2ad4ea] text-base font-semibold text-[#05080e] hover:brightness-110"
        >
          <Download className="size-5" />
          SensLab_Setup.zip indir
        </a>
        <div className="mt-3 flex items-center justify-center gap-4 text-sm">
          <Link to="/indir" className="text-[#2ad4ea] hover:underline">
            Tüm dosyalar
          </Link>
          <button type="button" onClick={dismiss} className="text-white/45 hover:text-white">
            Önizlemeye geç
          </button>
        </div>
      </div>
    </div>
  );
}
