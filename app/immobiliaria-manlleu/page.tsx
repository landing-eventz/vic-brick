export const metadata = {
  title: "Immobiliària a Manlleu | Venda de pisos Osona | Vic Brick",
  description:
    "Immobiliària a Manlleu especialitzada en venda de pisos, valoracions i assessorament immobiliari a Osona.",
};

export default function ImmobiliariaManlleuPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-5xl">

        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          Vic Brick · Osona
        </p>

        <h1 className="mt-6 text-5xl font-light md:text-7xl">
          Immobiliària a Manlleu
        </h1>

        <p className="mt-10 max-w-3xl text-xl text-neutral-300">
          Venda de pisos, cases i habitatges a Manlleu amb estratègia immobiliària local.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-light">
              Venda de pisos
            </h2>

            <p className="mt-4 text-neutral-300">
              Gestió integral per vendre habitatges a Manlleu.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-light">
              Valoració immobiliària
            </h2>

            <p className="mt-4 text-neutral-300">
              Valoració basada en dades reals de mercat a Osona.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-light">
              Assessorament local
            </h2>

            <p className="mt-4 text-neutral-300">
              Coneixement de barris i demanda immobiliària de Manlleu.
            </p>
          </div>

        </div>

        <section className="mt-24 max-w-3xl space-y-8 text-lg text-neutral-300">

          <p>
            El mercat immobiliari de Manlleu continua creixent gràcies a la proximitat amb Vic i la demanda d’habitatge a Osona.
          </p>

          <p>
            Vic Brick treballa amb propietaris que volen vendre pisos i cases amb posicionament real de mercat.
          </p>

          <p>
            També oferim valoracions immobiliàries per conèixer el preu real del teu habitatge.
          </p>

        </section>

        <div className="mt-20">
          <a
            href="/valoracio-pis-vic"
            className="rounded-full border border-white px-8 py-4 text-sm uppercase hover:bg-white hover:text-black"
          >
            Demanar valoració
          </a>
        </div>

      </div>

    </main>
  );
}
