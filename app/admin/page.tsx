"use client";

import { useState, useEffect, useCallback } from "react";
import LoginForm from "@/components/admin/LoginForm";
import IdeaList from "@/components/admin/IdeaList";
import IdeaEditor from "@/components/admin/IdeaEditor";

interface Idea {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  order: number;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [editing, setEditing] = useState<Idea | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const fetchIdeas = useCallback(async () => {
    const res = await fetch("/api/ideas");
    const data = await res.json();
    setIdeas(data);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("admin_auth") === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) fetchIdeas();
  }, [authenticated, fetchIdeas]);

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette idée ?")) return;
    await fetch(`/api/ideas/${id}`, { method: "DELETE" });
    fetchIdeas();
  }

  function handleEdit(idea: Idea) {
    setEditing(idea);
    setShowEditor(true);
  }

  function handleNew() {
    setEditing(null);
    setShowEditor(true);
  }

  function handleSave() {
    setShowEditor(false);
    setEditing(null);
    fetchIdeas();
  }

  return (
    <div className="min-h-screen bg-off-white">
      <header className="bg-primary text-white py-4 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Administration — Pour un village dynamique</h1>
          <div className="flex gap-3">
            <a href="/" className="text-sm text-green-200 hover:text-white transition-colors">
              Voir le site
            </a>
            <button
              onClick={() => {
                sessionStorage.removeItem("admin_auth");
                setAuthenticated(false);
              }}
              className="text-sm text-green-200 hover:text-white transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-dark">Propositions ({ideas.length})</h2>
          <button
            onClick={handleNew}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
          >
            + Nouvelle idée
          </button>
        </div>

        {showEditor && (
          <div className="mb-6">
            <IdeaEditor
              idea={editing}
              onSave={handleSave}
              onCancel={() => { setShowEditor(false); setEditing(null); }}
            />
          </div>
        )}

        <IdeaList ideas={ideas} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
