"use client";

interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

interface Props {
  ideas: Idea[];
  onEdit: (idea: Idea) => void;
  onDelete: (id: string) => void;
}

export default function IdeaList({ ideas, onEdit, onDelete }: Props) {
  return (
    <div className="space-y-3">
      {ideas.map((idea) => (
        <div key={idea.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{idea.icon}</span>
            <div>
              <h3 className="font-semibold text-dark">{idea.title}</h3>
              <p className="text-sm text-gray-500">{idea.category}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(idea)}
              className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-lg hover:bg-primary/20 transition-colors"
            >
              Modifier
            </button>
            <button
              onClick={() => onDelete(idea.id)}
              className="text-sm bg-red-50 text-red-600 px-3 py-1 rounded-lg hover:bg-red-100 transition-colors"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
