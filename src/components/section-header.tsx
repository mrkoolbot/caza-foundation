"use client"
import { motion } from "framer-motion"

export function SectionHeader({ label, title, subtitle }: { label?: string, title: string, subtitle?: string }) {
  return (
    <div style={{ marginBottom: "2.5rem", maxWidth: "900px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {label && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#813332" }}
          >
            {label}
          </motion.span>
        )}

        <h2 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, color: "#1a1a1a" }}>
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "inline-block", marginRight: "0.2em" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.2rem)", color: "#737373", maxWidth: "680px", lineHeight: 1.65, marginTop: "0.75rem", fontWeight: 400 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
