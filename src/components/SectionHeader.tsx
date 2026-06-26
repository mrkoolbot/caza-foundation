"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function SectionHeader({ label, title, subtitle, className, light = false }: {
  label?: string
  title: string
  subtitle?: string
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn("mb-10 sm:mb-16 md:mb-24", className)}>
      {label && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("block font-mono text-[10px] sm:text-xs font-bold tracking-[0.2em] mb-4 sm:mb-6", light ? "text-pele" : "text-amor")}
        >
          {label}
        </motion.span>
      )}
      <h2 className={cn("text-[1.5rem] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter leading-[1.05] text-balance", light ? "text-alma" : "text-cruz")}>
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block mr-[0.2em]"
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
          className={cn("mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl", light ? "text-alma/60" : "text-liga")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
