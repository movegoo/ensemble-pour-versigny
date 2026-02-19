const members = [
  { name: "Nathalie CARLIER", role: "Tête de liste" },
  { name: "Georges CHARALAMBOUS", role: "Candidat" },
  { name: "Emilie GAUTHIER", role: "Candidate" },
  { name: "Pascal CERVOISE", role: "Candidat" },
  { name: "Chloé ALLENE", role: "Candidate" },
  { name: "Thomas CERTEAUX", role: "Candidat" },
  { name: "Marine LESAGE", role: "Candidate" },
  { name: "Hervé VILLAIRE", role: "Candidat" },
  { name: "Adeline DOUCY", role: "Candidate" },
  { name: "Alain LAMARRE", role: "Candidat" },
  { name: "Lucie VERCAUTEREN", role: "Candidate" },
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-body font-semibold tracking-widest uppercase text-rose/60 mb-3">
            Candidats
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-dark">
            L&apos;équipe
          </h2>
          <p className="mt-4 text-dark/40 font-body text-base max-w-lg mx-auto">
            11 habitants engagés pour Versigny, portés par des valeurs
            de proximité et de transparence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div key={i} className="group text-center">
              <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br ${i === 0 ? "from-primary/10 to-primary/5 border-primary/20" : "from-primary/5 to-rose/5 border-gray-100"} border flex items-center justify-center text-3xl md:text-4xl mb-3 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 group-hover:-translate-y-1`}>
                <span className="font-heading font-bold text-primary/40 text-lg">
                  {member.name.split(" ")[0][0]}{member.name.split(" ")[1][0]}
                </span>
              </div>
              <h3 className={`font-heading text-dark text-sm ${i === 0 ? "font-bold" : "font-semibold"}`}>
                {member.name}
              </h3>
              <p className="text-xs text-dark/40 font-body mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
