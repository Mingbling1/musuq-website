/**
 * Marcador de capítulo. En desktop: etiqueta vertical al costado izquierdo
 * de la sección (editorial, no genérico). En móvil: índice horizontal compacto
 * que reemplaza al eyebrow. El número va en terracota; el resto hereda el color
 * de la sección (currentColor) para funcionar sobre dark y cream.
 */
export function ChapterMarker({ num, label }: { num: string; label: string }) {
  return (
    <>
      {/* Desktop: vertical al costado */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-28 z-20 hidden select-none md:block lg:left-8"
      >
        <span className="flex items-center gap-3 rotate-180 text-[11px] font-semibold uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          <span className="tabular-nums text-terracotta">{num}</span>
          <span className="h-10 w-px bg-current opacity-20" />
          <span className="opacity-45">{label}</span>
        </span>
      </span>

      {/* Móvil: índice horizontal centrado */}
      <span className="relative z-10 mx-auto mb-5 flex w-fit items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.22em] md:hidden">
        <span className="tabular-nums text-terracotta">{num}</span>
        <span className="h-px w-6 bg-current opacity-25" />
        <span className="opacity-55">{label}</span>
      </span>
    </>
  );
}
