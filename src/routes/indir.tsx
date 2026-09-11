import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/indir")({
  component: IndirPage,
});

const FILES = [
  {
    href: "/downloads/SensLab_Windows_Setup.zip",
    name: "SensLab_Windows_Setup.zip",
    label: "Windows Setup (zip)",
    hint: "Çıkar → SensLab_Setup.exe → çift tıkla",
    primary: true,
  },
  {
    href: "/downloads/SensLab_Setup.exe",
    name: "SensLab_Setup.exe",
    label: "SensLab_Setup.exe",
    hint: "Tek dosya kurulum",
    primary: false,
  },
  {
    href: "/downloads/SensLab_RBK_Edition.zip",
    name: "SensLab_RBK_Edition.zip",
    label: "Portable zip",
    hint: "Kurulum yok · SensLab.bat ile aç",
    primary: false,
  },
] as const;

function IndirPage() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-[#05080e] px-5 py-12 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-black tracking-tight text-white">
          RBK
        </span>
      </div>
      <p className="relative text-xs font-semibold tracking-[0.42em] text-[#2ad4ea]">RBK EDITION</p>
      <h1 className="relative mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        SensLab Setup
      </h1>
      <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/55">
        Sohbette dosya kartı görünmüyor. Bu sayfadaki mavi butona bas — zip iner, içinde
        <span className="text-white"> SensLab_Setup.exe </span>
        var.
      </p>
      <div className="relative mt-8 grid w-full max-w-md gap-2">
        {FILES.map((f) => (
          <a
            key={f.href}
            href={f.href}
            download={f.name}
            target="_blank"
            rel="noopener"
            className={
              f.primary
                ? "flex min-h-16 items-center gap-3 rounded-xl bg-[#2ad4ea] px-5 text-left text-[#05080e] shadow-[0_0_40px_#2ad4ea44] transition hover:brightness-110"
                : "flex min-h-14 items-center gap-3 rounded-xl bg-white/5 px-5 text-left text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
            }
          >
            <Download className="size-5 shrink-0" />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold">{f.label}</span>
              <span className={`block text-xs ${f.primary ? "opacity-70" : "text-white/45"}`}>{f.hint}</span>
            </span>
          </a>
        ))}
      </div>
      <Link to="/" className="relative mt-8 text-sm text-white/40 underline-offset-4 hover:text-white hover:underline">
        Stüdyo önizlemesine dön
      </Link>
    </main>
  );
}
