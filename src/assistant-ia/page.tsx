import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import AIChat from "@/components/ai/AIChat";

export default function AssistantAIPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-32">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold">
            Assistant IA
          </h1>

          <p className="text-zinc-400 mt-5">
            Votre vendeur intelligent nouvelle génération.
          </p>

        </div>

        <AIChat />

      </section>

      <Footer />

    </main>
  );
}