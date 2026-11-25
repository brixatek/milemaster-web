type ClassValue = string | number | bigint | boolean | null | undefined;
/** Tiny class joiner — no runtime dependency needed for this project. */
export function cn(...values: ClassValue[]) {
  return values.filter((v) => typeof v === "string" && v).join(" ");
}
