import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-500 font-semibold">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Here are some of my recent projects that demonstrate my
            skills in modern web development, responsive design and
            problem solving.
          </p>

        </div>

        {/* Projects Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => {

            const Icon = project.icon;

            return (

              <div
                key={project.id}
                className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-blue-500/40
                hover:shadow-[0_0_35px_rgba(37,99,235,0.20)]
                "
              >

                {/* Image */}

                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    h-60
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                    "
                  />

                </div>

                {/* Content */}

                <div className="p-7">

                  {/* Icon */}

                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-500
                    shadow-lg
                    shadow-blue-600/30
                    "
                  >
                    <Icon
                      size={28}
                      className="text-white"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                        rounded-full
                        border
                        border-slate-700
                        bg-slate-800
                        px-4
                        py-2
                        text-sm
                        text-slate-300
                        transition
                        hover:bg-blue-600
                        hover:border-blue-600
                        hover:text-white
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-8 flex gap-4">

                    

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex-1
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-indigo-600
                      py-3
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-white
                      transition
                      hover:scale-105
                      "
                    >
                      <ExternalLink size={18} />

                      Visit

                    </a>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Button */}

        <div className="mt-16 flex justify-center">

          <a
            href="#contact"
            className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            "
          >
            Let's Work Together

            <ArrowRight size={20} />

          </a>

        </div>

      </div>
    </section>
  );
}