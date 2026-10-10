import {
  ArrowUp,
  Heart,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
import { socialLinks } from "../../data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    FaGitHub: FaGithub,
    FaLinkedIn: FaLinkedin,
    FaFacebook: FaFacebook,
    FaInstagram: FaInstagram,
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 ">

      {/* Background Glow */}

      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Zain<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Passionate Frontend Developer focused on creating modern,
              responsive and user-friendly web applications using
              React, Tailwind CSS and JavaScript.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {[
                "Home",
                "About",
                "Services",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 transition hover:text-blue-500"
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>Lahore, Pakistan</p>

              <p>zain.ali.plus@gmail.com</p>

              <p>+92 325 6135071</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="flex flex-wrap gap-4">

              {socialLinks.map((social) => {
                const Icon =
                  iconMap[social.name] || social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900
                      text-slate-300
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                    "
                  >
                    <Icon size={20} />
                  </a>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="flex items-center gap-2 text-center text-slate-400">

            © {currentYear} All rights reserved.

          </p>

          <a
            href="#home"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              transition
              hover:scale-110
            "
          >
            <ArrowUp size={20} />
          </a>

        </div>

      </div>

    </footer>
  );
}