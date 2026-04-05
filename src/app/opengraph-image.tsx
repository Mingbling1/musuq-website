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
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top decorative line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "6px",
            background: "linear-gradient(to right, #C8553D 0%, #6B7C5E 50%, #B87333 100%)",
          }}
        />

        {/* Small label */}
        <div
          style={{
            color: "#B5ADA3",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          estudio digital
        </div>

        {/* Main headline */}
        <div
          style={{
            color: "#1A1A1A",
            fontSize: "72px",
            fontWeight: 400,
            lineHeight: 1.05,
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", color: "#C8553D" }}>
            Construimos
          </span>
          <span style={{ marginLeft: "16px" }}>lo que tu negocio necesita para crecer</span>
        </div>

        {/* Description */}
        <div
          style={{
            color: "#8A8378",
            fontSize: "22px",
            lineHeight: 1.5,
            maxWidth: "700px",
            marginBottom: "48px",
          }}
        >
          Landings, e-commerce, automatizaciones y software a medida.
          Sin plantillas, sin misterios.
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {/* Logo sprout */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="32" r="4.5" fill="#2D2926" opacity="0.22" />
              <path d="M20 34 L20 16" stroke="#2D2926" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17" fill="#2D2926" opacity="0.75" />
              <path d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16" fill="#2D2926" opacity="0.55" />
              <path d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14" fill="#2D2926" opacity="0.92" />
              <circle cx="20" cy="34" r="2.5" fill="#2D2926" />
            </svg>
            <span style={{ color: "#1A1A1A", fontSize: "28px", fontFamily: "Georgia, serif", fontWeight: 500 }}>
              musuq
            </span>
          </div>

          {/* Separator */}
          <div style={{ width: "1px", height: "40px", background: "#2D2926", opacity: 0.1 }} />

          {/* URL */}
          <span style={{ color: "#8A8378", fontSize: "18px" }}>
            musuq.tech
          </span>
        </div>

        {/* Bottom decorative accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle at bottom right, #C8553D 0%, transparent 70%)",
            opacity: 0.06,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
