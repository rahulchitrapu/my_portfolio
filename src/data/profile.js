// Single source of truth for all portfolio content.
// Edit the values here; components only handle layout and behavior.

export const site = {
  // Canonical site URL, e.g. 'https://your-domain.com'. Leave empty on Vercel:
  // the build falls back to Vercel's production domain automatically
  // (precedence: SITE_URL env var > this value > VERCEL_PROJECT_PRODUCTION_URL).
  // It drives the canonical URL, og:url, absolute social-image URLs and sitemap.xml.
  url: '',
  title: 'Rahul Chitrapu — Software Engineer & Full-Stack Web Developer',
  description:
    'Rahul Chitrapu is a Software Engineer with 4+ years of experience building full-stack web applications with React, Python, AI-powered workflows, and real-time features.',
  ogImage: '/og-image.png',
  ogImageAlt: 'Rahul Chitrapu — Software Engineer and Full-Stack Web Developer',
}

export const profile = {
  name: 'Rahul Chitrapu',
  firstName: 'Rahul',
  lastName: 'Chitrapu',
  role: 'Software Engineer',
  altRole: 'Full-Stack Web Developer',
  experience: '4+ years',
  company: 'Smytten',
  email: 'rahulchitrapu8@gmail.com',
  phone: { display: '+91 83742 47495', href: 'tel:+918374247495' },
  linkedin: 'https://linkedin.com/in/rahul-chitrapu/',
  // PDF in /public. Resume links are hidden if this is empty.
  resumeUrl: '/Rahul-Chitrapu-Resume.pdf',
  headline: {
    lead: 'I build web experiences that bring',
    emphasis: 'frontend, backend, and AI',
    tail: 'together.',
  },
  intro:
    "I'm Rahul Chitrapu, a Software Engineer focused on full-stack web development, AI-powered workflows, and real-time applications.",
  metaStrip: ['Software Engineer', '4+ years experience', 'Currently at Smytten'],
}

