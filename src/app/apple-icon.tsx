import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            fontSize: "72px",
            fontWeight: 900,
            color: "#F59E0B",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-3px",
          }}
        >
          FG
        </span>
      </div>
    ),
    { ...size }
  );
}
