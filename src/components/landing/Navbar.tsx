"use client";

import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const burger = nav.querySelector<HTMLButtonElement>(".nav__burger");
    const items = Array.from(nav.querySelectorAll<HTMLElement>(".nav-item"));
    const mqm = matchMedia("(max-width:860px)");

    const onBurger = () => {
      const o = nav.classList.toggle("open");
      burger?.setAttribute("aria-expanded", o ? "true" : "false");
      burger?.setAttribute("aria-label", o ? "Cerrar menú" : "Abrir menú");
    };
    burger?.addEventListener("click", onBurger);

    const triggerHandlers: Array<[Element, (e: Event) => void]> = [];
    items.forEach((it) => {
      const trg = it.querySelector<HTMLButtonElement>(".nav-trigger");
      if (!trg) return;
      const h = (e: Event) => {
        if (!mqm.matches) return; // en desktop manda el hover (CSS)
        e.preventDefault();
        const willOpen = !it.classList.contains("open");
        items.forEach((o) => {
          o.classList.remove("open");
          o.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
        });
        if (willOpen) {
          it.classList.add("open");
          trg.setAttribute("aria-expanded", "true");
        }
      };
      trg.addEventListener("click", h);
      triggerHandlers.push([trg, h]);
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        burger?.setAttribute("aria-expanded", "false");
        items.forEach((o) => o.classList.remove("open"));
      }
    };
    addEventListener("keydown", onKey);

    // header: transparente sobre el hero -> solido (.is-scrolled) al pasarlo
    const hero = document.querySelector(".hero");
    let ticking = false;
    const sync = () => {
      ticking = false;
      if (hero) nav.classList.toggle("is-scrolled", hero.getBoundingClientRect().bottom <= 70);
    };
    const rq = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(sync);
      }
    };
    addEventListener("scroll", rq, { passive: true });
    addEventListener("resize", rq);
    sync();

    return () => {
      burger?.removeEventListener("click", onBurger);
      triggerHandlers.forEach(([t, h]) => t.removeEventListener("click", h));
      removeEventListener("keydown", onKey);
      removeEventListener("scroll", rq);
      removeEventListener("resize", rq);
    };
  }, []);

  return (
    <header className="nav" id="nav" ref={navRef}>
      <div className="nav__bar">
        <a className="brand" href="/">
          <svg className="brand__mark" viewBox="143 125.5 831 831" fill="currentColor" aria-hidden="true">
            <g transform="translate(0,1102) scale(0.1,-0.1)">
              <path d="M2920 8029 c-80 -13 -152 -52 -185 -99 -50 -72 -54 -90 -140 -720 -13 -96 -44 -321 -69 -499 -51 -361 -55 -426 -26 -488 17 -38 124 -183 575 -778 261 -344 896 -1191 1199 -1597 189 -255 340 -448 374 -479 120 -110 252 -170 417 -191 217 -27 425 37 594 185 33 28 227 252 431 497 830 994 1293 1547 1640 1960 201 239 380 453 397 475 34 43 58 115 68 210 7 58 7 59 21 33 25 -49 202 -494 219 -553 26 -89 17 -203 -22 -285 -40 -84 -35 -78 -323 -416 -580 -683 -627 -741 -650 -801 -98 -255 59 -750 320 -1013 88 -89 171 -148 286 -201 139 -66 224 -83 404 -83 183 -1 269 18 415 89 294 143 513 439 582 784 31 158 15 390 -38 551 -26 77 -409 972 -699 1630 -59 135 -171 394 -250 575 -270 626 -302 694 -378 809 -225 341 -606 477 -1006 361 -267 -77 -443 -234 -648 -575 -68 -113 -498 -995 -798 -1635 -64 -137 -128 -272 -142 -298 l-24 -49 -231 429 c-346 640 -667 1224 -740 1346 -295 491 -673 756 -1171 822 -123 16 -314 18 -402 4z" />
              <path d="M2156 5073 c-52 -213 -129 -530 -171 -703 -41 -173 -104 -436 -140 -585 -109 -457 -135 -567 -135 -576 0 -5 430 -9 1010 -9 556 0 1010 2 1010 5 0 5 -243 380 -462 715 -52 80 -249 381 -438 670 -359 549 -557 849 -570 863 -4 5 -51 -166 -104 -380z" />
            </g>
          </svg>
          musuq
        </a>
        <nav className="nav__menu" aria-label="Principal">

          <div className="nav-item">
            <button className="nav-trigger" aria-haspopup="true" aria-expanded="false">Productos <i className="caret"></i></button>
            <div className="mega"><div className="mega__inner">
              <aside className="mega__promo">
                <h3>Productos</h3>
                <p>Todo para cobrar y administrar tu negocio desde el celular.</p>
                <div className="mega__img"><img src="brand/rubro-cafe-app.jpg" alt="" /></div>
              </aside>
              <div className="mega__cols">
                <div className="mega__col">
                  <span className="mega__label">Aplicación</span>
                  <a href="https://app.musuq.tech">App musuq</a>
                  <a href="https://app.musuq.tech">Cobros y pagos</a>
                  <a href="https://app.musuq.tech">Comandas y cocina</a>
                  <a href="https://app.musuq.tech">Mesas</a>
                  <a href="https://app.musuq.tech">Para llevar</a>
                  <a href="https://app.musuq.tech">Informes de ventas</a>
                </div>

              </div>
            </div></div>
          </div>

          <div className="nav-item">
            <button className="nav-trigger" aria-haspopup="true" aria-expanded="false">Tipos de negocio <i className="caret"></i></button>
            <div className="mega"><div className="mega__inner">
              <aside className="mega__promo">
                <h3>Tipos de negocio</h3>
                <p>Pensado para la gastronomía: de la cevichería al café de barrio.</p>
                <div className="mega__img"><img src="brand/rubro-lavanderia.jpg" alt="" /></div>
              </aside>
              <div className="mega__cols">
                <div className="mega__col">
                  <span className="mega__label">Gastronomía</span>
                  <a href="https://app.musuq.tech">Restaurantes</a>
                  <a href="https://app.musuq.tech">Cafeterías</a>
                </div>

              </div>
            </div></div>
          </div>

          <a className="nav-link" href="#precios">Precios</a>

          <div className="nav-item">
            <button className="nav-trigger" aria-haspopup="true" aria-expanded="false">Recursos <i className="caret"></i></button>
            <div className="mega"><div className="mega__inner">
              <aside className="mega__promo">
                <h3>Recursos</h3>
                <p>Consejos y guías para ayudarte a hacer crecer tu negocio.</p>
                <div className="mega__img"><img src="brand/rubro-peluqueria.jpg" alt="" /></div>
              </aside>
              <div className="mega__cols">
                <div className="mega__col">
                  <span className="mega__label">Ayuda</span>

                  <a href="mailto:hello@musuq.tech">Centro de ayuda</a>

                </div>
                <div className="mega__col">
                  <span className="mega__label">Musuq</span>
                  <a href="https://app.musuq.tech">Nosotros</a>
                  <a href="mailto:hello@musuq.tech">Contacto</a>

                </div>
              </div>
            </div></div>
          </div>


        </nav>

        <div className="nav__actions">
          <a className="nav-link login" href="https://app.musuq.tech">Iniciar sesión</a>
          <a className="btn btn--dark nav-cta" href="https://app.musuq.tech">Crear cuenta</a>
          <button className="nav__burger" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
  );
}
