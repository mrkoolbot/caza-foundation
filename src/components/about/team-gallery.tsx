"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { teamMembers } from "@/lib/team-data"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { TiltCard } from "@/components/ui/tilt-card"

export function TeamGallery() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-alma text-cruz">
      <div className="max-w-7xl mx-auto mb-16 sm:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-quicksand font-medium mb-6"
        >
          meet the team.
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className={cn(
              "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start",
              index % 2 === 1 && "lg:grid-flow-dense" // Alternate layout if desired, though pure list is cleaner for "clarity"
            )}
          >
            {/* Image or Video — with lenticular tilt */}
            <TiltCard
              intensity={6}
              className={cn(
                "lg:col-span-5 relative aspect-[3/4] overflow-hidden bg-neutral-100",
                index % 2 === 1 && "lg:col-start-8"
              )}
            >
               {["mr-kool", "paula-mescolin", "nova", "leo", "lara", "mel", "todd"].includes(member.id) ? (
                 <video
                   autoPlay
                   muted
                   loop
                   playsInline
                   preload={index === 0 ? "auto" : "none"}
                   className="absolute inset-0 w-full h-full object-cover object-top"
                 >
                   <source src={
                     member.id === "mr-kool" ? "/team/mrkool-video.mp4" :
                     member.id === "paula-mescolin" ? "/team/paula-video.mp4" :
                     member.id === "nova" ? "/team/nova-video.mp4" :
                     member.id === "leo" ? "/team/leo-video.mp4" :
                     member.id === "lara" ? "/team/lara-video.mp4" :
                     member.id === "todd" ? "/team/todd-video.mp4" :
                     "/team/mel-video.mp4"
                   } type="video/mp4" />
                 </video>
               ) : (
                 <Image
                   src={member.image}
                   alt={member.name}
                   fill
                   className="object-cover object-top"
                 />
               )}
            </TiltCard>

            {/* Content */}
            <div className={cn(
              "lg:col-span-7 flex flex-col justify-center h-full pt-4 lg:pt-0",
               index % 2 === 1 && "lg:col-start-1"
            )}>
              <div className="mb-6 sm:mb-8">
                <span className="text-amor font-medium tracking-wide text-sm sm:text-base lowercase mb-2 block">
                  {member.role}
                </span>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-quicksand font-medium tracking-tight">
                  {member.name.toLowerCase()}.
                </h3>
              </div>

              <div className="space-y-6 text-lg sm:text-xl font-light leading-relaxed text-neutral-800 max-w-2xl">
                <p>{member.bio}</p>
                
                {member.id === "paula-mescolin" ? (
                  <p className="text-xs text-neutral-400">100% human.</p>
                ) : (
                  <p className="text-xs text-neutral-400">*TKG AI agent. All rights reserved.</p>
                )}

                {member.superpower && (
                  <div className="border-l-2 border-amor pl-6 py-2 my-8">
                    <p className="text-lg sm:text-xl italic text-cruz font-medium">
                      "{member.superpower}"
                    </p>
                  </div>
                )}

                <div className="pt-6">
                  <h4 className="text-sm font-medium lowercase tracking-wide text-neutral-400 mb-4">
                    highlights
                  </h4>
                  <ul className="space-y-3">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-base sm:text-lg text-neutral-600">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amor shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Socials / Contact */}
              <div className="mt-10 flex gap-6">
                {member.socials?.linkedin && (
                  <a 
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium lowercase border-b border-neutral-300 pb-1 hover:border-amor hover:text-amor transition-colors"
                  >
                    linkedin
                  </a>
                )}
                 <Link href="/contact" className="text-sm font-medium lowercase border-b border-neutral-300 pb-1 hover:border-amor hover:text-amor transition-colors">
                    book a conversation
                  </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
