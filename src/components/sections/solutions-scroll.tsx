"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const solutions = [
  {
    title: "brand architecture",
    description: "for when your brand has outgrown its current story — or never quite had the right one. we audit, clarify and redesign your brand positioning, messaging and expression so everything points in the same direction.",
    href: "/solutions/brand-strategy",
    linkText: "explore brand architecture",
    color: "#D90000", // TKG Red
    image: "/brand-architecture-hero.webp"
  },
  {
    title: "content & thought leadership",
    description: "for leaders and brands who need their words to work harder. from executive ghostwriting to content systems for your teams, we create the stories, scripts and structures that build authority and deepen trust.",
    href: "/solutions/content-thought-leadership",
    linkText: "explore content & thought leadership",
    color: "#0A0A0A", // Obsidian
    image: "/Image by Jonathan Farber.avif" 
  },
  {
    title: "experiences & event planning",
    description: "for moments that matter: client summits, corporate events, executive retreats, launch moments. we align message, format and experience design so you don't just fill an agenda — you create a turning point.",
    href: "/solutions/experiences-events",
    linkText: "explore experiences & event planning",
    color: "#D90000",
    image: "/Champagne Glasses.avif"
  },
  {
    title: "training & team development",
    description: "for organizations that want the brand to be lived, not just printed. we design workshops, training and communication playbooks that help your people understand, embody and amplify the story every day.",
    href: "/solutions/koolture-teams",
    linkText: "explore training & team development",
    color: "#0A0A0A",
    image: "/lighting.avif"
  }
]

export function SolutionsScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile Layout - Simple stacked cards
  if (isMobile) {
    return (
      <section className="bg-alma text-cruz py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6">
            {solutions.map((solution, index) => (
              <MobileCard key={index} i={index} {...solution} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop Layout - Sticky cards
  return (
    <section ref={containerRef} className="bg-alma text-cruz relative">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pb-24">
        {solutions.map((solution, index) => {
          const targetScale = 1 - ((solutions.length - index) * 0.05)
          return (
            <Card 
              key={index} 
              i={index} 
              {...solution} 
              progress={scrollYProgress} 
              range={[index * 0.25, 1]} 
              targetScale={targetScale}
              total={solutions.length}
            />
          )
        })}
      </div>
    </section>
  )
}

// Mobile Card Component
interface MobileCardProps {
  i: number
  title: string
  description: string
  href: string
  linkText: string
  image?: string
}

function MobileCard({ i, title, description, href, linkText, image }: MobileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm"
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col gap-4">
        <span className="text-amor text-xs sm:text-sm font-medium tracking-widest">0{i + 1}</span>
        <h2 className="text-2xl sm:text-3xl font-bold lowercase leading-[1.05]">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
          {description}
        </p>
        <Link 
          href={href}
          className="inline-flex items-center gap-2 text-cruz font-medium lowercase border-b border-cruz pb-1 hover:text-amor hover:border-amor transition-colors duration-300 w-fit mt-2 text-sm sm:text-base"
        >
          {linkText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  )
}

interface CardProps {
  i: number
  title: string
  description: string
  href: string
  linkText: string
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
  total: number
  image?: string
}

function Card({ i, title, description, href, linkText, progress, range, targetScale, image }: CardProps) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative h-[450px] lg:h-[500px] w-full max-w-5xl rounded-2xl lg:rounded-3xl p-8 lg:p-14 border border-neutral-200 bg-white shadow-2xl origin-top"
      >
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 h-full">
            {/* Content Side */}
            <div className="flex-1 flex flex-col justify-between z-10">
                <div>
                    <span className="block text-amor text-xs lg:text-sm font-medium tracking-widest mb-4 lg:mb-6">0{i + 1}</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold lowercase mb-4 lg:mb-6 leading-[1.05]">
                        {title}
                    </h2>
                    <p className="text-base lg:text-lg xl:text-xl text-neutral-600 font-light leading-relaxed max-w-md">
                        {description}
                    </p>
                </div>

                <Link 
                  href={href}
                  className="inline-flex items-center gap-2 text-cruz font-medium lowercase border-b border-cruz pb-1 hover:text-amor hover:border-amor transition-colors duration-300 w-fit mt-6 text-sm lg:text-base"
                >
                  {linkText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Image Side */}
            <div className="flex-1 relative h-full rounded-xl lg:rounded-2xl overflow-hidden bg-neutral-100 hidden md:block">
                <motion.div className="w-full h-full relative" style={{ scale: imageScale }}>
                    {image && (
                       <Image
                         src={image}
                         alt={title}
                         fill
                         className="object-cover"
                         sizes="(max-width: 768px) 100vw, 50vw"
                       />
                    )}
                </motion.div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}
