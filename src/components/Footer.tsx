"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { CazaLogo } from "./CazaLogo"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ],
  programs: [
    { name: "Roots & Wings", href: "/programs#roots-wings" },
    { name: "The Knowing House", href: "/programs#knowing-house" },
    { name: "Homecoming", href: "/programs#homecoming" },
  ],
  socials: [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]
}

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-cruz text-alma border-t border-po/10 font-quicksand overflow-hidden">
      {/* Main Footer Content */}
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          >
            {/* Brand Column */}
            <motion.div variants={item} className="md:col-span-4 flex flex-col justify-between h-full">
              <div className="mb-8">
                <Link href="/" className="inline-block mb-8 w-32 h-8">
                  <CazaLogo />
                </Link>
                <p className="text-lg text-alma/70 max-w-sm leading-relaxed">
                  Faith-rooted counseling, education, and support for families.
                </p>
              </div>
              <div className="text-sm text-alma/50 tracking-wider hidden md:block">
                Established 2024
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div variants={item} className="md:col-span-2 md:col-start-6">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po">Navigation</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg hover:text-pele transition-colors duration-300 block w-fit">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs Column */}
            <motion.div variants={item} className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po">Programs</h4>
              <ul className="space-y-4">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg hover:text-pele transition-colors duration-300 block w-fit">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Socials & Legal Column */}
            <motion.div variants={item} className="md:col-span-2">
              <div className="mb-12">
                <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po">Socials</h4>
                <ul className="space-y-4">
                  {footerLinks.socials.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg hover:text-pele transition-colors duration-300 block w-fit"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-po">Legal</h4>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-lg hover:text-pele transition-colors duration-300 block w-fit">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 lg:px-20 py-8 border-t border-po/10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-alma/50">
          <div className="md:hidden">
            Est. 2024
          </div>
          <div>
            © {new Date().getFullYear()} CAZA Foundation. All rights reserved.
          </div>
          <div>
            Faith. Family. Healing.
          </div>
        </div>
      </div>
    </footer>
  )
}
