import {
  Code2,
  Palette,
  Database,
  Wrench,
  Globe,
} from "lucide-react";

export const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Globe,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },

  {
    id: 2,
    title: "Backend Development",
    icon: Database,
    skills: [
      "PHP",
      "MySQL",
      "REST APIs",
      "CRUD Operations",
    ],
  },

  {
    id: 3,
    title: "UI / Styling",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "CSS Animations",
      "Flexbox",
      "CSS Grid",
      "Responsive Layout",
      "Modern UI Design",
    ],
  },

  {
    id: 4,
    title: "Programming",
    icon: Code2,
    skills: [
      "JavaScript ES6+",
      "C++",
      "Python",
      "Object Oriented Programming",
      "Problem Solving",
    ],
  },

  {
    id: 5,
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Netlify",
      "Vercel",
      "XAMPP",
    ],
  },
];