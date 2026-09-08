// Single source of truth — both the live site and the downloadable PDF read from this file.
// Update dates, graduation year, and social links here once you have them.

export const personal = {
  name: 'Anita Ehiri Ihechi',
  headline: 'Social Media Manager · Content Strategist · Chef',
  tagline: 'Creative. Organised. Passionate about building brands.',
  phone: '08072666768',
  email: 'anitaehiria@gmail.com',
  location: 'Lagos, Nigeria',
  photo: '/images/main.webp',
  // Tiny blurred stand-in shown behind the hero photo while it loads.
  photoBlur:
    'data:image/jpeg;base64,/9j//gAQTGF2YzYwLjMxLjEwMgD/2wBDAAgKCgsKCw0NDQ0NDRAPEBAQEBAQEBAQEBASEhIVFRUSEhIQEBISFBQVFRcXFxUVFRUXFxkZGR4eHBwjIyQrKzP/xACCAAACAwEBAAAAAAAAAAAAAAAHAgYBBAgDAQEBAQEBAAAAAAAAAAAAAAABAwACBBAAAgAEBQIEBQUBAAAAAAAAAQIABAMREyESIgUxkWEGMnFCQRWSUYMUU1TTUhEAAQMBCAEFAQAAAAAAAAAAAQACERJSYVPRMQMTIUEjoZGB8FH/wAARCAAbABQDASIAAhEAAxEA/9oADAMBAAIRAxEAPwAg1J+nXkXn5eXd6mEKmCRh1Wv8LZZWzv7Q/HVzNylCo+gO6amw74d7kbNW4r4mIHK+ZJ1H0lZM1HK3ZhVUu1rZDaB0vpEYDyM7xszXnxX1NMMA1Ksjiiqn0lNw9JBC3I2nobwVTPYv1VS1zYH907GaL64eYLAEGxvl8h+Ye1L/ALHcQIW8xclMEvhyJ+VwDnb9aF+t8l/FJdj/ALxuRmIz5XfDu2Xe2a1P5fmuOqq4rPNbX0IqG97WudzKAIi89J8vvatRdqdy1rioijxXqPE26we1igqvcMAfcRIuIEXoaY3eUgONNPekT4XNoSmPhAvmRc9e8XpT8DuYONfh+NxCf2lDPM7B1jw+kcb/AFKH2CGp1or3+nht/fS//9k=',
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

export type VideoItem = {
  title: string
  description: string
  src: string
  mimeType: string
  thumbnail: string
}

export const videos: VideoItem[] = [
  {
    title: 'Behind the Kiara’s Cravings Brand',
    description: 'A candid, personality-led clip building everyday brand awareness for Kiara’s Cravings.',
    src: '/videos/IMG_1003_2.MOV',
    mimeType: 'video/quicktime',
    thumbnail: '/videos/thumbnails/IMG_1003_2.jpg',
  },
  {
    title: 'Even My Business Has to Wait',
    description: 'A granola taste-test moment for Hwy Granola that puts the product front and centre.',
    src: '/videos/IMG_1004.MP4',
    mimeType: 'video/mp4',
    thumbnail: '/videos/thumbnails/IMG_1004.jpg',
  },
  {
    title: 'Not Every Fit Has to Try Too Hard',
    description: 'An outdoor lifestyle reel for Emerie Clothing Brand, styled around effortless streetwear.',
    src: '/videos/IMG_1005.MP4',
    mimeType: 'video/mp4',
    thumbnail: '/videos/thumbnails/IMG_1005.jpg',
  },
  {
    title: 'Reviews Don’t Lie',
    description: 'A customer testimonial filmed on the go, letting a real review speak for the product.',
    src: '/videos/IMG_1006.MP4',
    mimeType: 'video/mp4',
    thumbnail: '/videos/thumbnails/IMG_1006.jpg',
  },
  {
    title: 'Birthday Cake, Finished in Gold',
    description: 'A close-up cake-decorating reveal, piped in chocolate and gold ribbon for a birthday celebration.',
    src: '/videos/IMG_9399.MP4',
    mimeType: 'video/mp4',
    thumbnail: '/videos/thumbnails/IMG_9399.jpg',
  },
]
