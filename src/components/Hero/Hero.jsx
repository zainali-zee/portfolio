import {
  ArrowDown,
  SendHorizontal,
  BriefcaseBusiness,
  Code2,
  Users,
  Coffee,
} from "lucide-react";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import heroImage from "../../assets/images/profile.jpeg";

import { buttonHover } from "../../animations/variants";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16"
    >
      {/* Background Blur */}

      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

         <div>
            {/* Badge */}

            <div
      
              className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400"
            >

              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>

              Available For Work

            </div>

            {/* Heading */}

            <h1
              className="mt-8 text-6xl font-bold leading-tight text-white"
            >

              Hi, I'm

              <br />

              <span className="text-white lg:text-8xl">
                Zain
              </span>{" "}

              <span className="bg-gradient-to-r lg:text-8xl from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Ali
              </span>

            </h1>

            {/* Profession */}

            <h2
              
              className="mt-5 text-2xl font-semibold text-blue-500"
            >

              <Typewriter
                words={[
                  "Web Developer",
                  "Frontend Developer",
                  "React Developer",
                  "UI / UX Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1800}
              />

            </h2>

            {/* Description */}

            <p
              
              className="mt-6 max-w-lg leading-8 text-slate-400"
            >

              I build clean, responsive and modern websites that
              combine beautiful design with high performance and
              excellent user experience.

            </p>

            {/* Buttons */}

            <div
              
              className="mt-10 flex flex-wrap gap-4"
            >

              <a
                
                href="#contact"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-semibold text-white"
              >

                <SendHorizontal size={20} />

                Contact Me

              </a>

            </div>

          </div>

          {/* Right Side */}
                    {/* Right Side */}

          <div

            className="relative flex justify-center"
          >

            <motion.div
  animate={{
    scale: [1, 1.15, 1],
    rotate: [0, 180, 360],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-[430px] w-[430px] rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/25 to-cyan-400/25 blur-[90px]"
/>

<motion.div
  animate={{
    scale: [1.1, 1, 1.1],
    rotate: [360, 180, 0],
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-[110px]"
/>

<motion.div
  animate={{
    opacity: [0.3, 0.8, 0.3],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[70px]"
/>

         <motion.img
  animate={{
    y: [0, -15, 0],
    rotate: [0, 1.5, 0, -1.5, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
              src={heroImage}
                loading="lazy"
              alt="Developer"
              className="relative z-10 w-[320px] rounded-3xl border border-white/10 object-cover shadow-[0_20px_80px_rgba(37,99,235,0.45)] backdrop-blur-sm lg:w-[420px]"
            />

          </div>

        </div>

        {/* Stats */}

        <div
        
          className="mt-20 flex grid grid-cols-1 md:grid-cols-2 gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-lg lg:grid-cols-3"
        >

          <motion.div
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="text-center"
          >

            <Code2
              className="mx-auto mb-4 text-blue-500"
              size={32}
            />

            <h3 className="text-4xl font-bold text-white">
              1+
            </h3>

            <p className="mt-2 text-slate-400">
              Years Experience
            </p>

          </motion.div>

          <motion.div
          
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="text-center"
          >

            <BriefcaseBusiness
              className="mx-auto mb-4 text-green-500"
              size={32}
            />

            <h3 className="text-4xl font-bold text-white">
              5+
            </h3>

            <p className="mt-2 text-slate-400">
              Projects
            </p>

          </motion.div>


          <motion.div
          
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="text-center"
          >

            <Coffee
              className="mx-auto mb-4 text-amber-500"
              size={32}
            />

            <h3 className="text-4xl font-bold text-white">
              ∞
            </h3>

            <p className="mt-2 text-slate-400">
              Learning
            </p>

          </motion.div>

        </div>

        {/* Scroll */}  
                {/* Scroll */}

        <div
          className="mt-16 flex flex-col items-center"
        >

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <ArrowDown
              className="text-slate-500"
              size={28}
            />

          </motion.div>

          <p
            className="mt-2 text-slate-500"
          >

            Scroll Down

          </p>

        </div>

      </div>

    </section>
  );
}