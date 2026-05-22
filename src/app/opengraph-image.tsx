import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Amber top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "#F59E0B",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            marginBottom: "18px",
            letterSpacing: "-2px",
          }}
        >
          Fernanda Gonçalves
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#F59E0B",
            }}
          />
          <div
            style={{
              fontSize: "34px",
              fontWeight: 500,
              color: "#F59E0B",
            }}
          >
            Software Engineer
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#888888",
            maxWidth: "680px",
            lineHeight: 1.5,
          }}
        >
          Building scalable web systems, APIs, and Linux infrastructure — from
          architecture to production deploy.
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            fontSize: "18px",
            color: "#444444",
          }}
        >
          fernandagoncalves.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
