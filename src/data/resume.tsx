import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mouad Ziroudi",
  initials: "MZ",
  url: "https://mziroudi.site/",
  location: "Casablanca, Morocco",
  locationLink: "https://www.google.com/maps/search/Casablanca,+Morocco",
  description:
    "Product Designer and Computer Engineer with 7+ years experience leading high-performance teams. Expert in UX design, AI technologies, and data pipelines using Figma, Miro, and Adobe CS. Proven track record of elevating user experiences and product performance, Passionate about creating innovative solutions that drive progress.",
  summary:
    "Product Designer and Computer Engineer with 7+ years experience leading high-performance teams. Expert in UX design, AI technologies, and data pipelines using Figma, Miro, and Adobe CS. Proven track record of elevating user experiences and product performance, Passionate about creating innovative solutions that drive progress.",
  avatarUrl: "/me.jpg",
  skills: [
    "Product Design",
    "UX Design",
    "UI Design",
    "System Design",
    "Pencil and Paper",
    "Figma",
    "Miro",
    "Adobe CS",
    "Notion",
    "Trello",
    "VS code",
    "Algorithm Design",
    "Agile Methodology",
    "HTML",
    "PyTorch",
    "CSS",
    "JavaScript",
    "React",
    "Wordpress",
    "SEO",
    "SaaS",
    "Video Editing",
    "English",
    "Arabic",
    "French",
    "UX Leadership and Strategy",
    "Design Execution and Prototyping",
    "User-Centered Research",
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Presentation Skills",
    "Time Management",
    "Campaign Management",
    "Social Media Marketing",
    "Marketing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mouad.ziroudi@gmail.com",
    tel: "+212620-3455-01",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mouadziroudi", // Assuming a GitHub URL based on name
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mouad-ziroudi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mouadziroudi", // Assuming a Twitter URL based on name
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#", // No Youtube link provided
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
  
    {
      company: "Evermore Digital",
      href: "", // No website provided
      badges: [],
      location: "Casablanca, Morocco",
      title: "Senior Product Designer",
      logoUrl: "", // No logo provided
      start: "Jan 2024",
      end: "Present",
      description:
        "• Architected high-performance systems that precisely met business and user requirements, significantly boosting system efficiency and reliability\n• Gathered and translated business requirements into precise technical specifications and comprehensive system designs, directly contributing to project success\n• Developed design systems, style guides, and UI libraries to ensure consistency across products, enhancing design coherence and efficiency\n• Drove the design process from research to implementation, resulting in impactful user engagement and enhanced site navigation.\n• Implemented advanced web development techniques using React, resulting in a 60% increase in website traffic and significantly improved user interaction.\n• Improved user experience by translating conceptual ideas into user flows and prototypes, leading to a 20% increase in site performance",
    },
    {
      company: "MoreCommunication",
      href: "", // No website provided
      badges: [],
      location: "Casablanca, Morocco",
      title: "UI/UX designer and Product Developer",
      logoUrl: "", // No logo provided
      start: "Mar 2018",
      end: "Dec 2023",
      description:
        "• Conducted user interviews, surveys, and usability testing to gather insights, leading to more informed design decisions\n• Created wireframes, interactive prototypes, and high-fidelity mockups using Figma, Sketch, and Adobe XD, resulting in streamlined design processes\n• Restructured and organized content, significantly enhancing user navigation and overall user experience, resulting in a 35% increase in user engagement and a 20% reduction in user drop-off rates\n• Created a series of groundbreaking user interaction designs that boosted user engagement by 35% and enhanced overall user satisfaction metrics by 25%. This strategic initiative also elevated retention rates and garnered overwhelmingly positive user feedback within just the first six months.\n• Managed a portfolio of websites, ensuring proper functioning, optimizing through regular updates, and implementing measures to improve performance, resulting in increased user engagement and higher traffic\n• Successfully implemented responsive designs to improve user experience across various devices, resulting in a 25% increase in user satisfaction and a 30% reduction in bounce rates across both mobile and desktop platforms.\n• Implemented a content management strategy using advanced CMS tools, consistently updating site content to improve relevance and accessibility, resulting in a significant increase in user retention and engagement over 6 months.\n• Monitored web traffic and analyzed metrics using Google Analytics, resulting in a 25% increase in user engagement over six months.",
    },
    {
      company: "MORSERVS",
      href: "", // No website provided
      badges: [],
      location: "Casablanca, Morocco",
      title: "Analyst Programmer and Web Integrator",
      logoUrl: "", // No logo provided
      start: "Jan 2020",
      end: "Mar 2020",
      description:
        "• Developed and maintained dynamic web applications using various front-end frameworks and PHP, SOAP technologies, enhancing site responsiveness and functionality, resulting in a 30% increase in website traffic and user interaction, improving user engagement and overall performance\n• Analyzedbusinessrequirementsandcollaboratedwithcross-functionalteams,resultinginthesuccessfullaunchofanewe-commerce platform that boosted online sales by 20% within the first three months and enhanced customer satisfaction scores by 15%.\n• Delivered technical support and resolved complex software issues, achieving a 95% customer satisfaction rate and bolstering client retention",
    },
  ],
  education: [
    {
      school: "University of Science and Technology Settat.",
      href: "", // No website provided
      degree: "Master’s in Application Design and Development Engineering",
      logoUrl: "", // No logo provided
      start: "2019",
      end: "Feb 2020",
    },
    {
      school: "University of Science and Technology Settat.",
      href: "", // No website provided
      degree: "Bachelor’s in Application Design and Development Engineering,",
      logoUrl: "", // No logo provided
      start: "Nov 2016",
      end: "Dec 2017",
    },
  ],
  projects: [
    
    {
      title: "MedicPro - Prosthetics & Orthopedic Solutions Platform",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Designed an empathy-driven, accessible healthcare platform for a leading provider of prosthetics and orthotics. The project prioritized patient education, trust-building, and WCAG compliance to support individuals with disabilities and their families through a sensitive healthcare journey.",
      technologies: [
        "Figma",
        "Miro",
        "Accessibility (WCAG)",
        "User Research",
        "Healthcare Design",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Primolegno.ma - Premium Architectural Interior Design Platform",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Created a sophisticated digital presence for a luxury interior design company, focusing on immersive storytelling and high-quality visual showcases. The platform was designed to attract architects, designers, and affluent homeowners by reflecting the brand's commitment to craftsmanship and premium materials.",
      technologies: [
        "Figma",
        "Adobe CS",
        "Wordpress",
        "Brand Strategy",
        "Luxury UX",
      ],
      links: ["https://primolegno.ma/"],
      image: "",
      video: "",
    },
    {
      title: "Darnjara.ma - E-commerce Platform for Interior Design",
      href: "#",
      dates: "2022",
      active: false,
      description:
        "Developed a comprehensive e-commerce solution for a major interior design company, featuring a multi-language product catalog and a franchise management system. The platform was engineered to enhance user experience and support business growth in the Moroccan market.",
      technologies: [
        "Wordpress",
        "WooCommerce",
        "PHP",
        "JavaScript",
        "E-commerce Strategy",
      ],
      links: ["https://darnjara.ma/"],
      image: "",
      video: "",
    },
    {
      title: "HSS Maroc - Home System Solutions Premium Platform",
      href: "#",
      dates: "2021",
      active: false,
      description:
        "Designed and developed a premium brand platform for the exclusive Moroccan distributor of Franke Swiss appliances. The project focused on creating a luxury user experience that matched the high-end product positioning and supported a network of dealers and professional installers.",
      technologies: [
        "Wordpress",
        "Brand Strategy",
        "UI/UX Design",
        "SEO",
      ],
      links: ["https://hssmaroc.com/"],
      image: "",
      video: "",
    },
    {
      title: "Touarga Club (UTS) - Professional Football Club Digital Platform",
      href: "#",
      dates: "2020",
      active: false,
      description:
        "Led the creation of a comprehensive digital platform for a professional football club, focusing on fan engagement, youth academy promotion, and community building. The site was designed to be a central hub for news, match information, and team updates.",
      technologies: [
        "Wordpress",
        "PHP",
        "JavaScript",
        "Community Management",
        "Content Strategy",
      ],
      links: ["https://touargaclub.ma/"],
      image: "",
      video: "",
    },
  ],
    hackathons: [
    {
      title: "Annotation",
      dates: "2024",
      location: "",
      description:
        "This project is a boilerplate for a FastAPI-based Software-as-a-Service (SaaS) application focused on document processing. It provides a foundational structure including user authentication, API routing, database integration, Docker setup for development and deployment, basic monitoring with Prometheus, and a CI pipeline with GitHub Actions. The core idea is to offer a scalable and maintainable starting point for building more complex document processing services, where users can upload documents, have them processed, and manage their accounts and subscriptions. Current document processing and billing functionalities are placeholders, intended to be replaced with actual business logic.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: Icons.github,
          href: "https://github.com/mziroudi/Annotation",
        },
      ],
    },
    {
      title: "motive",
      dates: "2024",
      location: "",
      description:
        "Daily motivation that speaks to your soul. A modern, minimalist emotional wellbeing app that delivers personalized daily motivation through AI-generated quotes tailored to your interests.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: Icons.github,
          href: "https://github.com/mziroudi/motive",
        },
      ],
    },
    {
      title: "myportfolio",
      dates: "2024",
      location: "",
      description:
        "Welcome to my professional portfolio! I'm Mouad Ziroudi, a Senior Product Designer with 6+ years of experience creating exceptional digital experiences.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: Icons.github,
          href: "https://github.com/mziroudi/myportfolio",
        },
      ],
    },
    {
      title: "travel",
      dates: "2024",
      location: "",
      description:
        "Travel recommendation app with updated calendar",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: Icons.github,
          href: "https://github.com/mziroudi/travel",
        },
      ],
    },
    {
      title: "unsplash",
      dates: "2024",
      location: "",
      description:
        "Unsplash Gallery application with search and download features",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: Icons.github,
          href: "https://github.com/mziroudi/unsplash",
        },
      ],
    },
  ],
} as const;
