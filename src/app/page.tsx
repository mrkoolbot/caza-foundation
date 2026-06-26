import Link from "next/link";

export default function Home() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-alma min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pele/10 via-alma to-alma pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-6">
            Faith · Family · Healing
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-cruz leading-tight mb-6">
            Every home is meant to be a
            <span className="text-amor"> sanctuary.</span>
          </h1>
          <p className="text-lg md:text-xl text-liga leading-relaxed mb-10 max-w-2xl mx-auto">
            CAZA walks with families through their hardest seasons — offering faith-rooted counseling, education, and support so every home becomes a place where each member feels safe, known, and whole.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/find-shelter"
              className="bg-amor text-alma px-8 py-4 rounded-full font-bold text-base hover:bg-teto transition-colors"
            >
              Find Shelter
            </Link>
            <Link
              href="/our-why"
              className="border-2 border-cruz text-cruz px-8 py-4 rounded-full font-bold text-base hover:bg-cruz hover:text-alma transition-colors"
            >
              Our Why
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="bg-cruz text-alma py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Our Mission</p>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-alma/90">
            "CAZA strengthens families through faith-rooted psychological, educational, and counseling support — so that every home becomes a place where each family member feels safe, known, and whole."
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-alma py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-3">Our Programs</p>
            <h2 className="text-4xl md:text-5xl font-bold text-cruz">How we walk with you</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Roots & Wings",
                tagline: "Grounded in faith, free to heal.",
                desc: "Faith-based counseling that meets families where they are — offering psychological support, healing conversations, and a safe space to grow.",
                href: "/our-programs#roots-and-wings",
                color: "bg-barro",
              },
              {
                name: "The Knowing House",
                tagline: "Where wisdom and faith meet at the family table.",
                desc: "Educational programs that nurture minds and strengthen family bonds — because learning together is one of the most powerful acts of love.",
                href: "/our-programs#the-knowing-house",
                color: "bg-cruz",
              },
              {
                name: "Homecoming",
                tagline: "Rebuilding lives, restoring faith, returning home.",
                desc: "Disaster recovery support that goes beyond logistics — addressing emotional wounds and restoring hope when crisis has shaken everything.",
                href: "/our-programs#homecoming",
                color: "bg-amor",
              },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`${p.color} h-2 w-full`} />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-cruz mb-2">{p.name}</h3>
                  <p className="text-sm text-barro italic mb-4">{p.tagline}</p>
                  <p className="text-sm text-liga leading-relaxed">{p.desc}</p>
                  <span className="inline-block mt-6 text-amor text-sm font-semibold group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-pele/20 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-4">Our Vision</p>
          <h2 className="text-3xl md:text-4xl font-bold text-cruz leading-relaxed">
            A community where every family is emotionally whole, spiritually grounded — and no one carries their pain alone.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-alma py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amor rounded-2xl p-10 text-alma text-center">
            <h3 className="text-2xl font-bold mb-3">Need support?</h3>
            <p className="text-alma/80 mb-6 text-sm leading-relaxed">
              You don't have to carry it alone. Reach out and let us walk with you.
            </p>
            <Link
              href="/find-shelter"
              className="inline-block bg-alma text-amor px-6 py-3 rounded-full font-bold text-sm hover:bg-pele transition-colors"
            >
              Find Shelter
            </Link>
          </div>
          <div className="bg-cruz rounded-2xl p-10 text-alma text-center">
            <h3 className="text-2xl font-bold mb-3">Want to help?</h3>
            <p className="text-alma/80 mb-6 text-sm leading-relaxed">
              Your generosity restores families. Every gift builds a stronger home.
            </p>
            <Link
              href="/give"
              className="inline-block bg-pele text-cruz px-6 py-3 rounded-full font-bold text-sm hover:bg-alma transition-colors"
            >
              Give Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
