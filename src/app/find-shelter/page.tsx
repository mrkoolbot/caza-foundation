

export default function FindShelter() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="relative py-28 px-6 text-center overflow-hidden min-h-[60vh] flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?w=1800&q=80" alt="Person seeking shelter and comfort" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-alma/85" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-4">Find Shelter</p>
          <h1 className="text-5xl md:text-6xl font-bold text-cruz leading-tight mb-6">
            You don't have to carry this alone.
          </h1>
          <p className="text-liga text-lg leading-relaxed">
            Whatever your family is facing — emotional pain, relational struggle, or the aftermath of crisis — CAZA is here. Take the first step. We will walk the rest with you.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cruz text-center mb-12">What happens when you reach out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "You contact us",
                desc: "Fill out the form below or call us. There's no judgment — only a warm welcome.",
              },
              {
                step: "02",
                title: "We listen first",
                desc: "A CAZA team member will reach out within 48 hours to understand your situation and your needs.",
              },
              {
                step: "03",
                title: "We walk together",
                desc: "We connect you with the right program, counselor, or resource — and stay with you through the journey.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <p className="text-5xl font-bold text-pele/40 mb-3">{s.step}</p>
                <h3 className="text-lg font-bold text-cruz mb-2">{s.title}</h3>
                <p className="text-liga text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-barro/10 py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-3">Request Support</p>
            <h2 className="text-4xl font-bold text-cruz mb-4">Tell us how we can help</h2>
            <p className="text-liga">All information shared is held in strict confidence.</p>
          </div>

          <form className="space-y-5 bg-white rounded-2xl p-10 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor"
            />
            <select className="w-full border border-po/30 rounded-xl px-5 py-4 text-liga focus:outline-none focus:border-amor">
              <option value="">What kind of support are you looking for?</option>
              <option>Faith-Based Counseling (Roots & Wings)</option>
              <option>Educational Support (The Knowing House)</option>
              <option>Disaster Recovery (Homecoming)</option>
              <option>I'm not sure — I just need help</option>
            </select>
            <select className="w-full border border-po/30 rounded-xl px-5 py-4 text-liga focus:outline-none focus:border-amor">
              <option value="">Family size</option>
              <option>Just me (individual)</option>
              <option>Couple</option>
              <option>Family with children</option>
              <option>Single parent household</option>
              <option>Prefer not to say</option>
            </select>
            <textarea
              rows={5}
              placeholder="Share as much or as little as you're comfortable with. What is your family going through?"
              className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor resize-none"
            />
            <p className="text-xs text-liga/60">
              By submitting this form, you agree that your information will be kept confidential and used only to connect you with CAZA support services.
            </p>
            <button
              type="submit"
              className="w-full bg-amor text-alma font-bold py-4 rounded-full hover:bg-teto transition-colors"
            >
              I'm Ready to Find Shelter
            </button>
          </form>
        </div>
      </section>

      {/* Immediate Help */}
      <section className="bg-cruz text-alma py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Need immediate support?</p>
          <h2 className="text-3xl font-bold mb-4">Call us directly</h2>
          <a
            href="tel:7542158201"
            className="text-4xl font-bold text-pele hover:text-alma transition-colors"
          >
            (754) 215-8201
          </a>
          <p className="text-alma/50 text-sm mt-4">
            Or email us at{" "}
            <a href="mailto:contact@cazafoundationinc.org" className="text-pele hover:underline">
              contact@cazafoundationinc.org
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
