"use client"

import { motion, AnimatePresence } from "framer-motion"
import { PortfolioCard } from "./portfolio-card"
import { PortfolioItem } from "@/lib/portfolio-data"

interface PortfolioGridProps {
  items: PortfolioItem[]
  showFeatured?: boolean
}

export function PortfolioGrid({ items, showFeatured = true }: PortfolioGridProps) {
  const featuredItems = items.filter(item => item.featured)
  const regularItems = items.filter(item => !item.featured)
  
  // If not showing featured or no featured items, show all in regular grid
  const displayFeatured = showFeatured && featuredItems.length > 0
  const displayItems = displayFeatured ? regularItems : items

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12">
      {/* Featured Section */}
      {displayFeatured && (
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <span className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.15em] sm:tracking-[0.2em] text-amor">
              featured work
            </span>
            <div className="flex-grow h-px bg-gradient-to-r from-amor/20 to-transparent" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {featuredItems.map((item, index) => (
              <PortfolioCard
                key={item.slug}
                item={item}
                index={index}
                variant="featured"
              />
            ))}
          </div>
        </div>
      )}

      {/* All Work Section */}
      {displayItems.length > 0 && (
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          {displayFeatured && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 sm:gap-4 pt-6 sm:pt-8 md:pt-12"
            >
              <span className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400">
                all work
              </span>
              <div className="flex-grow h-px bg-gradient-to-r from-neutral-200 to-transparent" />
            </motion.div>
          )}
          
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            >
              {displayItems.map((item, index) => (
                <motion.div
                  key={item.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <PortfolioCard
                    item={item}
                    index={index}
                    variant="default"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Empty State */}
      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12 sm:py-16 md:py-24"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-300 mb-3 sm:mb-4 lowercase">
            no projects match your filters.
          </p>
          <p className="text-sm sm:text-base text-neutral-500 lowercase">
            try adjusting your selection to see more work.
          </p>
        </motion.div>
      )}
    </div>
  )
}
