"use client"
import { motion } from "framer-motion"

export function SectionHeader({ label, title, subtitle, className }: { label?: string, title: string, subtitle?: string, className?: string }) {
  return (
    <div style={{ marginBottom: 0 }} className={className}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {label && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "#813332", fontFamily: "monospace", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            {label}
          </motion.span>
        )}

        {/* BIG headline — same scale as TKG */}
        <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1a1a1a", maxWidth: "900px" }}>
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block", marginRight: "0.2em" }}
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
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)", color: "#737373", maxWidth: "680px", lineHeight: 1.6, fontWeight: 400 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
