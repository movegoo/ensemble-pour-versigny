export default function Hero() {
  return (
    <section>
      {/* Bandeau principal */}
      <div className="bg-gradient-to-r from-primary to-primary-light text-white py-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <p className="text-sm font-body font-light tracking-[0.3em] uppercase mb-3 text-green-200">
            Élections municipales 2026 — Versigny
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-900 leading-tight mb-3">
            Pour un village
            <br />
            <span className="text-green-200">dynamique</span> !
          </h1>
        </div>
      </div>

      {/* Sous-bandeau */}
      <div className="bg-primary-light/90 text-white py-4 px-6 text-center">
        <p className="max-w-2xl mx-auto text-sm md:text-base font-body font-light leading-relaxed">
          Retrouvez et discutez quelques-unes des propositions de notre programme.
          Pour consulter toutes nos propositions ou la liste des candidats,
          rendez-vous sur notre site.
        </p>
      </div>

      {/* Photo de groupe */}
      <div className="bg-white px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="w-full aspect-[16/7] bg-gradient-to-br from-primary-50 to-rose-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 transition-all hover:border-primary-light hover:shadow-md">
            <div className="text-center">
              <span className="text-6xl block mb-3">📸</span>
              <p className="text-gray-400 text-sm font-body font-light">Photo de groupe de l&apos;équipe</p>
              <p className="text-gray-300 text-xs mt-1">Glissez votre image ici</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
