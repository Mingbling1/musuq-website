export const metadata = {
  title: "Términos y Condiciones | musuq",
  description: "Términos y condiciones de uso del sitio web musuq.tech. Servicios de desarrollo web, e-commerce, automatizaciones y software a medida.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream-100 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-medium text-warm-800 mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-warm-400 mb-12">
          Última actualización: {new Date().toLocaleDateString("es-PE", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-warm-600 leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">1. Información general</h2>
            <p>
              El sitio web <a href="https://musuq.tech" className="text-terracotta hover:underline">musuq.tech</a> es
              propiedad de <strong>musuq</strong> (en adelante, "musuq"), estudio digital constituido bajo las leyes
              de la República del Perú, con RUC [Número de RUC], domiciliado en Lima, Perú.
            </p>
            <p className="mt-2">
              Correo electrónico de contacto:{" "}
              <a href="mailto:hello@musuq.tech" className="text-terracotta hover:underline">hello@musuq.tech</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">2. Objeto</h2>
            <p>
              Los presentes términos regulan el uso del sitio web musuq.tech y los servicios de desarrollo web,
              diseño, automatizaciones y consultoría técnica que musuq brinda a sus clientes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">3. Servicios</h2>
            <p>musuq ofrece los siguientes servicios:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Diseño y desarrollo de landing pages</li>
              <li>Tiendas online (e-commerce)</li>
              <li>Automatizaciones y bots</li>
              <li>Software a medida</li>
              <li>Consultoría técnica</li>
            </ul>
            <p className="mt-2">
              Cada servicio será detallado en una propuesta comercial отдельная que será compartida con el cliente
              antes de iniciar cualquier trabajo.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">4. Aceptación</h2>
            <p>
              El usuario reconoce haber leído y aceptado los presentes términos al navegar por este sitio web o
              al contactarnos para solicitar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">5. Propuestas y presupuestos</h2>
            <p>
              Toda propuesta comercial shared by musuq tiene validez de 30 días calendario desde la fecha de emisión.
              Los precios están expresados en soles peruanos (PEN) salvo pacto diferente por escrito.
            </p>
            <p className="mt-2">
              Un presupuesto o propuesta acepta comienza a ejecutarse únicamente tras la aprobación formal del
              cliente y, cuando aplique, el pago del anticipo correspondiente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">6. Pago</h2>
            <p>
              Salvo pacto diferente por escrito, se requiere un anticipo del 50% del valor total del proyecto
              para iniciar los trabajos. El 50% restante se abona antes de la entrega final del proyecto.
            </p>
            <p className="mt-2">
              Los pagos se realizan mediante transferencia bancaria a la cuenta que musuq indique en la
              propuesta comercial.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">7. Plazos</h2>
            <p>
              Los plazos de entrega indicados en las propuestas son estimaciones y pueden variar según la
              complejidad del proyecto, la disponibilidad del cliente para dar feedback y la aprobación de
              entregables parciales.
            </p>
            <p className="mt-2">
              musuq no se hace responsable por retrasos derivados de demoras del cliente en proporcionar
              información, contenido o aprobaciones.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">8. Propiedad intelectual</h2>
            <p>
              Una vez recibido el pago completo, el cliente será propietario del código fuente y los activos
              desenvolvidos específicamente para él, salvo aquellos componentes o herramientas de terceros
              que tengan licencias independientes.
            </p>
            <p className="mt-2">
              musuq se reserva el derecho de mostrar el trabajo completado en su portafolio, salvo pacto
              diferente por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">9. Revisiones y cambios</h2>
            <p>
              Cada propuesta incluye un número определен de rondas de revisión, según lo indicado en la misma.
              Revisiones adicionales serán cobradas adicionalmente según la complejidad del cambio.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">10. Garantía</h2>
            <p>
              musuq ofrece garantía de 30 días sobre el funcionamiento del entregable final. Esta garantía
              cubre errores de código propio y no incluye modificaciones solicitadas por el cliente después
              de la entrega, ni problemas derivados del uso indebido o cambios en servicios de terceros.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">11. Limitación de responsabilidad</h2>
            <p>
              La responsabilidad de musuq por cualquier reclamo no excederá el monto total pagado por el
              cliente por los servicios específicos que generaron el reclamo.
            </p>
            <p className="mt-2">
              musuq no será responsable por daños indirectos, consecuentes o lucro cesante.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">12. Confidencialidad</h2>
            <p>
              musuq se compromete a mantener la confidencialidad de toda la información que el cliente
              proporcione para la ejecución del proyecto, no divulgando dicha información a terceros sin
              consentimiento previo por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">13. Cancelación</h2>
            <p>
              El cliente puede cancelar un proyecto en cualquier momento mediante comunicación escrita.
              En caso de cancelación:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Se facturará el trabajo completado hasta la fecha de cancelación</li>
              <li>El anticipo pagado no será reembolsable en proporción al trabajo realizado</li>
              <li>El cliente recibirá los entregables correspondientes al trabajo pagado</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">14. Fuerza mayor</h2>
            <p>
              musuq no será responsable por fallos o retrasos causados por circunstancias fuera de su control
              razonable, incluyendo desastres naturales, fallas de internet, cambios en normativas u otras
              causas de fuerza mayor.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">15. Ley aplicable y jurisdicción</h2>
            <p>
              Los presentes términos se rigen por las leyes de la República del Perú. Cualquier controversia
              derivada de la aplicación de estos términos será resuelta ante los jueces y tribunales de la
              ciudad de <strong>Lima, Perú</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-medium text-warm-800 mb-3">16. Contacto</h2>
            <p>Para cualquier consulta relacionada con estos términos:</p>
            <ul className="list-none mt-2 space-y-1">
              <li>Email: <a href="mailto:hello@musuq.tech" className="text-terracotta hover:underline">hello@musuq.tech</a></li>
              <li>Ubicación: Lima, Perú</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
