const board = [
  {
    name: "Adriana Palhares Baida",
    title: "President",
    initial: "A",
    color: "bg-cruz",
  },
  {
    name: "Paula Mescolin",
    title: "Vice President",
    initial: "P",
    color: "bg-amor",
  },
  {
    name: "Paula Barifouse",
    title: "Secretary",
    initial: "P",
    color: "bg-barro",
  },
  {
    name: "Tatiana Pellegrini",
    title: "Director",
    initial: "T",
    color: "bg-po",
  },
  {
    name: "Carol Sampaio",
    title: "Treasurer",
    initial: "C",
    color: "bg-liga",
  },
];

export default function OurPeople() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-cruz text-alma py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Our People</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The people behind the mission
          </h1>
          <p className="text-alma/70 text-lg leading-relaxed">
            Our board brings together heart, experience, and a shared calling to strengthen families through faith.
          </p>
        </div>
      </section>

      {/* Board */}
      <section className="bg-alma py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-3">Board of Directors</p>
            <h2 className="text-4xl font-bold text-cruz">Guided by purpose. Rooted in faith.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 text-center"
              >
                <div
                  className={`${member.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-alma text-3xl font-bold`}
                >
                  {member.initial}
                </div>
                <h3 className="text-lg font-bold text-cruz mb-1">{member.name}</h3>
                <p className="text-sm text-barro font-semibold tracking-wide uppercase">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="bg-pele/20 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-cruz mb-4">Want to walk with us?</h2>
          <p className="text-liga mb-8 leading-relaxed">
            Our volunteers and partners are the heartbeat of CAZA. If you feel called to serve, we would love to hear from you.
          </p>
          <a
            href="/walk-with-us"
            className="inline-block bg-amor text-alma px-8 py-4 rounded-full font-bold text-base hover:bg-teto transition-colors"
          >
            Walk With Us
          </a>
        </div>
      </section>
    </div>
  );
}
