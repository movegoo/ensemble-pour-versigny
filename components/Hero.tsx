export default function Hero() {
  return (
    <section>
      {/* Bandeau slogan vert foncé — comme le haut du flyer */}
      <div className="bg-primary text-white py-6 text-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide uppercase">
          Pour un village dynamique !
        </h1>
      </div>

      {/* Sous-titre + intro — fond vert moyen */}
      <div className="bg-primary-light text-white py-4 px-4 text-center">
        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Retrouvez et discutez quelques-unes des propositions de notre programme.
          Pour consulter toutes nos propositions ou la liste des candidats, rendez-vous sur notre site.
        </p>
      </div>

      {/* Photo de groupe — style flyer */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="w-full aspect-[16/7] bg-gradient-to-br from-primary/10 to-primary-light/10 rounded flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <span className="text-6xl block mb-2">📸</span>
              <p className="text-gray-400 text-sm">Photo de groupe de l&apos;équipe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
