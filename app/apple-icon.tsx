import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon: teal field with the white Furmacy paw (Apple masks corners).
export default function AppleIcon() {
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

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1FA19C",
        }}
      >
        <div style={{ position: "relative", display: "flex", width: 120, height: 120 }}>
          <div style={dot(30, 44, 18, 22)} />
          <div style={dot(51, 34, 18, 23)} />
          <div style={dot(72, 44, 18, 22)} />
          <div style={dot(40, 64, 40, 32)} />
        </div>
      </div>
    ),
    { ...size },
  );
}
