"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PortfolioItem } from "@/lib/portfolio-data"

interface FeaturedCaseStudyProps {
  item: PortfolioItem
  index?: number
  reversed?: boolean
}

export function FeaturedCaseStudy({ item, index = 0, reversed = false }: FeaturedCaseStudyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative"
    >
      <Link href={`/portfolio/${item.slug}`} className="block">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}>
          {/* Image */}
          <div className={`relative aspect-[4/3] overflow-hidden ${reversed ? "lg:col-start-2" : ""}`}>
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </motion.div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cruz/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Floating Tag */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-amor text-white text-xs font-bold lowercase tracking-widest">
                {item.client.focus}
              </span>
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
              <ArrowUpRight className="w-6 h-6 text-cruz" />
            </div>
          </div>

          {/* Content */}
          <motion.div 
            style={{ opacity: contentOpacity }}
            className={`space-y-6 ${reversed ? "lg:col-start-1" : ""}`}
          >
            {/* Index Number */}
            <span className="text-8xl lg:text-9xl font-bold text-neutral-100 leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Industry */}
            <span className="block text-xs font-bold lowercase tracking-[0.2em] text-neutral-400 -mt-12 relative">
              {item.client.industry}
            </span>

            {/* Title */}
            <h3 className="text-3xl lg:text-4xl font-bold text-cruz leading-[1.1] lowercase group-hover:text-amor transition-colors duration-500">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-lg text-neutral-500 leading-relaxed lowercase">
              {item.subtitle}
            </p>

            {/* Metrics */}
            {item.metrics && (
              <div className="flex gap-8 pt-4">
                {item.metrics.slice(0, 2).map((metric, i) => (
                  <div key={i}>
                    <span className="block text-3xl font-bold text-amor">{metric.value}</span>
                    <span className="text-xs font-medium lowercase tracking-widest text-neutral-400">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 text-sm font-bold lowercase tracking-widest text-cruz border-b-2 border-neutral-200 pb-1 group-hover:border-amor transition-colors duration-500">
                read case study
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
