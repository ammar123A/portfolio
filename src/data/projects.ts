// Case studies. Source: PORTFOLIO.md section 5. Screenshots go in public/projects/<slug>/.
export interface Project {
  slug: string
  title: string
  client: string
  summary: string
  problem: string
  built: string
  features: string[]
  stack: string[]
  role: string
  status: string
  link?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: 'buk',
    title: 'BUK: services marketplace',
    client: 'AGAATT',
    summary: 'One app for rides, barbers, cleaners and car wash across Malaysia and Singapore.',
    problem:
      'Customers use a different app for every service. The inherited vendor codebase could not grow beyond ride-hailing and pointed at production by default.',
    built:
      'A rebuild of the platform as one marketplace where each service type plugs into a shared core for booking, payments, identity and money.',
    features: [
      'Shared core with pluggable service types: pricing, matching, location, job flow and provider checks differ per service',
      'Customer app in English and Bahasa Melayu',
      'Admin panel for provider verification',
      'Safe, repeatable database setup and shared typed contracts',
    ],
    stack: ['Flutter', 'Node.js 22', 'TypeScript', 'Express 5', 'Prisma', 'PostgreSQL', 'Redis', 'React', 'Zod'],
    role: 'Lead developer: architecture, backend and mobile app',
    status: 'In development',
  },
  {
    slug: 'agaatt-website',
    title: 'AGAATT corporate website',
    client: 'AGAATT',
    summary: 'A modern company website for an IT services firm, with its online store.',
    problem:
      "The old site didn't present AGAATT's services (cloud, virtualization, system integration, managed IT, telecom, surveillance) or its online store well.",
    built: 'A new single-page website covering services, clients, partners, news and contact, with the AGAATT Outlet storefront.',
    features: [
      'Animated sections for services, clients and partners',
      'Content kept in typed data files so copy is easy to update',
      'Contact form with spam protection',
    ],
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'GSAP', 'Formspree', 'reCAPTCHA'],
    role: 'Sole developer',
    status: 'Built for AGAATT',
  },
  {
    slug: 'sepatah',
    title: 'Sepatah: wedding platform',
    client: 'Freelance client',
    summary: 'Digital invitations, RSVP, video wishes, QR guestbook and photo booth for Malaysian weddings.',
    problem:
      'Couples want a digital invitation plus a way to collect guest wishes, videos and photos on the day, all in one place they keep afterwards.',
    built: 'One platform that runs many weddings: invitation site, RSVP, video wishes, QR guestbook, photo booth and private couple galleries.',
    features: [
      'Invitation with countdown, Maps/Waze links and add-to-calendar',
      'RSVP with a 30-second video wish',
      'QR video guestbook that only opens during the event',
      'In-browser photo booth with frames',
      'Live slideshow of approved photos and moderation from a phone',
      'Private galleries for the couple, with download and auto-expiry emails',
    ],
    stack: ['Vue 3', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime', 'Edge Functions', 'Resend', 'Netlify'],
    role: 'Sole developer (freelance)',
    status: 'Live',
    link: 'https://sepatah.netlify.app/',
  },
  {
    slug: 'retailflow',
    title: 'RetailFlow: business management system',
    client: 'Product',
    summary: 'CRM, inventory and HR for small retail and e-commerce shops, in one system.',
    problem: 'Small retail and e-commerce shops run on Excel sheets, WhatsApp follow-ups and manual payroll.',
    built: 'One system with three modules: CRM, ERP and HR.',
    features: [
      'Customers, leads, purchase history and segmentation',
      'Inventory, products, sales orders, suppliers and invoices',
      'Employees, attendance, leave and payroll',
      'Role-based access with secure login',
    ],
    stack: ['Spring Boot 3', 'Java 21', 'React 18', 'TypeScript', 'shadcn/ui', 'Tailwind', 'PostgreSQL', 'Docker'],
    role: 'Sole developer',
    status: 'Demo',
    link: 'https://github.com/ammar123A/RetailFlow',
  },
  {
    slug: 'smart-booking',
    title: 'Smart Booking: bookings with payments',
    client: 'Product',
    summary: 'Service booking that assigns staff, takes payment and never double-books.',
    problem: 'Service businesses lose money to double bookings and unpaid reservations.',
    built: 'A booking system that assigns any available staff member, takes payment, and cancels unpaid bookings automatically.',
    features: [
      'Auto-assigns an available staff member',
      'Double booking blocked at the database level',
      'Stripe Checkout with webhook confirmation',
      'Unpaid bookings expire after 10 minutes',
      'Roles and permissions for admins and staff',
    ],
    stack: ['Laravel', 'Inertia', 'Vue', 'PostgreSQL', 'Stripe', 'Queues'],
    role: 'Sole developer',
    status: 'Demo',
    link: 'https://github.com/ammar123A/smart-booking',
  },
  {
    slug: 'ecommerce-ai-chat',
    title: 'AI customer support for online stores',
    client: 'Product',
    summary: 'AI drafts support replies from the store FAQ, a human approves them, managers see the analytics.',
    problem:
      'Online stores spend support time on the same questions, answer slowly, and have no insight into what customers ask.',
    built: "A support dashboard where AI drafts answers from the store's FAQ and a human approves or edits them, with analytics for managers.",
    features: [
      "AI answers grounded in the merchant's own FAQ (RAG)",
      'Human-in-the-loop review before replies go out',
      'Real-time live chat',
      'Analytics on volume, response time and common issues',
    ],
    stack: ['React 18', 'TypeScript', 'Node.js', 'Socket.IO', 'Prisma', 'PostgreSQL', 'pgvector', 'FastAPI', 'LangChain', 'OpenAI'],
    role: 'Sole developer',
    status: 'Demo',
    link: 'https://github.com/ammar123A/Ecommerce-AI-Chat',
  },
  {
    slug: 'smart-monitoring',
    title: 'Real-time machine monitoring',
    client: 'Product',
    summary: 'A live factory dashboard that streams machine status and raises alerts.',
    problem: 'Factory teams find out a machine overheated or went offline too late.',
    built: 'A live dashboard that streams machine status and raises alerts.',
    features: [
      'Live machine status cards',
      'Historical telemetry charts',
      'Temperature and offline alerts with cooldown, so no alert spam',
      'Acknowledge alerts; admin, operator and viewer roles',
    ],
    stack: ['NestJS', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.IO', 'Recharts', 'Docker'],
    role: 'Sole developer',
    status: 'Demo with machine simulator',
    link: 'https://github.com/ammar123A/smart-monitoring-dashboard',
  },
  {
    slug: 'whatsapp-site-bot',
    title: 'WhatsApp bot for construction sites',
    client: 'Product',
    summary: "Turns a site's WhatsApp group into a progress, materials and issue tracker.",
    problem: 'Site progress, materials and issues get lost in a busy WhatsApp group.',
    built: "A bot that lives in the site's WhatsApp group and turns short commands into a structured record.",
    features: [
      'Daily progress by category',
      'Materials and stock tracking',
      'Issues with priority, assign and resolve',
      'Site diary, attendance and overtime, work orders, milestones',
      'Daily and weekly reports; every photo saved automatically',
    ],
    stack: ['Node.js', 'WhatsApp automation', 'Cloud storage'],
    role: 'Sole developer',
    status: 'Built',
    link: 'https://github.com/ammar123A/WhatsApp-Site-Bot',
  },
]

export const moreWork = [
  { title: 'KodingIoT', text: 'Coding and IoT lessons for kids, in Bahasa Melayu.', stack: 'HTML/JS · PHP · PostgreSQL', link: 'https://koding-iot.vercel.app' },
  { title: 'Qudrat LMS', text: 'API for a nursing school: courses, assignments, attendance, grades and roles.', stack: 'Node.js · Express · Prisma · PostgreSQL' },
  { title: 'Panglima LMS', text: 'Learning management system for SMKTPPTM, with realtime chat.', stack: 'Laravel · Jetstream · Pusher' },
  { title: 'Serverless APIs', text: 'Backend services on AWS Lambda.', stack: 'Go · Serverless Framework' },
  { title: 'University projects', text: 'PETAKOM-MART, LectInfo, Online-Shopping and Re-Union.', stack: 'PHP · Java' },
]
