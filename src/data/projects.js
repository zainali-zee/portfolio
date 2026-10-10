import {
  Globe,
  ShoppingBag,
  Calculator,
  School,
  Briefcase,
  Smartphone,
  Store,
  Cloud,
  Calendar, Images
} from "lucide-react";
import portfolio from "../assets/images/personal-portfolio.png?w=400";
import gallery from "../assets/images/zeexGallery.png?w=400";
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    icon: Globe,
    description:
      "A modern and responsive portfolio website built with React, Tailwind CSS, and Lucide React.",
    technologies: [
      "React",
      "Tailwind",
      "JavaScript",
    ],
    image:
      portfolio,
   
    live: "#",
  },

  {
    id: 2,
    title: "Beauty Store Website",
    icon: ShoppingBag,
    description:
      "A responsive business website developed for a beauty products store with modern UI, clean layout and also with an admin panel to manage products & categories.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    image:
      "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?w=580&q=80",
   
    live: "https://scsstarbeauty.infinityfree.io/beauty-store/",
  },

  {
  id: 3,
  title: "Curtains & Sofa Store Website",
  icon: Store,
  description:
    "A modern business website for a curtains and sofa store with an elegant user interface to showcase their products.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
  ],
  image:
    "https://images.unsplash.com/photo-1577926606472-fc6d3a33f7e1?w=500&q=80",
 
  live: "https://curtainsstore.online/",
},

  {
    id: 4,
    title: "Weather App",
    icon: Cloud,
    description:
      "Responsive weather application consuming live weather API with a modern mobile-friendly interface.",
    technologies: [
      "React",
      "API",
      "Tailwind",
    ],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=900&q=80",
   
    live: "https://za-weather-app.netlify.app/",
  },
  {
  id: 5,
  title: "Age Calculator",
  icon: Calendar,
  description:
    "A responsive age calculator that accurately computes a user's age in years, months, and days based on their date of birth with a clean and user-friendly interface.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],
  image:
    "https://plus.unsplash.com/premium_photo-1727730037512-e04c913a0fd5?w=500&q=80",
  live: "https://online-age-calculat0r.netlify.app/",
},
{
  id: 6,
  title: "ZeeX Gallery",
  icon: Images,
  description:
    "A responsive image gallery web app that lets users explore images by category, load images dynamically, and view them in an interactive lightbox with zoom functionality.",
  technologies: [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Lucide React",
  ],
  image:gallery,
  live: "https://zeex-webgallery.netlify.app/",
},

];