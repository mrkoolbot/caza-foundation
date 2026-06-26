"use client"

import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"
import { 
  Industry, 
  SolutionType, 
  OutcomeType,
  industries,
  solutionTypes,
  outcomeTypes
} from "@/lib/portfolio-data"

interface PortfolioFiltersProps {
  activeIndustry: Industry | null
  activeSolution: SolutionType | null
  activeOutcome: OutcomeType | null
  onIndustryChange: (industry: Industry | null) => void
  onSolutionChange: (solution: SolutionType | null) => void
  onOutcomeChange: (outcome: OutcomeType | null) => void
  onClearAll: () => void
  totalResults: number
}

export function PortfolioFilters({
  activeIndustry,
  activeSolution,
  activeOutcome,
  onIndustryChange,
  onSolutionChange,
  onOutcomeChange,
  onClearAll,
  totalResults
}: PortfolioFiltersProps) {
  const hasActiveFilters = activeIndustry || activeSolution || activeOutcome

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Filter Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        {/* Industry Filter */}
        <div>
          <h3 className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 mb-3 sm:mb-4">
            industry
          </h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <FilterButton
                key={industry.value}
                label={industry.label}
                active={activeIndustry === industry.value}
                onClick={() => onIndustryChange(
                  activeIndustry === industry.value ? null : industry.value
                )}
              />
            ))}
          </div>
        </div>

        {/* Solution Filter */}
        <div>
          <h3 className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 mb-3 sm:mb-4">
            focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {solutionTypes.map((solution) => (
              <FilterButton
                key={solution.value}
                label={solution.label}
                active={activeSolution === solution.value}
                onClick={() => onSolutionChange(
                  activeSolution === solution.value ? null : solution.value
                )}
              />
            ))}
          </div>
        </div>

        {/* Outcome Filter */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-[10px] sm:text-xs font-bold lowercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 mb-3 sm:mb-4">
            outcome
          </h3>
          <div className="flex flex-wrap gap-2">
            {outcomeTypes.map((outcome) => (
              <FilterButton
                key={outcome.value}
                label={outcome.label}
                active={activeOutcome === outcome.value}
                onClick={() => onOutcomeChange(
                  activeOutcome === outcome.value ? null : outcome.value
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      <AnimatePresence>
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-neutral-100"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm text-neutral-500">
                showing <span className="font-bold text-cruz">{totalResults}</span> {totalResults === 1 ? 'result' : 'results'}
              </span>
              
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {activeIndustry && (
                  <ActiveFilterTag 
                    label={activeIndustry} 
                    onRemove={() => onIndustryChange(null)} 
                  />
                )}
                {activeSolution && (
                  <ActiveFilterTag 
                    label={activeSolution} 
                    onRemove={() => onSolutionChange(null)} 
                  />
                )}
                {activeOutcome && (
                  <ActiveFilterTag 
                    label={activeOutcome} 
                    onRemove={() => onOutcomeChange(null)} 
                  />
                )}
              </div>
            </div>

            <button
              onClick={onClearAll}
              className="text-xs sm:text-sm font-medium text-neutral-500 hover:text-amor transition-colors duration-300 flex items-center gap-1"
            >
              clear all
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface FilterButtonProps {
  label: string
  active: boolean
  onClick: () => void
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium lowercase tracking-wide transition-all duration-300 border rounded-sm",
        active
          ? "bg-cruz text-white border-cruz"
          : "bg-white text-cruz border-cruz hover:bg-cruz hover:text-white"
      )}
    >
      {label}
    </button>
  )
}

interface ActiveFilterTagProps {
  label: string
  onRemove: () => void
}

function ActiveFilterTag({ label, onRemove }: ActiveFilterTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-sm font-medium text-cruz"
    >
      {label}
      <button
        onClick={onRemove}
        className="text-neutral-400 hover:text-amor transition-colors"
      >
        <X className="w-3 h-3" />
      </button>
    </motion.span>
  )
}
