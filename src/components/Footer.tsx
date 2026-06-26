"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Our Why", href: "/our-why" },
    { name: "Our Programs", href: "/our-programs" },
    { name: "Our People", href: "/our-people" },
  ],
  programs: [
    { name: "Roots & Wings", href: "/our-programs#roots-and-wings" },
    { name: "The Knowing House", href: "/our-programs#the-knowing-house" },
    { name: "Homecoming", href: "/our-programs#homecoming" },
    { name: "Walk With Us", href: "/walk-with-us" },
  ],
  connect: [
    { name: "Find Shelter", href: "/find-shelter" },
    { name: "Give Now", href: "/give" },
    { name: "Reach Out", href: "/reach-out" },
  ],
}

function CazaLogoFooter() {
  return (
    <svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" style={{ height: 40, width: "auto" }}>
      <defs>
        <linearGradient id="houseGlowF" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8A020" />
          <stop offset="100%" stopColor="#D44000" />
        </linearGradient>
      </defs>
      <text x="2" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill="#f8f0de">C</text>
      <text x="34" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill="#f8f0de">A</text>
      <rect x="49" y="9" width="9" height="9" rx="1.5" fill="url(#houseGlowF)" />
      <text x="68" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill="#f8f0de">Z</text>
      <text x="100" y="42" fontFamily="Quicksand, sans-serif" fontWeight="700" fontSize="44" fill="#f8f0de">A</text>
      <rect x="115" y="9" width="9" height="9" rx="1.5" fill="url(#houseGlowF)" />
      <path d="M2,48 Q110,43 218,48" stroke="#a48157" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="52" y="56" fontFamily="Georgia, serif" fontStyle="italic" fontSize="11" fill="#a48157" letterSpacing="1">foundation</text>
    </svg>
  )
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any } },
}

export default function Footer() {
  return (
    <footer className="bg-cruz text-alma border-t border-po/10 font-quicksand overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          >
            {/* Brand */}
            <motion.div variants={item} className="md:col-span-4 flex flex-col justify-between h-full">
              <div className="mb-8">
                <Link href="/" className="inline-block mb-8">
                  <CazaLogoFooter />
                </Link>
                <p className="text-lg text-alma/50 max-w-sm leading-relaxed">
                  Strengthening families through faith-rooted counseling, education, and community support.
                </p>
              </div>
              <div className="text-sm text-alma/30 tracking-wider hidden md:block">est. 2024</div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={item} className="md:col-span-2 md:col-start-6">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po/80">Navigate</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg text-alma/70 hover:text-pele transition-colors duration-300 block w-fit">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div variants={item} className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po/80">Programs</h4>
              <ul className="space-y-4">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg text-alma/70 hover:text-pele transition-colors duration-300 block w-fit">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={item} className="md:col-span-2">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po/80">Connect</h4>
              <ul className="space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg text-alma/70 hover:text-pele transition-colors duration-300 block w-fit">{link.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-2 text-sm text-alma/40">
                <a href="tel:7542158201" className="block hover:text-pele transition-colors">(754) 215-8201</a>
                <a href="mailto:contact@cazafoundationinc.org" className="block hover:text-pele transition-colors text-xs">contact@cazafoundationinc.org</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-12 lg:px-20 py-8 border-t border-alma/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-alma/30">
          <div>© {new Date().getFullYear()} CAZA Foundation Inc. All rights reserved.</div>
          <div>faith. family. healing.</div>
        </div>
      </div>
    </footer>
  )
}
