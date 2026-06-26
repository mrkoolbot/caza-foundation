"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioCardProps {
  item: PortfolioItem
  index: number
  variant?: "default" | "featured" | "compact"
  className?: string
}

export function PortfolioCard({ 
  item, 
  index, 
  variant = "default",
  className 
}: PortfolioCardProps) {
  const isFeatured = variant === "featured"
  const isCompact = variant === "compact"

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={cn(
        "group relative",
        isFeatured && "md:col-span-2 md:row-span-2",
        className
      )}
    >
      <Link 
        href={`/portfolio/${item.slug}`}
        className="block h-full"
      >
        <div className={cn(
          "relative h-full bg-white overflow-hidden transition-all duration-700",
          "border border-neutral-100 hover:border-neutral-200",
          "hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]",
          isFeatured ? "flex flex-col lg:flex-row" : "flex flex-col"
        )}>
          {/* Image Container */}
          <div className={cn(
            "relative overflow-hidden bg-neutral-50",
            isFeatured 
              ? "h-48 sm:h-64 md:h-80 lg:h-auto lg:w-1/2" 
              : isCompact 
                ? "h-40 sm:h-48" 
                : "h-44 sm:h-56 md:h-64 lg:h-72"
          )}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className={cn(
                "object-cover transition-all duration-1000",
                "grayscale group-hover:grayscale-0",
                "group-hover:scale-105"
              )}
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Noise Texture Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] transition-opacity duration-700 group-hover:opacity-0 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Tags */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2">
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold lowercase tracking-widest text-cruz">
                {item.client.focus}
              </span>
              {item.year && (
                <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-cruz/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold lowercase tracking-widest text-white">
                  {item.year}
                </span>
              )}
            </div>

            {/* Hover Arrow */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-cruz" />
            </div>
          </div>

          {/* Content */}
          <div className={cn(
            "flex flex-col flex-grow",
            isFeatured ? "lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-12" : "p-4 sm:p-6 md:p-8"
          )}>
            {/* Industry Label */}
            <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
              <span className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400">
                {item.client.industry}
              </span>
              {!isFeatured && (
                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-300 group-hover:text-amor transition-colors duration-500" />
              )}
            </div>

            {/* Title */}
            <h3 className={cn(
              "font-bold text-cruz mb-2 sm:mb-3 md:mb-4 leading-[1.1] lowercase transition-colors duration-500 group-hover:text-amor",
              isFeatured ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl" : isCompact ? "text-base sm:text-lg md:text-xl" : "text-lg sm:text-xl md:text-2xl"
            )}>
              {item.title}
            </h3>

            {/* Description */}
            <p className={cn(
              "text-neutral-500 leading-relaxed lowercase mb-4 sm:mb-5 md:mb-6",
              isFeatured ? "text-sm sm:text-base md:text-lg" : isCompact ? "text-xs sm:text-sm line-clamp-2" : "text-sm sm:text-base line-clamp-3"
            )}>
              {item.subtitle}
            </p>

            {/* Metrics Preview (Featured Only) */}
            {isFeatured && item.metrics && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-5 sm:mb-6 md:mb-8 pt-4 sm:pt-5 md:pt-6 border-t border-neutral-100">
                {item.metrics.slice(0, 3).map((metric, i) => (
                  <div key={i}>
                    <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amor mb-0.5 sm:mb-1">
                      {metric.value}
                    </span>
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-medium lowercase tracking-widest text-neutral-400">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
              {item.tags.slice(0, isFeatured ? 4 : 2).map((tag) => (
                <span 
                  key={tag}
                  className="text-[10px] sm:text-xs font-medium lowercase text-neutral-400 border-b border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-4 sm:mt-5 md:mt-6">
              <span className={cn(
                "inline-flex items-center gap-2 text-xs sm:text-sm font-bold lowercase tracking-widest",
                "border-b-2 border-neutral-200 pb-1",
                "group-hover:border-amor transition-colors duration-500"
              )}>
                read case study
                {isFeatured && <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
