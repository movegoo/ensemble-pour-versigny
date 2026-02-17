export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Ensemble pour Versigny</h3>
            <p className="text-gray-400 text-sm">
              Liste citoyenne pour les élections municipales 2026 à Versigny (02800).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">
              contact@ensemble-versigny.fr<br />
              Mairie de Versigny<br />
              02800 Versigny
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">Mentions légales</h3>
            <p className="text-gray-400 text-sm">
              Site réalisé dans le cadre de la campagne municipale. Directrice de la publication : Marie Dupont.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
          © 2026 Ensemble pour Versigny — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
