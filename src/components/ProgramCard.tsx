"use client"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProgramCardProps {
  number: string
  title: string
  type: string
  description: string
  href: string
  image: string
  className?: string
}

export function ProgramCard({ number, title, type, description, href, image, className }: ProgramCardProps) {
  return (
    <article className={cn(
      "group relative flex flex-col h-full bg-alma overflow-hidden",
      "border border-po/20 hover:border-po/40",
      "hover:shadow-[0_40px_80px_-20px_rgba(106,72,44,0.15)]",
      "transition-all duration-500",
      className
    )}>
      <Link href={href} className="flex flex-col h-full">
        {/* Image */}
        <div className="relative w-full h-44 sm:h-56 md:h-64 overflow-hidden bg-po/10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-liga">{type}</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-po/40 group-hover:text-amor transition-colors duration-500" />
          </div>
          <span className="text-po/40 font-bold text-xs tracking-widest mb-2">{number}</span>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cruz mb-3 leading-[1.1] group-hover:text-amor transition-colors duration-500">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-liga leading-relaxed mb-6 line-clamp-3">{description}</p>
          <div className="mt-auto">
            <span className="inline-block text-xs sm:text-sm font-bold border-b-2 border-po/20 pb-1 group-hover:border-amor transition-colors duration-500 tracking-widest text-cruz">
              Learn more
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
