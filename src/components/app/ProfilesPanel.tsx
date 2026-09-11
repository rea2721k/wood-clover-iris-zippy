import { useState } from "react";
import { toast } from "sonner";
import { copy } from "@/lib/i18n";
import { useSetup } from "@/lib/setup-store";
import { useLab } from "@/lib/lab-store";
import { entryFor } from "@/lib/senslab/library";
import { Button } from "@/components/ui/button";
import { DashPanel } from "./chrome";
import { Field } from "./Field";

export function ProfilesPanel() {
  const lang = useSetup((s) => s.lang);
  const t = copy[lang];
  const lab = useLab();
  const [name, setName] = useState("");
  const e = entryFor(lab.activeGame);

  return (
    <div className="grid gap-4 lg:grid-cols-[20rem_minmax(0,1fr)]">
      <DashPanel title={t.saveProfile}>
        <p className="text-sm text-muted">{t.profilesLead}</p>
        <Field label={t.profileName}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={`${e.label} ${lab.dpi}DPI`}
            className="h-11 w-full rounded-xl bg-elevated px-3 text-sm shadow-border outline-none focus:ring-2 focus:ring-accent/40"
          />
        </Field>
        <ul className="mt-3 space-y-1 text-xs text-muted">
          <li>{e.label}</li>
          <li>
            {lab.dpi} DPI · {lab.mouseHz} Hz · {lab.monitorHz} Hz
          </li>
          <li>{lab.mouse}</li>
        </ul>
        <Button
          variant="accent"
          className="mt-4 w-full"
          onClick={() => {
            lab.saveProfile(name);
            setName("");
            toast.success(t.profileSaved);
          }}
        >
          {t.saveProfile}
        </Button>
      </DashPanel>
      <DashPanel title={t.profilesTitle}>
        {lab.profiles.length === 0 ? (
          <p className="text-sm text-muted">{t.noProfiles}</p>
        ) : (
          <ul className="space-y-2">
            {lab.profiles.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-center gap-2 rounded-md bg-subtle/60 px-3 py-2 shadow-border"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{p.name}</p>
                  <p className="text-xs text-muted">
                    {entryFor(p.game).label} · {p.dpi} DPI · {p.mouseHz} Hz · {p.monitorHz} Hz
                  </p>
                </div>
                <Button size="sm" variant="ghost" onClick={() => lab.loadProfile(p.id)}>
                  {t.load}
                </Button>
                <Button size="sm" variant="dangerGhost" onClick={() => lab.deleteProfile(p.id)}>
                  {t.delete}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </DashPanel>
    </div>
  );
}
