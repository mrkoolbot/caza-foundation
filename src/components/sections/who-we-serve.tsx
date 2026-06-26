"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { Magnetic } from "@/components/ui/magnetic"
import Image from "next/image"
import { cn } from "@/lib/utils"

const audiences = [
  {
    id: "01",
    title: "enterprise & mid-market brands",
    role: "cmos, vps of marketing and brand leaders",
    detail: "Your brand is stretched across channels, regions and teams. We help you clarify the narrative, codify it, and make it easy for everyone to execute against it.",
    image: "/enterprise-brands.webp"
  },
  {
    id: "02",
    title: "b2b & service powerhouses",
    role: "print, logistics, tech and professional solutions",
    detail: "Companies trust us to translate complex value into simple, resonant stories that win the right accounts.",
    image: "/brandfulness.avif"
  },
  {
    id: "03",
    title: "founders, ceos & executives",
    role: "leaders who need their voice to match their ambitions",
    detail: "Your voice is an asset. We shape your thought leadership, content and presence so that every word works as hard as you do.",
    image: "/lighting.avif"
  }
]

export function WhoWeServe() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [touchedId, setTouchedId] = useState<string | null>(null)
  
  // Combined active state for hover OR touch
  const currentActiveId = touchedId ?? activeId

  const handleTouch = (id: string) => {
    setTouchedId(touchedId === id ? null : id)
  }
  
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 bg-alma text-cruz z-30">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16 md:mb-24 items-center">
                <div>
                    <SectionHeader 
                        label="who we serve"
                        title="built to support visionary leaders."
                    />
                </div>
                <div>
                    <p className="text-base sm:text-lg lg:text-xl text-neutral-500 leading-relaxed font-light">
                        CAZA Foundation sits at the intersection of innovation, creativity, and results. We align the narrative so every move you make tells one clear story.
                    </p>
                </div>
            </div>

            {/* Interactive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 h-auto">
                {audiences.map((item, i) => {
                    const isActive = currentActiveId === item.id
                    
                    return (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            onMouseEnter={() => setActiveId(item.id)}
                            onMouseLeave={() => setActiveId(null)}
                            onTouchStart={() => handleTouch(item.id)}
                            className={cn(
                                "group relative flex flex-col justify-between min-h-[320px] sm:min-h-[400px] md:min-h-[500px] p-6 sm:p-8 md:p-10 overflow-hidden bg-cruz text-white cursor-pointer",
                                isActive && "ring-2 ring-amor/50"
                            )}
                        >
                            {/* Background Image - Always Visible */}
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src={item.image} 
                                    alt="" 
                                    fill 
                                    className={cn(
                                        "object-cover transition-transform duration-700 ease-out",
                                        isActive && "scale-105"
                                    )}
                                />
                                {/* Overlay: Darker by default for readability, lighter on hover/touch */}
                                <div className={cn(
                                    "absolute inset-0 transition-colors duration-700",
                                    isActive ? "bg-cruz/40" : "bg-cruz/60"
                                )} />
                                {/* Gradient for text protection */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cruz via-transparent to-transparent opacity-90" />
                            </div>

                            {/* Top Row */}
                            <div className={cn(
                                "relative z-10 flex justify-between items-start border-b pb-4 sm:pb-6 transition-colors duration-500",
                                isActive ? "border-white/40" : "border-white/20"
                            )}>
                                <span className="text-xs sm:text-sm font-medium tracking-widest text-white/70">
                                    {item.id}
                                </span>
                                <Link href="/contact" onClick={e => e.stopPropagation()} className={cn(
                                    "w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-500",
                                    isActive ? "bg-white border-white" : "border-white/20"
                                )}>
                                    <Plus className={cn(
                                        "w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-500",
                                        isActive ? "text-cruz" : "text-white"
                                    )} />
                                </Link>
                            </div>

                            {/* Bottom Content */}
                            <div className="relative z-10 mt-auto">
                                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-[0.95] lowercase tracking-tight text-balance">
                                    {item.title}
                                </h4>
                                <p className={cn(
                                    "text-sm sm:text-base lg:text-lg text-white/70 lowercase leading-tight transition-all duration-500 ease-out",
                                    isActive ? "mb-4 sm:mb-6" : "mb-0"
                                )}>
                                    {item.role}
                                </p>
                                
                                {/* Detail Reveal - Visible on active state */}
                                <div className={cn(
                                    "grid transition-[grid-template-rows] duration-500 ease-out",
                                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                )}>
                                    <div className="overflow-hidden">
                                        <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-4 sm:pt-6 border-t border-white/20">
                                            {item.detail}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>

            {/* CTA */}
            <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 text-center">
                 <Magnetic>
                    <Link 
                        href="/contact"
                        className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 group border-b border-transparent hover:border-amor transition-all pb-1"
                    >
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-light lowercase text-neutral-600 group-hover:text-cruz transition-colors">
                            want to make sure if we're a fit?
                        </span>
                        <span className="inline-flex items-center gap-1 sm:gap-2">
                            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold lowercase text-cruz group-hover:text-amor transition-colors">
                                let's talk
                            </span>
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform text-amor" />
                        </span>
                    </Link>
                </Magnetic>
            </div>
        </div>
    </section>
  )
}
