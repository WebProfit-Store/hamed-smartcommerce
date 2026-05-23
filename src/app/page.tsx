import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/badges/TrustBadges";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <TrustBadges />

      <Footer />

    </main>
  );
}