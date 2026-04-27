import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#FAF8F5",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "system-ui, sans-serif",
          color: "#1A1A1A",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 86% 18%, rgba(200,85,61,0.18), transparent 26%), radial-gradient(circle at 16% 86%, rgba(107,124,94,0.16), transparent 30%), linear-gradient(135deg, #FDFCFA 0%, #FAF8F5 48%, #F5F0EB 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 68,
            right: 68,
            top: 56,
            bottom: 56,
            border: "1px solid rgba(45,41,38,0.08)",
            borderRadius: 42,
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 104,
            top: 82,
            width: 330,
            height: 466,
            borderRadius: 36,
            background: "rgba(253,252,250,0.68)",
            border: "1px solid rgba(45,41,38,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="230" height="230" viewBox="0 0 230 230" fill="none">
            <circle cx="115" cy="162" r="38" fill="#C8553D" opacity="0.1" />
            <path d="M115 176V82" stroke="#C8553D" strokeWidth="10" strokeLinecap="round" />
            <path d="M113 95C88 91 54 63 41 24C82 36 107 60 116 89Z" fill="#C8553D" opacity="0.72" />
            <path d="M116 87C139 59 166 38 196 27C183 58 153 89 121 101Z" fill="#6B7C5E" opacity="0.72" />
            <path d="M115 69C104 42 106 21 116 9C127 24 130 47 119 72Z" fill="#C8553D" opacity="0.92" />
            <circle cx="115" cy="180" r="13" fill="#C8553D" />
          </svg>
        </div>

        <div
          style={{
            position: "absolute",
            left: 104,
            top: 86,
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: 999,
              background: "#C8553D",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#8A8378",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            estudio digital peruano
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            left: 100,
            top: 154,
            width: 690,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 132,
              fontWeight: 500,
              letterSpacing: "-0.075em",
              lineHeight: 0.9,
              color: "#1A1A1A",
            }}
          >
            musuq
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: "Georgia, serif",
              fontSize: 58,
              fontWeight: 400,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
              color: "#2D2926",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Lo simple es</span>
            <span style={{ color: "#C8553D", fontStyle: "italic" }}>lo que funciona.</span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 104,
            bottom: 90,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {['landings', 'tiendas', 'automatizaciones', 'software'].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(45,41,38,0.09)",
                borderRadius: 999,
                padding: "10px 18px",
                color: "#4A4540",
                fontSize: 17,
                fontWeight: 500,
                background: "rgba(253,252,250,0.52)",
                display: "flex",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            right: 104,
            bottom: 88,
            color: "#8A8378",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          musuq.tech
        </div>
      </div>
    ),
    size
  );
}
