"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ContentSectionProps {
  title?: string
  children: React.ReactNode
  image?: string
  imageAlt?: string
  className?: string
  reversed?: boolean
  layout?: "full" | "split"
}

export function ContentSection({ 
  title, 
  children, 
  image, 
  imageAlt = "Section image",
  className,
  reversed = false,
  layout = "split"
}: ContentSectionProps) {
  return (
    <section className={cn("py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto">
        {layout === "split" ? (
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 lg:gap-24 items-center",
            reversed && "md:grid-flow-dense"
          )}>
            <div className={cn(reversed && "md:col-start-2")}>
              {title && (
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 md:mb-8 leading-[1.05] lowercase"
                >
                  {title}
                </motion.h2>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-sm sm:text-base md:text-lg text-neutral-600 font-light leading-relaxed space-y-4 sm:space-y-5 md:space-y-6"
              >
                {children}
              </motion.div>
            </div>
            
            {image && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden rounded-lg sm:rounded-sm order-first md:order-none",
                  reversed && "md:col-start-1"
                )}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            )}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {title && (
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 leading-[1.05] lowercase text-center"
              >
                {title}
              </motion.h2>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 font-light leading-relaxed space-y-5 sm:space-y-6 md:space-y-8"
            >
              {children}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
