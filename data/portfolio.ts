export type Project = {
  name: string;
  type: string;
  year: string;
  description: string;
  features: string[];
  technologies: string[];
  badges?: string[];
  href: string;
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const personal = {
  name: "Aliberk Olukkaya",
  title: "Computer Engineer",
  focus: "AI & Data Engineering",
  location: "Konya, Türkiye",
  email: "aliberkolukkayaa@gmail.com",
  github: "https://github.com/AliberkOlukkaya",
  linkedin: "https://www.linkedin.com/in/aliberk-olukkaya-3a631137a/",
  cv: "/Aliberk_Olukkaya_CV.pdf",
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects: Project[] = [
  {
    name: "Artificial Intelligence Based Traffic Enforcement System",
    type: "Graduation Project",
    year: "2026",
    description:
      "A full-stack platform for recording, reviewing, and managing traffic violations, with AI-assisted evidence analysis and distinct workflows for citizens, police officers, and administrators.",
    features: [
      "Analyzes uploaded evidence asynchronously with Claude Vision AI to identify phone use, smoking, and missing seatbelts.",
      "Uses JWT authentication and role-based access for citizen, police, and administrator experiences.",
      "Supports violation reporting, license-plate search, dashboards, database migrations, and backend integration tests.",
      "Connects a React interface to a Flask REST API backed by PostgreSQL and SQLAlchemy.",
    ],
    technologies: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "SQLAlchemy",
      "Claude Vision AI",
      "JWT",
      "Tailwind CSS",
    ],
    badges: ["Graduation Project", "Best Project Award"],
    href: personal.github,
  },
  {
    name: "PhoenixDF — AI-Powered Research Assistant",
    type: "Personal Project",
    year: "2026",
    description:
      "A Python and Flask application that turns academic PDF content into focused study and document-analysis workflows through an LLM API.",
    features: [
      "Extracts and analyzes academic PDF content for structured summaries and document-aware conversations.",
      "Generates quizzes and flashcards to make research material easier to review.",
      "Brings PDF chat, summarization, and document analysis into a responsive web interface.",
      "Developed with a Git and GitHub workflow and prepared for deployment.",
    ],
    technologies: ["Python", "Flask", "LLM APIs", "PDF Processing", "React", "REST APIs", "SQLite", "Git"],
    href: personal.github,
  },
];

export const experiences: Experience[] = [
  {
    role: "Machine Learning & Deep Learning Intern",
    organization: "Anssoft Technology",
    period: "2025",
    description:
      "Developed machine-learning models with Python and Scikit-learn, covering preprocessing, feature engineering, classification, and evaluation. Applied TensorFlow and Keras in deep-learning experiments using Kaggle datasets.",
  },
  {
    role: "Administrative Supervisor Assistant",
    organization: "Central Lecture Halls, Eastern Mediterranean University",
    period: "2024–2026",
    description:
      "Supported daily operations in the university’s busiest lecture-hall complex and resolved technical issues involving computers, projectors, sound systems, and conference-hall equipment.",
  },
  {
    role: "Vice President",
    organization: "EMU IT Cybersecurity Club",
    period: "2024–2025",
    description:
      "Helped organize technical events and coordinated communication and operational activities within the club.",
  },
];

export const skillGroups = [
  { title: "Programming", skills: ["Python", "SQL", "Java", "C", "C#", "JavaScript"] },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "LLM APIs"],
  },
  {
    title: "Development",
    skills: ["Flask", "React", "REST APIs", "PostgreSQL", "SQLite", "SQLAlchemy", "Git", "GitHub", "Linux"],
  },
] as const;
