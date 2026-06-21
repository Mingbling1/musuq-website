export default function Pricing() {
  return (
    <section className="pricing" id="precios">
      <div className="wrap">
        <div className="pricing__head reveal">
          <h2>Precios simples</h2>
          <p>Empieza gratis. Sube a Pro cuando quieras IA e informes.</p>
        </div>
        <div className="plans">
          <div className="plan">
            <span className="plan__name">Gratis</span>
            <div className="plan__price">S/ 0<small> /mes</small></div>
            <p className="plan__desc">Para empezar a cobrar hoy.</p>
            <ul className="plan__feats">
              <li><span className="ck">✓</span> Cobros y caja diaria</li>
              <li><span className="ck">✓</span> Mesas con QR</li>
              <li><span className="ck">✓</span> Catálogo y carta pública</li>
              <li><span className="ck">✓</span> 1 usuario</li>
            </ul>
            <a className="btn btn--ghost" href="https://app.musuq.tech">Empieza gratis</a>
          </div>
          <div className="plan plan--pro">
            <span className="plan__badge">Recomendado</span>
            <span className="plan__name">Pro</span>
            <div className="plan__price">S/ 99<small> /mes</small></div>
            <p className="plan__desc">Para crecer con IA e informes.</p>
            <ul className="plan__feats">
              <li><span className="ck">✓</span> Todo lo de Gratis</li>
              <li><span className="ck">✓</span> Carta con IA: foto → menú y descripciones</li>
              <li><span className="ck">✓</span> Para llevar y comandas de cocina</li>
              <li><span className="ck">✓</span> Informes avanzados</li>
              <li><span className="ck">✓</span> Usuarios ilimitados</li>
            </ul>
            <a className="btn btn--dark" href="https://app.musuq.tech">Empezar con Pro</a>
          </div>
        </div>
        <div className="demo">
          <div><h3>¿Quieres verla en acción?</h3><p>Te mostramos Musuq con tu propia carta, en 15 minutos.</p></div>
          <a className="btn btn--dark" href="mailto:hello@musuq.tech?subject=Quiero%20una%20demo">Agenda una demo</a>
        </div>
      </div>
    </section>
  );
}
