const members = [
  { name: "Nom Prénom", role: "Tête de liste", placeholder: "👩" },
  { name: "Nom Prénom", role: "Adjoint(e)", placeholder: "👨" },
  { name: "Nom Prénom", role: "Conseiller(ère)", placeholder: "👩" },
  { name: "Nom Prénom", role: "Conseiller(ère)", placeholder: "👨" },
];

export default function Team() {
  return (
    <section id="equipe" className="py-8 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-primary text-white text-center py-2 mb-6">
          <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">
            L&apos;équipe
          </h2>
        </div>
        <p className="text-center text-gray-500 mb-8 text-sm max-w-2xl mx-auto">
          Des habitants engagés pour leur village, portés par des valeurs de proximité et de transparence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div key={i} className="text-center">
              <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-4xl mb-3">
                {member.placeholder}
              </div>
              <h3 className="font-bold text-dark text-sm">{member.name}</h3>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
