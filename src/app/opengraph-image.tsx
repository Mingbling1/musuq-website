import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF8F5",
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top brand stripe */}
        <div
          style={{
            background:
              "linear-gradient(to right, #C8553D 0%, #6B7C5E 50%, #B87333 100%)",
            height: "6px",
            width: "100%",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            padding: "40px",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="32" r="5" fill="#C8553D" opacity="0.25" />
            <line x1="20" y1="34" x2="20" y2="16" stroke="#C8553D" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17" fill="#C8553D" opacity="0.75" />
            <path d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16" fill="#C8553D" opacity="0.55" />
            <path d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14" fill="#C8553D" opacity="0.92" />
            <circle cx="20" cy="34" r="2.5" fill="#C8553D" />
          </svg>
        </div>

        {/* musuq */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 40px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "88px",
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            musuq
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 40px 32px",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "26px",
              fontStyle: "italic",
              color: "#8A8378",
              letterSpacing: "0.01em",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Lo que tu negocio necesita para crecer
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            background: "#2D2926",
            height: "52px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              color: "#B5ADA3",
              fontSize: "13px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            estudio digital
          </span>
          <span style={{ color: "#4A4540", fontSize: "13px" }}>·</span>
          <span
            style={{
              color: "#B5ADA3",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
          >
            musuq.tech
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
