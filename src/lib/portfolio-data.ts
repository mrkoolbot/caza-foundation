export type Industry = 
  | "print & logistics"
  | "technology"
  | "professional services"
  | "nonprofit"
  | "healthcare"
  | "manufacturing"

export type SolutionType = 
  | "brand strategy"
  | "content & thought leadership"
  | "experiences & events"
  | "koolture & teams"

export type OutcomeType = 
  | "alignment"
  | "growth"
  | "launch"
  | "transformation"

export interface PortfolioItem {
  slug: string
  title: string
  subtitle: string
  featured?: boolean
  client: {
    industry: Industry
    size: string
    location?: string
    focus: SolutionType
  }
  challenge: string
  solution: string[]
  results: string[]
  metrics?: {
    label: string
    value: string
    description?: string
  }[]
  testimonial?: string
  testimonialAuthor?: string
  image: string
  galleryImages?: string[]
  tags: string[]
  outcome: OutcomeType
  year?: string
}

export const industries: { value: Industry; label: string }[] = [
  { value: "print & logistics", label: "Print & Logistics" },
  { value: "technology", label: "Technology" },
  { value: "professional services", label: "Professional Services" },
  { value: "nonprofit", label: "Nonprofit" },
  { value: "healthcare", label: "Healthcare" },
  { value: "manufacturing", label: "Manufacturing" },
]

export const solutionTypes: { value: SolutionType; label: string }[] = [
  { value: "brand strategy", label: "Brand Strategy" },
  { value: "content & thought leadership", label: "Content & Thought Leadership" },
  { value: "experiences & events", label: "Experiences & Events" },
  { value: "koolture & teams", label: "Koolture & Teams" },
]

