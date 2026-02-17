export default function Footer() {
  return (
    <footer>
      {/* Bandeau domaine — style flyer */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-3xl md:text-5xl font-heading font-900 tracking-wide">
            pourunvillagedynamique.fr
          </p>
        </div>
      </div>

      {/* Légal */}
      <div className="bg-dark text-gray-500 py-5 px-4 text-center">
        <p className="text-xs font-body font-light">
          Pour un village dynamique — Liste citoyenne, élections municipales 2026 — Versigny (02800)
        </p>
        <p className="text-xs font-body font-light mt-1 text-gray-600">
          © 2026 Pour un village dynamique
        </p>
      </div>
    </footer>
  );
}
