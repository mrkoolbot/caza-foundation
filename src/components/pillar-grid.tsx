"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const pillars = [
  {
    number: "01",
    title: "brand architecture",
    description: "positioning, messaging and visual direction that make decisions easier.",
    href: "/solutions/brand-strategy",
    image: "/Frame.avif"
  },
  {
    number: "02",
    title: "content & thought leadership",
    description: "executive ghostwriting, keynote development and content systems.",
    href: "/solutions/content-thought-leadership",
    image: "/brandfulness.avif"
  },
  {
    number: "03",
    title: "experiences & event planning",
    description: "summits, client events and executive retreats.",
    href: "/solutions/experiences-events",
    image: "/Champagne Glasses.avif"
  },
  {
    number: "04",
    title: "training & team development",
    description: "internal communication, workshops and playbooks.",
    href: "/solutions/koolture-teams",
    image: "/lighting.avif"
  },
]

export function PillarGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <>
      {/* Mobile Layout - Clean stacked cards */}
      <div className="lg:hidden space-y-4">
        {pillars.map((pillar) => (
          <Link 
            key={pillar.number} 
            href={pillar.href}
            className="group block relative overflow-hidden bg-cruz"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={pillar.image}
                alt=""
                fill
                className="object-cover opacity-40 group-active:opacity-60 transition-opacity duration-300"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-6 flex items-center justify-between gap-4">
              <div className="flex-1">
                <span className="text-amor font-bold text-xs tracking-widest mb-2 block">
                  {pillar.number}
                </span>
                <h3 className="text-white text-xl font-bold lowercase mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm lowercase line-clamp-2">
                  {pillar.description}
                </p>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-full bg-amor flex items-center justify-center group-active:scale-95 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop Layout - Expandable cards */}
      <div className="hidden lg:flex gap-0 h-[600px] w-full border-t border-b border-neutral-200">
        {pillars.map((pillar, index) => {
          const isActive = hoveredIndex === index
          
          return (
            <Link 
              key={pillar.number} 
              href={pillar.href}
              className={cn(
                "flex-1 relative group overflow-hidden border-r border-neutral-200 last:border-r-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                isActive ? "flex-[3]" : "flex-1"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full w-full bg-white p-8 flex flex-col justify-between">
                
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={pillar.image}
                    alt=""
                    fill
                    className={cn(
                      "object-cover transition-all duration-1000",
                      isActive ? "scale-105 grayscale-0" : "scale-100 grayscale"
                    )}
                  />
                  <div 
                    className={cn(
                      "absolute inset-0 transition-colors duration-700",
                      isActive ? "bg-black/50" : "bg-white/90" 
                    )} 
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <span className={cn(
                      "text-xs font-medium tracking-widest transition-colors duration-300",
                      isActive ? "text-white/70" : "text-cruz/40"
                    )}>
                      {pillar.number}
                    </span>
                    <div className={cn(
                      "transition-all duration-300",
                      isActive ? "opacity-100 rotate-45 text-white" : "opacity-100 text-cruz/20 rotate-0"
                    )}>
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className={cn(
                      "text-3xl font-bold tracking-tighter mb-4 transition-colors duration-300 lowercase",
                      isActive ? "text-white" : "text-cruz"
                    )}>
                      {pillar.title}
                    </h3>
                    
                    {/* Description - reveal on hover */}
                    <div className={cn(
                      "grid transition-all duration-500 ease-out",
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}>
                      <div className="overflow-hidden">
                        <p className="text-lg leading-relaxed lowercase mb-6 text-white/80">
                          {pillar.description}
                        </p>
                        <div className="font-bold text-sm tracking-widest lowercase flex items-center gap-2 text-amor">
                          explore
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
