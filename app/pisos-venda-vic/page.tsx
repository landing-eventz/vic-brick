export const metadata = {
  title: "Pisos en venda a Vic | Vic Brick",
  description:
    "Pisos en venda a Vic i Osona. Assessorament immobiliari i habitatges en zones com el centre de Vic, Caputxins i El Sucre.",
};

export default function PisosVendaVicPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-6 py-24 text-center border-b border-white/10">
        <h1 className="text-5xl font-light">
          Pisos en venda a Vic
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-neutral-300 leading-relaxed">
          Assessorament immobiliari per trobar pisos en venda a Vic i comarca
          d’Osona amb una visió moderna, local i professional.
        </p>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 py-24 border-b border-white/10">
        <div className="mx-auto max-w-5xl space-y-10">

          <h2 className="text-4xl font-light">
            Comprar un pis a Vic
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Vic és una de les zones residencials amb més demanda d’Osona gràcies
            a la qualitat de vida, serveis, connexions i entorn.
          </p>

          <p className="text-lg text-neutral-300 leading-relaxed">
            Existeixen diferències importants entre barris com el centre de Vic,
            Caputxins, El Sucre o zones residencials més tranquil·les.
          </p>

          <h2 className="text-4xl font-light">
            Tipus de pisos i habitatges
          </h2>

          <p className="text-lg text-neutral-300 leading-relaxed">
            A Vic es poden trobar pisos moderns, habitatges familiars,
            apartaments cèntrics i propietats orientades tant a residència
            habitual com a inversió.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-light">
          Busques pis a Vic?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-neutral-300">
          Contacta amb nosaltres i t’ajudarem a trobar habitatges adaptats al
          que estàs buscant.
        </p>

        <a
          href="https://wa.me/34621192582"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block rounded-full border border-white px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-white hover:text-black"
        >
          WhatsApp
        </a>
      </section>

    </main>
  );
}
