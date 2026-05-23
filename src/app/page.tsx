export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center h-screen px-6 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
          SmartCommerce AI
        </h1>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl">
          La plateforme e-commerce intelligente nouvelle génération.
        </p>

        <button className="mt-10 bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold">
          Commencer
        </button>

      </section>
    </main>
  );
}