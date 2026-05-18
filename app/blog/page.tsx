export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-light">
        Blog immobiliari Vic Brick
      </h1>

      <p className="mt-6 text-neutral-300">
        Articles sobre vendre pisos, comprar habitatge i mercat immobiliari a Vic i Osona.
      </p>

      <ul className="mt-10 space-y-4">
        <li>
          <a href="/blog/vendre-pis-vic-2026" className="text-red-500 hover:text-red-400 underline">
            Vendre pis a Vic el 2026
          </a>
        </li>

        <li>
          <a href="/blog/preu-pis-vic-2026" className="text-red-500 hover:text-red-400 underline">
            Preu pis Vic 2026
          </a>
        </li>

        <li>
          <a href="/blog/com-vendre-pis-vic-rapid" className="text-red-500 hover:text-red-400 underline">
            Com vendre un pis ràpid a Vic
          </a>
        </li>
      </ul>
    </main>
  );
}
