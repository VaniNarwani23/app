// Mock data for Vani Narwani's Portfolio

export const personalInfo = {
  name: "Vani Narwani",
  firstName: "Vani",
  lastName: "Narwani",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences that blend creativity with code.",
  description: "I transform ideas into elegant, functional web applications. With a passion for both frontend aesthetics and backend logic, I create seamless digital experiences that users love.",
  avatar: "https://customer-assets.emergentagent.com/job_creative-showcase-294/artifacts/v5t14llh_ChatGPT%20Image%20Jan%203%2C%202026%2C%2003_51_20%20PM.png",
  location: "Bhopal, India",
  email: "vaninarwani@gmail.com",
  phone: "+91 9329514201",
  resumeUrl: "https://customer-assets.emergentagent.com/job_creative-showcase-294/artifacts/1rm02oi2_Vani%20Narwani%20Resume%202025.pdf"
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/vaninarwani",
  github: "https://github.com/vaninarwani",
  email: "mailto:vaninarwani@gmail.com"
};

export const aboutContent = {
  intro: "Hey there! I'm Vani, a passionate Full Stack Developer based in Bhopal, India.",
  story: "During my internship at Innobimb Infotech, I discovered the joy of building complete applications from scratch. From crafting pixel-perfect interfaces to architecting robust backend systems, I love every part of the development journey.",
  passion: "When I'm not coding, you'll find me exploring new technologies, solving DSA problems, or thinking about how tech can make healthcare more accessible."
};

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "GSAP", level: 75 },
    { name: "JavaScript", level: 90 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "REST APIs", level: 88 },
    { name: "Python", level: 75 }
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
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "JavaScript", "Git"],
    github: "https://github.com/vaninarwani/ecom-store",
    live: "#",
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
    image: "https://images.pexels.com/photos/8383884/pexels-photo-8383884.jpeg?auto=compress&cs=tinysrgb&w=800",
    tech: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "TypeScript", "Git"],
    github: "https://github.com/vaninarwani/rural-medicare",
    live: "#",
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
    title: "Full Stack Web Development",
    issuer: "Coursera",
    issueDate: "2024",
    credentialId: "CERT-FS-2024-001",
    description: "Comprehensive certification covering modern full-stack development including React, Node.js, MongoDB, and deployment strategies. Completed hands-on projects demonstrating proficiency in building scalable web applications.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    image: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&w=800&q=80",
    verifyUrl: "#"
  },
  {
    id: 2,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    issueDate: "2024",
    credentialId: "FCC-JS-2024-VN",
    description: "Mastered fundamental programming concepts, ES6+ syntax, regular expressions, debugging, and data structures. Completed 300+ hours of coding challenges and algorithm implementations.",
    skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Problem Solving"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    verifyUrl: "#"
  },
  {
    id: 3,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    issueDate: "2023",
    credentialId: "FCC-RWD-2023-VN",
    description: "Learned HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles. Built multiple responsive projects including tribute pages, survey forms, and landing pages.",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    verifyUrl: "#"
  },
  {
    id: 4,
    title: "Python for Data Science",
    issuer: "IBM",
    issueDate: "2024",
    credentialId: "IBM-PY-DS-2024",
    description: "Learned Python fundamentals, data manipulation with Pandas, data visualization with Matplotlib, and basic machine learning concepts. Completed real-world data analysis projects.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    verifyUrl: "#"
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
