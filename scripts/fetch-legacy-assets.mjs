#!/usr/bin/env node
/**
 * Downloads approved images and documents from the legacy website into /public.
 * Run once on a machine with internet access:  npm run assets:fetch
 *
 * The list is parsed from src/content/media.ts so there is one source of truth.
 * Existing files are skipped; pass --force to re-download.
 */
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const force = process.argv.includes("--force");
const manifest = await readFile(path.join(root, "src/content/media.ts"), "utf8");

const L = "https://www.x-tendadditives.com/wp-content/uploads";
const entries = [...manifest.matchAll(/src:\s*"([^"]+)",\s*legacy:\s*`\$\{L\}([^`]+)`/g)].map(([, src, rest]) => ({
  src,
  url: L + rest,
}));

let ok = 0;
let failed = 0;
for (const { src, url } of entries) {
  const dest = path.join(root, "public", src);
  if (!force) {
    try {
      await access(dest);
      console.log(`skip   ${src}`);
      continue;
    } catch {}
  }
  try {
    const res = await fetch(url, { headers: { "user-agent": "milemaster-asset-migration/1.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`saved  ${src}`);
    ok++;
  } catch (err) {
    console.warn(`FAILED ${src} <- ${url}: ${err.message}`);
    failed++;
  }
}
console.log(`\n${ok} downloaded, ${failed} failed, ${entries.length} total.`);
console.log("Rebuild (npm run build) so pages pick up the new files.");
process.exit(failed ? 1 : 0);
