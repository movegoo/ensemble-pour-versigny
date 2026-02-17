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
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-t-4 border-primary">
      <div className="text-4xl mb-3">{idea.icon}</div>
      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">
        {idea.category}
      </span>
      <h3 className="text-xl font-bold text-dark mb-2">{idea.title}</h3>
      <p className="text-gray-600 leading-relaxed">{idea.description}</p>
    </div>
  );
}
