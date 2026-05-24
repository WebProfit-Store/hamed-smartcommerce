"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { useCartStore } from "@/store/cart-store";

export default function CartPage() {

  const { items, removeItem } = useCartStore();

  const total = items.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-5xl mx-auto px-6 pt-32">

        <h1 className="text-4xl font-bold mb-10">
          Votre panier
        </h1>

        <div className="space-y-6">

          {items.map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            >

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div>
                  <h2 className="font-semibold">
                    {item.name}
                  </h2>

                  <p className="text-zinc-400">
                    Quantité : {item.quantity}
                  </p>
                </div>

              </div>

              <div className="text-right">

                <p className="font-bold text-indigo-500">
                  {(
                    item.price * item.quantity
                  ).toLocaleString()} FCFA
                </p>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="mt-3 text-red-500"
                >
                  Supprimer
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-10 bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

          <div className="flex items-center justify-between text-2xl font-bold">

            <span>Total</span>

            <span>
              {total.toLocaleString()} FCFA
            </span>

          </div>

        <CheckoutButton amount={total} />

        </div>

      </section>

      <Footer />

    </main>
  );
}