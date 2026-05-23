import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  RefreshCcw,
} from "lucide-react";

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-zinc-800">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div className="flex items-center gap-4">
          <ShieldCheck />
          <span>Paiement sécurisé</span>
        </div>

        <div className="flex items-center gap-4">
          <Truck />
          <span>Livraison rapide</span>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck />
          <span>Produits vérifiés</span>
        </div>

        <div className="flex items-center gap-4">
          <RefreshCcw />
          <span>Retour facile</span>
        </div>

      </div>

    </section>
  );
}