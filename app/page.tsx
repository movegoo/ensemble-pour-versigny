import Hero from "@/components/Hero";
import IdeaGrid from "@/components/IdeaGrid";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ideas from "@/data/ideas.json";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-heading font-bold text-lg text-primary">
            PUVD<span className="text-rose">.</span>
          </span>
          <div className="flex gap-8 text-sm font-body font-medium text-dark/60">
            <a href="#propositions" className="hover:text-primary transition-colors">Propositions</a>
            <a href="#equipe" className="hover:text-primary transition-colors">Équipe</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <IdeaGrid ideas={ideas} />
        <Team />
        <Footer />
      </main>
    </>
  );
}