export const navLinks = [
  { id: 'projects', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience', also: ['education'] },
  { id: 'contact', label: 'Contact' },
]

export const marqueeItems = [
  'React.js',
  'Python',
  'Django ORM',
  'Flask',
  'REST APIs',
  'WebSockets',
  'LLM agents',
  'Redux',
  'Tailwind CSS',
  'Responsive design',
]

export const about = {
  paragraphs: [
    "I'm Rahul Chitrapu, a Software Engineer with 4+ years of experience developing web applications across frontend and backend systems. I work primarily with React.js, JavaScript, and Python, and have experience building responsive user interfaces, REST API integrations, real-time features with WebSockets, and backend functionality using Django ORM and Flask.",
    "At Smytten, I've contributed to products including survey creation and participation platforms, AI-assisted survey generation, customer support chat, audience segmentation, and video-calling/interview workflows. These projects have given me experience working on both user-facing experiences and the application logic behind them.",
    "I'm interested in building reliable, easy-to-use products and continuing to grow as an engineer who can own features across the stack — from understanding the requirement and building the UI to integrating APIs, implementing backend logic, and improving the overall experience.",
  ],
  facts: [
    { label: 'Role', value: 'Software Engineer at Smytten' },
    { label: 'Experience', value: '4+ years' },
    { label: 'Focus', value: 'Full-stack web, AI workflows, real-time apps' },
    { label: 'Education', value: 'B.Tech, Mechanical Engineering — VVIT' },
  ],
  capabilities: [
    {
      icon: 'layout',
      title: 'Frontend engineering',
      text: 'Responsive React interfaces, reusable components, state management with Redux and Context API, and complex frontend logic.',
    },
    {
      icon: 'server',
      title: 'Backend & APIs',
      text: 'Python backends with Django ORM and Flask, REST APIs, and the business logic that powers product features.',
    },
    {
      icon: 'sparkles',
      title: 'AI & real-time',
      text: 'AI-assisted workflows with LLM agents, plus real-time features like WebSocket chat and video sessions.',
    },
  ],
}

export const projects = [
  {
    slug: 'survey-creator',
    title: 'Survey Creator',
    visual: 'builder',
    visualLabel:
      'Illustration of a survey builder with sections, reorderable questions, and an AND/OR conditional logic rule',
    summary:
      'A survey-building application for creating structured questionnaires with flexible question flows.',
    contribution: 'Built the frontend from scratch',
    focus:
      'Supporting complex questionnaire structures — sections, skip flows, and AND/OR conditional logic — while keeping the builder easy to use.',
    points: [
      'Built the frontend application for creating surveys from scratch.',
      'Supported sectional questionnaire segregation, question insertion, and question reordering.',
      'Added media support, skip flows, and conditional logic.',
      'Implemented frontend rendering of conditional logic using simple expressions and AND/OR combinations of multiple expressions.',
      'Developed a dynamic Survey Consumer application integrated into the Smytten Android app through WebView.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    slug: 'ai-survey-creator',
    title: 'AI-Based Survey Creator',
    visual: 'ai',
    visualLabel:
      'Illustration of an AI-assisted flow: a survey objective, generated questions, and suggested audiences',
    summary:
      'An AI-assisted workflow that helps users turn a survey objective into a questionnaire.',
    contribution: 'AI-assisted workflow and interface',
    focus:
      'Connecting an AI-driven workflow to a practical interface: users start with an objective, interact with generated questions, and finish with a complete questionnaire.',
    points: [
      'Developed an AI-powered survey creation workflow where users provide a survey objective and interact with AI-generated questions.',
      'Used LLM agents to turn survey goals into structured, complete questionnaires.',
      'Integrated AI-generated audience suggestions to support survey planning and audience targeting.',
    ],
    tech: ['React.js', 'JavaScript', 'LLM agents', 'REST APIs'],
  },
  {
    slug: 'support-chat',
    title: 'Customer Support Agent Chat',
    visual: 'chat',
    visualLabel:
      'Illustration of a support chat that hands off from a chatbot to a live agent, with a ticket fallback',
    summary:
      'A real-time support chat experience that starts with a chatbot and can connect users with a live support agent.',
    contribution: 'Real-time chat interface and handoff flows',
    focus:
      'A smoother support journey: real-time messaging, a handoff from chatbot to live agent, and a fallback ticket when no agent is available.',
    points: [
      'Built a real-time customer support chat system where users interact with a chatbot first.',
      'Connected users to a live support agent when required, with real-time live-agent handoff.',
      'Implemented real-time communication using WebSockets and REST APIs.',
      'Added fallback ticket creation when no support agent is available.',
    ],
    tech: ['React.js', 'JavaScript', 'WebSockets', 'REST APIs'],
  },
  {
    slug: 'audience-persona-360',
    title: 'Audience Persona 360',
    visual: 'persona',
    visualLabel:
      'Illustration of user attributes, survey responses, user actions, and tags combining into an audience segment',
    summary:
      'An internal audience-persona platform that creates audience segments from user attributes, survey responses, user actions, and tags.',
    contribution: 'Segmentation and AI-assisted attribute extraction',
    focus:
      'Connecting survey responses and user attributes to structured audience data and targeted segments.',
    points: [
      'Built audience generation and segmentation from user attributes, survey responses, user actions, and tags.',
      'Implemented AI-assisted extraction of attributes from survey responses, along with attribute aggregation.',
      'Implemented automated Python-based updates to master attribute values.',
      'Enabled audience targeting based on user behavior and attributes for marketing and research use cases.',
      'Worked across Python, Django ORM, Flask, and React.js.',
    ],
    tech: ['Python', 'Django ORM', 'Flask', 'React.js', 'AI agents'],
  },
  {
    slug: 'video-interviews',
    title: 'Video Calling / Interview Service',
    visual: 'video',
    visualLabel: 'Illustration of a live, session-based video call with call controls',
    summary:
      'A video-calling and interview workflow with session-based functionality and real-time communication.',
    contribution: 'Contributor — real-time and session handling',
    focus: 'Supporting interactive, session-based communication experiences.',
    note: 'I contributed to parts of this project — the video-calling and interview workflows, real-time communication, and session handling. The underlying video infrastructure was not something I built on my own.',
    points: [
      'Worked on video-calling and interview workflows.',
      'Contributed to real-time communication and session-based functionality.',
      'Helped build interactive user experiences.',
    ],
    tech: ['React.js', 'WebSockets', 'Real-time communication'],
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL (basic)'] },
  {
    group: 'Frontend',
    items: ['React.js', 'Redux', 'Context API', 'Responsive Web Design', 'Tailwind CSS', 'Bootstrap'],
  },
  { group: 'Backend', items: ['Python', 'Django ORM', 'Flask', 'REST APIs', 'API integration'] },
  {
    group: 'Real-time',
    items: ['WebSockets', 'Socket-based communication', 'Real-time applications', 'Video calling'],
  },
  { group: 'AI', items: ['LLM agents', 'AI-powered applications', 'AI-based survey generation'] },
  {
    group: 'Database',
    items: ['MySQL (basic)', 'Database integration', 'Audience / attribute data'],
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'GitHub Copilot', 'Figma', 'Lovable', 'Linux', 'Windows'],
  },
]

export const experience = [
  {
    company: 'Smytten',
    role: 'Software Engineer',
    start: { label: 'Dec 2023', iso: '2023-12' },
    end: { label: 'Present' },
    current: true,
    summary:
      'I develop and maintain full-stack web applications across frontend and backend with React.js, JavaScript, Python, REST APIs, Django ORM, and Flask — building responsive, user-friendly interfaces from scratch for surveys, advertisements, admin dashboards, survey creation, survey-taking, and research platforms.',
    highlights: [
      'Complex frontend logic, state management, conditional flows, API integrations, and reusable UI components for business-critical applications',
      'AI-powered survey creation with LLM agents — users define survey goals and generate structured questionnaires and relevant audience suggestions',
      'Customer support chatbot with WebSockets and REST APIs: bot-assisted support, real-time live-agent handoff, and ticket creation when agents are unavailable',
      'Real-time features using WebSockets and socket-based architecture for live application updates and interactive experiences',
      'Contributions to video calling and interview services, including real-time communication and session-based functionality',
      'Backend APIs and business logic with Python, Django ORM, and Flask, integrated with React-based frontends',
      'Audience generation and segmentation based on user attributes, survey responses, user behavior, and tags',
      'Audience Persona 360: AI-assisted attribute extraction from survey responses, attribute aggregation, and automated audience-data updates',
      'Application performance, SEO, responsive design, debugging, testing, and production improvements across multiple products',
    ],
    tags: ['React.js', 'JavaScript', 'Python', 'Django ORM', 'Flask', 'WebSockets', 'REST APIs', 'LLM agents'],
  },
  {
    company: 'MountBlue Technologies',
    role: 'Software Developer / Frontend Developer',
    note: 'Deputation to Smytten',
    start: { label: 'Oct 2022', iso: '2022-10' },
    end: { label: 'Nov 2023', iso: '2023-11' },
    summary:
      'Worked on Smytten web applications as part of a deputation assignment, contributing to frontend development and product feature implementation.',
    highlights: [
      'Developed responsive interfaces using React.js, JavaScript, HTML, CSS, Redux, REST APIs, and related frontend technologies',
      'Worked on survey, B2B, customer-support, and research-oriented applications with a focus on usability and responsive design',
    ],
    tags: ['React.js', 'JavaScript', 'Redux', 'HTML', 'CSS', 'REST APIs'],
  },
]

export const education = [
  {
    institution: 'Vasireddy Venkatadri Institute of Technology (VVIT)',
    location: 'Guntur',
    degree: 'B.Tech — Mechanical Engineering',
    grade: '65%',
    start: { label: 'June 2015', iso: '2015-06' },
    end: { label: 'May 2019', iso: '2019-05' },
  },
]
