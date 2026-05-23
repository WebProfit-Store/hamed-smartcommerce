export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold">
            SmartCommerce AI
          </h2>

          <p className="text-zinc-400 mt-4">
            La nouvelle génération du commerce intelligent.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Boutique
          </h3>

          <ul className="space-y-3 text-zinc-400">
            <li>Produits</li>
            <li>Promotions</li>
            <li>Nouveautés</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-zinc-400">
            <li>Contact</li>
            <li>FAQ</li>
            <li>Livraison</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">
            Légal
          </h3>

          <ul className="space-y-3 text-zinc-400">
            <li>Politique retour</li>
            <li>Confidentialité</li>
            <li>Conditions</li>
          </ul>
        </div>

      </div>

    </footer>
  );
}