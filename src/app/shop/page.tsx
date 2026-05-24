import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/shop/ProductCard";

import { products } from "@/data/products";

export default function ShopPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-32">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Boutique
            </h1>

            <p className="text-zinc-400 mt-2">
              Découvrez nos produits premium
            </p>
          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}