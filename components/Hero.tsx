export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark">
      {/* Background gradient mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-rose/20 blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-primary-light/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-body tracking-widest uppercase">
          Élections municipales 2026 — Versigny (02800)
        </div>

        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
          Pour un village
          <br />
          <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
            dynamique
          </span>
        </h1>

        <p className="font-body text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Ensemble, construisons un avenir durable, solidaire et citoyen pour notre commune.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#propositions"
            className="px-8 py-3 bg-primary text-white font-body font-medium text-sm rounded-full hover:bg-primary-light transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Nos propositions
          </a>
          <a
            href="#equipe"
            className="px-8 py-3 border border-white/20 text-white font-body font-medium text-sm rounded-full hover:bg-white/10 transition-all duration-300"
          >
            L&apos;équipe
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
