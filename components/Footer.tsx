export default function Footer() {
  return (
    <footer id="contact">
      {/* CTA section */}
      <div className="relative py-24 overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <div className="absolute top-[-30%] left-[10%] w-[40%] h-[80%] rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute bottom-[-30%] right-[10%] w-[35%] h-[70%] rounded-full bg-rose/10 blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <p className="text-white/40 text-xs font-body tracking-widest uppercase mb-4">
            Retrouvez-nous en ligne
          </p>
          <p className="text-4xl md:text-6xl font-heading font-bold text-white">
            pourunvillage
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              dynamique
            </span>
            .fr
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@pourunvillagedynamique.fr"
              className="inline-block px-8 py-3 border border-white/15 text-white/70 font-body text-sm rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-dark border-t border-white/5 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] font-body text-white/25">
          <p>© 2026 Pour un village dynamique — Versigny (02800)</p>
          <p>Liste citoyenne pour les élections municipales</p>
        </div>
      </div>
    </footer>
  );
}
