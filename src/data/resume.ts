// Single source of truth — both the live site and the downloadable PDF read from this file.
// Update dates, graduation year, and social links here once you have them.

export const personal = {
  name: 'Anita Ehiri Ihechi',
  headline: 'Social Media Manager · Content Strategist · Chef',
  tagline: 'Creative. Organised. Passionate about building brands.',
  phone: '08072666768',
  email: 'anitaehiria@gmail.com',
  location: 'Lagos, Nigeria',
  photo: '/images/kiara-profile.jpg',
  linkedin: null as string | null,   // Replace null with your LinkedIn URL e.g. 'https://linkedin.com/in/yourname'
  instagram: null as string | null,  // Replace null with your Instagram URL
  tiktok: 'https://www.tiktok.com/@kiaracravings_3' as string | null,
}

export const summary =
  'Anita Ehiri Ihechi is a Social Media Manager, Content Strategist, and entrepreneur based in Lagos, Nigeria. She has experience managing social media platforms, developing creative content, creating marketing strategies, and helping brands connect with their target audience. With a background in the food and hospitality industry, Anita has also worked as a Head Chef, where she gained experience in kitchen management, food preparation, quality control, and team coordination. She is also the founder of Kiara\'s Cravings, her food business in Lagos, which has strengthened her skills in business management, customer service, marketing, and brand development. Anita is creative, organised, adaptable, and passionate about building brands, creating meaningful content, and continuously developing her professional skills.'

export const skills: string[] = [
  'Social Media Management',
  'Content Strategy & Creation',
  'Creative Problem-Solving',
  'Leadership & Team Coordination',
  'Communication & Customer Relations',
  'Business & Brand Management',
  'Time Management & Organisation',
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Social Media Manager and Content Strategist',
    company: 'Hwy Granola',
    period: '2026 – Present',
    bullets: [
      'Serve as Social Media Manager and Content Strategist for Hwy Granola, a granola brand, planning and scheduling content across its platforms.',
      'Developed the content strategy and campaign calendar around the brand\'s goals and target audience.',
      'Provide creative direction for photo and video content and manage the digital asset library, keeping everything consistent and on-brand.',
    ],
  },
  {
    role: 'Founder',
    company: "Kiara's Cravings",
    period: '2023 – Present',
    bullets: [
      'Founded and manage a Lagos-based food business, overseeing operations, customer service, marketing, and brand development.',
      'Built a loyal customer base through consistent food quality, reliable service, and a recognisable brand.',
      'Handle day-to-day business decisions, from menu and pricing to promotion, supplier coordination, and inventory.',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Emerie Clothing Brand',
    period: '2024 – 2025',
    bullets: [
      'Managed daily social media operations, planning and scheduling content across all brand platforms to keep a consistent posting rhythm.',
      'Grew audience engagement by responding to comments and messages, building community, and tracking what content performed best.',
      'Maintained a cohesive brand voice and visual identity across every post, story, and campaign.',
    ],
  },
  {
    role: 'Head Chef',
    company: 'The Farm Restaurant',
    period: '2023 – 2025',
    bullets: [
      'Led the kitchen as Head Chef, overseeing daily kitchen operations, food preparation, and service.',
      'Maintained food quality and safety standards through consistent quality control and portioning.',
      'Coordinated and supervised the kitchen team, managing prep schedules and station assignments.',
    ],
  },
]

export type EducationItem = {
  institution: string
  qualification: string
  period: string
  status?: string
}

export const education: EducationItem[] = [
  {
    institution: 'Miva University',
    qualification: 'Entrepreneurship',
    period: '2025 – Present',
    status: 'In Progress',
  },
  {
    institution: 'Our Lady of Apostles Secondary School',
    qualification: 'Secondary School Certificate',
    period: '2022',
  },
]

// To add a real video: place the .mp4 file in /public/videos/ and set its path here.
// When src is null, the portfolio card shows a "coming soon" placeholder automatically.
export type VideoItem = {
  title: string
  description: string
  src: string | null
  thumbnail?: string
}

export const videos: VideoItem[] = [
  {
    title: 'Content Campaign Walkthrough',
    description: 'A step-by-step look at planning and building a social media content campaign from concept to schedule.',
    src: null,
  },
  {
    title: 'Brand Content Sample',
    description: 'Showcasing creative content produced for a brand — from idea and direction to the finished post.',
    src: null,
  },
  {
    title: 'Personal Introduction',
    description: 'A brief video introduction covering my background, skills, and goals.',
    src: null,
  },
]
