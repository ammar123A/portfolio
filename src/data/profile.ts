// Bio, services and contact. Source: PORTFOLIO.md sections 1–3 and 6.
export const profile = {
  name: 'Ammar Rosli',
  role: 'Full-stack Developer',
  location: 'Malaysia',
  pitch:
    'I build web and mobile systems that replace spreadsheets, WhatsApp threads and manual work: booking and payments, dashboards, AI support and automation.',
  bio: 'Full-stack developer working across Vue, React, Laravel, Node.js, Spring Boot and Flutter. Currently leading development of BUK at AGAATT, and taking freelance projects for businesses that need a working system, not just a website.',
  whatsapp: 'https://wa.me/601111474745?text=' + encodeURIComponent('Hi Ammar, I saw your portfolio and would like to discuss a project.'),
  whatsappDisplay: '011-1147 4745',
  email: 'pizsammar@gmail.com',
  github: 'https://github.com/ammar123A',
}

export const services = [
  { title: 'Business systems & dashboards', text: 'CRM, inventory, HR and admin panels that replace Excel and manual work.' },
  { title: 'Booking & payment systems', text: 'Online booking with staff assignment, Stripe payments and no double bookings.' },
  { title: 'Mobile apps', text: 'Android and iOS apps from one Flutter codebase, with the backend to run them.' },
  { title: 'AI customer support', text: 'Chatbots that answer from your own FAQ, with a human checking replies.' },
  { title: 'WhatsApp automation', text: 'Bots that turn group chats into tracked records and daily reports.' },
  { title: 'Company & event websites', text: 'Fast, mobile-first sites that are easy to update.' },
]

export const stack = [
  { group: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Inertia'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Laravel', 'Spring Boot', 'FastAPI', 'Go'] },
  { group: 'Mobile', items: ['Flutter', 'Dart'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Supabase', 'pgvector'] },
  { group: 'Cloud & tools', items: ['Docker', 'Vercel', 'Netlify', 'AWS Lambda', 'Stripe', 'Socket.IO'] },
]

export const steps = [
  { title: 'Discuss', text: 'We talk through your problem and what a good result looks like.' },
  { title: 'Plan & quote', text: 'A written scope, timeline and fixed quote before any work starts.' },
  { title: 'Build', text: 'Weekly demos so you see progress and can steer early.' },
  { title: 'Launch & support', text: 'Deployment, handover and support after go-live.' },
]
