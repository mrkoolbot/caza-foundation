"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Magnetic } from "@/components/ui/magnetic"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  title: string
  description?: string
  primaryAction: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  className?: string
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  className
}: CTASectionProps) {
  return (
    <section className={cn("py-16 sm:py-20 md:py-32 lg:py-40 px-4 sm:px-6 bg-cruz text-white", className)}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 sm:mb-6 md:mb-8 leading-[1.05] lowercase"
        >
          {title}
        </motion.h2>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-400 font-light mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Magnetic>
            <Link
              href={primaryAction.href}
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-amor text-white rounded-sm font-bold tracking-wide hover:bg-white hover:text-cruz transition-colors duration-300 lowercase text-sm sm:text-base"
            >
              {primaryAction.label}
            </Link>
          </Magnetic>

          {secondaryAction && (
            <Magnetic>
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-cruz border border-cruz rounded-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors duration-300 lowercase text-sm sm:text-base"
              >
                {secondaryAction.label}
              </Link>
            </Magnetic>
          )}
        </motion.div>
      </div>
    </section>
  )
}
