export default function Hero() {
  return (
    <section>
      <div className="bg-primary text-white py-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Pour une commune écologique, citoyenne et solidaire !
        </h1>
        <p className="text-base md:text-lg text-green-200 max-w-3xl mx-auto px-4">
          Retrouvez et discutez quelques-unes des propositions de notre programme pour Versigny.
        </p>
      </div>
      <div className="bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="w-full h-64 md:h-80 bg-white/20 rounded-lg flex items-center justify-center border-2 border-dashed border-white/50">
            <p className="text-white/80 text-lg">📸 Photo de groupe de l&apos;équipe</p>
          </div>
        </div>
      </div>
    </section>
  );
}
