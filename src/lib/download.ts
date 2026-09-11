export async function downloadUrl(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${res.status}`);
  const blob = await res.blob();
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(href), 4000);
}