export const outcomeTypes: { value: OutcomeType; label: string }[] = [
  { value: "alignment", label: "Alignment" },
  { value: "growth", label: "Growth" },
  { value: "launch", label: "Launch" },
  { value: "transformation", label: "Transformation" },
]

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "national-service-brand-narrative",
    title: "from fragmented messaging to one powerful narrative.",
    subtitle: "how a national solutions company unified its brand and internal story before a major expansion.",
    featured: true,
    client: {
      industry: "print & logistics",
      size: "national enterprise",
      location: "united states",
      focus: "brand strategy"
    },
    challenge: "the brand was stretched across channels, regions and teams. messaging was inconsistent, leading to internal confusion and a diluted market presence. five different regions told five different stories about who they were.",
    solution: [
      "audited internal and external communication, brand touchpoints and key experiences across all five regions",
      "facilitated leadership sessions to align on vision, priorities and realities",
      "crafted a new brand narrative, positioning and messaging hierarchy",
      "created practical tools for teams: messaging guides, story frameworks, internal decks",
      "supported roll-out through key meetings, events and internal launches"
    ],
    results: [
      "leadership alignment around one clear story",
      "faster approval and decision cycles",
      "more cohesive campaigns and sales narratives",
      "positive feedback from teams and clients"
    ],
    metrics: [
      { label: "regions unified", value: "5", description: "under one narrative" },
      { label: "decision speed", value: "3x", description: "faster approvals" },
      { label: "team alignment", value: "94%", description: "positive feedback" }
    ],
    testimonial: "this finally feels like us. we now have a shared language for growth that every single team member can speak.",
    testimonialAuthor: "chief marketing officer",
    image: "/Frame.avif",
    galleryImages: ["/brandfulness.avif", "/lighting.avif"],
    tags: ["brand strategy", "transformation", "messaging", "enterprise"],
    outcome: "transformation",
    year: "2024"
  },
  {
    slug: "executive-retreat-strategy",
    title: "turning a corporate event into a strategy accelerator.",
    subtitle: "how we transformed an executive retreat into a 90-day execution plan that actually got executed.",
    featured: true,
    client: {
      industry: "technology",
      size: "mid-market",
      location: "northeast",
      focus: "experiences & events"
    },
    challenge: "annual offsites felt like 'just another meeting'. the team needed a turning point to align on a 3-year roadmap, but previous attempts had resulted in beautiful slide decks that gathered dust.",
    solution: [
      "designed an experience-led agenda focused on outcomes, not presentations",
      "aligned speakers and sessions to a central narrative thread",
      "facilitated real-time decision making workshops with clear accountability",
      "created post-event communication plan to maintain momentum"
    ],
    results: [
      "90-day execution plan agreed upon by all leaders",
      "renewed energy and alignment across the c-suite",
      "highest rated offsite in company history",
      "85% of commitments delivered within deadline"
    ],
    metrics: [
      { label: "execution rate", value: "85%", description: "commitments delivered" },
      { label: "satisfaction", value: "#1", description: "highest rated offsite ever" },
      { label: "roadmap clarity", value: "3yr", description: "plan agreed upon" }
    ],
    testimonial: "for the first time, our offsite actually changed how we operate. we left with decisions, not just ideas.",
    testimonialAuthor: "ceo",
    image: "/Champagne Glasses.avif",
    galleryImages: ["/Black Gift Box.avif", "/lighting.avif"],
    tags: ["events", "strategy", "leadership", "alignment"],
    outcome: "alignment",
    year: "2024"
  },
  {
    slug: "c-level-thought-leadership",
    title: "from invisible to in-demand on linkedin.",
    subtitle: "how a c-level leader built a thought-leadership presence that attracted the right partnerships.",
    featured: true,
    client: {
      industry: "professional services",
      size: "boutique firm",
      location: "global",
      focus: "content & thought leadership"
    },
    challenge: "a visionary leader with deep expertise but no digital footprint. opportunities were being missed because their voice wasn't visible. competitors with less experience were dominating the conversation.",
    solution: [
      "clarified the leader's unique point of view and three core content pillars",
      "developed a consistent publishing cadence for linkedin and industry publications",
      "ghostwrote high-impact articles, posts, and op-eds",
      "built a signature framework that became associated with the leader's name"
    ],
    results: [
      "3x increase in profile views and engagement within 6 months",
      "invitations to speak at 4 major industry conferences",
      "inbound partnership inquiries from key target accounts",
      "featured in 2 national business publications"
    ],
    metrics: [
      { label: "profile growth", value: "3x", description: "views & engagement" },
      { label: "speaking invites", value: "4", description: "major conferences" },
      { label: "media features", value: "2", description: "national publications" }
    ],
    testimonial: "paula helped me find my voice and put it in places that matter. the opportunities that followed changed everything.",
    testimonialAuthor: "managing partner",
    image: "/Image by Jonathan Farber.avif",
    tags: ["personal branding", "linkedin", "content", "executive"],
    outcome: "growth",
    year: "2023"
  },
  {
    slug: "healthcare-rebrand-launch",
    title: "repositioning for the next chapter of growth.",
    subtitle: "how a regional healthcare network refreshed its brand to attract top talent and community trust.",
    client: {
      industry: "healthcare",
      size: "regional network",
      location: "midwest",
      focus: "brand strategy"
    },
    challenge: "the healthcare network had grown through acquisitions but never unified its identity. patients and staff were confused about what the organization stood for. talent acquisition was suffering.",
    solution: [
      "conducted stakeholder interviews across leadership, clinical staff, and community members",
      "developed a brand platform rooted in the organization's unique heritage and future vision",
      "created messaging frameworks for internal and external audiences",
      "designed brand rollout strategy across 12 locations"
    ],
    results: [
      "unified identity across all 12 locations",
      "40% increase in employment applications within first quarter",
      "improved patient satisfaction scores",
      "stronger community partnership engagement"
    ],
    metrics: [
      { label: "locations unified", value: "12", description: "single identity" },
      { label: "applications", value: "+40%", description: "first quarter" },
      { label: "patient scores", value: "↑", description: "satisfaction improved" }
    ],
    testimonial: "we finally have a brand that reflects who we actually are — and who we're becoming.",
    testimonialAuthor: "chief experience officer",
    image: "/hero-image.avif",
    tags: ["rebrand", "healthcare", "transformation", "talent"],
    outcome: "launch",
    year: "2023"
  },
  {
    slug: "manufacturing-internal-alignment",
    title: "bridging the gap between floor and c-suite.",
    subtitle: "how we helped a manufacturing company create communication systems that actually work.",
    client: {
      industry: "manufacturing",
      size: "mid-market",
      location: "southeast",
      focus: "koolture & teams"
    },
    challenge: "critical information wasn't reaching the production floor. the c-suite spoke one language; the frontline spoke another. safety incidents were increasing, and morale was declining.",
    solution: [
      "audited communication flows and identified breakdown points",
      "designed a multi-channel internal communication system",
      "trained floor supervisors as communication champions",
      "created visual communication tools for non-desk workers"
    ],
    results: [
      "50% reduction in communication-related incidents",
      "improved cross-departmental collaboration",
      "higher employee engagement scores",
      "supervisors reporting increased confidence in team leadership"
    ],
    metrics: [
      { label: "incidents", value: "-50%", description: "communication-related" },
      { label: "engagement", value: "↑", description: "employee scores" },
      { label: "confidence", value: "high", description: "supervisor reports" }
    ],
    testimonial: "for the first time, our values aren't just on the wall — they're in the work.",
    testimonialAuthor: "vp of operations",
    image: "/lighting.avif",
    tags: ["internal comms", "manufacturing", "koolture", "training"],
    outcome: "alignment",
    year: "2024"
  },
  {
    slug: "nonprofit-anniversary-celebration",
    title: "turning 50 years into a springboard for the next 50.",
    subtitle: "how we designed an anniversary campaign that honored the past and funded the future.",
    client: {
      industry: "nonprofit",
      size: "regional organization",
      location: "northeast",
      focus: "experiences & events"
    },
    challenge: "the organization's 50th anniversary was approaching, but leadership wanted more than a celebration — they wanted a campaign that would reinvigorate donors and attract new supporters.",
    solution: [
      "developed anniversary campaign theme connecting heritage to future vision",
      "designed flagship gala experience with storytelling at its core",
      "created donor engagement journey across multiple touchpoints",
      "produced video content featuring impact stories from five decades"
    ],
    results: [
      "exceeded fundraising goal by 25%",
      "largest gala attendance in organization history",
      "30% increase in new donor acquisition",
      "featured in regional media coverage"
    ],
    metrics: [
      { label: "fundraising", value: "+25%", description: "exceeded goal" },
      { label: "new donors", value: "+30%", description: "acquisition increase" },
      { label: "attendance", value: "#1", description: "record gala" }
    ],
    testimonial: "this wasn't just an event — it was a movement. our community has never been more energized.",
    testimonialAuthor: "executive director",
    image: "/brandfulness.avif",
    galleryImages: ["/Champagne Glasses.avif", "/Black Gift Box.avif"],
    tags: ["events", "nonprofit", "campaign", "fundraising"],
    outcome: "growth",
    year: "2024"
  },
  {
    slug: "tech-startup-positioning",
    title: "cutting through the noise in a crowded category.",
    subtitle: "how a b2b tech startup found its voice and won enterprise clients.",
    client: {
      industry: "technology",
      size: "startup",
      location: "west coast",
      focus: "brand strategy"
    },
    challenge: "the startup had strong technology but struggled to differentiate in a sea of similar solutions. their pitch deck changed weekly. sales cycles were getting longer and win rates were declining.",
    solution: [
      "conducted customer research to identify true differentiators",
      "developed positioning strategy focused on unique value proposition",
      "created sales enablement materials with consistent messaging",
      "trained sales team on new narrative framework"
    ],
    results: [
      "sales cycle reduced by 30%",
      "win rate increased by 45%",
      "series b funding secured at higher valuation",
      "consistent messaging across all go-to-market materials"
    ],
    metrics: [
      { label: "sales cycle", value: "-30%", description: "time reduction" },
      { label: "win rate", value: "+45%", description: "increase" },
      { label: "valuation", value: "↑", description: "series b success" }
    ],
    testimonial: "we finally sound like a company worth betting on — because we are.",
    testimonialAuthor: "ceo & co-founder",
    image: "/Black Gift Box.avif",
    tags: ["positioning", "startup", "sales enablement", "growth"],
    outcome: "growth",
    year: "2023"
  }
]

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.slug === slug)
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return portfolioItems.filter(item => item.featured)
}

export function getRelatedPortfolio(currentSlug: string, limit: number = 2): PortfolioItem[] {
  const current = getPortfolioBySlug(currentSlug)
  if (!current) return []
  
  return portfolioItems
    .filter(item => item.slug !== currentSlug)
    .filter(item => 
      item.client.focus === current.client.focus || 
      item.outcome === current.outcome ||
      item.client.industry === current.client.industry
    )
    .slice(0, limit)
}
