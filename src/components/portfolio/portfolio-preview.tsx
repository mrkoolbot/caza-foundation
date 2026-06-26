"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { portfolioItems, getFeaturedPortfolio } from "@/lib/portfolio-data"
import { FeaturedCaseStudy } from "./featured-case-study"

interface PortfolioPreviewProps {
  showFeatured?: boolean
  limit?: number
}

export function PortfolioPreview({ showFeatured = true, limit = 3 }: PortfolioPreviewProps) {
  const items = showFeatured 
    ? getFeaturedPortfolio().slice(0, limit)
    : portfolioItems.slice(0, limit)

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-alma">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="block text-amor font-bold tracking-[0.3em] text-xs lowercase mb-4"
            >
              from noise to narrative
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-cruz leading-[1.1] lowercase max-w-3xl"
            >
              when the story gets clear, the results follow.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold lowercase tracking-widest text-neutral-500 hover:text-amor transition-colors duration-300"
            >
              explore all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-neutral-500 leading-relaxed lowercase max-w-3xl mb-16 md:mb-24"
        >
          our work happens quietly behind the scenes — on stages, in boardrooms, on production floors and inside group chats. the outcomes speak for themselves.
        </motion.p>

        {/* Featured Cases */}
        <div className="space-y-24 md:space-y-32">
          {items.map((item, index) => (
            <FeaturedCaseStudy
              key={item.slug}
              item={item}
              index={index}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24 md:mt-32 pt-16 border-t border-neutral-100"
        >
          <p className="text-xl text-neutral-500 lowercase mb-8">
            want a similar transformation? let's start with a conversation.
          </p>
          
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-cruz text-white px-8 py-4 font-bold lowercase tracking-widest text-sm hover:bg-amor transition-all duration-500"
          >
            book a strategy call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
