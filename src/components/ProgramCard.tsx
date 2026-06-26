"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgramCardProps {
  title: string
  program: string
  description: string
  href: string
  delay?: number
  className?: string
  image?: string
}

export function ProgramCard({ 
  title, 
  program, 
  description, 
  href, 
  className, 
  image,
}: ProgramCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col h-full bg-alma/5 overflow-hidden",
        "border border-alma/10 hover:border-alma/20",
        "hover:shadow-[0_40px_80px_-20px_rgba(132,51,50,0.08)]",
        "transition-all duration-500",
        "rounded-lg",
        className
      )}
    >
      <Link href={href} className="flex flex-col h-full">
        {/* Image Container */}
        {image && (
          <div className="relative w-full h-44 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-cruz/10">
            <img
              src={image}
              alt={title}
              className={cn(
                "w-full h-full object-cover transition-all duration-1000",
                "grayscale group-hover:grayscale-0",
                "group-hover:scale-105"
              )}
            />
            
            {/* Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-cruz/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        )}
        
        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow relative">
          {/* Top Row */}
          <div className="flex justify-between items-start mb-3 sm:mb-4 md:mb-5">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] text-liga">
              {program}
            </span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-po/50 group-hover:text-amor transition-colors duration-500" />
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-alma mb-3 sm:mb-4 leading-[1.1] group-hover:text-pele transition-colors duration-500">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base text-alma/70 leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-3">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-auto">
            <span className="inline-block text-xs sm:text-sm font-bold border-b-2 border-po/30 pb-1 group-hover:border-amor transition-colors duration-500 tracking-widest">
              Learn more
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
