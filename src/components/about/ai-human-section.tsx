"use client"

import { motion } from "framer-motion"

const pillars = [
  {
    num: "01",
    label: "AI-Powered Intelligence",
    title: "we move at the speed of data.",
    body: "Our human-led dream team includes top AI agents trained to quickly analyze brand landscapes, surface audience insights, identify narrative gaps, and accelerate research — compressing weeks of analysis into hours. The result: strategies built on signal, not assumption."
  },
  {
    num: "02",
    label: "human creative instinct",
    title: "we read what algorithms can't.",
    body: "Culture is felt before it's measured. Executive dynamics, room temperature, brand soul — these require a seasoned human eye. Our consultants bring decades of real boardroom, stage and studio experience that no model can replicate."
  },
  {
    num: "03",
    label: "live execution",
    title: "we deliver. in the room.",
    body: "Strategy without execution is just a document. We are there when the event runs, when the keynote lands, when the campaign goes live. We have skin in the outcome — and that changes everything."
  }
]

export function AIHumanSection() {
  return (
    <section className="py-24 sm:py-32 bg-cruz text-white overflow-hidden">
      {/* Intro */}
      <div className="px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-amor mb-5">
              <span className="lowercase">relevance in the age of </span><span style={{textTransform:'uppercase'}}>AI</span>
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight">
              <span style={{textTransform:'uppercase',color:'#DA0000'}}>AI</span> <span className="lowercase">moves fast.</span><br />
              <span className="lowercase">we move </span><span className="text-amor lowercase">smart.</span>
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-white/60 text-lg leading-relaxed font-light mb-6">
              Every brand in the world now has access to AI. The gap is no longer technology — it's the judgment to use it right, and the human intelligence to make it land.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              CAZA Foundation was built for exactly this moment. We are the bridge between what AI makes possible and what only humans can make real.
            </p>
            <p className="text-white font-semibold text-lg leading-relaxed mt-4">
              Our founder didn&apos;t survive the AI revolution. She hired it.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-white/8 mx-6 sm:mx-10 md:mx-16 mb-20" />

      {/* Three pillars */}
      <div className="px-6 sm:px-10 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-white/8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="px-0 md:px-10 first:pl-0 last:pr-0 py-10 md:py-0 border-t border-white/8 md:border-t-0 first:border-t-0"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-amor">{p.num}</span>
                <span className="text-[10px] font-bold tracking-[0.15em] text-white/30">{p.label}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-4 lowercase">{p.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm sm:text-base font-light">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pull quote */}
      <div className="px-6 sm:px-10 md:px-16 max-w-7xl mx-auto mt-24">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-2 border-amor pl-8 max-w-3xl"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight text-white lowercase">
            "we don't brainstorm.<br />
            <span className="text-amor">we brand-storm."</span>
          </p>
          <cite className="block mt-6 text-xs font-bold tracking-[0.2em] text-white/30 not-italic lowercase">
            — paula mescolin, founder · the koolture group
          </cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
