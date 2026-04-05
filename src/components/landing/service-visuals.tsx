"use client";

/**
 * Service visuals — SVG preview illustrations for each service.
 * These are always visible (mobile + desktop).
 * On desktop, services 02–05 also show a "Probar en vivo" button.
 */

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Shared wrapper                                                     */
/* ------------------------------------------------------------------ */
function PreviewWrapper({
  children,
  label,
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mt-8 w-full max-w-4xl overflow-hidden rounded-2xl bg-cream-200/60 gentle-sway"
      style={{ aspectRatio: "2/1" }}
    >
      {children}
      {label && (
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <span className="inline-block rounded-full bg-cream-100/80 px-2.5 py-1 text-[9px] font-medium uppercase tracking-widest text-warm-400 backdrop-blur-sm">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  01 — LANDINGS (SVG wireframe of a landing page)                   */
/* ------------------------------------------------------------------ */
export function LandingPreview() {
  return (
    <PreviewWrapper>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        {/* Browser chrome */}
        <rect x="80" y="30" width="640" height="390" rx="12" fill="#FDFCFA" />
        <rect x="80" y="30" width="640" height="390" rx="12" stroke="#2D2926" strokeOpacity="0.06" />
        <rect x="80" y="30" width="640" height="36" rx="12" fill="#F5F0EB" />
        <rect x="80" y="54" width="640" height="12" fill="#F5F0EB" />
        <circle cx="100" cy="48" r="4" fill="#C8553D" opacity="0.6" />
        <circle cx="114" cy="48" r="4" fill="#B87333" opacity="0.4" />
        <circle cx="128" cy="48" r="4" fill="#6B7C5E" opacity="0.4" />
        <rect x="170" y="40" width="240" height="16" rx="4" fill="#EDE8E1" />

        {/* Hero section */}
        <rect x="110" y="90" width="260" height="16" rx="3" fill="#2D2926" opacity="0.65" />
        <rect x="110" y="114" width="180" height="10" rx="2" fill="#2D2926" opacity="0.12" />
        <rect x="110" y="130" width="210" height="10" rx="2" fill="#2D2926" opacity="0.08" />
        <rect x="110" y="156" width="100" height="32" rx="6" fill="#C8553D" opacity="0.75" />
        <rect x="222" y="156" width="80" height="32" rx="6" fill="none" stroke="#2D2926" strokeOpacity="0.1" />

        {/* Hero image placeholder */}
        <rect x="440" y="80" width="260" height="120" rx="10" fill="#6B7C5E" opacity="0.08" />
        <circle cx="570" cy="140" r="30" fill="#C8553D" opacity="0.06" />
        <path d="M480 180 L510 150 L540 165 L580 130 L680 180Z" fill="#6B7C5E" opacity="0.1" />

        {/* Stats row */}
        <rect x="110" y="220" width="590" height="1" fill="#2D2926" opacity="0.04" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={110 + i * 150} y="235" width="60" height="18" rx="2" fill="#2D2926" opacity="0.15" />
            <rect x={110 + i * 150} y="260" width="100" height="8" rx="2" fill="#2D2926" opacity="0.06" />
          </g>
        ))}

        {/* Cards section */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={110 + i * 200} y="295" width="180" height="110" rx="8" fill="#F5F0EB" />
            <rect x={130 + i * 200} y="315" width="80" height="8" rx="2" fill="#2D2926" opacity="0.2" />
            <rect x={130 + i * 200} y="331" width="140" height="6" rx="2" fill="#2D2926" opacity="0.07" />
            <rect x={130 + i * 200} y="343" width="120" height="6" rx="2" fill="#2D2926" opacity="0.05" />
            <rect x={130 + i * 200} y="365" width="60" height="20" rx="4" fill={i === 0 ? "#C8553D" : i === 1 ? "#6B7C5E" : "#B87333"} opacity="0.15" />
          </g>
        ))}
      </svg>
    </PreviewWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  02 — E-COMMERCE (SVG preview of a store)                          */
/* ------------------------------------------------------------------ */
export function EcommercePreview() {
  return (
    <PreviewWrapper>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        {/* Browser chrome */}
        <rect x="80" y="30" width="640" height="390" rx="12" fill="#FDFCFA" />
        <rect x="80" y="30" width="640" height="390" rx="12" stroke="#2D2926" strokeOpacity="0.06" />
        <rect x="80" y="30" width="640" height="36" rx="12" fill="#F5F0EB" />
        <rect x="80" y="54" width="640" height="12" fill="#F5F0EB" />
        <circle cx="100" cy="48" r="4" fill="#C8553D" opacity="0.6" />
        <circle cx="114" cy="48" r="4" fill="#B87333" opacity="0.4" />
        <circle cx="128" cy="48" r="4" fill="#6B7C5E" opacity="0.4" />
        <rect x="170" y="40" width="200" height="16" rx="4" fill="#EDE8E1" />

        {/* Store nav */}
        <circle cx="110" cy="82" r="8" fill="#2D2926" opacity="0.6" />
        <rect x="124" y="78" width="50" height="8" rx="2" fill="#2D2926" opacity="0.4" />
        <rect x="540" y="78" width="40" height="8" rx="2" fill="#2D2926" opacity="0.08" />
        <rect x="592" y="78" width="40" height="8" rx="2" fill="#2D2926" opacity="0.08" />
        <rect x="644" y="78" width="40" height="8" rx="2" fill="#2D2926" opacity="0.08" />
        {/* Cart icon */}
        <rect x="696" y="74" width="16" height="16" rx="4" fill="#C8553D" opacity="0.2" />

        {/* Product grid */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={110 + i * 152}
              y="105"
              width="140"
              height="140"
              rx="10"
              fill={["#8B6F47", "#D4A54A", "#5C3D2E", "#6B7C5E"][i]}
              opacity="0.2"
            />
            <circle
              cx={180 + i * 152}
              cy="175"
              r="20"
              fill="white"
              opacity="0.15"
            />
            <rect x={110 + i * 152} y="255" width="80" height="8" rx="2" fill="#2D2926" opacity="0.2" />
            <rect x={110 + i * 152} y="269" width="50" height="7" rx="2" fill="#2D2926" opacity="0.1" />
          </g>
        ))}

        {/* Featured banner */}
        <rect x="110" y="300" width="590" height="80" rx="10" fill="#2D2926" opacity="0.85" />
        <rect x="135" y="318" width="50" height="6" rx="2" fill="#FAF8F5" opacity="0.3" />
        <rect x="135" y="332" width="140" height="12" rx="2" fill="#FAF8F5" opacity="0.7" />
        <rect x="135" y="352" width="100" height="7" rx="2" fill="#FAF8F5" opacity="0.25" />
        <rect x="580" y="325" width="80" height="30" rx="15" fill="#C8553D" opacity="0.8" />
        <rect x="596" y="336" width="48" height="8" rx="2" fill="#FAF8F5" opacity="0.8" />

        {/* Payment icons */}
        <rect x="110" y="398" width="590" height="1" fill="#2D2926" opacity="0.04" />
        {["Izipay", "Stripe", "Visa"].map((_, i) => (
          <rect key={i} x={340 + i * 55} y="407" width="42" height="14" rx="3" fill="#2D2926" opacity="0.06" />
        ))}
      </svg>
    </PreviewWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  03 — AUTOMATIZACIONES (SVG of connected workflow nodes)           */
/* ------------------------------------------------------------------ */
export function AutomationPreview() {
  return (
    <PreviewWrapper>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        {/* Background dots grid */}
        {Array.from({ length: 15 }).map((_, x) =>
          Array.from({ length: 9 }).map((_, y) => (
            <circle
              key={`${x}-${y}`}
              cx={50 + x * 50}
              cy={25 + y * 50}
              r="1.5"
              fill="#2D2926"
              opacity="0.06"
            />
          ))
        )}

        {/* Connection lines */}
        <path d="M200 145 L320 145" stroke="#C8553D" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <path d="M420 145 L540 100" stroke="#6B7C5E" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <path d="M420 145 L540 190" stroke="#6B7C5E" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <path d="M640 100 L720 145" stroke="#B87333" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <path d="M640 190 L720 145" stroke="#B87333" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />

        {/* Node: Trigger (WhatsApp) */}
        <rect x="100" y="115" width="100" height="60" rx="12" fill="#FDFCFA" stroke="#C8553D" strokeWidth="1.5" opacity="0.9" />
        <circle cx="130" cy="138" r="8" fill="#25D366" opacity="0.2" />
        <rect x="144" y="132" width="40" height="6" rx="2" fill="#2D2926" opacity="0.3" />
        <rect x="120" y="152" width="60" height="5" rx="2" fill="#2D2926" opacity="0.1" />

        {/* Node: Process (n8n) */}
        <rect x="320" y="115" width="100" height="60" rx="12" fill="#FDFCFA" stroke="#6B7C5E" strokeWidth="1.5" opacity="0.9" />
        <rect x="340" y="130" width="16" height="16" rx="3" fill="#EA4B71" opacity="0.2" />
        <rect x="362" y="132" width="40" height="6" rx="2" fill="#2D2926" opacity="0.3" />
        <rect x="340" y="152" width="60" height="5" rx="2" fill="#2D2926" opacity="0.1" />

        {/* Node: Action A (Email) */}
        <rect x="540" y="70" width="100" height="60" rx="12" fill="#FDFCFA" stroke="#B87333" strokeWidth="1.5" opacity="0.9" />
        <rect x="560" y="85" width="16" height="12" rx="2" fill="#B87333" opacity="0.2" />
        <rect x="582" y="87" width="40" height="6" rx="2" fill="#2D2926" opacity="0.3" />
        <rect x="560" y="107" width="60" height="5" rx="2" fill="#2D2926" opacity="0.1" />

        {/* Node: Action B (Chatwoot) */}
        <rect x="540" y="160" width="100" height="60" rx="12" fill="#FDFCFA" stroke="#B87333" strokeWidth="1.5" opacity="0.9" />
        <circle cx="560" cy="183" r="8" fill="#1F93FF" opacity="0.2" />
        <rect x="574" y="177" width="48" height="6" rx="2" fill="#2D2926" opacity="0.3" />
        <rect x="556" y="197" width="60" height="5" rx="2" fill="#2D2926" opacity="0.1" />

        {/* Node: Result */}
        <rect x="720" y="120" width="60" height="50" rx="25" fill="#6B7C5E" stroke="#6B7C5E" strokeWidth="1.5" opacity="0.3" />
        <path d="M738 145 L748 155 L762 135" stroke="#6B7C5E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />

        {/* Bottom panel — log/output */}
        <rect x="100" y="280" width="620" height="130" rx="10" fill="#2D2926" opacity="0.9" />
        <rect x="120" y="298" width="80" height="8" rx="2" fill="#6B7C5E" opacity="0.5" />
        <rect x="120" y="316" width="400" height="6" rx="2" fill="#FAF8F5" opacity="0.12" />
        <rect x="120" y="330" width="350" height="6" rx="2" fill="#FAF8F5" opacity="0.08" />
        <rect x="120" y="344" width="280" height="6" rx="2" fill="#FAF8F5" opacity="0.08" />
        <rect x="120" y="362" width="200" height="6" rx="2" fill="#25D366" opacity="0.2" />
        <rect x="120" y="376" width="320" height="6" rx="2" fill="#FAF8F5" opacity="0.06" />
        <rect x="120" y="390" width="150" height="6" rx="2" fill="#C8553D" opacity="0.15" />

        {/* Decorative: data flow dots */}
        <circle cx="260" cy="145" r="3" fill="#C8553D" opacity="0.4" />
        <circle cx="480" cy="120" r="3" fill="#6B7C5E" opacity="0.4" />
        <circle cx="480" cy="170" r="3" fill="#6B7C5E" opacity="0.4" />
        <circle cx="680" cy="145" r="3" fill="#B87333" opacity="0.4" />
      </svg>
    </PreviewWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  04 — SOFTWARE A MEDIDA (SVG of a dashboard)                       */
/* ------------------------------------------------------------------ */
export function SoftwarePreview() {
  return (
    <PreviewWrapper>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        {/* App frame */}
        <rect x="60" y="25" width="680" height="400" rx="12" fill="#FDFCFA" stroke="#2D2926" strokeOpacity="0.06" />

        {/* Sidebar */}
        <rect x="60" y="25" width="160" height="400" rx="12" fill="#2D2926" opacity="0.9" />
        <rect x="220" y="25" width="1" height="400" fill="#2D2926" opacity="0.04" />
        {/* Sidebar logo */}
        <circle cx="96" cy="58" r="10" fill="#C8553D" opacity="0.4" />
        <rect x="114" y="52" width="60" height="8" rx="2" fill="#FAF8F5" opacity="0.4" />
        {/* Sidebar nav items */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect
              x="80"
              y={90 + i * 38}
              width="120"
              height="28"
              rx="6"
              fill={i === 0 ? "#C8553D" : "transparent"}
              opacity={i === 0 ? 0.2 : 1}
            />
            <rect x="92" y={98 + i * 38} width="12" height="12" rx="3" fill="#FAF8F5" opacity={i === 0 ? 0.6 : 0.15} />
            <rect x="112" y={101 + i * 38} width={50 + (i * 7) % 30} height="6" rx="2" fill="#FAF8F5" opacity={i === 0 ? 0.5 : 0.12} />
          </g>
        ))}
        {/* Sidebar user */}
        <circle cx="92" cy="392" r="10" fill="#FAF8F5" opacity="0.15" />
        <rect x="110" y="386" width="60" height="6" rx="2" fill="#FAF8F5" opacity="0.15" />
        <rect x="110" y="396" width="40" height="5" rx="2" fill="#FAF8F5" opacity="0.08" />

        {/* Main content — header */}
        <rect x="245" y="45" width="140" height="14" rx="3" fill="#2D2926" opacity="0.5" />
        <rect x="630" y="42" width="80" height="28" rx="6" fill="#C8553D" opacity="0.7" />
        <rect x="645" y="52" width="50" height="8" rx="2" fill="#FAF8F5" opacity="0.7" />

        {/* Stat cards */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={245 + i * 115} y="80" width="105" height="65" rx="8" fill="#F5F0EB" />
            <rect x={258 + i * 115} y="95" width="40" height="6" rx="2" fill="#2D2926" opacity="0.12" />
            <rect x={258 + i * 115} y="112" width="55" height="14" rx="2" fill="#2D2926" opacity="0.35" />
            <rect x={258 + i * 115} y="132" width="30" height="5" rx="2" fill={i < 2 ? "#6B7C5E" : "#C8553D"} opacity="0.3" />
          </g>
        ))}

        {/* Chart area */}
        <rect x="245" y="160" width="340" height="180" rx="8" fill="#F5F0EB" />
        <rect x="265" y="175" width="80" height="8" rx="2" fill="#2D2926" opacity="0.2" />
        {/* Chart bars */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const h = [60, 90, 45, 110, 80, 95, 70, 100][i];
          return (
            <rect
              key={i}
              x={280 + i * 36}
              y={320 - h}
              width="22"
              height={h}
              rx="3"
              fill={i === 3 ? "#C8553D" : "#6B7C5E"}
              opacity={i === 3 ? 0.5 : 0.15}
            />
          );
        })}

        {/* Right panel — recent activity */}
        <rect x="600" y="160" width="120" height="180" rx="8" fill="#F5F0EB" />
        <rect x="614" y="175" width="60" height="7" rx="2" fill="#2D2926" opacity="0.2" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <circle cx="622" cy={200 + i * 30} r="5" fill={["#C8553D", "#6B7C5E", "#B87333", "#6B7C5E", "#C8553D"][i]} opacity="0.2" />
            <rect x="634" y={196 + i * 30} width="60" height="5" rx="2" fill="#2D2926" opacity="0.1" />
            <rect x="634" y={204 + i * 30} width="40" height="4" rx="2" fill="#2D2926" opacity="0.06" />
          </g>
        ))}

        {/* Table section */}
        <rect x="245" y="355" width="465" height="60" rx="8" fill="#F5F0EB" />
        <rect x="265" y="368" width="60" height="6" rx="2" fill="#2D2926" opacity="0.15" />
        <rect x="365" y="368" width="60" height="6" rx="2" fill="#2D2926" opacity="0.15" />
        <rect x="465" y="368" width="60" height="6" rx="2" fill="#2D2926" opacity="0.15" />
        <rect x="565" y="368" width="60" height="6" rx="2" fill="#2D2926" opacity="0.15" />
        <rect x="245" y="382" width="465" height="1" fill="#2D2926" opacity="0.04" />
        <rect x="265" y="392" width="80" height="5" rx="2" fill="#2D2926" opacity="0.08" />
        <rect x="365" y="392" width="50" height="5" rx="2" fill="#2D2926" opacity="0.08" />
        <rect x="465" y="392" width="40" height="5" rx="2" fill="#6B7C5E" opacity="0.15" />
        <rect x="565" y="390" width="50" height="16" rx="4" fill="#C8553D" opacity="0.12" />
      </svg>
    </PreviewWrapper>
  );
}

