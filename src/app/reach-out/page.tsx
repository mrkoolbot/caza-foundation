export default function ReachOut() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-cruz text-alma py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-4">Reach Out</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Every conversation starts with hello.
          </h1>
          <p className="text-alma/70 text-lg leading-relaxed">
            Whether you are a family seeking support, a partner organization, a donor, or someone who simply wants to know more — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-alma py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold text-cruz mb-8">Get in touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-amor w-12 h-12 rounded-full flex items-center justify-center text-alma text-lg shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-sm font-semibold text-barro tracking-widest uppercase mb-1">Phone</p>
                  <a href="tel:7542158201" className="text-xl font-bold text-cruz hover:text-amor transition-colors">
                    (754) 215-8201
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-barro w-12 h-12 rounded-full flex items-center justify-center text-alma text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold text-barro tracking-widest uppercase mb-1">Email</p>
                  <a
                    href="mailto:contact@cazafoundationinc.org"
                    className="text-xl font-bold text-cruz hover:text-amor transition-colors break-all"
                  >
                    contact@cazafoundationinc.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-cruz w-12 h-12 rounded-full flex items-center justify-center text-alma text-lg shrink-0">
                  🌐
                </div>
                <div>
                  <p className="text-sm font-semibold text-barro tracking-widest uppercase mb-1">Website</p>
                  <p className="text-xl font-bold text-cruz">cazafoundationinc.org</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-pele/20 rounded-2xl p-8 border-l-4 border-amor">
              <p className="text-liga text-sm leading-relaxed italic">
                "We walk with families through their hardest seasons so that every home becomes a place where each family member feels safe, known, and whole."
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-cruz mb-8">Send us a message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor bg-white"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor bg-white"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor bg-white"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor bg-white"
              />
              <select className="w-full border border-po/30 rounded-xl px-5 py-4 text-liga focus:outline-none focus:border-amor bg-white">
                <option value="">How can we help?</option>
                <option>I'm a family seeking support</option>
                <option>I want to volunteer</option>
                <option>I want to donate</option>
                <option>I represent a partner organization</option>
                <option>Media or press inquiry</option>
                <option>Other</option>
              </select>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full border border-po/30 rounded-xl px-5 py-4 text-cruz placeholder:text-liga/50 focus:outline-none focus:border-amor resize-none bg-white"
              />
              <button
                type="submit"
                className="w-full bg-amor text-alma font-bold py-4 rounded-full hover:bg-teto transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
