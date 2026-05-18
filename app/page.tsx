import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Vic Brick",
            url: "https://vic-brick.vercel.app",
            image:
              "https://images.unsplash.com/photo-1460317442991-0ec209397118",
            telephone: "+34621192582",
            email: "contacte@vicbrick.cat",
            priceRange: "€€",
            areaServed: ["Vic", "Osona", "Manlleu", "Gurb", "Taradell", "Torelló"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vic",
              addressRegion: "Catalunya",
              addressCountry: "ES",
            },
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">

        {/* HERO */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10 px-6">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop"
              alt="Immobiliària Vic Osona"
              fill
              priority
              className="object-cover opacity-20 blur-[1px]"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <h1 className="text-5xl font-light md:text-7xl">
              Immobiliària a Vic i Osona
            </h1>

            <p className="mt-8 text-lg text-neutral-300 md:text-xl">
              Venda de pisos i cases a Vic, Osona i comarca.
            </p>

            <div className="mt-12 flex justify-center">
              <a
                href="https://tally.so/r/kdJdX6"
                className="rounded-full border border-white px-8 py-4 text-sm uppercase hover:bg-white hover:text-black"
              >
                Sol·licitar valoració
              </a>
            </div>
          </div>
        </section>

        {/* SERVEIS */}
        <section className="border-b border-white/10 px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-4xl font-light md:text-5xl">
              Serveis immobiliària Vic Osona
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-light">Venda de pisos</h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-light">Valoració de pis</h3>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-light">Assessorament</h3>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="border-b border-white/10 px-6 py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-light md:text-5xl">
              Blog immobiliari Vic
            </h2>

            <p className="mt-6 text-neutral-300">
              Estratègies per vendre pisos a Vic i Osona.
            </p>

            <div className="mt-10 space-y-4">
              <a href="/blog" className="text-red-500 underline block">
                Entrar al blog →
              </a>

              <a href="/vendre-pis-osona" className="text-red-500 underline block">
                Guia vendre pis Osona →
              </a>

              <a href="/vendre-pis-vic" className="text-red-500 underline block">
                Vendre pis Vic →
              </a>

              <a href="/immobiliaria-manlleu" className="text-red-500 underline block">
                Immobiliària Manlleu →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-28 text-center">
          <h2 className="text-4xl font-light md:text-5xl">
            Vols vendre el teu pis a Vic?
          </h2>

          <p className="mt-8 text-neutral-300">
            Demana valoració gratuïta.
          </p>

          <div className="mt-14">
            <a
              href="https://tally.so/r/kdJdX6"
              className="rounded-full border border-white px-8 py-4 text-sm uppercase"
            >
              Contactar
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