/* ------------------------------------------------------------------ */
/*  05 — CONSULTAS TECH (SVG of a chat interface)                     */
/* ------------------------------------------------------------------ */
export function ConsultingPreview() {
  return (
    <PreviewWrapper>
      <svg
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        {/* Chat window frame */}
        <rect x="160" y="25" width="480" height="400" rx="14" fill="#FDFCFA" stroke="#2D2926" strokeOpacity="0.06" />

        {/* Header */}
        <rect x="160" y="25" width="480" height="52" rx="14" fill="#2D2926" opacity="0.9" />
        <rect x="160" y="63" width="480" height="14" fill="#2D2926" opacity="0.9" />
        <circle cx="196" cy="51" r="14" fill="#C8553D" opacity="0.3" />
        <rect x="220" y="43" width="80" height="8" rx="2" fill="#FAF8F5" opacity="0.5" />
        <rect x="220" y="56" width="50" height="5" rx="2" fill="#6B7C5E" opacity="0.4" />
        {/* Online dot */}
        <circle cx="273" cy="58" r="3" fill="#6B7C5E" opacity="0.6" />

        {/* User message 1 */}
        <rect x="340" y="100" width="270" height="50" rx="12" fill="#C8553D" opacity="0.12" />
        <rect x="360" y="115" width="180" height="6" rx="2" fill="#2D2926" opacity="0.2" />
        <rect x="360" y="127" width="120" height="6" rx="2" fill="#2D2926" opacity="0.12" />

        {/* Bot/consultant response 1 */}
        <circle cx="192" cy="180" r="12" fill="#6B7C5E" opacity="0.15" />
        <rect x="212" y="165" width="300" height="80" rx="12" fill="#F5F0EB" />
        <rect x="230" y="180" width="200" height="6" rx="2" fill="#2D2926" opacity="0.18" />
        <rect x="230" y="192" width="260" height="6" rx="2" fill="#2D2926" opacity="0.1" />
        <rect x="230" y="204" width="180" height="6" rx="2" fill="#2D2926" opacity="0.1" />
        {/* Code block inside response */}
        <rect x="230" y="218" width="220" height="18" rx="4" fill="#2D2926" opacity="0.06" />
        <rect x="240" y="224" width="140" height="5" rx="2" fill="#6B7C5E" opacity="0.2" />

        {/* User message 2 */}
        <rect x="380" y="270" width="230" height="40" rx="12" fill="#C8553D" opacity="0.12" />
        <rect x="400" y="283" width="160" height="6" rx="2" fill="#2D2926" opacity="0.2" />
        <rect x="400" y="295" width="100" height="6" rx="2" fill="#2D2926" opacity="0.12" />

        {/* Bot typing indicator */}
        <circle cx="192" cy="340" r="12" fill="#6B7C5E" opacity="0.15" />
        <rect x="212" y="328" width="80" height="28" rx="14" fill="#F5F0EB" />
        <circle cx="236" cy="342" r="4" fill="#2D2926" opacity="0.15" />
        <circle cx="252" cy="342" r="4" fill="#2D2926" opacity="0.1" />
        <circle cx="268" cy="342" r="4" fill="#2D2926" opacity="0.06" />

        {/* Input bar */}
        <rect x="176" y="380" width="420" height="30" rx="15" fill="#F5F0EB" />
        <rect x="196" y="391" width="120" height="6" rx="2" fill="#2D2926" opacity="0.1" />
        <circle cx="580" cy="395" r="12" fill="#C8553D" opacity="0.6" />
        <path d="M575 395 L585 395 M580 390 L580 400" stroke="#FAF8F5" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>
    </PreviewWrapper>
  );
}
