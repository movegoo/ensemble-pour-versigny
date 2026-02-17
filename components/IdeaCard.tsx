interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

const accents = [
  { border: "hover:border-primary/40", tag: "bg-primary/8 text-primary", dot: "bg-primary" },
  { border: "hover:border-rose/40", tag: "bg-rose/8 text-rose", dot: "bg-rose" },
];

export default function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  const accent = accents[index % 2];

  return (
    <div className={`group p-6 rounded-2xl border border-gray-100 bg-white ${accent.border} transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/80 flex flex-col`}>
      {/* Icon */}
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {idea.icon}
      </div>

      {/* Tag */}
      <span className={`inline-block self-start text-[10px] font-body font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${accent.tag}`}>
        {idea.category}
      </span>

      {/* Title */}
      <h3 className="font-heading font-semibold text-dark text-base mb-2 leading-snug">
        {idea.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-dark/50 leading-relaxed flex-1">
        {idea.description}
      </p>
    </div>
  );
}
