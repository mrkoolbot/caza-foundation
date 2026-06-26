"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SectionHeader({ label, title, subtitle, className }: { label?: string, title: string, subtitle?: string, className?: string }) {
  return (
    <div className={cn("mb-10 sm:mb-16 md:mb-24", className)}>
      <div className="flex flex-col gap-4 sm:gap-6">
        {label && (
            <div className="flex items-center">
                 <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-amor font-semibold text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em]"
                 >
                    {label}
                 </motion.span>
            </div>
        )}
        
        <h2 className="text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tighter leading-[1.05] text-cruz text-balance">
            {title.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-[0.15em] sm:mr-[0.2em]"
                >
                    {word}
                </motion.span>
            ))}
        </h2>
        {subtitle && (
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-liga max-w-3xl leading-relaxed"
            >
                {subtitle}
            </motion.p>
        )}
      </div>
    </div>
  )
}
