"use client";

import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart-store";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {

  const addItem = useCartStore(
    (state) => state.addItem
  );

  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-indigo-500 transition">

      <div className="aspect-square bg-zinc-800">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">

        <h3 className="font-semibold text-lg">
          {name}
        </h3>

        <p className="text-indigo-500 mt-2 font-bold">
          {price.toLocaleString()} FCFA
        </p>

        <button
          onClick={() =>
            addItem({
              id,
              name,
              price,
              image,
              quantity: 1,
            })
          }
          className="mt-5 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-2xl flex items-center justify-center gap-2"
        >
          <ShoppingCart size={18} />
          Ajouter
        </button>

      </div>

    </div>
  );
}