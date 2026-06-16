/**
 * Marcador de capítulo — estilo "número gigante outline" (D3).
 * El número va en contorno terracota (hueco); el label hereda el color de la
 * sección (currentColor) para funcionar sobre dark y cream.
 * Centrado, arriba del titular. Mismo look en móvil y desktop.
 */
export function ChapterMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="relative z-10 mx-auto mb-7 flex w-fit items-end gap-3.5 md:mb-9">
      <span
        aria-hidden
        className="font-display text-[3.25rem] font-semibold leading-[0.74] tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_#C8553D] md:text-[4.75rem] md:[-webkit-text-stroke:2px_#C8553D]"
      >
        {num}
      </span>
      <span className="pb-2 text-[12px] font-semibold uppercase tracking-[0.2em] opacity-45 md:pb-3">
        {label}
      </span>
    </div>
  );
}
