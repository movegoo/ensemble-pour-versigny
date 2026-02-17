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
    <section id="propositions" className="py-16 bg-off-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">
          Nos propositions
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Découvrez les axes de notre programme pour faire de Versigny une commune où il fait bon vivre.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sorted.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </section>
  );
}
