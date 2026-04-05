import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="animate-fade-in">
          <div className="relative inline-block mb-8">
            <svg
              width="64"
              height="64"
              viewBox="0 0 40 40"
              fill="none"
              className="mx-auto"
            >
              <circle cx="20" cy="32" r="5" fill="#C8553D" opacity="0.25" />
              <path
                d="M20 34 L20 16"
                stroke="#C8553D"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M20 20 C17 18 11 13 8 7 C12 9 17 12 20 17"
                fill="#C8553D"
                opacity="0.75"
              />
              <path
                d="M20 18 C23 15 28 10 32 5 C29 8 24 12 20 16"
                fill="#C8553D"
                opacity="0.55"
              />
              <path
                d="M20 14 C18.5 10 18 6 19.5 3 C20.5 3 21 6 21.5 10 C21.5 12 20 14 20 14"
                fill="#C8553D"
                opacity="0.92"
              />
              <circle cx="20" cy="34" r="2.5" fill="#C8553D" />
            </svg>

            <span className="absolute -top-2 -right-6 font-serif text-2xl font-medium text-warm-600">
              404
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-tight text-warm-800 mb-6">
            Esta página se perdió en el camino.
          </h1>

          <p className="text-warm-500 leading-relaxed text-lg mb-10">
            Pero no te preocupes — como toda buena semilla, siempre encontramos
            el rumbo. Volvamos al inicio.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-warm-800 px-7 py-3.5 text-sm font-medium text-cream-50 transition-all hover:bg-warm-700 active:scale-95"
            >
              Volver al inicio
            </Link>
            <a
              href="mailto:hello@musuq.tech"
              className="text-sm font-medium text-warm-600 hover:text-warm-800 transition-colors underline decoration-warm-400/50 underline-offset-4 hover:decoration-warm-600"
            >
              Escribirnos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
