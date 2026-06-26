import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-quicksand">

      {/* Hero — full bleed B&W lifestyle */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* B&W photo — family embrace */}
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1800&q=80"
          alt="Family together"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-cruz/70" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-6">
            Faith · Family · Healing
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-alma leading-tight mb-6">
            Every home is meant to be a
            <span className="text-pele"> sanctuary.</span>
          </h1>
          <p className="text-lg md:text-xl text-alma/80 leading-relaxed mb-10 max-w-2xl mx-auto">
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
              className="border-2 border-alma text-alma px-8 py-4 rounded-full font-bold text-base hover:bg-alma hover:text-cruz transition-colors"
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

      {/* Programs with imagery */}
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
                img: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80",
                alt: "Family counseling session",
              },
              {
                name: "The Knowing House",
                tagline: "Where wisdom and faith meet at the family table.",
                desc: "Educational programs that nurture minds while strengthening family bonds — because learning together is one of the most profound acts of love.",
                href: "/our-programs#the-knowing-house",
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
                alt: "Parent and child learning together",
              },
              {
                name: "Homecoming",
                tagline: "Rebuilding lives, restoring faith, returning home.",
                desc: "Disaster recovery support that goes beyond logistics — addressing emotional wounds and restoring hope when crisis has shaken everything.",
                href: "/our-programs#homecoming",
                img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
                alt: "Community support and rebuilding",
              },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-cruz/30 group-hover:bg-cruz/20 transition-colors" />
                </div>
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

      {/* Full bleed B&W quote section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1800&q=80"
          alt="Family walking together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-teto/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-alma">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-6">Our Vision</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-relaxed">
            A community where every family is emotionally whole, spiritually grounded — and no one carries their pain alone.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-alma py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-2xl overflow-hidden min-h-[280px] flex items-end">
            <Image
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80"
              alt="Family seeking support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-amor/80" />
            <div className="relative z-10 p-10 text-alma">
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
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[280px] flex items-end">
            <Image
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
              alt="Giving and generosity"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-cruz/80" />
            <div className="relative z-10 p-10 text-alma">
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
        </div>
      </section>
    </div>
  );
}
