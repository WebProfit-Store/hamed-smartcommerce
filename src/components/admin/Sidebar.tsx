"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Brain,
  Settings,
} from "lucide-react";

export default function Sidebar() {

  const links = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Produits",
      href: "/admin/produits",
      icon: ShoppingBag,
    },

    {
      name: "Commandes",
      href: "/admin/commandes",
      icon: Package,
    },

    {
      name: "Clients",
      href: "/admin/utilisateurs",
      icon: Users,
    },

    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },

    {
      name: "IA",
      href: "/admin/ia",
      icon: Brain,
    },

    {
      name: "Paramètres",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-72 border-r border-zinc-800 p-6">

      <h1 className="text-2xl font-bold mb-10">
        SmartCommerce AI
      </h1>

      <nav className="space-y-3">

        {links.map((link) => {

          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-zinc-900 transition"
            >

              <Icon size={20} />

              <span>{link.name}</span>

            </Link>
          );
        })}

      </nav>

    </aside>
  );
}