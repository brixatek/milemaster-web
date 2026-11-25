/** Technical data table for product sheets. */
export function SpecTable({ caption, head, rows }: { caption: string; head: readonly string[]; rows: readonly (readonly string[])[] }) {
  return (
    <div className="overflow-x-auto" role="region" aria-label={caption} tabIndex={0}>
      <table className="w-full min-w-[28rem] border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b-2 border-ink">
            {head.map((h) => (
              <th key={h} scope="col" className="eyebrow py-3 pr-6 text-ink/60">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-ink/12">
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="py-3.5 pr-6 font-medium">{c}</th>
                ) : (
                  <td key={j} className="py-3.5 pr-6 font-mono text-[0.9375rem] tabular">{c}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
