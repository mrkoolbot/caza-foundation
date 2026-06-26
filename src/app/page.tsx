"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <div className="font-quicksand overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cruz">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85"
          alt="Family"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cruz/60 via-cruz/50 to-cruz" />

        {/* Decorative color bar — top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teto via-barro to-pele" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.2s" }}
          >
            <span className="w-8 h-px bg-pele" />
            <span className="text-pele text-xs font-bold tracking-[0.3em] uppercase">faith · family · healing</span>
            <span className="w-8 h-px bg-pele" />
          </div>

          {/* Headline — big & hierarchical */}
          <h1
            className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] font-bold text-alma leading-[0.95] tracking-tight mb-8"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease 0.4s" }}
          >
            every home is
            <br />
            <span className="text-pele italic">a sanctuary.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-alma/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease 0.6s" }}
          >
            CAZA walks with families through their hardest seasons — offering faith-rooted counseling, education, and support so every member feels safe, known, and whole.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ opacity: loaded ? 1 : 0, transition: "all 0.8s ease 0.8s" }}
          >
            <Link href="/find-shelter" className="group inline-flex items-center gap-2 bg-barro text-alma px-8 py-4 rounded-full font-bold text-base hover:bg-amor transition-all duration-300 hover:scale-105 shadow-lg shadow-barro/30">
              Find Shelter
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/give" className="inline-flex items-center gap-2 border-2 border-alma/40 text-alma px-8 py-4 rounded-full font-bold text-base hover:border-pele hover:text-pele transition-all duration-300">
              Give Now
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-alma text-xs tracking-widest uppercase">scroll</span>
          <div className="w-px h-12 bg-alma animate-pulse" />
        </div>
      </section>

      {/* ── MISSION TICKER ───────────────────────────────────── */}
      <section className="bg-amor py-5 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-alma font-bold text-sm tracking-[0.2em] uppercase shrink-0">
              faith · family · healing · we walk with you · rooted in love ·
            </span>
          ))}
        </div>
      </section>

      {/* ── MISSION STATEMENT ────────────────────────────────── */}
      <section className="bg-alma py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-barro text-xs font-bold tracking-[0.3em] uppercase block mb-4">our mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-cruz leading-tight">
              we walk with families
              <br />
              <span className="text-po">through their hardest</span>
              <br />
              seasons.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border-l-4 border-amor pl-8">
              <p className="text-liga text-lg leading-relaxed mb-6">
                CAZA strengthens families through faith-rooted psychological, educational, and counseling support — so that every home becomes a place where each family member feels safe, known, and whole.
              </p>
              <Link href="/our-why" className="inline-flex items-center gap-2 text-amor font-bold text-sm hover:gap-4 transition-all">
                Learn our why <span>→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className="bg-cruz py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-pele text-xs font-bold tracking-[0.3em] uppercase block mb-4">our programs</span>
              <h2 className="text-4xl md:text-5xl font-bold text-alma leading-tight">three ways<br />we walk with you</h2>
            </div>
            <Link href="/our-programs" className="text-pele text-sm font-bold hover:text-alma transition-colors self-end">
              View all programs →
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                name: "Roots & Wings",
                type: "Faith-Based Counseling",
                tagline: "Grounded in faith, free to heal.",
                img: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80",
                href: "/our-programs#roots-and-wings",
                accent: "bg-barro",
              },
              {
                num: "02",
                name: "The Knowing House",
                type: "Educational Support",
                tagline: "Where wisdom and faith meet at the family table.",
                img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
                href: "/our-programs#the-knowing-house",
                accent: "bg-po",
              },
              {
                num: "03",
                name: "Homecoming",
                type: "Disaster Recovery",
                tagline: "Rebuilding lives, restoring faith, returning home.",
                img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
                href: "/our-programs#homecoming",
                accent: "bg-pele",
              },
            ].map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.15}>
                <Link href={p.href} className="group block bg-alma/5 border border-alma/10 rounded-2xl overflow-hidden hover:bg-alma/10 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-cruz via-cruz/40 to-transparent" />
                    <span className="absolute top-4 left-4 text-5xl font-black text-alma/10">{p.num}</span>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 ${p.accent}`} />
                  </div>
                  <div className="p-7">
                    <span className="text-pele text-xs font-bold tracking-[0.2em] uppercase block mb-2">{p.type}</span>
                    <h3 className="text-xl font-bold text-alma mb-2">{p.name}</h3>
                    <p className="text-alma/50 text-sm italic mb-5">{p.tagline}</p>
                    <span className="text-pele text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all flex items-center gap-2">
                      Learn more <span className="group-hover:translate-x-2 transition-transform inline-block">→</span>
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION FULL BLEED ────────────────────────────────── */}
      <section className="relative py-40 px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1800&q=80"
          alt="Family together"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teto/95 via-teto/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn className="max-w-2xl">
            <span className="text-pele text-xs font-bold tracking-[0.3em] uppercase block mb-6">our vision</span>
            <h2 className="text-4xl md:text-6xl font-bold text-alma leading-tight mb-8">
              no one carries
              <br />
              <span className="text-pele">their pain alone.</span>
            </h2>
            <p className="text-alma/70 text-lg leading-relaxed">
              A community where every family is emotionally whole and spiritually grounded — the bond between parent and child strengthened, and no one left behind.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="bg-alma py-24 px-6 lg:px-12 border-t border-po/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3", label: "Core Programs" },
            { value: "5", label: "Board Members" },
            { value: "1", label: "Mission" },
            { value: "∞", label: "Families Served" },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="text-center">
              <div className="text-5xl md:text-6xl font-black text-amor mb-2">{s.value}</div>
              <div className="text-liga text-sm font-semibold tracking-widest uppercase">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── BOARD TEASER ─────────────────────────────────────── */}
      <section className="bg-barro/10 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-barro text-xs font-bold tracking-[0.3em] uppercase block mb-4">our people</span>
              <h2 className="text-4xl font-bold text-cruz">Guided by purpose.<br /><span className="text-po">Rooted in faith.</span></h2>
            </div>
            <Link href="/our-people" className="text-amor text-sm font-bold hover:text-teto transition-colors self-end">Meet the board →</Link>
          </FadeIn>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Adriana Palhares Baida", title: "President", color: "bg-cruz" },
              { name: "Paula Mescolin", title: "Vice President", color: "bg-amor" },
              { name: "Paula Barifouse", title: "Secretary", color: "bg-barro" },
              { name: "Tatiana Pellegrini", title: "Director", color: "bg-po" },
              { name: "Carol Sampaio", title: "Treasurer", color: "bg-liga" },
            ].map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.1}>
                <div className="flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 shadow-sm border border-po/10">
                  <div className={`${m.color} w-8 h-8 rounded-full flex items-center justify-center text-alma text-xs font-bold shrink-0`}>
                    {m.name[0]}
                  </div>
                  <div>
                    <p className="text-cruz text-sm font-bold leading-tight">{m.name}</p>
                    <p className="text-liga text-xs">{m.title}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ─────────────────────────────────────────── */}
      <section className="bg-alma py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Find Shelter */}
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-end group">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80" alt="Family" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-amor/95 via-amor/60 to-transparent" />
              <div className="relative z-10 p-10">
                <h3 className="text-3xl font-bold text-alma mb-2">Need support?</h3>
                <p className="text-alma/70 text-sm mb-6">You don't have to carry it alone.</p>
                <Link href="/find-shelter" className="inline-flex items-center gap-2 bg-alma text-amor px-6 py-3 rounded-full font-bold text-sm hover:bg-pele transition-colors">
                  Find Shelter →
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Give */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-end group">
              <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" alt="Giving" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-cruz/95 via-cruz/60 to-transparent" />
              <div className="relative z-10 p-10">
                <h3 className="text-3xl font-bold text-alma mb-2">Want to give?</h3>
                <p className="text-alma/70 text-sm mb-6">Every gift builds a stronger home.</p>
                <Link href="/give" className="inline-flex items-center gap-2 bg-pele text-cruz px-6 py-3 rounded-full font-bold text-sm hover:bg-alma transition-colors">
                  Give Now →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
