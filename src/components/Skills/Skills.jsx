import { ArrowRight } from "lucide-react";
import { skillCategories } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-500 font-semibold">

            Technical Skills

          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">

            Technologies I Work With

          </h2>

          <p className="mt-6 max-w-2xl mx-auto leading-8 text-slate-400">

            I enjoy learning modern technologies and using them to build
            scalable, responsive and high-quality web applications.

          </p>

        </div>

        {/* Skills Grid */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category) => {

            const Icon = category.icon;

            return (

              <div
                key={category.id}
                className="
                group
                flex flex-col justify-between
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500/40
                hover:shadow-[0_0_35px_rgba(37,99,235,0.20)]
                "
              >
                <div>
                {/* Hover Gradient */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-600/10
                  via-transparent
                  to-indigo-600/10
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  "
                />

                {/* Icon */}

                <div
                  className="
                  relative
                  z-10
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-500
                  shadow-lg
                  shadow-blue-600/30
                  transition
                  duration-500
                  group-hover:rotate-6
                  "
                >
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                {/* Category */}

                <h3
                  className="
                  relative
                  z-10
                  mt-8
                  text-2xl
                  font-semibold
                  text-white
                  "
                >
                  {category.title}
                </h3>

                {/* Skills */}

                <div className="relative z-10 mt-7 flex flex-wrap gap-3">

                  {category.skills.map((skill) => (

                    <span
                      key={skill}
                      className="
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-800
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-blue-500
                      hover:bg-blue-500
                      hover:text-white
                      cursor-default
                      "
                    >
                      {skill}
                    </span>

                  ))}

                </div>
</div>
                {/* Bottom Button */}

                <button
                  className="
                  relative
                  z-10
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-blue-500
                  font-medium
                  transition-all
                  group-hover:gap-4
                  "
                >
                  Keep Learning

                  <ArrowRight size={18} />

                </button>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}