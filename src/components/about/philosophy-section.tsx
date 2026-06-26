"use client"

import { motion } from "framer-motion"

const beliefs = [
  "brands are built in the micro-moments, not just campaigns.",
  "if the story doesn't move the people inside, it won't move the market outside.",
  "strategy without language is just a document; language turns strategy into action.",
  "the best work happens when we can tell you the truth — kindly and directly."
]

export function PhilosophySection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-neutral-50 text-cruz">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-medium mb-16 sm:mb-24 text-neutral-400 lowercase"
        >
          what we believe.
        </motion.h2>

        <div className="space-y-16 sm:space-y-24">
          {beliefs.map((belief, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-quicksand font-medium leading-[1.05] text-balance">
                "{belief}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
