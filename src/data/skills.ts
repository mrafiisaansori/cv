export type SkillCategory = {
  title: string;
  icon: "frontend" | "backend" | "database" | "integration" | "tools" | "soft";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "CoreUI",
      "Responsive Web Design",
      "UI/UX Implementation"
    ]
  },
  {
    title: "Backend",
    icon: "backend",
    skills: [
      "PHP",
      "CodeIgniter",
      "Laravel",
      "Golang",
      "ASP.NET Core",
      "RESTful API",
      "Basic Authentication",
      "API Integration"
    ]
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Database Design",
      "Query Optimization",
      "Data Mapping",
      "Stored Procedure / Function Integration"
    ]
  },
  {
    title: "System Integration",
    icon: "integration",
    skills: [
      "SAP Integration",
      "Pelindo E-Office Integration",
      "API Gateway",
      "Real-time Data Synchronization",
      "Financial Data Integration",
      "Inventory Data Integration",
      "Enterprise System Integration"
    ]
  },
  {
    title: "Tools",
    icon: "tools",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Visual Studio Code",
      "Postman",
      "Docker basic",
      "Linux basic",
      "Vercel",
      "Xcode basic"
    ]
  },
  {
    title: "Soft Skills",
    icon: "soft",
    skills: [
      "System Analysis",
      "Problem Solving",
      "Technical Documentation",
      "Team Collaboration",
      "Stakeholder Communication",
      "Maintenance & Troubleshooting",
      "Continuous Learning"
    ]
  }
];

export const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "PHP",
  "Golang",
  "PostgreSQL",
  "MySQL",
  "SAP Integration",
  "REST API",
  "Tailwind CSS",
  "Docker",
  "Vercel"
];
