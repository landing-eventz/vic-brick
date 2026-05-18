export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      
      <h1 className="text-4xl font-light">
        Preu del pis a Vic el 2026
      </h1>

      <p className="mt-6 text-neutral-300">
        El preu dels pisos a Vic ha canviat molt els últims anys. Aquí tens una guia real i actualitzada del mercat immobiliari a Osona.
      </p>

      <h2 className="mt-10 text-2xl font-light">
        Quant val un pis a Vic?
      </h2>

      <p className="mt-4 text-neutral-300">
        Depèn molt de la zona: centre de Vic, Caputxins, El Sucre o zones més perifèriques com Gurb o Sentfores.
      </p>

      <h2 className="mt-10 text-2xl font-light">
        Factors que afecten el preu
      </h2>

      <ul className="mt-4 list-disc pl-6 text-neutral-300 space-y-2">
        <li>Ubicació del pis</li>
        <li>Estat de l’immoble</li>
        <li>Any de construcció</li>
        <li>Demanda actual a Vic i Osona</li>
      </ul>

      <h2 className="mt-10 text-2xl font-light">
        Consell professional
      </h2>

      <p className="mt-4 text-neutral-300">
        Un preu correcte des del principi accelera la venda i evita negociacions llargues.
      </p>

      <div className="mt-12">
        <a
          href="/valoracio-pis-vic"
          className="underline text-blue-400"
        >
          Demanar valoració del meu pis →
        </a>
      </div>

    </main>
  );
}
