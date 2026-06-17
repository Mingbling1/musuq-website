import { Check } from "lucide-react";

const ANTON = { fontFamily: "var(--font-anton)" } as const;

// Riel real de pedidos de la app (apps/api … enum estado_pedido).
const STATES = [
  { k: "nuevo", label: "Pedido nuevo", sub: "Mesa 4 · acaba de entrar", cls: "bg-warm-800 text-cream-50" },
  { k: "cocina", label: "En cocina", sub: "Preparando 2 platos", cls: "bg-copper text-cream-50" },
  { k: "listo", label: "Pedido listo", sub: "Recoger en barra", cls: "bg-terracotta text-cream-50", star: true },
  { k: "cobrado", label: "Cobrado · Yape", sub: "S/ 42.00", cls: "bg-terracotta text-cream-50" },
];

/**
 * Mockup de la app Musuq en código (sin imágenes). Muestra el riel de pedidos
 * ciclando en loop perpetuo, con "Pedido listo" en terracota. Diseño fijo a
 * 210px de ancho; el llamador escala/posiciona con un wrapper.
 */
export function MusuqPhone({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[210px] shrink-0 ${className}`}>
      <div className="rounded-[1.5rem] border-2 border-warm-800 bg-warm-800 p-1.5 shadow-[0_28px_55px_-22px_rgba(26,26,26,0.55)]">
        <div className="overflow-hidden rounded-[1.1rem] bg-cream-50">
          <div className="flex justify-center pt-2">
            <div className="h-1 w-10 rounded-full bg-warm-800/15" />
          </div>
          <div className="px-3.5 pb-4 pt-2.5">
            {/* header */}
            <div className="flex items-center justify-between">
              <span className="font-display text-sm lowercase tracking-[-0.02em] text-warm-800">musuq</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-warm-400">Mesa 4</span>
            </div>

            {/* pedido */}
            <div className="mt-3 space-y-1.5">
              {["2× Lomo saltado", "1× Chicha morada"].map((x) => (
                <p key={x} className="text-[12px] leading-tight text-warm-700">{x}</p>
              ))}
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-warm-800/10 pt-2.5">
              <span className="text-[11px] text-warm-400">Total</span>
              <span style={ANTON} className="text-base tabular-nums text-warm-800">S/ 42.00</span>
            </div>

            {/* estado del pedido — ciclo perpetuo */}
            <div className="relative mt-3 h-[52px]">
              {STATES.map((s, i) => (
                <div
                  key={s.k}
                  className={`phone-state absolute inset-0 flex items-center gap-2.5 px-3 ${s.cls} ${s.star ? "phone-state-default" : ""}`}
                  style={{ animationDelay: `${i * 2.25}s` }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-cream-50/20">
                    {s.star ? (
                      <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
                    ) : (
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cream-50 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cream-50" />
                      </span>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-semibold leading-none">{s.label}</span>
                    <span className="mt-0.5 block text-[10px] leading-none text-cream-50/75">{s.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
