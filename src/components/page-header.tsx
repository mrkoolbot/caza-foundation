"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function PageHeader({ 
  label, 
  title, 
  description, 
  className,
  align = "left" 
}: PageHeaderProps) {
  return (
    <section className={cn(
      "pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-40 md:pb-20 lg:pt-48 lg:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-alma", 
      className
    )}>
      <div className={cn(
        "max-w-6xl mx-auto",
        align === "center" && "text-center"
      )}>
        {label && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="block text-amor font-medium tracking-widest text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-6 lowercase"
          >
            {label}
          </motion.span>
        )}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tighter leading-[1.05] mb-5 sm:mb-6 md:mb-8 text-cruz lowercase"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={cn(
              "text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-neutral-600 max-w-3xl",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
