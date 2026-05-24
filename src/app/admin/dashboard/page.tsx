export default function AdminDashboardPage() {

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-zinc-400 mt-3">
          Vue globale de votre business.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Revenus
          </p>

          <h2 className="text-3xl font-bold mt-3">
            2 450 000 FCFA
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Commandes
          </p>

          <h2 className="text-3xl font-bold mt-3">
            325
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Clients
          </p>

          <h2 className="text-3xl font-bold mt-3">
            1 204
          </h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
          <p className="text-zinc-400">
            Conversion
          </p>

          <h2 className="text-3xl font-bold mt-3">
            8.4%
          </h2>
        </div>

      </div>

    </div>
  );
}