export default function Hero() {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Ensemble pour Versigny
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-100">
          Construisons ensemble l&apos;avenir de notre commune
        </p>
        <div className="w-full max-w-3xl mx-auto h-64 md:h-80 bg-primary-light/30 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/40">
          <p className="text-white/70 text-lg">📸 Photo de groupe de l&apos;équipe</p>
        </div>
        <p className="mt-6 text-lg text-green-100">
          Municipales 2026 — Versigny (02800)
        </p>
      </div>
    </section>
  );
}
