interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

const themes = [
  {
    bg: "bg-primary",
    bgLight: "bg-primary-50",
    gradient: "from-primary-50 to-primary-100/50",
    ring: "ring-primary/20",
  },
  {
    bg: "bg-rose",
    bgLight: "bg-rose-50",
    gradient: "from-rose-50 to-rose-100/50",
    ring: "ring-rose/20",
  },
];

export default function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  const theme = themes[index % 2];

  return (
    <div className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ${theme.ring} hover:-translate-y-1 flex flex-col`}>
      {/* Zone visuelle */}
      <div className={`w-full aspect-[4/3] bg-gradient-to-br ${theme.gradient} flex items-center justify-center relative`}>
        <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
          {idea.icon}
        </span>
      </div>

      {/* Bandeau titre */}
      <div className={`${theme.bg} text-white px-4 py-2.5`}>
        <h3 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider">
          {idea.title}
        </h3>
      </div>

      {/* Description */}
      <div className="px-4 py-3 flex-1">
        <p className="text-gray-600 text-xs md:text-sm font-body font-light leading-relaxed">
          {idea.description}
        </p>
      </div>
    </div>
  );
}
