const members = [
  { name: "Nom Prénom", role: "Tête de liste", placeholder: "👩" },
  { name: "Nom Prénom", role: "Adjoint(e)", placeholder: "👨" },
  { name: "Nom Prénom", role: "Conseiller(ère)", placeholder: "👩" },
  { name: "Nom Prénom", role: "Conseiller(ère)", placeholder: "👨" },
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
            Des habitants engagés pour leur village, portés par des valeurs
            de proximité et de transparence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-2xl bg-gradient-to-br from-primary/5 to-rose/5 border border-gray-100 flex items-center justify-center text-5xl mb-4 group-hover:shadow-lg group-hover:border-primary/20 transition-all duration-300 group-hover:-translate-y-1">
                {member.placeholder}
              </div>
              <h3 className="font-heading font-semibold text-dark text-sm">{member.name}</h3>
              <p className="text-xs text-dark/40 font-body mt-0.5">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
