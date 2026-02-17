import Hero from "@/components/Hero";
import IdeaGrid from "@/components/IdeaGrid";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ideas from "@/data/ideas.json";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto bg-white shadow-lg">
      {/* Pas de navbar sticky — le flyer est un document continu */}
      <Hero />
      <IdeaGrid ideas={ideas} />
      <Team />
      <Footer />
    </main>
  );
}
