import { prisma } from "@/lib/prisma";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {

  const product =
    await prisma.product.findUnique({
      where: {
        slug: params.slug,
      },
    });

  if (!product) {
    return <div>Produit introuvable</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-6xl mx-auto px-6 pt-32 grid md:grid-cols-2 gap-14">

        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="rounded-3xl"
          />
        </div>

        <div>

          <h1 className="text-5xl font-bold">
            {product.name}
          </h1>

          <p className="text-indigo-500 text-3xl font-bold mt-6">
            {product.price.toLocaleString()} FCFA
          </p>

          <p className="text-zinc-400 mt-8 leading-relaxed">
            {product.description}
          </p>

          <button className="mt-10 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-2xl font-semibold">
            Ajouter au panier
          </button>

        </div>

      </section>

      <Footer />

    </main>
  );
}