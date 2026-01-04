import avatar from '../assets/avatar.png';
import ecom from '../assets/ecomProj.png';
import deliotte from '../assets/deliotte.png';
import int from '../assets/innobimb infotech.png'
import med from '../assets/Medicare.png';
import Micro from '../assets/Microsoft Certificate Vani Narwani.png';
import Scrap from '../assets/scrapping udemy .png'
export const personalInfo = {
  name: "Vani Narwani",
  firstName: "Vani",
  lastName: "Narwani",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences that blend creativity with code.",
  description: "I transform ideas into elegant, functional web applications. With a passion for both frontend aesthetics and backend logic, I create seamless digital experiences that users love.",
  avatar: avatar,
  location: "Bhopal, India",
  email: "vaninarwani@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1nIc5oQTE4uvmCNm08uxBXKb30SyhUT5m/view?usp=sharing"
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/vani-narwani-50a239274/",
  github: "https://github.com/VaniNarwani23",
  email: "mailto:vaninarwani@gmail.com"
};

export const aboutContent = {
  intro: "Hey there! I'm Vani, a passionate Full Stack Developer based in Bhopal, India.",
  story: "During my internship at Innobimb Infotech, I discovered the joy of building complete applications from scratch. From crafting pixel-perfect interfaces to architecting robust backend systems, I love every part of the development journey.",
  passion: "When I'm not coding, you'll find me exploring new technologies, solving DSA problems, or thinking about how tech can make healthcare more accessible."
};

export const skills = {
  frontend: [
    { name: "React.js", level: 100 },
    { name: "TypeScript", level: 100 },
    { name: "Tailwind CSS", level: 100 },
    { name: "GSAP", level: 100 },
    { name: "JavaScript", level: 100 }
  ],
  backend: [
    { name: "Node.js", level: 100 },
    { name: "MongoDB", level: 100 },
    { name: "REST APIs", level: 100 },
    { name: "Python", level: 100 }
  ],
  tools: ["Git & GitHub", "VS Code", "Vite", "Replit", "Selenium", "BS4"]
};

export const softSkills = [
  "Time Management",
  "Creative Thinking",
  "Adaptability",
  "Fast Learner",
  "Problem Solving",
  "Public Speaking"
];

export const projects = [
  {
    id: 1,
    title: "The Ecom Store",
    category: "Full Stack",
    description: "A responsive full-stack e-commerce platform with dynamic routing, cart system, custom filtering, and secure MongoDB integration.",
    longDescription: "Built a comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, and payment integration. Enhanced UI/UX with smooth animations, category filtering, and search optimization.",
    image: ecom,
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "JavaScript", "Git"],
    github: "https://github.com/VaniNarwani23/TheEcomStore",
    live: "https://theecomstorebyvani.netlify.app/",
    features: [
      "Responsive design across all devices",
      "Dynamic product filtering & search",
      "Secure REST API with MongoDB",
      "Smooth animations & transitions"
    ]
  },
  {
    id: 2,
    title: "Rural Medicare",
    category: "Healthcare",
    description: "A healthcare web application enhancing rural medical access with hospital locator, emergency services, and telemedicine support.",
    longDescription: "Developed a mobile-first healthcare platform to improve medical accessibility in rural areas. Features include real-time hospital locator, emergency service integration, telemedicine support, and Medicare plan comparison tools.",
    image: med,
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "TypeScript", "Git"],
    github: "https://github.com/VaniNarwani23/Medicare",
    live: "https://ruralmedicareweb.netlify.app/",
    features: [
      "Hospital & clinic locator",
      "Emergency service integration",
      "Telemedicine support",
      "Medicare plan comparison"
    ]
  }
];

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Innobimb Infotech",
    duration: "2024 - 2025",
    description: "Gained hands-on experience in the complete development lifecycle, working on both frontend and backend technologies. Built and deployed full-stack applications while collaborating with experienced mentors.",
    highlights: [
      "Complete development lifecycle understanding",
      "Frontend & backend development",
      "Full-stack application deployment",
      "Collaborative team environment"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor's of Computer Applications",
    institution: "Sant Hirdaram Girls College, Bhopal",
    duration: "2024 - 2027",
    status: "Currently Pursuing"
  },
  {
    id: 2,
    degree: "12th (M.P Board) - Commerce + I.P.",
    institution: "A.T. Shahani Girls Higher Secondary School, Bhopal",
    duration: "2023 - 2024",
    score: "83%"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Full Stack Developer",
    issuer: "Innobimb Infotech",
    issueDate: "2025",
    credentialId: "IBI-250157",
    description: "Comprehensive certification covering modern full-stack development including React, Node.js, MongoDB, and deployment strategies. Completed hands-on projects demonstrating proficiency in building scalable web applications.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    image: int,
    verifyUrl:"https://drive.google.com/file/d/1pM9dofO0ELPQXTCmI_o7N97X_Bl9Gj1o/view?usp=sharing"

  },
  {
    id: 2,
    title: "Deliotte Virtual Internship",
    issuer: "Forage",
    issueDate: "2025",
    credentialId: "zCeR5iouWByexSPj8",
    description: "Mastered fundamental programming concepts, ES6+ syntax, regular expressions, debugging, and data structures. Completed 300+ hours of coding challenges and algorithm implementations.",
    skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Problem Solving"],
    image: deliotte,
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_TD5GtQLj3xLu7ySSb_1750656435308_completion_certificate.pdf"
  },
  {
    id: 3,
    title: "Web development Workshop by Microsoft learn student ambassador",
    issuer: "Microsoft Learn Student Ambassadors",
    issueDate: "2024",
    description: "Learned HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles. Built multiple responsive projects including tribute pages, survey forms, and landing pages.",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    image: Micro,
    verifyUrl:"https://drive.google.com/file/d/1rHlf-YevOrcxQCnouPatS-WkQQli-8ci/view?usp=sharing"
  },
  {
    id: 4,
    title: "Master Python Web Scraping & Automation using BS4 & Selenium",
    issuer: "Udemy",
    issueDate: "2025",
    credentialId: "IBM-PY-DS-2024",
    description: " Built high-performance scrapers with BeautifulSoup4 to extract and analyze data at scale.Leveraged Selenium to automate repetitive tasks and handle dynamic web content. Learned to bypass common restrictions and build resilient scraping solutions.",
    skills: ["Python", "Web Scrapping", "BS4", "Selenium"],
    image: Scrap,
    verifyUrl: "https://www.udemy.com/certificate/UC-87600b58-b023-4992-911f-978e798a016b/"
  }
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];