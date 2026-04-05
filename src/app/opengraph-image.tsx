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
        {/* Full-width brand bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            background:
              "linear-gradient(to right, #C8553D 0%, #C8553D 20%, #6B7C5E 50%, #B87333 80%, #B87333 100%)",
          }}
        />

        {/* Left vertical accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: "linear-gradient(to bottom, #C8553D, #6B7C5E, #B87333)",
          }}
        />

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: "100%",
            padding: "80px 80px 80px 100px",
          }}
        >
          {/* Brand mark + wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "48px",
            }}
          >
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="32" r="5" fill="#C8553D" opacity="0.25" />
              <line x1="20" y1="34" x2="20" y2="16" stroke="#C8553D" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17" fill="#C8553D" opacity="0.75" />
              <path d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16" fill="#C8553D" opacity="0.55" />
              <path d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14" fill="#C8553D" opacity="0.92" />
              <circle cx="20" cy="34" r="2.5" fill="#C8553D" />
            </svg>
            <span style={{ color: "#2D2926", fontSize: "32px", fontFamily: "Georgia, serif", fontWeight: 500 }}>
              musuq
            </span>
          </div>

          {/* Headline — stacked for center-crop safety */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              marginBottom: "36px",
            }}
          >
            <span
              style={{
                fontSize: "80px",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "#C8553D",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Construimos
            </span>
            <span
              style={{
                fontSize: "80px",
                fontFamily: "Georgia, serif",
                color: "#2D2926",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              lo que necesitas.
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              color: "#8A8378",
              fontSize: "24px",
              lineHeight: 1.4,
              marginBottom: "48px",
            }}
          >
            <span>Landings, tiendas online, automatizaciones y software a medida.</span>
            <span>Sin plantillas. Sin misterios.</span>
          </div>

          {/* Bottom row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="32" r="5" fill="#C8553D" opacity="0.25" />
                <path d="M20 34 L20 16" stroke="#C8553D" strokeWidth="2.8" strokeLinecap="round" />
                <path d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17" fill="#C8553D" opacity="0.75" />
                <path d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16" fill="#C8553D" opacity="0.55" />
                <path d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14" fill="#C8553D" opacity="0.92" />
                <circle cx="20" cy="34" r="2.5" fill="#C8553D" />
              </svg>
              <span style={{ color: "#B5ADA3", fontSize: "18px", fontWeight: 500, letterSpacing: "0.05em" }}>
                musuq.tech
              </span>
            </div>
            <span style={{ color: "#E8E0D6", fontSize: "18px" }}>·</span>
            <span style={{ color: "#B5ADA3", fontSize: "18px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Peru
            </span>
          </div>
        </div>

        {/* Bottom-right decorative radial */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-60px",
            width: "360px",
            height: "360px",
            borderRadius: "9999px",
            background: "radial-gradient(circle, #C8553D 0%, transparent 70%)",
            opacity: 0.07,
          }}
        />

        {/* Top-right decorative lines */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "60px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            opacity: 0.15,
          }}
        >
          {[160, 100, 60].map((w, i) => (
            <div
              key={i}
              style={{
                height: "3px",
                width: w,
                background: "#C8553D",
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
