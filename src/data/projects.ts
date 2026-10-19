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
    title: 'BUK: one app for every home service',
    client: 'AGAATT',
    summary: 'Customers book a ride, a barber, a cleaner or a car wash from one app, in Malaysia and Singapore.',
    problem:
      'Customers juggle a different app for every service. The original codebase, bought from a vendor, only handled ride-hailing and could not grow into new services.',
    built:
      "I'm leading a rebuild of the platform as one marketplace. Every service shares the same booking, payments and accounts, so adding a new service doesn't mean rebuilding the app.",
    features: [
      'Each service sets its own pricing, matching, location and job flow on a shared core',
      'Customer app in English and Bahasa Melayu',
      'Admin panel to verify service providers before they take jobs',
      'Database setup that can be re-run safely, without wiping data',
    ],
    stack: ['Flutter', 'Node.js 22', 'TypeScript', 'Express 5', 'Prisma', 'PostgreSQL', 'Redis', 'React', 'Zod'],
    role: 'Lead developer: architecture, backend and mobile app',
    status: 'In development',
  },
  {
    slug: 'agaatt-website',
    title: 'AGAATT: company website revamp',
    client: 'AGAATT',
    summary: "A full revamp of an IT services company's website: new design, new UI, animation throughout and a live visitor locator.",
    problem:
      "The old site looked dated, didn't explain what AGAATT does across cloud, virtualization, system integration, managed IT, telecom and surveillance, and didn't present its online store well.",
    built:
      'A completely new website, rebuilt from scratch with a new design and UI. It covers services, clients, partners, news and contact, with the AGAATT Outlet storefront.',
    features: [
      'New visual design and UI, replacing the old site entirely',
      'Scroll and entrance animations built with GSAP',
      "Live HUD that locates the visitor through an API and shows their time zone, local time and date",
      'Clear pages for each service line, with client and partner logos to build trust',
      'Text kept separate from the design, so updating copy is quick',
      'Contact form with spam protection',
    ],
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'GSAP', 'Formspree', 'reCAPTCHA'],
    role: 'Sole developer',
    status: 'Live',
    link: 'https://agaatt.com/',
    images: ['/projects/agaatt-website/cover.webp'],
  },
  {
    slug: 'sepatah',
    title: 'Sepatah: wedding invitations and guestbook',
    client: 'Freelance client',
    summary: 'A digital invitation, video guestbook and photo booth that couples keep after the big day.',
    problem:
      'Couples want a digital invitation, plus a way to collect wishes, videos and photos from guests on the day, all kept in one place afterwards.',
    built: 'One platform that runs many weddings: invitation site, RSVP, video wishes, QR guestbook, photo booth and private galleries for the couple.',
    features: [
      'Invitation with countdown, Maps/Waze links and add-to-calendar',
      'Guests RSVP and record a 30-second video wish',
      'QR video guestbook on every table, open only during the event',
      'Photo booth in the browser, with frames',
      'Live slideshow of approved photos, moderated from a phone',
      'Private galleries for the couple to download everything',
    ],
    stack: ['Vue 3', 'Vite', 'Supabase', 'PostgreSQL', 'Realtime', 'Edge Functions', 'Resend', 'Netlify'],
    role: 'Sole developer (freelance)',
    status: 'Live',
    link: 'https://sepatah.netlify.app/',
    images: ['/projects/sepatah/cover.webp'],
  },
  {
    slug: 'qudrat-lms',
    title: 'Qudrat LMS: a learning platform for a nursing school',
    client: 'Qudrat Aura Academy',
    summary: 'Courses, materials, quizzes, assignments, attendance and grades for staff and students, in one place.',
    problem:
      'Course notes sat in emails and chat groups, quizzes were on paper, attendance on sheets and marks in spreadsheets. Students had no single place to see what was due or how they were doing.',
    built: 'One web platform with a staff portal to build and run courses, and a student portal to learn and track progress.',
    features: [
      'Weekly materials (PDFs, slides, videos) that open inside the app',
      'Multiple-choice quizzes marked automatically on the server',
      'Assignments with due dates, grades and feedback',
      'Attendance per session: present, late, excused or absent',
      'Weighted course grades and an estimated GPA, worked out automatically',
      'Students see only their own records',
    ],
    stack: ['React 18', 'Tailwind', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Zod', 'Vitest'],
    role: 'Sole developer',
    status: 'Proof of concept',
    link: 'https://qudrat-e.vercel.app/login',
    images: ['/projects/qudrat-lms/cover.webp'],
  },
  {
    slug: 'smart-booking',
    title: 'Smart Booking: no double bookings, no no-pays',
    client: 'Own product',
    summary: 'Online booking that assigns your staff, takes payment and releases unpaid slots by itself.',
    problem: 'Service businesses lose money when two customers get the same slot, or when someone books and never pays.',
    built: 'A booking system that assigns any free staff member, takes payment by card, and cancels unpaid bookings automatically.',
    features: [
      'Assigns a free staff member automatically',
      'The same slot can never be booked twice',
      'Card payment through Stripe, confirmed automatically',
      'Unpaid bookings release the slot after 10 minutes',
      'Separate access for admins and staff',
    ],
    stack: ['Laravel', 'Inertia', 'Vue', 'PostgreSQL', 'Stripe', 'Queues'],
    role: 'Sole developer',
    status: 'Working demo',
    link: 'https://book-it-iota-nine.vercel.app/',
    images: ['/projects/smart-booking/cover.webp'],
  },
  {
    slug: 'kodingiot',
    title: 'KodingIoT: coding and IoT for kids',
    client: 'Own product',
    summary: 'Kids snap code blocks together and watch LEDs, sensors and servos respond, all in Bahasa Melayu.',
    problem: 'Most coding and IoT tools for kids are in English and need real hardware, which puts them out of reach for many Malaysian children.',
    built: 'A block-coding editor in the browser with a built-in IoT simulator, so kids can learn without buying a board.',
    features: [
      'Drag-and-drop code blocks for basics, sensors, actuators, LCD, variables and functions',
      'Simulator with LEDs, servos, a buzzer and temperature, humidity, light, distance and motion sensors',
      'Shows the matching C++ / Arduino code for every program',
      'Tutorials, a gallery of projects and games',
      'Save and open projects after logging in',
    ],
    stack: ['HTML/JS', 'Blockly', 'PHP', 'PostgreSQL'],
    role: 'Sole developer',
    status: 'Live',
    link: 'https://koding-iot-9dxs.vercel.app/',
    images: ['/projects/kodingiot/cover.webp'],
  },
  {
    slug: 'whatsapp-site-bot',
    title: 'WhatsApp bot for construction sites',
    client: 'Own product',
    summary: "Turns a site's WhatsApp group into a record of progress, materials and issues, with daily reports.",
    problem: 'On a busy site, progress updates, material deliveries and problems get buried in the WhatsApp group.',
    built: "A bot that sits in the site's WhatsApp group and turns short commands into a proper record anyone can pull up.",
    features: [
      'Log daily progress by trade',
      'Track material deliveries and stock',
      'Report issues, assign them and mark them resolved',
      'Site diary, attendance and overtime, work orders and milestones',
      'Daily and weekly reports; every photo saved automatically',
    ],
    stack: ['Node.js', 'WhatsApp automation', 'Cloud storage'],
    role: 'Sole developer',
    status: 'Built',
    link: 'https://github.com/ammar123A/WhatsApp-Site-Bot',
  },
]

export const moreWork: { title: string; text: string; stack: string; link?: string }[] = [
  { title: 'Panglima LMS', text: 'Learning system for SMKTPPTM: students, materials, submissions, timetable and feedback.', stack: 'Laravel · Jetstream · Pusher' },
  { title: 'Serverless APIs', text: 'Backend services on AWS Lambda.', stack: 'Go · Serverless Framework' },
  { title: 'University projects', text: 'PETAKOM-MART, LectInfo, Online-Shopping and Re-Union.', stack: 'PHP · Java' },
]
