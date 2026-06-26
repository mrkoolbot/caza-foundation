"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const featured = [
  {
    quote: "Paula did it again! Every project she delivers makes me wonder what she will do next.",
    name: null,
    title: "President & CEO",
    industry: "Printing Industry",
  },
  {
    quote: "I witnessed Paula's vision significantly increase brands' ROI.",
    name: "Bill Boyce",
    title: "President",
    industry: "UBM",
  },
  {
    quote: "Paula's creativity is unseen. Branding at its finest.",
    name: "Kim Waltz",
    title: "VP, Senior Relationship Management & Postal Liaison",
    industry: "FSSI",
  },
  {
    quote: "The events TKG plans are one of a kind. Our guests still talk about it.",
    name: "Mauricio Sobral",
    title: "Founder",
    industry: "RememBR Store",
  },
]

export function SocialProof() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-alma text-cruz border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl font-medium mb-16 sm:mb-20 lowercase text-neutral-400 text-center"
        >
          quietly behind some very loud brands.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {featured.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-50 border border-neutral-100 p-8 sm:p-10 rounded-sm"
            >
              <p className="text-cruz text-lg sm:text-xl font-medium italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-neutral-200 pt-4">
                {t.name && <p className="font-bold text-cruz text-sm lowercase">{t.name}</p>}
                <p className="text-amor text-xs font-medium tracking-wide mt-1">{t.title}</p>
                <p className="text-neutral-400 text-xs mt-0.5">{t.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium lowercase border-b border-neutral-300 pb-1 hover:border-amor hover:text-amor transition-colors"
          >
            read all testimonials →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
