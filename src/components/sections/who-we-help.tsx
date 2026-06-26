"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { cn } from "@/lib/utils"

const audiences = [
  {
    id: "01",
    title: "families in emotional crisis",
    role: "couples, parents, and children carrying pain",
    detail: "When the weight of life becomes too heavy to carry alone, CAZA walks alongside you — with faith-rooted counseling and psychological support that meets you where you are.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    id: "02",
    title: "children and youth",
    role: "young people who need a safe space to heal",
    detail: "Children carry more than we see. Our programs create safe, nurturing environments where young people can grow emotionally, spiritually, and academically.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "03",
    title: "disaster-affected families",
    role: "homes rebuilding after crisis or tragedy",
    detail: "When disaster strips everything away, we help families rebuild — not just their homes, but their faith, their bonds, and their sense of wholeness.",
    image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80",
  },
]

export function WhoWeHelp() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [touchedId, setTouchedId] = useState<string | null>(null)
  const currentActiveId = touchedId ?? activeId

  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-48 bg-white text-obsidian z-30">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16 md:mb-24 items-center">
          <div>
            <SectionHeader
              label="who we serve"
              title="built to walk with families at their hardest moments."
              className="mb-0"
            />
          </div>
          <div>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-500 leading-relaxed font-light">
              CAZA Foundation sits at the intersection of faith, compassion, and healing. We align families so every step they take leads them home.
            </p>
          </div>
        </div>

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
                onTouchStart={() => setTouchedId(touchedId === item.id ? null : item.id)}
                className={cn(
                  "group relative flex flex-col justify-between min-h-[320px] sm:min-h-[400px] md:min-h-[500px] p-6 sm:p-8 md:p-10 overflow-hidden bg-obsidian text-white cursor-pointer",
                  isActive && "ring-2 ring-amor/50"
                )}
              >
                <div className="absolute inset-0 z-0">
                  <img src={item.image} alt="" className={cn("w-full h-full object-cover transition-transform duration-700 ease-out", isActive && "scale-105")} />
                  <div className={cn("absolute inset-0 transition-colors duration-700", isActive ? "bg-obsidian/40" : "bg-obsidian/65")} />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />
                </div>

                <div className={cn("relative z-10 flex justify-between items-start border-b pb-4 sm:pb-6 transition-colors duration-500", isActive ? "border-white/40" : "border-white/20")}>
                  <span className="text-xs sm:text-sm font-medium tracking-widest text-white/70">{item.id}</span>
                  <Link href="/find-shelter" onClick={e => e.stopPropagation()} className={cn("w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-500", isActive ? "bg-white border-white" : "border-white/20")}>
                    <Plus className={cn("w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-500", isActive ? "text-obsidian" : "text-white")} />
                  </Link>
                </div>

                <div className="relative z-10 mt-auto">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-[0.95] tracking-tight text-balance">{item.title}</h4>
                  <p className={cn("text-sm sm:text-base lg:text-lg text-white/70 leading-tight transition-all duration-500 ease-out", isActive ? "mb-4 sm:mb-6" : "mb-0")}>{item.role}</p>
                  <div className={cn("grid transition-[grid-template-rows] duration-500 ease-out", isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed pt-4 sm:pt-6 border-t border-white/20">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 text-center">
          <Link href="/find-shelter" className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-2 group border-b border-transparent hover:border-amor transition-all pb-1">
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-neutral-600 group-hover:text-obsidian transition-colors">
              not sure where to start?
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-obsidian group-hover:text-amor transition-colors">reach out</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform text-amor" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
