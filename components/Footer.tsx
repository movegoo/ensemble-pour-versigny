export default function Footer() {
  return (
    <footer>
      {/* Bandeau site — comme le bas du flyer Louveciennes */}
      <div className="bg-primary text-white py-8 text-center">
        <p className="text-3xl md:text-5xl font-bold tracking-wide">
          pourunvillagedynamique.fr
        </p>
      </div>
      {/* Infos légales */}
      <div className="bg-dark text-gray-400 py-6 px-4 text-center text-xs">
        <p>
          Pour un village dynamique — Liste citoyenne pour les élections municipales 2026 à Versigny (02800)
        </p>
        <p className="mt-2">
          © 2026 Pour un village dynamique — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
