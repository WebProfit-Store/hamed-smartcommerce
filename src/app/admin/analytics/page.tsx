export default function AnalyticsPage() {

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Analytics
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl h-96 p-6">
          Graphique ventes
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl h-96 p-6">
          Produits populaires
        </div>

      </div>

    </div>
  );
}