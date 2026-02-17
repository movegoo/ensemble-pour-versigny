const members = [
  { name: "Nom Prénom", role: "Tête de liste", placeholder: "👩" },
  { name: "Nom Prénom", role: "Adjoint(e)", placeholder: "👨" },
  { name: "Nom Prénom", role: "Conseiller(ère)", placeholder: "👩" },
  { name: "Nom Prénom", role: "Conseiller(ère)", placeholder: "👨" },
];

export default function Team() {
  return (
    <section id="equipe" className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-heading font-800 text-2xl md:text-3xl text-dark">
            L&apos;équipe
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-gradient-to-r from-primary to-rose rounded-full" />
          <p className="mt-4 text-gray-500 text-sm font-body font-light max-w-xl mx-auto">
            Des habitants engagés pour leur village, portés par des valeurs
            de proximité et de transparence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div key={i} className="text-center group">
              <div className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full flex items-center justify-center text-4xl md:text-5xl mb-3 bg-gradient-to-br from-primary-50 to-rose-50 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 group-hover:shadow-lg">
                {member.placeholder}
              </div>
              <h3 className="font-heading font-bold text-dark text-sm">{member.name}</h3>
              <p className="text-xs text-gray-400 font-body font-light">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
