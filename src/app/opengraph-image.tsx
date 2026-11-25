import { ImageResponse } from "next/og";

export const alt = "X-Tend fuel and lubricant conditioning, supplied by Milemaster Integrated Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0c0e11", color: "#f2efe9", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ color: "#d3241b", fontSize: 64, fontWeight: 700 }}>X</span>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: 6 }}>-TEND</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>Stop paying for fuel</div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -3, color: "#d3241b" }}>that never burns.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#8b929b" }}>
          <span>Diesel · Petrol · Engine oil · Stored fuel</span>
          <span>Milemaster Integrated Services</span>
        </div>
      </div>
    ),
    size,
  );
}
