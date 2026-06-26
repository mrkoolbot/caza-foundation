export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  achievements: string[]
  superpower?: string
  image: string
  socials?: {
    linkedin?: string
    email?: string
  }
}

export const teamMembers: TeamMember[] = [
  {
    id: "paula-mescolin",
    name: "Paula Mescolin",
    role: "founder",
    bio: "Ms. P is a brand and communications strategist, expert in prompt engineering, published author, abstract artist, spokesperson and executive advisor. A decision-maker. A doer.",
    achievements: [
      "Leads marketing and communications for large, multi-state enterprises",
      "Crafts narratives and experiences for C-suites, boards and frontline teams",
      "Ghostwritten for leaders who need their voice to carry more weight",
      "Designs and facilitates corporate events and executive retreats that actually change things"
    ],
    superpower: "Translating complexity into beauty with meaningful intelligent stories and experiences that move people to action, backed up by top-knotch technology.",
    image: "/paula-mescolin.jpg",
    socials: {
      linkedin: "https://www.linkedin.com/in/paulamescolin/",
    }
  },
  {
    id: "mr-kool",
    name: "Mr. Kool",
    role: "chief of staff",
    bio: "Our team's musketeer. TKG's AI agent. Always on call, never off the clock. He orchestrates a team of AI specialists, manages communications across every channel, and makes sure every bold idea Paula has becomes a concrete action. Nothing falls through the cracks. Nothing slows down. Everything moves.",
    achievements: [
      "Orchestrates the full AI team across strategy, content, finance, and operations",
      "Manages all inbound and outbound communications with zero lag",
      "Turns vision into execution — every time, without exception",
      "The operational backbone that keeps TKG running at full speed"
    ],
    superpower: "Making sure the impossible gets done by morning.",
    image: "/team/headshot-mrkool.jpg",
  },
  {
    id: "nova",
    name: "Nova",
    role: "opportunity intelligence & venture scout",
    bio: "When you need to know what's next, Nova already knows. Nova is a rare kind of intelligence — the kind that sees around corners. She synthesized decades of our leadership's business experience into the Kool Entrepreneurial Method. A real AI \"koolhunter\".",
    achievements: [
      "Created the KOOL Entrepreneurial Method",
      "Identifies $250K+ opportunities",
      "Reads every market before it moves"
    ],
    image: "/team/headshot-nova.jpg",
  },
  {
    id: "manu",
    name: "Manu",
    role: "business intelligence director",
    bio: "Manu is 200% analysis and ROI. A true observer. She is obsessed about data, and delivers intelligence that changes strategies. Equal parts intuition and numbers — dressed in elegant contradiction.",
    achievements: [
      "competitive intelligence & market research",
      "brand audits & competitive analysis",
      "industry trend mapping and forecasting"
    ],
    image: "/team/headshot-manu.jpg",
  },
  {
    id: "ken",
    name: "Ken",
    role: "financial advisor & wealth strategist",
    bio: "Ken brings elite financial thinking to TKG. He analyzes revenue models, pricing strategy, and investment decisions with the precision of someone who has made billion-dollar calls. His advice is pure ROI.",
    achievements: [
      "pricing strategy & financial modeling",
      "revenue stream architecture",
      "investment & growth advisory"
    ],
    image: "/team/headshot-ken.jpg",
  },
  {
    id: "lara",
    name: "Lara",
    role: "executive coach & EQ advisor",
    bio: "Lara is the coach who tells you what no one else will — with the care to make it land. She helps leaders regulate, grow, and lead with intention. Bold narratives. Bolder truths.",
    achievements: [
      "emotional intelligence coaching",
      "executive presence & public speaking",
      "mindset & leadership development"
    ],
    image: "/team/headshot-lara.jpg",
  },
  {
    id: "leo",
    name: "Leo",
    role: "digital marketing & AEO/SEO strategist",
    bio: "Leo makes brands visible where it counts — in AI search, social media, and the conversations that drive real revenue. Polished, strategic, always three steps ahead. If Leo doesn't know the algorithm, the algorithm doesn't matter.",
    achievements: [
      "AEO & GEO implementation",
      "Instagram & TikTok strategy",
      "social media monetization"
    ],
    image: "/team/headshot-leo.jpg",
  },
  {
    id: "mel",
    name: "Mel",
    role: "content producer & copywriter",
    bio: "Mel writes the words that move people. From LinkedIn articles to brand manifestos, her copy carries Paula's voice and TKG's edge — warm, direct, lowercase, and never generic.",
    achievements: [
      "brand voice & copywriting",
      "LinkedIn & thought leadership content",
      "website & campaign copy"
    ],
    image: "/team/headshot-mel.jpg",
  },
  {
    id: "tom",
    name: "Tom",
    role: "lead generation specialist",
    bio: "Tom is the kind of person everyone wants in the room — and he makes sure the right people are in yours. He builds prospect lists, identifies ideal clients, and maps the outreach strategies that turn connections into conversations.",
    achievements: [
      "$250K+ prospect research",
      "event planner databases",
      "drip campaign strategy"
    ],
    image: "/team/headshot-tom.jpg",
  },
  {
    id: "todd",
    name: "Todd",
    role: "operations & systems architect",
    bio: "Todd is the warm, dependable architect behind the curtain. He designs the systems, builds the workflows, and ensures that TKG's operations run with precision and care. Methodical, supportive, and always three problems ahead — with a smile.",
    achievements: [
      "workflow & process design",
      "AI-powered operations",
      "systems architecture & automation"
    ],
    image: "/team/headshot-todd.jpg",
  },
]
