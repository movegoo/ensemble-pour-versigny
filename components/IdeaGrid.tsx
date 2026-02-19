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
    <section id="propositions" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-primary/60 mb-3">
            Programme
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark">
            Nos propositions
          </h2>
          <p className="mt-4 text-dark/40 font-body text-base max-w-lg mx-auto">
            Les axes de notre programme pour faire de Versigny un village où il fait bon vivre.
          </p>
        </div>

        {/* 3 cards en haut, 2 centrées en bas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sorted.slice(0, 3).map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 max-w-[calc(66.666%+0.625rem)] mx-auto">
          {sorted.slice(3).map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
