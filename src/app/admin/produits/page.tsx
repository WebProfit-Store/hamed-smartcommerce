import Link from "next/link";

export default function AdminProductsPage() {

  return (
    <div>

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Produits
          </h1>

          <p className="text-zinc-400 mt-3">
            Gérez votre catalogue.
          </p>

        </div>

        <Link
          href="/admin/produits/new"
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-2xl"
        >
          Ajouter produit
        </Link>

      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-zinc-800">

              <th className="pb-4">
                Produit
              </th>

              <th className="pb-4">
                Prix
              </th>

              <th className="pb-4">
                Stock
              </th>

              <th className="pb-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="py-5">
                iPhone 15 Pro
              </td>

              <td>
                950 000 FCFA
              </td>

              <td>
                12
              </td>

              <td>
                Actif
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}