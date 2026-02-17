interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

const colors = [
  { bg: "bg-primary", gradient: "from-primary/5 to-primary-light/10" },
  { bg: "bg-rose", gradient: "from-rose/5 to-rose-light/10" },
];

export default function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  const color = colors[index % 2];

  return (
    <div className="bg-white border border-gray-200 overflow-hidden flex flex-col">
      <div className={`w-full aspect-[4/3] bg-gradient-to-br ${color.gradient} flex items-center justify-center`}>
        <span className="text-5xl">{idea.icon}</span>
      </div>
      <div className={`${color.bg} text-white px-3 py-2`}>
        <h3 className="font-bold text-sm uppercase tracking-wide">{idea.title}</h3>
      </div>
      <div className="px-3 py-3 flex-1">
        <p className="text-gray-700 text-xs leading-relaxed">{idea.description}</p>
      </div>
    </div>
  );
}
