export default function VendrePisVic() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-light">
        Vendre pis a Vic
      </h1>

      <p className="mt-6 text-neutral-300">
        Guia completa per vendre un pis a Vic i Osona.
      </p>

      <h2 className="mt-10 text-2xl">Zones principals</h2>

      <ul className="mt-4 space-y-2 text-red-400 underline">
        <li><a href="/immobiliaria-manlleu">Manlleu</a></li>
        <li><a href="/pisos-venda-vic">Pisos Vic</a></li>
        <li><a href="/valoracio-pis-vic">Valoració pis Vic</a></li>
      </ul>
    </main>
  );
}
