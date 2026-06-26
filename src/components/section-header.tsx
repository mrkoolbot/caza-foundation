"use client"
import { motion } from "framer-motion"

export function SectionHeader({ label, title, subtitle }: { label?: string, title: string, subtitle?: string }) {
  return (
    <div style={{ marginBottom: "3rem", maxWidth: "900px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {label && (
            <div style={{ display: "flex", alignItems: "center" }}>
                 <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#813332"
                    }}
                 >
                    {label}
                 </motion.span>
            </div>
        )}
        
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 4.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#1a1a1a"
        }}>
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
                style={{
                  fontSize: "clamp(0.9rem, 1.2vw, 1.125rem)",
                  color: "#737373",
                  maxWidth: "700px",
                  lineHeight: 1.6,
                  marginTop: "1rem",
                  fontWeight: 400
                }}
            >
                {subtitle}
            </motion.p>
        )}
      </div>
    </div>
  )
}
