"use client";

import Link from "next/link";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          SmartCommerce AI
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/">Accueil</Link>
          <Link href="/shop">Boutique</Link>
          <Link href="/categories">Catégories</Link>
          <Link href="/assistant-ia">Assistant IA</Link>
        </nav>

        <div className="flex items-center gap-4">

          <button>
            <Search size={20} />
          </button>

          <button>
            <ShoppingCart size={20} />
          </button>

          <button>
            <User size={20} />
          </button>

        </div>

      </div>

    </header>
  );
}