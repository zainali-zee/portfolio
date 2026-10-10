import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { memo, useMemo, useRef } from "react";

function GlobalBackground() {
  const shouldReduceMotion = useReducedMotion();

  const backgroundRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });

  const handleMouseMove = (e) => {
    if (!backgroundRef.current) return;

    const rect = backgroundRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // -------------------------
  // Floating Particles
  // -------------------------

  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,

      size: Math.random() * 3 + 1.5,

      left: Math.random() * 100,

      top: Math.random() * 100,

      duration: Math.random() * 6 + 6,

      delay: Math.random() * 10,

      opacity: Math.random() * 0.35 + 0.15,

      color: [
        "bg-blue-400",
        "bg-cyan-400",
        "bg-indigo-500",
      ][Math.floor(Math.random() * 3)],
    }));
  }, []);

  // -------------------------
  // Stars
  // -------------------------

  const stars = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,

      left: Math.random() * 100,

      top: Math.random() * 100,

      size: Math.random() * 2 + 1,

      opacity: Math.random() * 0.45 + 0.25,

      duration: Math.random() * 4 + 3,

      delay: Math.random() * 5,
    }));
  }, []);

  // -------------------------
  // Shooting Stars
  // -------------------------

  const shootingStars = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,

      top: Math.random() * 35,

      left: Math.random() * 100,

      duration: Math.random() * 5 + 6,

      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <motion.div
      ref={backgroundRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-950"
    >
      {/* Base Background */}

      <div className="absolute inset-0 bg-slate-950" />

      {/* Mouse Spotlight */}

      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full blur-[130px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.12), rgba(59,130,246,.07), transparent 72%)",
        }}
      />

      {/* Aurora Top Left */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [0, 360],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -top-64
          -left-64
          h-[700px]
          w-[700px]
          rounded-full
          bg-gradient-to-r
          from-blue-600/10
          via-cyan-500/5
          to-indigo-600/10
          blur-[180px]
        "
      />

      {/* Aurora Bottom Right */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [360, 0],
                scale: [1.05, 0.95, 1.05],
              }
        }
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -bottom-72
          -right-72
          h-[800px]
          w-[800px]
          rounded-full
          bg-gradient-to-r
          from-indigo-700/8
          via-blue-600/6
          to-cyan-500/8
          blur-[220px]
        "
      />

      {/* Floating Ambient Glow */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 80, -40, 0],
                y: [0, -60, 30, 0],
                opacity: [0.15, 0.28, 0.15],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          left-1/4
          h-64
          w-64
          rounded-full
          bg-blue-500/6
          blur-[120px]
        "
      />

      {/* Floating Ambient Glow */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -90, 50, 0],
                y: [0, 70, -40, 0],
                opacity: [0.12, 0.22, 0.12],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-1/4
          right-1/4
          h-72
          w-72
          rounded-full
          bg-cyan-500/5
          blur-[150px]
        "
      />

      {/* Part 2 starts here */}
            {/* -------------------- */}
      {/* Floating Particles */}
      {/* -------------------- */}

      <div className="absolute inset-0">

        {particles.map((particle) => (

          <motion.span
            key={particle.id}
            className={`absolute rounded-full ${particle.color}`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: particle.opacity,
              boxShadow: "0 0 10px currentColor",
            }}
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, 25, -20, 0],
                    y: [0, -45, 35, 0],
                    scale: [1, 1.4, 0.9, 1],
                    opacity: [
                      particle.opacity,
                      particle.opacity + 0.25,
                      particle.opacity,
                    ],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        ))}

      </div>

      {/* -------------------- */}
      {/* Stars */}
      {/* -------------------- */}

      {stars.map((star) => (

        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  opacity: [
                    star.opacity,
                    1,
                    star.opacity,
                  ],
                  scale: [1, 1.6, 1],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      ))}

      {/* -------------------- */}
      {/* Shooting Stars */}
      {/* -------------------- */}

      {shootingStars.map((star) => (

        <motion.div
          key={star.id}
          className="absolute h-[2px] w-36 rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            rotate: "-35deg",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,.9), transparent)",
            filter: "blur(.5px)",
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [-250, 1000],
                  opacity: [0, 1, 1, 0],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 6,
            ease: "linear",
          }}
        />

      ))}

      {/* -------------------- */}
      {/* Floating Light */}
      {/* -------------------- */}

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [-250, 250, -250],
                opacity: [0.03, 0.07, 0.03],
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-0
          h-full
          w-48
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-blue-500/5
          to-transparent
          blur-3xl
        "
      />

      {/* -------------------- */}
      {/* Premium Grid */}
      {/* -------------------- */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* -------------------- */}
      {/* Radial Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(2,6,23,.45) 100%)",
        }}
      />

      {/* -------------------- */}
      {/* Noise Texture */}
      {/* -------------------- */}

      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.6'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Part 3 starts here */}
          </motion.div>
  );
}

export default memo(GlobalBackground);