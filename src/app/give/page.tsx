export default function Give() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-amor text-alma py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Give</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your generosity builds homes.
          </h1>
          <p className="text-alma/80 text-lg leading-relaxed">
            Every gift to CAZA Foundation goes directly to supporting families in need — funding counseling, education, and disaster recovery programs that restore lives and strengthen communities.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-alma py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cruz">Your gift in action</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { amount: "$25", impact: "Provides one family with educational materials for a month" },
              { amount: "$75", impact: "Funds a counseling session for a family in crisis" },
              { amount: "$150", impact: "Supports a family through one week of disaster recovery care" },
            ].map((item) => (
              <div key={item.amount} className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-4xl font-bold text-amor mb-3">{item.amount}</p>
                <p className="text-liga text-sm leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zelle Instructions */}
      <section className="bg-cruz text-alma py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">How to Give</p>
          <h2 className="text-4xl font-bold mb-6">Send your gift via Zelle</h2>
          <p className="text-alma/70 leading-relaxed mb-10">
            We accept donations through Zelle — simple, direct, and secure. 100% of your gift goes to supporting families.
          </p>

          <div className="bg-alma/10 border border-alma/20 rounded-2xl p-10 text-left space-y-6">
            <div>
              <p className="text-pele text-xs font-semibold tracking-widest uppercase mb-2">Step 1</p>
              <p className="text-alma font-semibold">Open your bank app or Zelle app</p>
              <p className="text-alma/60 text-sm">Most major banks include Zelle — Chase, Bank of America, Wells Fargo, and more.</p>
            </div>
            <div>
              <p className="text-pele text-xs font-semibold tracking-widest uppercase mb-2">Step 2</p>
              <p className="text-alma font-semibold">Search for CAZA Foundation</p>
              <p className="text-alma/60 text-sm">Send to:</p>
              <p className="text-pele font-bold text-lg mt-1">contact@cazafoundationinc.org</p>
            </div>
            <div>
              <p className="text-pele text-xs font-semibold tracking-widest uppercase mb-2">Step 3</p>
              <p className="text-alma font-semibold">Include your name in the memo</p>
              <p className="text-alma/60 text-sm">So we can acknowledge your generous gift and keep records for your donation receipt.</p>
            </div>
          </div>

          <p className="text-alma/40 text-sm mt-8">
            Questions? Email us at{" "}
            <a href="mailto:contact@cazafoundationinc.org" className="text-pele hover:underline">
              contact@cazafoundationinc.org
            </a>
          </p>
        </div>
      </section>

      {/* Other Ways */}
      <section className="bg-pele/20 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-cruz mb-4">Other ways to support CAZA</h2>
          <p className="text-liga mb-8 leading-relaxed">
            Not just financially — your time, your network, and your prayers matter deeply to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/walk-with-us"
              className="inline-block border-2 border-cruz text-cruz px-6 py-3 rounded-full font-bold text-sm hover:bg-cruz hover:text-alma transition-colors"
            >
              Volunteer
            </a>
            <a
              href="/reach-out"
              className="inline-block bg-amor text-alma px-6 py-3 rounded-full font-bold text-sm hover:bg-teto transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
