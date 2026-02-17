const members = [
  { name: "Marie Dupont", role: "Tête de liste", placeholder: "👩" },
  { name: "Jean Martin", role: "Adjoint", placeholder: "👨" },
  { name: "Sophie Bernard", role: "Conseillère", placeholder: "👩" },
  { name: "Pierre Leroy", role: "Conseiller", placeholder: "👨" },
];

export default function Team() {
  return (
    <section id="equipe" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">
          L&apos;équipe
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Des habitants engagés pour leur commune, portés par des valeurs de proximité et de transparence.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-28 h-28 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-5xl mb-4">
                {member.placeholder}
              </div>
              <h3 className="font-bold text-dark">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
