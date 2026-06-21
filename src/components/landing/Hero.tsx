export default function Hero() {
  return (
    <section className="hero">
      <picture aria-hidden="true">
        <source media="(max-width:860px)" srcSet="brand/hero-musuq-mobile.jpg" />
        <img className="hero__img" src="brand/hero-musuq-desktop.jpg" alt="" fetchPriority="high" decoding="async" />
      </picture>
      <div className="wrap">
        <div className="hero__copy">
          <h1>Tecnología que impulsa cada venta</h1>
          <p>Cobra, organiza y entiende tu negocio desde una sola app.</p>
          <div className="hero__cta"><a className="btn btn--dark" href="https://app.musuq.tech">Empieza gratis</a></div>
        </div>
      </div>
    </section>
  );
}
