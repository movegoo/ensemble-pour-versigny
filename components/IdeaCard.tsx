interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

export default function IdeaCard({ idea }: { idea: Idea }) {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden flex flex-col">
      {/* Image placeholder — comme les photos dans chaque card du flyer */}
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary-light/10 flex items-center justify-center">
        <span className="text-5xl">{idea.icon}</span>
      </div>
      {/* Titre sur fond vert — style bandeau du flyer */}
      <div className="bg-primary text-white px-3 py-2">
        <h3 className="font-bold text-sm uppercase tracking-wide">{idea.title}</h3>
      </div>
      {/* Description */}
      <div className="px-3 py-3 flex-1">
        <p className="text-gray-700 text-xs leading-relaxed">{idea.description}</p>
      </div>
    </div>
  );
}
