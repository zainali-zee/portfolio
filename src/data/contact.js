import {
  Mail,
  Phone,
  MapPin,
  // Github,
  // Linkedin,
  // Facebook,
  // Instagram,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa6";
export const contactInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Email",
    value: "zain.ali.plus@gmail.com",
    link: "mailto:zain.ali.plus@gmail.com",
  },

  {
    id: 2,
    icon: Phone,
    title: "Phone",
    value: "+92 3256135071",
    link: "tel:+923256135071",
  },

  {
    id: 3,
    icon: MapPin,
    title: "Location",
    value: "Lahore, Pakistan",
    link: "",
  },
];

export const socialLinks = [
  {
  id: 1,
  icon: FaWhatsapp,
  name: "WhatsApp",
  link: "https://wa.me/923256135071",
},
  {
    id: 2,
    icon: FaGithub,
    name: "GitHub",
    link: "https://github.com/zainali-zee",
  },

  {
    id: 3,
    icon: FaLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zain-ali-b6175b422",
  },

  {
    id: 4,
    icon: FaFacebook,
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61579899672144",
  },


];