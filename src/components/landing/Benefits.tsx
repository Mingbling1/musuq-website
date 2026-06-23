import LottieViz from "./LottieViz";

export default function Benefits() {
  return (
    <section className="benefits" id="bondades"><div className="wrap">
      <div className="benefits__head reveal">
        <h2>Hecho para tu forma de trabajar</h2>
        <p>Una sola app para cobrar, organizar y entender tu negocio. Pasa el mouse por cada tarjeta.</p>
      </div>
      <div className="benefits__grid">

        <a className="benefit" href="https://app.musuq.tech">
          <div className="benefit__top"><h3>Todo desde un punto</h3><span className="benefit__arrow">→</span></div>
          <div className="benefit__viz viz-dev">
            <div className="laptop"><div className="lid"><div className="ui"></div></div><div className="base"></div><div className="phone"><div className="ui"></div></div></div>
          </div>
          <p className="benefit__more">Gestiona desde el celular o la laptop, en iOS y Android. Lo que cambias en uno aparece en todos al instante.</p>
        </a>

        <a className="benefit" href="https://app.musuq.tech">
          <div className="benefit__top"><h3>Potenciado con IA</h3><span className="benefit__arrow">→</span></div>
          <div className="benefit__viz viz-ai">
            <LottieViz src="/lottie/ia-core.json" style={{ width: 190, height: 190 }} />
          </div>
          <p className="benefit__more">Sugerencias inteligentes, reportes que se explican solos y automatizaciones que te ahorran tiempo.</p>
        </a>

        <a className="benefit" href="https://app.musuq.tech">
          <div className="benefit__top"><h3>CRM + Contabilidad</h3><span className="benefit__arrow">→</span></div>
          <div className="benefit__viz viz-biz">
            <div className="dash">
              <div className="bz-h"><span>Clientes</span><span style={{ color: '#E8A48F' }}>+8%</span></div>
              <div className="bz-clients"><i></i><i></i><i></i><i className="more">+9</i></div>
              <div className="bz-h"><span>Contabilidad · este mes</span></div>
              <div className="bz-tot">S/ 12 480</div>
              <div className="bz-sub">Ingresos</div>
              <div className="bz-bars"><span style={{ height: '38%' }}></span><span style={{ height: '60%' }}></span><span style={{ height: '46%' }}></span><span style={{ height: '78%' }}></span><span className="up" style={{ height: '100%' }}></span><span style={{ height: '66%' }}></span></div>
            </div>
          </div>
          <p className="benefit__more">Conoce a tus clientes y lleva tus números claros: ingresos, caja y reportes, sin hojas de cálculo. Sirve a cualquier tipo de negocio.</p>
        </a>

      </div>
    </div></section>
  );
}
