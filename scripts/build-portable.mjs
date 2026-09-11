#!/usr/bin/env node
import { build } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  rmSync,
  existsSync,
  readdirSync,
  statSync,
} from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, ".portable-dist");
const artifacts = join(root, "artifacts", "downloads");
const publicDl = join(root, "public", "downloads");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

if (existsSync(outDir)) rmSync(outDir, { recursive: true, force: true });

await build({
  configFile: false,
  root,
  publicDir: false,
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": join(root, "src") } },
  base: "./",
  logLevel: "warn",
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: false,
    assetsInlineLimit: 1024 * 1024,
    rollupOptions: {
      input: join(root, "portable-src", "index.html"),
      output: {
        format: "iife",
        name: "SensLabApp",
        inlineDynamicImports: true,
      },
    },
  },
});

const files = walk(outDir);
const htmlFile = files.find((f) => f.endsWith(".html"));
const jsFile = files.find((f) => f.endsWith(".js"));
const cssFile = files.find((f) => f.endsWith(".css"));
if (!htmlFile || !jsFile) throw new Error("portable build missing html/js");

const headerUri = `data:image/jpeg;base64,${readFileSync(join(root, "public", "header-ops.jpg")).toString("base64")}`;
const favUri = `data:image/svg+xml;base64,${readFileSync(join(root, "public", "favicon.svg")).toString("base64")}`;

let css = cssFile ? readFileSync(cssFile, "utf8") : "";
css = css.replaceAll("/header-ops.jpg", headerUri).replaceAll("header-ops.jpg", headerUri);

let js = readFileSync(jsFile, "utf8");
js = js.replaceAll("</script", "<\\/script");

const srcHtml = readFileSync(htmlFile, "utf8");
const headBits = [];
const headMatch = srcHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
let headInner = headMatch ? headMatch[1] : "";
headInner = headInner.replace(/<script\b[\s\S]*?<\/script>/gi, "");
headInner = headInner.replace(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi, (tag) =>
  tag.includes("fonts.googleapis.com") ? tag : "",
);
headInner = headInner.replace(/<link[^>]+href=["'][^"']+\.(css|js)["'][^>]*>/gi, "");
if (!/rel=["']icon["']/.test(headInner)) {
  headInner += `\n    <link rel="icon" href="${favUri}" />`;
}
headBits.push(headInner.trim());
headBits.push(`<style>${css}</style>`);

const html = `<!doctype html>
<html lang="tr" style="height:100%;width:100%">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#05080e" />
    <title>SensLab RBK Edition</title>
    <link rel="icon" href="${favUri}" />
    <style>html,body,#root{height:100%;width:100%;margin:0;background:#05080e;color:#e7f3fb}</style>
    <style>${css}</style>
  </head>
  <body style="height:100%;width:100%;margin:0;background:#05080e;color:#e7f3fb">
    <div id="root" style="height:100%;width:100%"></div>
    <script>${js}</script>
  </body>
</html>
`;

mkdirSync(artifacts, { recursive: true });
mkdirSync(publicDl, { recursive: true });

const htmlName = "SensLab_RBK_Edition.html";
const htmlOut = join(artifacts, htmlName);
writeFileSync(htmlOut, html);

const readme = `SensLab RBK Edition
===================

Bu, Grok ile yenilenen SensLab stüdyosudur.

Nasıl açılır
------------
1. SensLab.bat dosyasına çift tıkla
   VEYA SensLab_RBK_Edition.html dosyasını Chrome / Edge ile aç.
2. İnternet şart değil (fontlar için varsa daha iyi görünür).
3. Ayarların bu tarayıcıda kaydolur.

İçindekiler
-----------
- 100+ oyun profili ve kalibrasyon tablosu
- PUBG / Valorant / CS2 dahil tüm oyunlar
- Monitör Hz (60–600) ve Fare Hz (125–8000)
- Canlı fare algılama
- Kurulum + kaldırma ekranı
- TR / EN

SensLab · RBK
`;

const bat = `@echo off
start "" "%~dp0SensLab_RBK_Edition.html"
`;

const zipDir = join(root, ".portable-zip");
if (existsSync(zipDir)) rmSync(zipDir, { recursive: true, force: true });
mkdirSync(zipDir, { recursive: true });
writeFileSync(join(zipDir, htmlName), html);
writeFileSync(join(zipDir, "Oku.txt"), readme);
writeFileSync(join(zipDir, "SensLab.bat"), bat);

const zipPath = join(artifacts, "SensLab_RBK_Edition.zip");
const zipped = spawnSync(
  "python3",
  [
    "-c",
    `import zipfile, pathlib, shutil
z=zipfile.ZipFile(${JSON.stringify(zipPath)}, "w", zipfile.ZIP_DEFLATED)
root=pathlib.Path(${JSON.stringify(zipDir)})
for p in root.iterdir():
    z.write(p, p.name)
z.close()
`,
  ],
  { encoding: "utf8" },
);
if (zipped.status !== 0) {
  console.error(zipped.stdout, zipped.stderr);
  throw new Error("zip failed");
}

writeFileSync(join(publicDl, htmlName), html);
writeFileSync(join(publicDl, "SensLab_RBK_Edition.zip"), readFileSync(zipPath));

console.log(`portable html ${Math.round(statSync(htmlOut).size / 1024)} KB`);
console.log(`portable zip  ${Math.round(statSync(zipPath).size / 1024)} KB`);
