// Bio, services and contact. Source: PORTFOLIO.md sections 1–3 and 6.
export const profile = {
  name: 'Ammar Rosli',
  role: 'Full-stack Developer',
  location: 'Malaysia',
  headline: 'Stop running your business on spreadsheets and WhatsApp threads.',
  pitch:
    'I build the web and mobile systems that replace them: online booking with payments, stock and staff management, AI customer support, and apps your customers can download.',
  bio: "I'm Ammar, a full-stack developer in Malaysia. At AGAATT I lead development of BUK, a booking app for rides, barbers, cleaners and car wash. I also take freelance projects for businesses. You deal with me directly, from the first chat to launch day.",
  whatsapp: 'https://wa.me/601111474745?text=' + encodeURIComponent("Hi Ammar, I saw your portfolio. I'd like to talk about a project for my business."),
  whatsappDisplay: '011-1147 4745',
  email: 'pizsammar@gmail.com',
  github: 'https://github.com/ammar123A',
}

export const services = [
  { title: 'Replace your Excel sheets', text: 'Customers, stock, orders, staff and payroll in one system your whole team can use.' },
  { title: 'Take bookings and payments online', text: 'Customers book and pay by card, staff are assigned automatically, and no slot is ever booked twice.' },
  { title: 'Get your own mobile app', text: 'An Android and iOS app from one codebase, plus the admin panel and backend behind it.' },
  { title: 'Answer customers faster with AI', text: 'A chatbot that answers from your own FAQ, with your team approving replies before they go out.' },
  { title: 'Automate your WhatsApp groups', text: 'A bot that turns group messages into tracked records, stock counts and daily reports.' },
  { title: 'A website that wins trust', text: 'Fast company and event sites that look right on a phone and are easy to update.' },
]

export const stack = [
  { group: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Inertia'] },
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Laravel', 'Spring Boot', 'FastAPI', 'Go'] },
  { group: 'Mobile', items: ['Flutter', 'Dart'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Supabase', 'pgvector'] },
  { group: 'Cloud & tools', items: ['Docker', 'Vercel', 'Netlify', 'AWS Lambda', 'Stripe', 'Socket.IO'] },
]

export const steps = [
  { title: 'Tell me the problem', text: "A WhatsApp chat or call about what's slowing you down. No tech knowledge needed." },
  { title: 'Get a clear quote', text: 'A written scope, timeline and price before any work starts.' },
  { title: 'See progress as it happens', text: 'Regular demos, so you can steer early instead of at the end.' },
  { title: 'Launch and support', text: 'I deploy it, show your team how to use it, and stay on for fixes after launch.' },
]
