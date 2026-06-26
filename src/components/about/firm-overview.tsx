"use client"

import { motion } from "framer-motion"

const points = [
  {
    title: "limited clients",
    desc: "We take on a limited number of clients at a time to ensure focus."
  },
  {
    title: "senior strategy",
    desc: "You work directly with the person thinking about your strategy, not a rotating cast of juniors."
  },
  {
    title: "global mindset",
    desc: "We bring a multikooltural, cross-industry lens to every project."
  },
  {
    title: "long-term partners",
    desc: "We care about long-term partnerships, not one-off hero projects."
  }
]

export function FirmOverview() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-alma border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-quicksand font-medium leading-[1.05] mb-8">
              a boutique consultancy by design.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
              We blend academic rigor, real-world experience and creative intuition to build work that stands up in the boardroom and resonates with the people you serve.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {points.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t border-cruz/10 pt-6"
              >
                <h3 className="text-xl font-medium mb-3 lowercase">{point.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
