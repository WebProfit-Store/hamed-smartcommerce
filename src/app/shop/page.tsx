import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ProductCard from "@/components/shop/ProductCard";

async function getProducts() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products`,
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ShopPage() {

  const products = await getProducts();

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-32">

        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Boutique
          </h1>

          <p className="text-zinc-400 mt-3">
            Produits premium disponibles.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product: any) => (

            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.images[0]}
            />

          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}