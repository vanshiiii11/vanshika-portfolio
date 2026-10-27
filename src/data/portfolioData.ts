export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  type: string;
  category: 'Full-Stack' | 'AI / Machine Learning' | 'Web Application';
  isFeatured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  liveTooltip?: string;
  image: string;
  imageWebp?: string;
  tags: string[];
  summary: string;
  bullets: string[];
  architectureBreakdown?: {
    roles: string[];
    llmLogic: string;
    concurrencyProtection: string;
    metrics: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
  badge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  subtitle: string;
  description: string;
  category: 'Coding' | 'Hackathon' | 'Leadership' | 'Sports';
  proofUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface EditorialPillar {
  title: string;
  descriptions: string[];
}

export const portfolioConfig = {
  personal: {
    name: 'Vanshika Motwani',
    roleTagline: 'Full-Stack Developer',
    location: 'India',
    email: 'vanshika.23bce10036@vitbhopal.ac.in',
    phone: '+91-8077570047',
    summary:
      'Computer Science undergraduate at VIT Bhopal (CGPA 9.13/10, graduating 2027) with hands-on experience testing and validating full-stack applications: API, integration, functional and edge-case testing across REST APIs, MongoDB and PostgreSQL backends. Strong foundations in OOP, DSA and debugging; comfortable in Linux and Git workflows. Solved 200+ DSA problems on LeetCode.',
    pitch:
      'Full-Stack Developer who integrates AI into reliable, production-style products (LLM features with retry + fallback logic, ML pipelines with explainability).',
    statusBadge: 'OPEN TO INTERNSHIPS +',
    metaHeadline: 'FULL-STACK DEVELOPER / VIT BHOPAL',
    fixedRole: 'FULL-STACK DEVELOPER',
    typewriterRoles: [
      'FULL-STACK DEVELOPER',
      'MERN STACK DEVELOPER',
      'BACKEND & API BUILDER',
      'AI INTEGRATOR',
      'TESTING-MINDED ENGINEER',
      'PROBLEM SOLVER'
    ],
    photo: {
      src: '/assets/vanshika-cutout.png',
      alt: 'Portrait of Vanshika Motwani'
    }
  },

  urls: {
    github: 'https://github.com/vanshiiii11',
    linkedin: 'https://www.linkedin.com/in/vanshika-motwani-2834b632b/',
    leetcode: 'https://leetcode.com/u/vanshikamotwani/',
    resumePdf: '/Vanshika_Motwani_Resume.pdf',
    vitalisGithub: 'https://github.com/vanshiiii11/Vitalis',
    vitalisLive: 'https://vitalis-2ctc9y6na-vanshika23bce10036-1174s-projects.vercel.app/',
    hisaab360Github: 'https://github.com/vanshiiii11/Hisaab360',
    hisaab360Live: 'https://hisaab360.vercel.app/',
    potholeGithub: 'https://github.com/vanshiiii11/pothole-detection',
    potholeLive: 'https://pothole-detection-pgsq.onrender.com/',
    buildoraGithub: 'https://github.com/vanshiiii11/Buildora',
    buildoraLive: 'https://buildora-ten.vercel.app/',
    parkinsonsGithub: '[ADD URL]',
    hackerrankProof: '[ADD LINK]',
    healthhackProof: '[ADD LINK]'
  },

  editorialPillars: [
    {
      title: 'CLEAN BACKEND ARCHITECTURE',
      descriptions: [
        'Role-based REST APIs built with Node.js, Express and Prisma',
        'PostgreSQL schemas designed for consistent data',
        'Database-level constraints that prevent double-bookings'
      ]
    },
    {
      title: 'TESTED, FAULT-TOLERANT APIS',
      descriptions: [
        'API, integration and edge-case testing before release',
        'Retry logic backed by deterministic fallbacks',
        'Concurrent scenarios and failure paths validated'
      ]
    },
    {
      title: 'AI THAT SHIPS',
      descriptions: [
        'LLM-generated visit summaries inside a real workflow',
        'ML pipelines made explainable with SHAP and LIME',
        'AI prototypes taken to production-style reliability'
      ]
    }
  ] as EditorialPillar[],

  projects: [
    {
      id: 'vitalis',
      number: '01',
      title: 'Vitalis',
      tagline: 'Full-Stack Telemedicine & Clinical Appointment System with Fail-Safe LLM Summaries',
      type: 'Telemedicine & Clinical Operations',
      category: 'Full-Stack',
      isFeatured: true,
      githubUrl: 'https://github.com/vanshiiii11/Vitalis',
      liveUrl: 'https://vitalis-2ctc9y6na-vanshika23bce10036-1174s-projects.vercel.app/',
      image: '/assets/projects/vitalis.png',
      imageWebp: '/assets/projects/vitalis.webp',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'React', 'TypeScript', 'Claude AI', 'Redis'],
      summary:
        'Full-stack appointment and clinical consultation platform with 3 distinct authenticated roles (Patient, Doctor, Admin). Engineered with LLM-generated visit summaries featuring automated retry logic and deterministic fallbacks, backed by database-level unique constraints to eliminate concurrent double-booking vulnerabilities.',
      bullets: [
        'Tri-Role Access Architecture: Strict RBAC separating Patient bookings, Doctor prescription workflows, and Admin oversight via validated REST APIs.',
        'Fault-Tolerant AI Engine: Asynchronous LLM consultation summarizer with exponential retry mechanics and deterministic template fallbacks if LLM latency exceeds SLA thresholds.',
        'Concurrency-Safe Booking: Enforced composite unique constraint (`doctor_id`, `time_slot`) at PostgreSQL level to guarantee zero double-bookings under concurrent race conditions.'
      ],
      architectureBreakdown: {
        roles: ['Patient (Book & Consult)', 'Doctor (Schedules & Notes)', 'Admin (Audit & Metrics)'],
        llmLogic: 'LLM Consultation Digest with automatic 3x exponential retry + deterministic fallback template on timeout.',
        concurrencyProtection: 'PostgreSQL atomic transaction + composite unique constraint on (doctorId, slotTimestamp).',
        metrics: ['Zero Double-Bookings', '100% Fallback SLA', '3 Authenticated Roles']
      }
    },
    {
      id: 'hisaab360',
      number: '02',
      title: 'Hisaab360',
      tagline: 'Wholesale B2B Credit Ledger & Automated Debt Aging Platform',
      type: 'FinTech & B2B Invoicing',
      category: 'Full-Stack',
      isFeatured: false,
      githubUrl: 'https://github.com/vanshiiii11/Hisaab360',
      liveUrl: 'https://hisaab360.vercel.app/',
      image: '/assets/projects/hisaab360.png',
      imageWebp: '/assets/projects/hisaab360.webp',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Razorpay', 'Vite', 'PDF Generation'],
      summary:
        'Financial credit-management and ledger platform for wholesale enterprises with 4+ core operational workflows (customer credit lines, invoice issuance, outstanding balance aging, and real-time payment history) across dual Seller and Customer interfaces.',
      bullets: [
        'Dual-Sided Portal: Dedicated perspectives for Wholesalers (credit control, aging analytics) and Retailers (instant balance lookup, statement downloads).',
        'Automated Collection Triggers: Scheduled payment reminder sequences linked with due-date tracking and Razorpay webhook reconciliation.',
        'Reconciliation Precision: Server-validated double-entry transaction posting preventing mismatch errors across partial and bulk settlements.'
      ]
    },
    {
      id: 'pothole-detection',
      number: '03',
      title: 'Pothole Detection',
      tagline: 'Multimodal AI Road Inspection & Pothole Telemetry Dashboard',
      type: 'Computer Vision & Telemetry',
      category: 'AI / Machine Learning',
      isFeatured: false,
      githubUrl: 'https://github.com/vanshiiii11/pothole-detection',
      liveUrl: 'https://pothole-detection-pgsq.onrender.com/',
      liveTooltip: 'Hosted on Render free tier — may take ~30s to wake up if idle',
      image: '/assets/projects/pothole.png',
      imageWebp: '/assets/projects/pothole.webp',
      tags: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Google Gemini API', 'Recharts', 'Docker', 'Render'],
      summary:
        'AI-driven inspection system that analyzes road survey videos with multimodal Google Gemini AI, coupled with a geospatial telemetry dashboard for visualising pothole distributions from drone and vehicle CSV logs.',
      bullets: [
        'Multimodal Video Analysis: Directly processes video streams (MP4/MOV) via Gemini 2.5 Flash to automatically detect, timestamp, and classify asphalt distress.',
        'Geospatial Telemetry Visualizer: Ingests raw GPS logs (coordinates, altitude, severity index, confidence) into interactive Recharts time-series and scatter maps.',
        'Secure Backend Gateway: Engineered an Express proxy with IP rate-limiting to prevent client-side credential exposure and Dockerized for reliable deployment.'
      ]
    },
    {
      id: 'buildora',
      number: '04',
      title: 'Buildora',
      tagline: 'Construction & Home Services Platform with Verified Workforce Management',
      type: 'Construction Tech & Operations',
      category: 'Web Application',
      isFeatured: false,
      githubUrl: 'https://github.com/vanshiiii11/Buildora',
      liveUrl: 'https://buildora-ten.vercel.app/',
      image: '/assets/projects/buildora.png',
      imageWebp: '/assets/projects/buildora.webp',
      tags: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'Canvas Confetti'],
      summary:
        'Turnkey construction and on-demand home maintenance ecosystem designed around a verified, in-house workforce model, featuring an instant cost engine, AI-style budget estimator, and multi-role operations suite.',
      bullets: [
        'Dynamic Package Builder: Real-time mathematical cost engine dynamically recalculating total investment, labor/material splits, and trade tiers (Basic to Elite).',
        'Quad-Role Architecture: Switchable perspectives spanning Customer (booking & customization), Team Leader (daily site log & safety gear checklists), Ops Manager (dispatch), and Admin (analytics).',
        'Verified Direct-Employed Model: UI workflows replacing open gig marketplaces with dedicated site supervisors and trade-by-trade audit ratings.'
      ]
    },
    {
      id: 'parkinsons-prediction',
      number: '05',
      title: "Parkinson's Disease Prediction",
      tagline: 'End-to-End Biomedical ML Pipeline with Model Explainability (SHAP & LIME)',
      type: 'Healthcare Machine Learning',
      category: 'AI / Machine Learning',
      isFeatured: false,
      githubUrl: '[ADD URL]',
      liveUrl: undefined,
      image: '/assets/projects/parkinsons.png',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SHAP', 'LIME', 'GridSearchCV'],
      summary:
        'Biomedical machine learning diagnostic pipeline evaluating vocal frequency perturbations for early Parkinson’s detection, with comparative classifier benchmarking and global/local feature explainability.',
      bullets: [
        'Pipeline Engineering: Full acoustic feature preprocessing, outlier mitigation, and stratified k-fold splitting with GridSearchCV hyperparameter tuning.',
        'Classifier Benchmarking: Rigorously evaluated Random Forest vs Support Vector Classifier across Precision, Recall, F1-Score, and ROC-AUC curves.',
        'Explainable AI (XAI): Integrated SHAP summary beeswarm plots and LIME localized decision boundaries to surface key vocal acoustic biomarkers.'
      ]
    }
  ] as Project[],

  education: {
    institution: 'VIT Bhopal University',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2023 – 2027',
    cgpa: '9.13 / 10',
    location: 'Bhopal, India',
    coursework: [
      'Data Structures & Algorithms',
      'Object Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Testing & QA'
    ]
  },

  skillsCategories: [
    {
      category: 'Languages',
      skills: [
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript', highlight: true },
        { name: 'Python', highlight: true },
        { name: 'Java' },
        { name: 'C++' },
        { name: 'SQL', highlight: true }
      ]
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'Node.js', highlight: true },
        { name: 'Express.js', highlight: true },
        { name: 'RESTful APIs', highlight: true },
        { name: 'Prisma ORM', highlight: true },
        { name: 'Fastify' },
        { name: 'Socket.io' }
      ]
    },
    {
      category: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'MongoDB', highlight: true },
        { name: 'Firebase' },
        { name: 'Docker', highlight: true },
        { name: 'Redis' }
      ]
    },
    {
      category: 'AI / Machine Learning',
      skills: [
        { name: 'Google Gemini API', highlight: true },
        { name: 'LLM Integration', highlight: true },
        { name: 'Fault-Tolerant Fallback', highlight: true },
        { name: 'Scikit-learn' },
        { name: 'SHAP & LIME' },
        { name: 'Model Evaluation' }
      ]
    },
    {
      category: 'Frontend & UI',
      skills: [
        { name: 'React 19', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Vite', highlight: true },
        { name: 'Responsive Layouts' },
        { name: 'Framer Motion' }
      ]
    },
    {
      category: 'Testing & QA',
      skills: [
        { name: 'API Testing (Postman)', highlight: true },
        { name: 'Integration Testing', highlight: true },
        { name: 'Edge-Case Validation', highlight: true },
        { name: 'Debugging & Linux', highlight: true },
        { name: 'Git & GitHub Workflows' }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: 'qskill',
      role: 'Frontend Developer Intern',
      company: 'QSkill',
      period: 'Jun 2026 – Aug 2026',
      badge: 'Internship',
      description: 'Owned frontend application flows and integrated scalable REST APIs using modern React.',
      bullets: [
        'Shipped responsive, production-ready React.js applications maintaining strict visual fidelity across mobile and desktop.',
        'Architected client-side routing, state management, and end-to-end REST API consumption with graceful error boundaries.',
        'Engineered reusable component libraries adhering to clean code standards and structured Git collaborative workflows.'
      ]
    },
    {
      id: 'uptoskills',
      role: 'MERN Stack Intern',
      company: 'UpToSkills',
      period: 'Feb 2026 – May 2026',
      badge: 'Internship',
      description: 'Full-stack engineering across MongoDB, Express, React, and Node.js with a strong focus on API testing.',
      bullets: [
        'Developed RESTful endpoints in Express.js connected to MongoDB, implementing validation middleware for request bodies.',
        'Debugged and validated full-stack integration contracts, executing edge-case tests against unexpected nulls and schema violations.',
        'Refactored frontend data-fetching hooks to handle network latency and optimistic UI updates.'
      ]
    },
    {
      id: 'guesss',
      role: 'Campus Ambassador',
      company: 'GUESSS India',
      period: 'Sep 2025 – Dec 2025',
      badge: 'Leadership',
      description: 'Represented VIT Bhopal for the Global University Entrepreneurial Spirit Students’ Survey.',
      bullets: [
        'Spearheaded university-wide outreach initiatives driving student participation in the international GUESSS research initiative.',
        'Organized digital campaigns and informational sessions highlighting student entrepreneurship data trends.'
      ]
    }
  ] as Experience[],

  achievements: [
    {
      id: 'leetcode',
      title: 'LeetCode Problem Solving',
      metric: '200+',
      subtitle: 'DSA Problems Solved',
      description: 'Consistent focus on Data Structures & Algorithms across Arrays, Trees, Dynamic Programming, Graphs, and Heaps.',
      category: 'Coding',
      proofUrl: 'https://leetcode.com/u/vanshikamotwani/'
    },
    {
      id: 'healthhack',
      title: 'HealthHack 2026 Finalist',
      metric: 'Top 20',
      subtitle: 'From 600+ Teams (2,500+ Participants)',
      description: 'Organized by VIT Bhopal in collaboration with Johns Hopkins University; developed an innovative digital health prototype.',
      category: 'Hackathon',
      proofUrl: '[ADD LINK]'
    },
    {
      id: 'hackerrank',
      title: 'Problem Solving Certification',
      metric: 'Certified',
      subtitle: 'HackerRank Gold Standard',
      description: 'Validated competency in core algorithmic problem solving, time complexity optimization, and data structures.',
      category: 'Coding',
      proofUrl: '[ADD LINK]'
    },
    {
      id: 'sports-clubs',
      title: 'Leadership & Extracurriculars',
      metric: '2x Winner',
      subtitle: 'Inter-College Football + Core NSS & Meraki Arts',
      description: 'Active contributor to social service via National Service Scheme (NSS Unit) and creative design at Meraki Fine Arts Club.',
      category: 'Leadership'
    }
  ] as Achievement[],

  workProcess: [
    {
      step: '01',
      title: 'Understand & Model',
      desc: 'Deconstruct domain problem, map data relationships, define entity models, and identify race conditions before writing code.'
    },
    {
      step: '02',
      title: 'Design API Contracts',
      desc: 'Specify clean REST endpoints, status codes, payload validations, and authentication guards (RBAC).'
    },
    {
      step: '03',
      title: 'Build Full-Stack',
      desc: 'Develop robust services with TypeScript, Prisma, React, and integrate AI models with defensive prompting.'
    },
    {
      step: '04',
      title: 'Test Edge Cases',
      desc: 'Execute functional and concurrent stress tests: database locks, retry mechanics, network timeouts, and null states.'
    },
    {
      step: '05',
      title: 'Ship & Monitor',
      desc: 'Deploy with Docker and Vercel/Render, configure health checks, environment variables, and telemetry logs.'
    }
  ],

  quote: {
    text: 'Good software isn’t just what it does, it’s how reliably it does it.',
    author: 'Vanshika Motwani',
    callout: 'LET’S BUILD SOMETHING GREAT TOGETHER +'
  },

  aiBuddyKnowledge: {
    systemPrompt: `You are Vanshika's portfolio assistant. You answer questions strictly and factually based on Vanshika Motwani's verified portfolio data. Vanshika is a B.Tech CSE undergraduate at VIT Bhopal (CGPA 9.13/10, graduating 2027) specializing in full-stack web development and AI system integration. Her 5 projects are Vitalis (flagship telemedicine with LLM fallbacks and PostgreSQL concurrency protection), Hisaab360 (B2B wholesale ledger), Pothole Detection (multimodal Gemini video AI), Buildora (construction operations), and Parkinson's Prediction (biomedical ML with SHAP/LIME). Keep answers concise, confident, and professional.`,
    suggestedQuestions: [
      'Tell me about your flagship project Vitalis',
      'How do you design AI features to be fault-tolerant?',
      'What are your primary backend and database skills?',
      'Are you open for summer / fall internships?'
    ]
  }
};
