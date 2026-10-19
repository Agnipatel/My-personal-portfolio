export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  metrics?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Code" | "Workflow" | "Database" | "Brain";
  features: string[];
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  image?: string;
  badge: string;
  description?: string;
  issueDate?: string;
  period?: string;
  highlights?: string[];
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  badge?: string;
  description: string[];
  skills: string[];
  certificateId?: string;
  certificateImage?: string;
  certificateTitle?: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: "Agni Singh",
    role: "Web Developer & CRM Developer",
    subtitle: "MERN Stack | Next.js | CRM Automation | GoHighLevel (GHL)",
    tagline:
      "Results-driven Web Developer and CRM Developer with 2+ years of experience in MERN Stack Development, Next.js, CRM Automation, and GoHighLevel (GHL).",
    email: "patelagni239@gmail.com",
    phone: "+91 6386026426",
    rawPhone: "6386026426",
    location: "Bangalore, Karnataka, India",
    resumeUrl:
      "https://drive.google.com/file/d/1SL9U6IZKaYfRN0osf7sbspoyAKRghkFq/view?usp=drivesdk",
    avatar: "/images/about-me.jpg",
    heroImage: "/images/hero-web.jpg",
    logoImage: "/images/logo.jpg",
    summary:
      "Results-driven Web Developer and CRM Developer with 2+ years of experience in MERN Stack Development, Next.js, CRM Automation, and GoHighLevel (GHL). Experienced in building scalable web applications, CRM workflows, sales funnels, lead management systems, and business automation solutions. Strong knowledge of React.js, Node.js, MongoDB, Firebase, REST APIs, UI/UX Design, and performance optimization.",
    bio: [
      "I am a results-driven Web Developer and CRM Developer based in Bangalore, Karnataka, India with 2+ years of hands-on experience across modern frontend and backend architectures.",
      "My core expertise spans Next.js, MERN Stack (React, Node, Express, MongoDB), CRM Development & GoHighLevel (GHL) Automation, building high-conversion sales funnels, lead management pipelines, and enterprise-grade web modules.",
      "With a solid Computer Science Engineering foundation from Rameshwaram Institute of Technology and Management, I bridge clean user experience design with robust backend automation and intelligent data applications.",
    ],
    socials: {
      github: "https://github.com/Agnipatel",
      linkedin: "https://www.linkedin.com/in/agni-patel-938292265",
      instagram: "https://www.instagram.com/agnipatel39/",
      email: "mailto:patelagni239@gmail.com",
    },
  },

  skillCategories: [
    {
      title: "Web Development",
      skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "NestJS",
        "MongoDB",
        "Firebase",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "CRM & Automation",
      skills: [
        "GoHighLevel (GHL)",
        "CRM Development",
        "Lead Management",
        "Sales Funnels",
        "Workflow Automation",
        "Email Automation",
        "Pipeline Management",
      ],
    },
    {
      title: "Frontend & UI/UX",
      skills: [
        "Tailwind CSS",
        "shadcn/ui",
        "Bootstrap",
        "Responsive Design",
        "UI/UX Design",
        "State Management",
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        "REST APIs",
        "Authentication & Authorization (JWT)",
        "Database Design",
        "Serverless Functions",
      ],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "VS Code"],
    },
    {
      title: "AI & Data Science",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Statistical Modeling",
        "Python",
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      id: "pandaece",
      role: "Web Developer & CRM Developer",
      company: "PANDAeCe Pvt Ltd",
      period: "June 2026 – September 2026",
      location: "Bengaluru, India",
      badge: "Verified Experience",
      description: [
        "Contributed to web development and application projects utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Developed, tested, and maintaining responsive web applications and user interfaces.",
        "Implemented RESTful APIs and integrated backend services with frontend components.",
        "Collaborated with design and cross-functional project teams to deliver feature updates and resolve technical issues.",
        "Participated in code reviews, technical documentation, and application debugging to maintain quality standards.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "GoHighLevel"],
      certificateId: "cert-pandaece",
      certificateImage: "/images/cert-pandaece.png",
      certificateTitle: "PANDAeCe Work Experience Letter",
    },
    {
      id: "sileo",
      role: "Trainee – MERN Stack Developer",
      company: "Sileo Technologies Pvt. Ltd. (CMMi Level 3)",
      period: "March 2025 – August 2025",
      location: "Bengaluru, India",
      badge: "CMMi Level 3 Certified",
      description: [
        "Underwent comprehensive full-stack training in the MERN Stack (MongoDB, Express.js, React.js, and Node.js).",
        "Delivered front-end development with React.js and back-end development with Node.js and Express.js.",
        "Engineered database design and integration with MongoDB for high-performance data workflows.",
        "Engineered RESTful API development and deployment with industry-standard version control and optimization practices.",
        "Conducted debugging, code optimization, and project-based implementations aligned with enterprise benchmarks.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Enterprise Architecture"],
      certificateId: "cert-sileo",
      certificateImage: "/images/cert-sileo.png",
      certificateTitle: "Sileo MERN Stack Appointment & Training Certificate",
    },
    {
      id: "difmo",
      role: "React Developer Intern",
      company: "Difmo Technology",
      period: "6 Months",
      location: "India",
      badge: "Internship",
      description: [
        "Developed enterprise-level frontend applications using React.js and modern state managers.",
        "Migrated legacy UI components to modern React architecture with reusable components.",
        "Built responsive user interfaces using Tailwind CSS and Bootstrap with pixel-perfect fidelity.",
      ],
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "Component Architecture", "UI Migration"],
    },
    {
      id: "sipher",
      role: "Software Developer",
      company: "Sipher Web Pvt. Ltd.",
      period: "3 Months",
      location: "India",
      badge: "Contract",
      description: [
        "Engineered scalable web interfaces and client-facing web portals.",
        "Implemented cross-browser compatible layouts and optimized page load benchmarks.",
      ],
      skills: ["Frontend Development", "JavaScript", "HTML5/CSS3", "Web Portals"],
    },
    {
      id: "anipixart",
      role: "Software Developer & Tech Faculty",
      company: "Anipixart Animation (Aliganj, Lucknow)",
      period: "3 Months",
      location: "Lucknow, India",
      badge: "Faculty",
      description: [
        "Instructed web technology concepts and modern development practices.",
        "Developed internal management utilities and student dashboard interfaces.",
      ],
      skills: ["Web Technologies", "Technical Faculty", "JavaScript", "Mentorship"],
    },
    {
      id: "advancelifeaqua",
      role: "Software Developer",
      company: "Advance Life Aqua Pvt. Ltd.",
      period: "3 Months",
      location: "India",
      badge: "Production",
      description: [
        "Developed and maintained corporate web applications and business product showcase modules.",
        "Integrated inquiry forms and lead collection endpoints.",
      ],
      skills: ["Web Development", "Client Portals", "Responsive Design"],
    },
  ] as ExperienceItem[],

  education: [
    {
      year: "2020 – 2024",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Rameshwaram Institute of Technology and Management",
      description:
        "Comprehensive coursework in Full Stack Development, Data Structures, Algorithms, Database Management Systems, Computer Networks, and Machine Learning.",
    },
    {
      year: "2017 – 2019",
      degree: "Intermediate",
      institution: "Adarsh Inter College, Adalhat",
      description:
        "Higher secondary education with a focused foundation in Physics, Chemistry, and Mathematics (PCM).",
    },
  ] as EducationItem[],

  services: [
    {
      id: "web-dev",
      title: "MERN Stack & Next.js Development",
      iconName: "Code",
      description:
        "End-to-end web applications crafted with Next.js App Router, React 19, Node.js, Express, and MongoDB. Fast, responsive, and SEO-optimized.",
      features: [
        "Full Stack MERN & Next.js Architecture",
        "Clean UI/UX with Tailwind CSS & shadcn/ui",
        "REST API Development & Third-Party Integrations",
        "Database Architecture (MongoDB & Firebase)",
      ],
    },
    {
      id: "crm-automation",
      title: "CRM Development & GoHighLevel (GHL)",
      iconName: "Workflow",
      description:
        "Comprehensive GoHighLevel (GHL) workflows, sales funnels, pipeline automation, and multi-channel lead nurturing to boost business growth.",
      features: [
        "GoHighLevel (GHL) Complete Setup & Pipelines",
        "Automated Lead Generation & Nurturing Journeys",
        "High-Converting Sales Funnels & Landing Pages",
        "Email, SMS & Webhook Workflow Automations",
      ],
    },
    {
      id: "enterprise-modules",
      title: "Enterprise Solutions & Backend APIs",
      iconName: "Database",
      description:
        "Robust backend microservices, authentication systems, secure database designs, and performance optimization for growing businesses.",
      features: [
        "Secure JWT Authentication & Authorization",
        "Third-party API Integrations & Webhooks",
        "State Management & Performance Tuning",
        "Scalable Cloud Deployment (Vercel, Netlify)",
      ],
    },
    {
      id: "ai-data",
      title: "Machine Learning & AI Modeling",
      iconName: "Brain",
      description:
        "Statistical modeling, deep learning architectures, and predictive forecasting pipelines tailored for smart system intelligence.",
      features: [
        "Predictive Modeling & Statistical Forecasting",
        "Deep Learning Architectures (R² > 0.90 achieved)",
        "Data Preprocessing & Feature Engineering",
        "Python, Scikit-learn, and Tensor Pipeline Integration",
      ],
    },
  ] as Service[],

  projects: [
    // Real Estate & PropTech
    {
      id: "51-acre",
      title: "51 Acre Real Estate Platform",
      category: "Real Estate & PropTech",
      description:
        "Flagship commercial & residential real estate marketplace. Comprehensive property listings, verified agent portals, location filters, and lead capture workflows.",
      image: "/images/project-51acre.png",
      liveUrl: "https://www.51acre.com/",
      tags: ["React.js", "Firebase", "Real Estate Portal", "Lead Capture", "Live Domain"],
      metrics: "Live Enterprise Platform (51acre.com)",
    },
    {
      id: "usdunique-51acre",
      title: "USD Unique 51 Acre",
      category: "Real Estate & PropTech",
      description:
        "Exclusive luxury land, premium villa developments, and commercial acreage portal under the USD Unique and 51 Acre portfolio.",
      image: "/images/project-usdunique.png",
      liveUrl: "https://usdunique.51acre.com/",
      tags: ["Next.js", "Tailwind CSS", "Real Estate", "Luxury Land", "Subdomain Portal"],
      metrics: "Live Production Portal",
    },
    {
      id: "usd-ploting",
      title: "USD Ploting Layout Visualizer",
      category: "Real Estate & PropTech",
      description:
        "Interactive land plot layout visualizer and property boundary booking portal for real estate township investors.",
      image: "/images/project-usdploting.png",
      liveUrl: "https://usd-ploting.vercel.app/",
      tags: ["React.js", "Layout Visualizer", "Vercel Deployed", "Responsive UI"],
      metrics: "Interactive Plot Booking",
    },

    // Fintech & Trading
    {
      id: "as-capital-research",
      title: "AS Capital Research Platform",
      category: "Fintech & Trading",
      description:
        "Institutional financial research portal providing equity insights, market trend forecasts, subscription access, and compliance data.",
      image: "/images/project-ascapital.png",
      liveUrl: "https://research.ascapitalresearch.com/",
      tags: ["Fintech", "Equity Research", "Analytics", "Live Domain", "Auth Portal"],
      metrics: "Live SEBI Research Portal",
    },
    {
      id: "mehta-insights",
      title: "Mehta Insights Financial Portal",
      category: "Fintech & Trading",
      description:
        "Wealth management, portfolio advisory, and capital growth intelligence portal with bespoke advisory consultation funnels.",
      image: "/images/project-mehtainsights.png",
      liveUrl: "https://www.mehtainsights.com/",
      tags: ["Fintech", "Consultancy", "Portfolio Advisory", "Live Domain"],
      metrics: "Live Advisory Platform",
    },
    {
      id: "the-trading-minds",
      title: "The Trading Minds Platform",
      category: "Fintech & Trading",
      description:
        "Stock market education, trading webinars, and mentorship web platform with course outlines, student reviews, and automated registrations.",
      image: "/images/project-thetradingminds.png",
      liveUrl: "https://the-trading-minds.vercel.app/",
      tags: ["React.js", "Stock Market", "Webinars", "Vercel Deployed"],
      metrics: "Trading Academy Platform",
    },
    {
      id: "the-safe-trader",
      title: "The Safe Trader Advisory",
      category: "Fintech & Trading",
      description:
        "Risk-managed financial trading community portal with trade setups, daily performance calculators, and member access.",
      image: "/images/project-thesafetrader.png",
      liveUrl: "https://the-safe-trader.vercel.app/",
      tags: ["Fintech", "Trading Analytics", "Community", "Vercel Deployed"],
      metrics: "Risk Management Portal",
    },
    {
      id: "fintech-client-one",
      title: "TradeVault Pro Broker Portal",
      category: "Fintech & Trading",
      description:
        "High-execution multi-asset trading platform with live market tickers, institutional-grade execution, and AI market intelligence.",
      image: "/images/project-tradevault.png",
      liveUrl: "https://fintech-client-one.vercel.app/",
      tags: ["TradeVault", "Fintech", "Pro Broker", "Live Markets", "Vercel Deployed"],
      metrics: "Multi-Asset Trading Portal",
    },

    // CRM & Agency Funnels
    {
      id: "pandaece-landing",
      title: "Pandaece Performance Marketing",
      category: "CRM & Agency",
      description:
        "Official performance marketing agency platform for Pandaece Technologies showcasing measurable growth funnels, full-funnel systems, and high-conversion client acquisition.",
      image: "/images/project-pandaece.png",
      liveUrl: "https://pandaecelandingpage.vercel.app/",
      tags: ["Performance Marketing", "Pandaece", "Lead Gen", "Agency Landing", "React.js"],
      metrics: "Performance Marketing Agency",
    },
    {
      id: "pandaece-ivf",
      title: "Pandaece IVF Healthcare Clinic",
      category: "CRM & Agency",
      description:
        "Specialized medical IVF healthcare portal with doctor schedules, patient appointment booking calendar, and consultation inquiries.",
      image: "/images/project-pandaece-ivf.png",
      liveUrl: "https://pandaece-ivf.vercel.app/",
      tags: ["Healthcare", "IVF Clinic", "Appointment Booking", "Vercel Deployed"],
      metrics: "Clinic Patient Funnel",
    },
    {
      id: "srm-lead",
      title: "SRM Admission Guidance System",
      category: "CRM & Agency",
      description:
        "High-performance admissions and applicant lead management CRM interface for tracking inquiries, admission pipelines, and counselor assignments.",
      image: "/images/project-srm-admission.png",
      liveUrl: "https://srm-lead.vercel.app/",
      tags: ["SRM University", "Lead Management", "Admissions", "Vercel Deployed"],
      metrics: "Admission CRM Portal",
    },
    {
      id: "digital-marking",
      title: "Pandaece Results-Focused Marketing",
      category: "CRM & Agency",
      description:
        "Full-funnel digital growth agency portal offering consultation lead capture, budget calculators, and automated client review booking.",
      image: "/images/project-digitalmarketing.png",
      liveUrl: "https://digital-marking.vercel.app/",
      tags: ["Digital Marketing", "Lead Gen", "Agency Funnel", "Vercel Deployed"],
      metrics: "Agency Growth Funnel",
    },
    {
      id: "lp-neon-seven",
      title: "Pandaece Hospital & Clinic Funnel",
      category: "CRM & Agency",
      description:
        "High-conversion performance marketing & patient acquisition portal designed for dental, fertility, and multi-specialty clinics.",
      image: "/images/project-pandaece-hospital.png",
      liveUrl: "https://lp-neon-seven.vercel.app/",
      tags: ["Healthcare Marketing", "Clinic Funnel", "Patient Acquisition", "Vercel Deployed"],
      metrics: "Patient Acquisition Funnel",
    },
    {
      id: "workshop-funnel",
      title: "Video Marketing Launchpad",
      category: "CRM & Agency",
      description:
        "Interactive live coaching masterclass registration funnel with seat booking, countdown timers, and video marketing curriculum breakdowns.",
      image: "/images/project-videomarketing.png",
      liveUrl: "https://workshop-iota-five.vercel.app/",
      tags: ["Video Marketing", "Masterclass", "Coach Funnel", "Vercel Deployed"],
      metrics: "Live Masterclass Funnel",
    },

    // E-Commerce & Commercial
    {
      id: "ecommerce-store-live",
      title: "Cara E-Commerce Storefront",
      category: "E-Commerce & Food",
      description:
        "Full-featured responsive online fashion & apparel shopping experience with product filters, discount coupons, sliding cart drawer, and checkout.",
      image: "/images/project-cara-ecommerce.png",
      liveUrl: "https://e-commerce-ecru-kappa-85.vercel.app/",
      tags: ["Cara Fashion", "React.js", "Shopping Cart", "Vercel Deployed"],
      metrics: "Fashion E-Commerce Store",
    },
    {
      id: "annapurna-restaurants",
      title: "Annapurna Restaurants Web Portal",
      category: "E-Commerce & Food",
      description:
        "Warm dining & gastronomy portal featuring chef specials, digital menu cards, online dining table reservations, and delivery inquiries.",
      image: "/images/project-annapurna.png",
      liveUrl: "https://annapurna-restaurants.vercel.app/",
      tags: ["Restaurant", "Dining Table", "Food Menu", "Vercel Deployed"],
      metrics: "Dining & Restaurant Portal",
    },
    {
      id: "agnisawd",
      title: "Agnisawd 8-Minute Grocery Delivery",
      category: "E-Commerce & Food",
      description:
        "Rapid quick-commerce grocery delivery platform with fresh vegetables, pantry essentials, instant cart checkout, and location-based delivery dispatch.",
      image: "/images/project-agnisawd.png",
      liveUrl: "https://agnisawd.agniit.com/",
      tags: ["Quick Commerce", "Grocery Delivery", "Live Domain", "Full Stack"],
      metrics: "Live Quick-Commerce Portal",
    },
    {
      id: "advancelifeaqua",
      title: "Advance Life Aqua Solutions",
      category: "E-Commerce & Food",
      description:
        "Industrial RO water purification systems, bottling plant equipment catalogs, and quotation request portal.",
      image: "/images/project-advancelifeaqua.png",
      liveUrl: "https://advancelifeaqua.in/",
      tags: ["Industrial Solutions", "Water Treatment", "Live Domain", "B2B Machine"],
      metrics: "Live Industrial Equipment Portal",
    },
    {
      id: "greenvijiya",
      title: "Green Vijiya Sustainable Products",
      category: "E-Commerce & Food",
      description:
        "Sustainable agro-commodities and green consumer products portal with certified product ranges and partner inquiry channels.",
      image: "/images/web.jpg",
      liveUrl: "https://greenvijiya.com/",
      tags: ["Eco-Friendly", "Green Business", "Live Domain", "E-Commerce"],
      metrics: "Live Commercial Domain",
    },
    {
      id: "sanjeet-steel",
      title: "266 Kursi Vidhansabha Portal",
      category: "E-Commerce & Food",
      description:
        "Public grievance redressal, constituent service portal, and development initiative showcase for Er. Sanjeet Singh Patel (266 Kursi Vidhansabha).",
      image: "/images/project-sanjeetsingh.png",
      liveUrl: "https://266-sanjeet-steel.vercel.app/",
      tags: ["Constituent Portal", "Public Service", "Grievance System", "Vercel Deployed"],
      metrics: "Constituency Service Portal",
    },

    // EdTech & SaaS Web Apps
    {
      id: "edtech-platform",
      title: "Pandaece EdTech Growth Agency",
      category: "EdTech & SaaS",
      description:
        "Growth marketing and customer acquisition portal built specifically for educational institutions, online learning platforms, and digital academies.",
      image: "/images/project-edtech-marketing.png",
      liveUrl: "https://edtech-dusky-theta.vercel.app/",
      tags: ["EdTech Growth", "Performance Marketing", "Education", "Vercel Deployed"],
      metrics: "+186% Monthly Growth Engine",
    },
    {
      id: "attend-app",
      title: "AttendEase Attendance & HR Admin Panel",
      category: "EdTech & SaaS",
      description:
        "Modern SaaS employee and student attendance management dashboard with daily attendance records, real-time absence tracking, and monthly analysis reports.",
      image: "/images/project-attendease.png",
      liveUrl: "https://attend-ecru.vercel.app/",
      tags: ["AttendEase", "HR Dashboard", "SaaS Admin", "React.js", "Vercel Deployed"],
      metrics: "Admin HR Attendance Engine",
    },
    {
      id: "aadiyogi",
      title: "Aadi Yogi Seva Trust Portal",
      category: "EdTech & SaaS",
      description:
        "Govt. registered public charitable & religious trust portal (NITI Aayog DARPAN Verified) with donation workflows, trustee directory, and 88 welfare initiatives.",
      image: "/images/project-aadiyogi.png",
      liveUrl: "https://aadiyogi-sigma.vercel.app/",
      tags: ["Charitable Trust", "NITI Aayog DARPAN", "Donation Gateway", "Vercel Deployed"],
      metrics: "NITI Aayog DARPAN Verified",
    },
    {
      id: "vrinda-aura-tour",
      title: "Vrinda Aura Divine Pilgrimage Portal",
      category: "EdTech & SaaS",
      description:
        "Sacred Vrindavan & Mathura divine pilgrimage tour portal with customized travel packages, temple darshan itineraries, and instant booking workflows.",
      image: "/images/project-vrindaaura.png",
      liveUrl: "https://vrindaauratour.vercel.app/",
      tags: ["Vrinda Aura", "Divine Pilgrimage", "Temple Tours", "Tour Packages", "Vercel Deployed"],
      metrics: "Pilgrimage Booking Platform",
    },

    // AI & Core Algorithms
    {
      id: "energy-forecast",
      title: "Energy Consumption Forecasting (Deep Learning)",
      category: "AI & Algorithms",
      description:
        "Deep learning predictive model for smart building energy management utilizing LSTM neural architectures. Achieved an outstanding R² score greater than 0.90.",
      image: "/images/cloud computing.jpg",
      tags: ["Deep Learning", "Python", "Predictive Modeling", "Time Series", "R² > 0.90"],
      metrics: "R² Accuracy > 0.90",
    },
    {
      id: "sorting-visualizer-live",
      title: "Sorting Algorithm Visualizer",
      category: "AI & Algorithms",
      description:
        "Interactive algorithm visualizer animating Bubble Sort, Selection Sort, and Insertion Sort with real-time speed adjustments and bar graphs.",
      image: "/images/project-sorting.png",
      liveUrl: "https://65f2227679bf5d3855477730--unique-sprite-c39365.netlify.app/",
      tags: ["Algorithms", "Visualization", "JavaScript", "Netlify Live"],
      metrics: "Deployed Live on Netlify",
    },
    {
      id: "tts-converter-live",
      title: "Text to Speech Audio Synthesis",
      category: "AI & Algorithms",
      description:
        "Real-time browser speech synthesizer with multi-voice selection, pitch controls, and dynamic speech rate settings.",
      image: "/images/project-tts.png",
      liveUrl: "https://64fdae70866787109d17bd02--rainbow-eclair-d4fe57.netlify.app/",
      tags: ["Web Speech API", "Audio Synthesis", "JavaScript", "Netlify Live"],
      metrics: "Deployed Live on Netlify",
    },
  ] as Project[],

  certificates: [
    {
      id: "cert-pandaece",
      title: "Experience Certificate / Work Experience Letter",
      organization: "PANDAeCe Pvt Ltd",
      badge: "Work Experience Letter",
      issueDate: "October 12, 2026",
      period: "June 01, 2026 – September 30, 2026",
      description:
        "Official work experience letter certifying tenure as Entry Level MERN Stack Developer, developing responsive web applications, RESTful APIs, and cross-functional project delivery.",
      image: "/images/cert-pandaece.png",
      highlights: [
        "Developing, testing, and maintaining responsive web applications and user interfaces.",
        "Implementing RESTful APIs and integrating backend services with frontend components.",
        "Collaborating with design and cross-functional teams to resolve technical issues.",
        "Code reviews, technical documentation, and application debugging.",
      ],
    },
    {
      id: "cert-sileo",
      title: "Trainee – MERN Stack Appointment & Training Certificate",
      organization: "Sileo Technologies Pvt. Ltd. (CMMi Level 3)",
      badge: "MERN Stack Trainee",
      issueDate: "August 11, 2025",
      period: "5th March 2025 – 11th August 2025",
      description:
        "Official appointment and comprehensive training certification covering React.js frontend development, Node.js & Express.js backend, MongoDB database architecture, and REST API deployment.",
      image: "/images/cert-sileo.png",
      highlights: [
        "Front-end development with React.js",
        "Back-end development with Node.js and Express.js",
        "Database design and integration with MongoDB",
        "API development and deployment",
        "Best practices in version control, debugging, and application optimization",
      ],
    },
    {
      id: "cert-tcs",
      title: "TCS iON NQT – IT",
      organization: "Tata Consultancy Services (TCS iON)",
      badge: "IT Certification",
      issueDate: "October 18, 2024",
      period: "Exam Date: Oct 2024",
      description:
        "National Qualifier Test certification verifying core IT competency, hands-on programming assessment in C++/C, and advanced quantitative reasoning.",
      image: "/images/cert-tcs.png",
      highlights: [
        "Hands-On Programming Assessment: 347.20 / 600 in C++ and C",
        "Advanced Quantitative & Reasoning Ability: 61.30%",
        "Foundation Cognitive Section: 51.57%",
        "Total Normalized Score: 1643.24 / 3000 (Registration: 22071543819)",
      ],
    },
    {
      id: "cert-roomshala",
      title: "Roomshala Internship Completion Letter",
      organization: "Roomshala Hospitality Private Limited",
      badge: "Internship Completion",
      issueDate: "July 1, 2024",
      period: "April 1st 2024 – June 30th 2024",
      description:
        "Official 3-month corporate internship completion letter certifying strong work ethic, exceptional skills, attention to detail, and cross-functional project execution.",
      image: "/images/cert-roomshala.png",
      highlights: [
        "3 months full-time corporate internship from April 1st, 2024 to June 30th, 2024",
        "Successfully completed assigned projects and web development deliverables",
        "Demonstrated exceptional work ethic, professionalism, and team collaboration",
        "Officially recognized by HR Manager, Roomshala Hospitality Private Limited",
      ],
    },
    {
      id: "cert-iit-bhu",
      title: "IIT BHU Summer Internship",
      organization: "Indian Institute of Technology (BHU) Varanasi",
      badge: "Machine Learning & Deep Learning",
      description: "Rigorous summer internship focusing on Machine Learning algorithms and Deep Learning neural architectures.",
      image: "/images/cert-iit-bhu.jpg",
    },
    {
      id: "cert-cloud-comp",
      title: "IETE Cloud Computing & Networks",
      organization: "Institution of Electronics & Telecommunication Engineers (IETE)",
      badge: "Cloud & Networks",
      description: "Technical certification in cloud computing architectures and distributed networks.",
      image: "/images/cert-cloud-computing.jpg",
    },
  ] as Certificate[],
};
