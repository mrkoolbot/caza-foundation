"use client"

import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { SectionHeader } from "@/components/SectionHeader"
import { ProgramCard } from "@/components/ProgramCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-alma text-cruz selection:bg-amor selection:text-white font-quicksand">
      <Navbar />
      <Hero />

      {/* Marquee Ticker */}
      <section className="bg-amor py-5 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-alma font-bold text-sm tracking-[0.2em] uppercase shrink-0">
              faith · family · healing · we walk with you · rooted in love ·
            </span>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              label="our mission"
              title="we walk with families through their hardest seasons."
              className="mb-0"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-4 border-amor pl-8"
          >
            <p className="text-liga text-lg leading-relaxed mb-6">
              CAZA strengthens families through faith-rooted psychological, educational, and counseling support — so that every home becomes a place where each family member feels safe, known, and whole.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-amor font-bold text-sm hover:gap-4 transition-all">
              Learn our story <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-cruz">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <SectionHeader 
                label="our programs"
                title="Three ways we walk with you."
                className="mb-0"
              />
            </div>
            <Link href="/programs" className="text-pele text-sm font-bold hover:text-alma transition-colors self-end whitespace-nowrap">
              View all programs <span className="inline-block group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <ProgramCard 
              title="Roots & Wings"
              program="Faith-Based Counseling"
              description="Grounded in faith, free to heal."
              href="/programs/roots-wings"
              delay={0}
              className="lg:col-span-2 bg-alma/5"
              image="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800&q=80"
            />
             <ProgramCard 
              title="The Knowing House"
              program="Educational Support"
              description="Where wisdom and faith meet at the family table."
              href="/programs/knowing-house"
              delay={0.1}
              className="bg-alma/5"
              image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
            />
             <ProgramCard 
              title="Homecoming"
              program="Disaster Recovery"
              description="Rebuilding lives, restoring faith, returning home."
              href="/programs/homecoming"
              delay={0.2}
              className="md:col-span-2 lg:col-span-1 bg-alma/5"
              image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80"
            />
          </div>

          <div className="mt-10 sm:mt-16 md:mt-24 text-center">
            <Link 
              href="/programs"
              className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-bold text-pele/60 hover:text-pele transition-colors tracking-wide group"
            >
              explore all programs
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Full-Bleed Section */}
      <section className="relative py-40 px-6 lg:px-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1800&q=80"
          alt="Families"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teto/95 via-teto/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-pele text-xs font-bold tracking-[0.3em] uppercase block mb-6">our vision</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-alma leading-tight mb-8">
              no one carries
              <br />
              <span className="text-pele">their pain alone.</span>
            </h2>
            <p className="text-alma/70 text-lg leading-relaxed max-w-lg">
              A community where every family is emotionally whole and spiritually grounded — the bond between parent and child strengthened, and no one left behind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma border-t border-po/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "3", label: "Programs" },
            { value: "5", label: "Board Members" },
            { value: "1", label: "Mission" },
            { value: "∞", label: "Families" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-amor mb-2">{stat.value}</div>
              <div className="text-liga text-sm font-semibold tracking-widest uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Board Teaser */}
      <section className="bg-barro/10 py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          >
            <div>
              <span className="text-barro text-xs font-bold tracking-[0.3em] uppercase block mb-4">our people</span>
              <h2 className="text-3xl md:text-4xl font-bold text-cruz">Guided by purpose.<br /><span className="text-po">Rooted in faith.</span></h2>
            </div>
            <Link href="/board" className="text-amor text-sm font-bold hover:text-teto transition-colors self-end whitespace-nowrap">Meet the board →</Link>
          </motion.div>
          
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Adriana Palhares Baida", title: "President", color: "bg-cruz" },
              { name: "Paula Mescolin", title: "Vice President", color: "bg-amor" },
              { name: "Paula Barifouse", title: "Secretary", color: "bg-barro" },
              { name: "Tatiana Pellegrini", title: "Director", color: "bg-po" },
              { name: "Carol Sampaio", title: "Treasurer", color: "bg-liga" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 shadow-sm border border-po/10"
              >
                <div className={`${member.color} w-8 h-8 rounded-full flex items-center justify-center text-alma text-xs font-bold shrink-0`}>
                  {member.name[0]}
                </div>
                <div>
                  <p className="text-cruz text-sm font-bold leading-tight">{member.name}</p>
                  <p className="text-liga text-xs">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA Cards */}
      <section className="bg-alma py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Find Shelter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden min-h-[320px] flex items-end group"
          >
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&q=80" alt="Families" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-amor/95 via-amor/60 to-transparent" />
            <div className="relative z-10 p-8 md:p-10 w-full">
              <h3 className="text-3xl font-bold text-alma mb-2">Need support?</h3>
              <p className="text-alma/70 text-sm mb-6">You don't have to carry it alone.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-alma text-amor px-6 py-3 rounded-sm font-bold text-sm hover:bg-pele transition-colors">
                Find Shelter →
              </Link>
            </div>
          </motion.div>

          {/* Give */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative rounded-lg overflow-hidden min-h-[320px] flex items-end group"
          >
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80" alt="Giving" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-cruz/95 via-cruz/60 to-transparent" />
            <div className="relative z-10 p-8 md:p-10 w-full">
              <h3 className="text-3xl font-bold text-alma mb-2">Want to give?</h3>
              <p className="text-alma/70 text-sm mb-6">Every gift builds a stronger home.</p>
              <Link href="/give" className="inline-flex items-center gap-2 bg-pele text-cruz px-6 py-3 rounded-sm font-bold text-sm hover:bg-alma transition-colors">
                Give Now →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
