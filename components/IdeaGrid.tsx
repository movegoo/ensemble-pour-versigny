import IdeaCard from "./IdeaCard";

interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

export default function IdeaGrid({ ideas }: { ideas: Idea[] }) {
  const sorted = [...ideas].sort((a, b) => a.order - b.order);

  return (
    <section id="propositions" className="py-6 bg-off-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Grille 2x4 comme le flyer — cards serrées */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sorted.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
