import Hero from "@/components/Hero";
import IdeaGrid from "@/components/IdeaGrid";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ideas from "@/data/ideas.json";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <nav className="bg-primary text-white py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg">Ensemble pour Versigny</span>
          <div className="flex gap-6 text-sm">
            <a href="#propositions" className="hover:text-green-200 transition-colors">Propositions</a>
            <a href="#equipe" className="hover:text-green-200 transition-colors">Équipe</a>
          </div>
        </div>
      </nav>
      <Hero />
      <IdeaGrid ideas={ideas} />
      <Team />
      <Footer />
    </main>
  );
}
