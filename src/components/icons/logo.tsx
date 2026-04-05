/**
 * musuq logo
 *
 * Concept: "musuq" means "new" in Quechua. The mark is a seed at the base
 * with three leaves sprouting upward — life emerging, something new being
 * born. Three leaves give it the organic feel of a real sprout.
 *
 * Inspired by Linus's philosophy: "making it simple is the hard part."
 */

interface LogoProps {
  className?: string;
  size?: number;
  /** Show the wordmark next to the icon */
  showText?: boolean;
  textClassName?: string;
}

export function Logo({
  className = "",
  size = 32,
  showText = true,
  textClassName = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="musuq"
      >
        {/* Seed — soft circle at the base */}
        <circle cx="20" cy="32" r="5" fill="currentColor" opacity="0.25" />

        {/* Stem — rising from the seed */}
        <path
          d="M20 34 L20 16"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Left leaf — curves out to the left */}
        <path
          d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17"
          fill="currentColor"
          opacity="0.75"
        />

        {/* Right leaf — curves out to the right */}
        <path
          d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16"
          fill="currentColor"
          opacity="0.55"
        />

        {/* Center leaf — smallest, pointing straight up */}
        <path
          d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14"
          fill="currentColor"
          opacity="0.92"
        />

        {/* Seed dot — small solid circle */}
        <circle cx="20" cy="34" r="2.5" fill="currentColor" />
      </svg>
      {showText && (
        <span
          className={`font-serif text-xl font-medium tracking-tight ${textClassName}`}
        >
          musuq
        </span>
      )}
    </span>
  );
}
