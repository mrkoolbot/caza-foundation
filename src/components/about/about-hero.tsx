"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-cruz">
      {/* Office video — full bleed */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/about-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay — text readable over video */}
        <div className="absolute inset-0 bg-gradient-to-t from-cruz via-cruz/60 to-obsidian/20" />
      </div>

      {/* Content — bottom aligned */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 pb-16 sm:pb-20 md:pb-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
            <span className="block text-xs font-bold tracking-[0.2em] text-amor mb-5 lowercase">
            the koolture group
          </span>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter leading-[1.05] text-white mb-4 max-w-4xl lowercase">
            built for the future. by pros. for pros.
          </h1>
          <p className="text-white/80 text-2xl sm:text-3xl font-bold mb-4 lowercase">
            not one more. <span className="text-amor">the one.</span>
          </p>
          <p className="text-white/60 text-lg sm:text-xl max-w-xl leading-relaxed font-light">
            strategy with soul. experience with edge.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
