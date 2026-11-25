/**
 * Fixed-window in-memory rate limiter. Adequate for a single Node instance.
 * For multi-instance hosting, replace with a shared store (Redis/Upstash) —
 * see README → Integrations.
 */
const buckets = new Map<string, { count: number; reset: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const bucket = buckets.get(key);
  if (!bucket || bucket.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }
  bucket.count += 1;
  if (buckets.size > 5000) for (const [k, v] of buckets) if (v.reset < now) buckets.delete(k);
  return { ok: bucket.count <= limit, remaining: Math.max(0, limit - bucket.count) };
}
