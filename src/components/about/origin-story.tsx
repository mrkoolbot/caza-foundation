"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function OriginStory() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-alma text-cruz">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-quicksand font-medium leading-[1.05] mb-8">
            nurtured in boardrooms, ballrooms, production floors and backstages.
          </h2>
          <div className="space-y-6 text-lg sm:text-xl font-light leading-relaxed text-neutral-800">
            <p>
              CAZA Foundation was born after years of managing the thrilling challenges between vision and execution.
            </p>
            <p>
              Our founder, Paula Mescolin, scaled enterprise revenues from $215M to $800M+ in three years and led brand transformations across 115 locations, five countries, and three languages. Brazilian by origin, trilingual by necessity, multicultural by instinct — she brings a cross-hemispheric intelligence that mono-cultural agencies simply cannot replicate.
            </p>
            <p>
              She saw the same pattern repeat: brilliant leaders, strong products, great intentions… and a brand story that needed a mix of audacity and creativity to land where it needed to.
            </p>
            <p className="font-medium text-cruz pt-4 border-t border-neutral-200">
              CAZA Foundation exists to close that gap — between brand positioning and perception.
            </p>
          </div>
          
          <div className="mt-10">
            <a href="/solutions" className="inline-flex items-center text-sm font-medium tracking-wide lowercase border-b border-cruz pb-1 hover:text-amor hover:border-amor transition-colors">
              see what we do
            </a>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative aspect-[4/5] bg-neutral-100 overflow-hidden"
        >
           <Image 
             src="/tkg-boardroom.webp" 
             alt="CAZA Foundation — built in boardrooms, production floors and green rooms" 
             fill
             className="object-cover object-center"
           />
        </motion.div>
      </div>
    </section>
  )
}
