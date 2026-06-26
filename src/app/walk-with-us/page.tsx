import Link from "next/link";

const ways = [
  {
    title: "Be a Counseling Support Volunteer",
    desc: "Assist our licensed counselors by providing administrative support, creating safe spaces, and helping families navigate our intake process.",
    icon: "🤝",
  },
  {
    title: "Teach in The Knowing House",
    desc: "Share your knowledge and skills through our educational programs. Whether you're an educator, professional, or simply someone who loves to teach — there's a seat for you at the table.",
    icon: "📖",
  },
  {
    title: "Join the Homecoming Response Team",
    desc: "When disaster strikes families in our community, our response team is first on the ground. Be the presence that says: you are not alone.",
    icon: "🏠",
  },
  {
    title: "Pray With Us",
    desc: "Join our intercessory prayer community. Faith is the foundation of everything we do — and your prayers are powerful.",
    icon: "🙏",
  },
  {
    title: "Spread the Word",
    desc: "Know a family that needs support? Know a community that needs CAZA? Help us reach every home that is waiting for hope.",
    icon: "💬",
  },
];

export default function WalkWithUs() {
  return (
    <div className="font-quicksand">
      {/* Hero */}
      <section className="bg-alma py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-barro text-sm font-semibold tracking-widest uppercase mb-4">Walk With Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-cruz leading-tight mb-6">
            You were made to give.
          </h1>
          <p className="text-liga text-lg leading-relaxed">
            Volunteering with CAZA is not just service — it is ministry. When you walk with us, you walk alongside families who are rebuilding hope, one day at a time.
          </p>
        </div>
      </section>

      {/* Ways to Volunteer */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cruz">Ways to serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((w) => (
              <div key={w.title} className="bg-alma rounded-2xl p-8 flex gap-5 items-start">
                <span className="text-4xl shrink-0">{w.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-cruz mb-2">{w.title}</h3>
                  <p className="text-liga text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="bg-cruz text-alma py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pele text-sm font-semibold tracking-widest uppercase mb-3">Get Involved</p>
            <h2 className="text-4xl font-bold mb-4">Ready to walk with us?</h2>
            <p className="text-alma/70">Fill out the form below and we will reach out to connect you with the right opportunity.</p>
          </div>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First name"
                className="w-full bg-alma/10 border border-alma/20 rounded-xl px-5 py-4 text-alma placeholder:text-alma/40 focus:outline-none focus:border-pele"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full bg-alma/10 border border-alma/20 rounded-xl px-5 py-4 text-alma placeholder:text-alma/40 focus:outline-none focus:border-pele"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-alma/10 border border-alma/20 rounded-xl px-5 py-4 text-alma placeholder:text-alma/40 focus:outline-none focus:border-pele"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full bg-alma/10 border border-alma/20 rounded-xl px-5 py-4 text-alma placeholder:text-alma/40 focus:outline-none focus:border-pele"
            />
            <select className="w-full bg-alma/10 border border-alma/20 rounded-xl px-5 py-4 text-alma/70 focus:outline-none focus:border-pele">
              <option value="">How would you like to serve?</option>
              <option>Counseling Support Volunteer</option>
              <option>Teach in The Knowing House</option>
              <option>Homecoming Response Team</option>
              <option>Prayer Community</option>
              <option>Community Outreach</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us a little about yourself and why you feel called to serve..."
              className="w-full bg-alma/10 border border-alma/20 rounded-xl px-5 py-4 text-alma placeholder:text-alma/40 focus:outline-none focus:border-pele resize-none"
            />
            <button
              type="submit"
              className="w-full bg-pele text-cruz font-bold py-4 rounded-full hover:bg-alma transition-colors"
            >
              I Want to Walk With You
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
