export default function VendrePisOsona() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-light">
        Vendre pis a Osona
      </h1>

      <p className="mt-6 text-neutral-300">
        Guia completa per vendre habitatges a Vic i tota la comarca d’Osona.
      </p>

      <h2 className="mt-10 text-2xl">
        Zones principals
      </h2>

      <ul className="mt-4 space-y-3 text-red-500 underline">
        <li><a href="/vendre-pis-vic">Vendre pis a Vic</a></li>
        <li><a href="/immobiliaria-manlleu">Manlleu</a></li>
        <li><a href="/pisos-venda-vic">Pisos en venda Vic</a></li>
        <li><a href="/valoracio-pis-vic">Valoració pis Vic</a></li>
      </ul>

      <h2 className="mt-10 text-2xl">
        Blog recomanat
      </h2>

      <ul className="mt-4 space-y-3 text-red-500 underline">
        <li><a href="/blog/vendre-pis-vic-2026">Vendre pis Vic 2026</a></li>
        <li><a href="/blog/preu-pis-vic-2026">Preu pis Vic 2026</a></li>
      </ul>
    </main>
  );
}
