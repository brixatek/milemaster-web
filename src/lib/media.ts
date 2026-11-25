import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";
import { media, type MediaEntry } from "@/content/media";

const publicDir = path.join(process.cwd(), "public");

/** Returns the media entry only if its file has been downloaded into /public. */
export function resolveMedia(key: string | undefined): MediaEntry | null {
  if (!key) return null;
  const entry = media[key];
  if (!entry) return null;
  return existsSync(path.join(publicDir, entry.src)) ? entry : null;
}

export function publicFileExists(src: string) {
  return existsSync(path.join(publicDir, src));
}
