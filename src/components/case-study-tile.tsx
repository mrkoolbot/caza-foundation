"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaseStudyTileProps {
  title: string
  client: string
  description: string
  href: string
  delay?: number
  className?: string
  image?: string
  tags?: string[]
  year?: string
}

export function CaseStudyTile({ 
  title, 
  client, 
  description, 
  href, 
  className, 
  image,
  tags,
  year
}: CaseStudyTileProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col h-full bg-white overflow-hidden",
        "border border-neutral-100 hover:border-neutral-200",
        "hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]",
        "transition-all duration-500",
        "rounded-lg sm:rounded-none",
        className
      )}
    >
      <Link href={href} className="flex flex-col h-full">
        {/* Image Container */}
        {image && (
          <div className="relative w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-neutral-100">
            <Image
              src={image}
              alt={title}
              fill
              className={cn(
                "object-cover transition-all duration-1000",
                "grayscale group-hover:grayscale-0",
                "group-hover:scale-105"
              )}
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Noise Texture */}
            <div 
              className="absolute inset-0 opacity-[0.06] transition-opacity duration-700 group-hover:opacity-0 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Year Badge */}
            {year && (
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <span className="px-2 py-1 sm:px-3 sm:py-1.5 bg-cruz/90 backdrop-blur-sm text-[10px] sm:text-xs font-bold lowercase tracking-widest text-white">
                  {year}
                </span>
              </div>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-5">
            <span className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.1em] sm:tracking-[0.15em] text-neutral-400">
              {client}
            </span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 group-hover:text-amor transition-colors duration-500" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cruz mb-3 sm:mb-4 leading-[1.1] group-hover:text-amor transition-colors duration-500 lowercase">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed mb-4 sm:mb-5 md:mb-6 lowercase line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
              {tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="text-[10px] sm:text-xs font-medium lowercase text-neutral-400 border-b border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-auto">
            <span className="inline-block text-xs sm:text-sm font-bold border-b-2 border-neutral-200 pb-1 group-hover:border-amor transition-colors duration-500 lowercase tracking-widest">
              read case study
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
