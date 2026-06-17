// Single source of truth — both the live site and the downloadable PDF read from this file.
// Update dates, graduation year, and social links here once you have them.

export const personal = {
  name: 'Kiara Mary Ehiri Ihechi',
  headline: 'Video Annotation & Data Quality Specialist',
  tagline: 'Precision-driven. Detail-obsessed. Ready to label the future.',
  phone: '08072666768',
  email: 'anitaehiria@gmail.com',
  location: 'Lagos, Nigeria',
  photo: '/images/kiara-profile.jpg',
  linkedin: null as string | null,   // Replace null with your LinkedIn URL e.g. 'https://linkedin.com/in/yourname'
  instagram: null as string | null,  // Replace null with your Instagram URL
}

export const summary =
  'Kiara Mary Ehiri Ihechi is a detail-driven Video Annotation and Data Quality Specialist with hands-on experience in content review, data labeling, and digital asset management. Adept at applying rigorous quality standards to ensure accuracy and consistency across diverse media formats, she brings a structured, methodical approach honed through brand support and social-media management roles. An entrepreneurially minded professional and founder of Kiara\'s Cravings, she combines operational discipline with strong communication skills — qualities that translate directly into high-precision AI data annotation workflows.'

export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Annotation & Quality',
    skills: ['Video Annotation', 'Data Labeling', 'Quality Assurance', 'Content Review', 'Attention to Detail'],
  },
  {
    category: 'Digital & Content',
    skills: ['Social Media Management', 'Internet Research', 'Digital Asset Management'],
  },
  {
    category: 'Professional & Collaboration',
    skills: ['Communication Skills', 'Time Management', 'Microsoft Office', 'Team Collaboration'],
  },
]

export type ExperienceItem = {
  role: string
  company: string
  period: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Social Media Handler',
    company: 'Emerie Clothing Brand',
    period: '[Add Date Range]',
    bullets: [
      'Spearheaded daily social media operations, overseeing content scheduling, digital asset organisation, and audience engagement strategies.',
      'Upheld rigorous content-accuracy standards by reviewing and categorising brand materials prior to publication across all managed platforms.',
      'Streamlined digital workflows to ensure consistent, on-brand delivery — demonstrating the same precision and throughput discipline required in large-scale data annotation.',
    ],
  },
  {
    role: 'Brand Support & Content Management',
    company: 'Multiple Brands',
    period: '[Add Date Range]',
    bullets: [
      'Partnered with multiple brands to develop and curate digital content, maintaining strict attention to detail throughout the review and approval process.',
      'Systematically organised and audited digital assets to ensure quality, consistency, and adherence to each brand\'s guidelines.',
      'Delivered reliable content management support across diverse industries, demonstrating adaptability and precision under varied requirements.',
    ],
  },
  {
    role: 'Founder & Owner',
    company: "Kiara's Cravings",
    period: '[Add Date Range]',
    bullets: [
      'Founded and independently managed a food business, overseeing all aspects of daily operations from order coordination to customer relations.',
      'Demonstrated leadership and multitasking ability by single-handedly managing production schedules, inventory, and client communications.',
      'Built and sustained a loyal customer base through consistent service quality, operational discipline, and strong attention to detail.',
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
    period: '[Add Start Year] – Present',
    status: 'In Progress',
  },
  {
    institution: 'Our Lady of Apostles Secondary School',
    qualification: 'Secondary School Certificate',
    period: '[Add Year]',
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
    title: 'Annotation Walkthrough Demo',
    description: 'A step-by-step demonstration of video annotation techniques and labeling workflow.',
    src: null,
  },
  {
    title: 'Content Review Sample',
    description: 'Showcasing the quality-control process applied to digital content review tasks.',
    src: null,
  },
  {
    title: 'Personal Introduction',
    description: 'A brief video introduction covering my background, skills, and goals.',
    src: null,
  },
]
