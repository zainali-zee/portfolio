import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logo.jpeg";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a href="#home" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-600/30">
              <img src={logo} alt="Logo" className="rounded-xl" />
            </div>

            <div>
              <h2 className="text-white font-semibold text-lg">
                Zain Ali
              </h2>

              <p className="text-slate-400 text-sm">
                Web Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-slate-300 hover:text-blue-500 transition duration-300 font-medium"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Hire Me */}

          <a
            href="#contact"
            className="hidden lg:inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
          >
            Hire Me
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden overflow-hidden">
          <div className="bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-5 text-center">

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-blue-500 transition"
              >
                {item.title}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-xl py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
            >
              Hire Me
            </a>

          </div>
        </div>
      )}
    </header>
  );
}