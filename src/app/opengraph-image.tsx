import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Tarjeta de enlace (WhatsApp / redes): producto-en-vivo, editorial-brutalista.
 * Terracota drenched + marco crema + titular condensado. Sin verde, sin serif.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#C8553D",
          display: "flex",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          color: "#FDFCFA",
        }}
      >
        {/* brillo sutil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 84% 16%, rgba(255,255,255,0.20), transparent 30%)",
            display: "flex",
          }}
        />
        {/* marco crema (brutalista) */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "2px solid rgba(253,252,250,0.85)",
            display: "flex",
          }}
        />

        {/* eyebrow */}
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 70,
            color: "rgba(253,252,250,0.9)",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Punto de venta para tu restaurante
        </div>

        {/* titular */}
        <div
          style={{
            position: "absolute",
            left: 68,
            top: 150,
            right: 72,
            display: "flex",
            flexDirection: "column",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            lineHeight: 0.92,
            textTransform: "uppercase",
            fontSize: 132,
          }}
        >
          <span style={{ display: "flex" }}>Vende, cobra</span>
          <span style={{ display: "flex" }}>y controla</span>
        </div>

        {/* tags producto */}
        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 110,
            display: "flex",
            gap: 14,
          }}
        >
          {["Carta digital + QR", "Comanda a cocina", "Yape · Plin · tarjeta"].map((t) => (
            <div
              key={t}
              style={{
                border: "1.5px solid rgba(253,252,250,0.7)",
                padding: "8px 16px",
                color: "#FDFCFA",
                fontSize: 20,
                fontWeight: 600,
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* wordmark + dominio */}
        <div
          style={{
            position: "absolute",
            left: 72,
            bottom: 56,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          musuq
        </div>
        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 58,
            color: "rgba(253,252,250,0.85)",
            fontSize: 24,
            fontWeight: 600,
            display: "flex",
          }}
        >
          musuq.tech
        </div>
      </div>
    ),
    size,
  );
}
