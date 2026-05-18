export const metadata = {
  title: "Valoració de pisos a Vic | Saber quant val el teu habitatge",
  description:
    "Valoració orientativa de pisos i cases a Vic i Osona. Assessorem propietaris que volen entendre el valor real del seu habitatge.",
};

export default function ValoracioPisVicPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="border-b border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            VALORACIÓ IMMOBILIÀRIA
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-light leading-tight md:text-7xl">
            Valoració de pisos a Vic i Osona
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300">
            T’ajudem a entendre el valor orientatiu del teu habitatge segons
            la zona, estat, demanda actual i situació del mercat immobiliari.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/kdJdX6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-white hover:text-black"
            >
              Sol·licitar valoració
            </a>

            <a
              href="https://wa.me/34621192582"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* CONTINGUT SEO */}
      <section className="border-b border-white/10 px-6 py-28">
        <div className="mx-auto max-w-5xl">

          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Valoració d’habitatges
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Quant val el teu pis a Vic?
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">

            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">

              <p>
                El valor d’un habitatge depèn de múltiples factors com la
                ubicació, estat de conservació, orientació, superfície,
                eficiència energètica i situació del mercat immobiliari actual.
              </p>

              <p>
                A Vic Brick treballem amb propietaris de Vic i Osona que volen
                entendre el posicionament real del seu habitatge abans de posar-lo
                a la venda.
              </p>

              <p>
                Analitzem habitatges situats a Vic, Gurb, Taradell, Manlleu,
                Torelló i altres municipis de la comarca.
              </p>

            </div>

            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">

              <p>
                Una valoració correcta és clau per evitar sobrepreus,
                allargar processos de venda o perdre oportunitats dins del
                mercat immobiliari.
              </p>

              <p>
                També assessorem propietaris que encara no tenen clar si volen
                vendre immediatament però volen entendre el valor orientatiu
                del seu pis o casa.
              </p>

              <p>
                El nostre enfocament és proper, transparent i orientat a
                operacions ben gestionades.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FACTORS */}
      <section className="border-b border-white/10 px-6 py-28">

        <div className="mx-auto max-w-6xl">

          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Factors de valoració
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Què afecta el valor d’un habitatge?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-light">
                Ubicació
              </h3>

              <p className="leading-relaxed text-neutral-300">
                Zones com el centre de Vic, Caputxins, El Sucre o Sentfores
                poden tenir comportaments de demanda diferents.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-light">
                Estat de l’habitatge
              </h3>

              <p className="leading-relaxed text-neutral-300">
                Reformes, eficiència energètica, llum natural i distribució
                influeixen directament en el valor percebut.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-light">
                Situació del mercat
              </h3>

              <p className="leading-relaxed text-neutral-300">
                La demanda actual, tipus d’habitatge i oferta disponible
                també afecten el temps de venda i el preu final.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 px-6 py-28">

        <div className="mx-auto max-w-4xl">

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Preguntes freqüents
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Dubtes habituals sobre valoracions immobiliàries
          </h2>

          <div className="mt-16 space-y-10">

            <div>
              <h3 className="text-2xl font-light">
                Quant costa una valoració?
              </h3>

              <p className="mt-4 leading-relaxed text-neutral-300">
                Oferim una primera orientació per entendre el posicionament
                aproximat del teu habitatge dins del mercat local.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light">
                És el mateix que una taxació?
              </h3>

              <p className="mt-4 leading-relaxed text-neutral-300">
                No exactament. Una taxació oficial bancària segueix criteris
                homologats específics. Nosaltres oferim una valoració orientativa
                basada en mercat real.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light">
                Treballeu només a Vic?
              </h3>

              <p className="mt-4 leading-relaxed text-neutral-300">
                També treballem habitatges situats a Gurb, Taradell, Manlleu,
                Torelló i altres municipis d’Osona.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Contacte
          </p>

          <h2 className="text-4xl font-light md:text-5xl">
            Vols saber quant val el teu habitatge?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-300">
            Explica’ns el teu cas i t’ajudarem a entendre el valor orientatiu
            del teu pis o casa a Vic i Osona.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="https://tally.so/r/kdJdX6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-white hover:text-black"
            >
              Sol·licitar valoració
            </a>

            <a
              href="https://wa.me/34621192582"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm uppercase tracking-wide transition hover:bg-white/20"
            >
              Escriure per WhatsApp
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
