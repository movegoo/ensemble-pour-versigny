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
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="bg-primary-light text-white px-4 py-3 flex items-center gap-2">
        <span className="text-2xl">{idea.icon}</span>
        <h3 className="font-bold text-lg">{idea.title}</h3>
      </div>
      <div className="p-4">
        <span className="inline-block bg-accent/20 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {idea.category}
        </span>
        <p className="text-gray-600 text-sm leading-relaxed">{idea.description}</p>
      </div>
    </div>
  );
}
