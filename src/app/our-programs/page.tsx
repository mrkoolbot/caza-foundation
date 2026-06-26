import Link from "next/link";

const programs = [
  {
    id: "roots-and-wings",
    name: "Roots & Wings",
    tagline: "Grounded in faith, free to heal.",
    type: "Faith-Based Counseling",
    color: "bg-barro",
    textColor: "text-barro",
    borderColor: "border-barro",
    description:
      "Roots & Wings offers faith-centered counseling and psychological support for individuals and families navigating emotional pain, relational strain, and life's hardest chapters. We believe healing happens when we are held — by God, by family, and by community.",
    offerings: [
      "Individual counseling sessions",
      "Couples and marriage counseling",
      "Family therapy",
      "Faith-integrated psychological support",
      "Crisis intervention and stabilization",
    ],
  },
  {
    id: "the-knowing-house",
    name: "The Knowing House",
    tagline: "Where wisdom and faith meet at the family table.",
    type: "Educational Support",
    color: "bg-cruz",
    textColor: "text-cruz",
    borderColor: "border-cruz",
    description:
      "The Knowing House provides educational programs and resources that nurture minds while strengthening family bonds. We believe learning together is one of the most profound acts of love a family can share — and that wisdom rooted in faith grows into lasting strength.",
    offerings: [
      "Family literacy and learning programs",
      "Parenting workshops and skill-building",
      "Youth development and mentorship",
      "Faith-based life skills training",
      "Community learning events",
    ],
  },
  {
    id: "homecoming",
    name: "Homecoming",
    tagline: "Rebuilding lives, restoring faith, returning home.",
    type: "Disaster Recovery Support",
    color: "bg-amor",
    textColor: "text-amor",
    borderColor: "border-amor",
    description:
      "Homecoming walks alongside families after disaster has shaken everything. We go beyond logistics — addressing emotional wounds, restoring spiritual grounding, and helping families rebuild not just what was lost, but who they are on the other side of crisis.",
    offerings: [
      "Emergency emotional and psychological support",
      "Faith-based trauma counseling",
      "Family stabilization and recovery planning",
      "Community solidarity programs",
      "Long-term rebuilding and follow-up care",
    ],
  },
];

export default function OurPrograms() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-alma py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-4">Our Programs</p>
          <h1 className="text-5xl md:text-6xl font-bold text-cruz leading-tight mb-6">
            Three ways we walk with you
          </h1>
          <p className="text-liga text-lg leading-relaxed">
            Every program is rooted in faith, shaped by compassion, and designed to meet families exactly where they are.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          {programs.map((p, i) => (
            <div
              key={p.id}
              id={p.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`${p.color} rounded-2xl p-12 text-alma flex flex-col justify-center ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                <p className="text-alma/60 text-xs font-semibold tracking-widest uppercase mb-3">{p.type}</p>
                <h2 className="text-3xl font-bold mb-3">{p.name}</h2>
                <p className="text-alma/80 italic text-lg">{p.tagline}</p>
              </div>
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${p.textColor}`}>{p.type}</p>
                <h3 className="text-2xl font-bold text-cruz mb-4">{p.name}</h3>
                <p className="text-liga leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-2">
                  {p.offerings.map((o) => (
                    <li key={o} className={`flex items-start gap-3 text-sm text-liga`}>
                      <span className={`mt-1 w-2 h-2 rounded-full ${p.color} shrink-0`} />
                      {o}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/find-shelter"
                  className={`inline-block mt-8 border-2 ${p.borderColor} ${p.textColor} px-6 py-3 rounded-full font-bold text-sm hover:text-alma transition-colors hover:${p.color}`}
                >
                  Request Support →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-alma py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-cruz mb-4">Not sure where to start?</h2>
          <p className="text-liga mb-8">Reach out and we will walk with you to find the right path forward.</p>
          <Link
            href="/reach-out"
            className="inline-block bg-amor text-alma px-8 py-4 rounded-full font-bold text-base hover:bg-teto transition-colors"
          >
            Reach Out
          </Link>
        </div>
      </section>
    </div>
  );
}
