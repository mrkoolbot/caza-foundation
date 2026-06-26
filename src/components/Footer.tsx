"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { CazaLogo } from "@/components/caza-logo-inline"

const footerLinks = {
  navigation: [
    { name: "home",         href: "/" },
    { name: "our why",      href: "/our-why" },
    { name: "our programs", href: "/our-programs" },
    { name: "our people",   href: "/our-people" },
  ],
  programs: [
    { name: "roots & wings",      href: "/our-programs#roots-and-wings" },
    { name: "the knowing house",  href: "/our-programs#the-knowing-house" },
    { name: "homecoming",         href: "/our-programs#homecoming" },
    { name: "walk with us",       href: "/walk-with-us" },
  ],
  connect: [
    { name: "find shelter",  href: "/find-shelter" },
    { name: "give now",      href: "/give" },
    { name: "reach out",     href: "/reach-out" },
  ],
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
    <footer className="bg-white text-obsidian border-t border-gray-100 font-quicksand overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8"
          >
            {/* Brand */}
            <motion.div variants={item} className="md:col-span-4 flex flex-col justify-between h-full">
              <div className="mb-8">
                <Link href="/" className="inline-block mb-8">
                  <CazaLogo light={false} height={40} />
                </Link>
                <p className="text-lg text-neutral-500 max-w-sm leading-relaxed">
                  strengthening families through faith-rooted counseling, education, and community support.
                </p>
              </div>
              <div className="text-sm text-neutral-400 tracking-wider hidden md:block">est. 2024</div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={item} className="md:col-span-2 md:col-start-6">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-neutral-400">navigate</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg hover:text-amor transition-colors duration-300 block w-fit">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div variants={item} className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-neutral-400">programs</h4>
              <ul className="space-y-4">
                {footerLinks.programs.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg hover:text-amor transition-colors duration-300 block w-fit">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={item} className="md:col-span-2">
              <h4 className="text-xs font-bold tracking-[0.2em] mb-8 text-neutral-400">connect</h4>
              <ul className="space-y-4">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-lg hover:text-amor transition-colors duration-300 block w-fit">{link.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2 text-sm text-neutral-400">
                <a href="tel:7542158201" className="block hover:text-amor transition-colors">(754) 215-8201</a>
                <a href="mailto:contact@cazafoundationinc.org" className="block hover:text-amor transition-colors text-xs break-all">contact@cazafoundationinc.org</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-8 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-neutral-400">
          <div>© {new Date().getFullYear()} caza foundation inc. all rights reserved.</div>
          <div>faith. family. healing.</div>
        </div>
      </div>
    </footer>
  )
}
