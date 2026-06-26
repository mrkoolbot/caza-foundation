export default function OurWhy() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-cruz text-alma py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Our Why</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            We believe every family deserves to feel whole.
          </h1>
          <p className="text-alma/70 text-lg leading-relaxed">
            CAZA exists because no family should walk through pain alone. Faith, connection, and healing are not luxuries — they are the foundation of a life well lived.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-alma py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-4">Mission</p>
            <h2 className="text-3xl font-bold text-cruz mb-6">What we do</h2>
            <p className="text-liga leading-relaxed text-lg">
              CAZA strengthens families through faith-rooted psychological, educational, and counseling support and programs that structure and deepen the bonds holding a household together. We walk with families through their hardest seasons so that every home becomes a place where each family member feels safe, known, and whole.
            </p>
          </div>
          <div className="bg-pele/20 rounded-2xl p-10 border-l-4 border-amor">
            <p className="text-2xl font-medium text-cruz leading-relaxed italic">
              "We walk with families through their hardest seasons."
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-barro/10 py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-amor rounded-2xl p-10 text-alma">
            <p className="text-2xl font-medium leading-relaxed italic">
              "No one carries their pain alone."
            </p>
          </div>
          <div>
            <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-4">Vision</p>
            <h2 className="text-3xl font-bold text-cruz mb-6">What we're building toward</h2>
            <p className="text-liga leading-relaxed text-lg">
              A community where every family has each individual emotionally whole and spiritually grounded; the bond between spouse-parent and child is strengthened, and no one carries their pain alone.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-cruz text-alma py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Who We Serve</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
            For families carrying emotional and relational struggles
          </h2>
          <p className="text-alma/80 text-lg leading-relaxed max-w-3xl mx-auto">
            CAZA is a faith-based foundation that pairs psychological assistance and counseling care with programs built to strengthen the values and bonds within a home — healing inner wounds and the relationships around them so that faith, connection, and stability can promote growth and wellbeing.
          </p>
        </div>
      </section>
    </div>
  );
}
