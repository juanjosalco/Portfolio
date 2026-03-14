export const personalInfo = {
  name: "Juan Jose Salazar Cortes",
  title: "Software Engineer",
  subtitle: "Building secure, scalable systems at Microsoft",
  email: "juanjosalco@gmail.com",
  phone: "+52 392 940 9449",
  location: "Guadalajara, MX",
  website: "https://juanjosalco.netlify.app/",
  github: "https://github.com/juanjosalco",
  linkedin: "https://www.linkedin.com/in/juanjosalco/",
  resumeUrl: "/Portfolio/resume.pdf",
};

export const about = {
  summary:
    "Software Engineer at Microsoft with experience in cloud security and data engineering. Previously led mobile development at a startup from my 3rd semester of college. Competitive programmer (ICPC Mexico Finalist) and community leader of 200+ students. Passionate about building scalable systems and mentoring others through technical workshops.",
  languages: ["C++", "Python", "C#", "TypeScript", "JavaScript", "SQL", "KQL", "C", "R"],
  technologies: ["Azure", "React Native", "React JS", "Git", "Node JS", "SharePoint API", "Graph API", "Firebase"],
};

export const experiences = [
  {
    company: "Microsoft",
    role: "Software Engineer",
    subtitle: "Cloud Security Engineer",
    period: "Oct. 2024 — Present",
    tech: ["C#", "Azure", "KQL"],
    bullets: [
      "Developing and managing data ingestion pipelines from first-party and third-party applications into a secure Data Lake within Microsoft's Security organization, enabling privacy compliance across all data flows.",
      "Building monitoring and validation systems to ensure data integrity and privacy standards are maintained across multiple ingestion sources, supporting the security posture of Microsoft's cloud ecosystem.",
    ],
  },
  {
    company: "Microsoft",
    role: "Software Engineer Intern",
    subtitle: "Cloud Security Engineer",
    period: "Jun. 2024 — Sep. 2024",
    tech: ["C#", "SharePoint", "Graph API", "Encryption"],
    bullets: [
      "Developed and integrated a new Extended SharePoint Permissions (ESP) API, enabling the Guest Scenario that allows SharePoint to share files with people outside of an organization. Changes were announced at the Microsoft Ignite Conference.",
      "Integrated ECS for secure rollout across multiple tenants and environments. Collaborated with the SharePoint team to conduct End-to-End testing, validating the process of creating, sharing, and consuming protected files with external users.",
    ],
  },
  {
    company: "Kodda",
    role: "Software Engineer Intern",
    subtitle: "React Native Developer",
    period: "Oct. 2022 — Jun. 2024",
    tech: ["React Native", "React JS", "TypeScript", "Firebase", "Rive"],
    links: {
      website: "https://kodda.mx/",
      appStore: "https://apps.apple.com/mx/app/kodda/id1636001512",
    },
    bullets: [
      "Developed and published the current web application to announce the launch of the app in iOS and Android, having 3,000 users in the first month.",
      "Developed and implemented the connection between wearables and the app to track the user's health information to show statistics of their progress, helping 150 users to modify their habits becoming healthier.",
    ],
  },
];

export const projects = [
  {
    title: "Food Bank App — BAMX",
    description:
      "Collaborated with 'Banco de Alimentos de Mexico' to develop a Web and Mobile Application to facilitate food, clothes and money donations and distribution, increasing the Bank's network of allies.",
    tech: ["React JS", "React Native", "JavaScript", "Rive", "Firebase"],
    github: "https://github.com/orgs/BAMX-Food-Bank-Application/repositories",
    live: "https://bdalimentos.org/",
    period: "Aug. 2023 — Oct. 2023",
  },
  {
    title: "Beyond SWE-Bench — MICAI 2025",
    description:
      "Co-authored a published research paper presenting a compiler-assisted pipeline for multi-language automated program repair (C, C++, Java), addressing the Python-only limitation of existing AI bug-fixing tools. Fine-tuned Qwen3-14B using LoRA on Modal Cloud with H100 GPUs.",
    tech: ["Python", "LoRA", "LLMs", "Modal Cloud", "H100 GPUs"],
    paper: "https://link.springer.com/chapter/10.1007/978-3-032-09044-7_9",
    period: "2025",
  },
  {
    title: "Kodda — Health & Wellness App",
    description:
      "Published mobile application on iOS and Android for health tracking and wellness management. Built wearable integrations and launched to 3,000+ users in the first month.",
    tech: ["React Native", "TypeScript", "Firebase", "Metriport"],
    live: "https://kodda.mx/",
    appStore: "https://apps.apple.com/mx/app/kodda/id1636001512",
    period: "Oct. 2022 — Jun. 2024",
  },
];

export const publication = {
  title: "Beyond SWE-Bench: A Compiler-Assisted Pipeline for Multi-language Automated Program Repair",
  venue: "MICAI 2025 — Published on Springer",
  authors: "Moises H. Pineda, Diego Sánchez Luna, Mariana Esquivel Hernandez, Juan Salazar, et al.",
  description:
    "Most AI tools that fix code bugs only work with Python. This research built a system to address that gap — creating a compiler-assisted pipeline for automated program repair across C, C++, and Java. Fine-tuned Qwen3-14B using LoRA, deployed on Modal cloud platform with H100 GPUs.",
  link: "https://link.springer.com/chapter/10.1007/978-3-032-09044-7_9",
};

export const awards = [
  {
    title: "ICPC Mexico Finals",
    description: "27th Place out of 600+ teams across all of Mexico",
    year: "2025",
    icon: "Trophy",
  },
  {
    title: "Excelencia en Formación Integral",
    description: "Liderazgo en Desarrollo Profesional — Awarded to the top 5% of the graduating class",
    year: "Jun. 2025",
    icon: "Award",
  },
  {
    title: "BEDU Honorable Mention",
    description: "15th Best Student out of 2,000 in the Web Development Course",
    year: "2023",
    icon: "Medal",
  },
  {
    title: "HackMTY 2023",
    description: "Honorable Mention at one of the biggest hackathons in Mexico",
    year: "2023",
    icon: "Code",
  },
  {
    title: "Community Leader",
    description: "Led Talenta community of 200+ students & Board of Directors of the GDA Algorithms Club (550 → 800+ members)",
    year: "2021 — 2025",
    icon: "Users",
  },
];

export const education = {
  school: "Monterrey Institute of Technology and Higher Education",
  degree: "B.S. in Computer Science and Technology",
  period: "Aug. 2021 — Jun. 2025",
  gpa: "97 / 100",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];
