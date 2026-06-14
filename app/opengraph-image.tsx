import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "Furmacy — Your pet's health, simplified.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function PawMark() {
  const dot = (left: number, top: number, w: number, h: number) =>
    ({
      position: "absolute" as const,
      left,
      top,
      width: w,
      height: h,
      background: "#ffffff",
      borderRadius: 999,
      display: "flex",
    });
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: 96,
        height: 96,
        background: "#1FA19C",
        borderRadius: 26,
      }}
    >
      <div style={dot(26, 34, 13, 16)} />
      <div style={dot(42, 27, 14, 17)} />
      <div style={dot(58, 34, 13, 16)} />
      <div style={dot(33, 49, 30, 24)} />
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF7F2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <PawMark />
          <div style={{ display: "flex", fontSize: 50, fontWeight: 700, color: "#0D3B47" }}>
            Furmacy
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 800,
              color: "#0D3B47",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Your pet&rsquo;s health, simplified.
          </div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 32, color: "#636E75", maxWidth: 980 }}>
            Privacy-first medication reminders, dose tracking, and vet records — for iPhone.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", height: 14, width: 14, borderRadius: 999, background: "#1FA19C" }} />
          <div style={{ display: "flex", fontSize: 28, color: "#636E75" }}>furmacy.org</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
