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
    <section id="propositions" className="py-10 bg-off-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading font-800 text-2xl md:text-3xl text-dark">
            Nos propositions
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-gradient-to-r from-primary to-rose rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sorted.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
