import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-500 font-semibold">

            My Services

          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">

            What I Can Do For You

          </h2>

          <p className="mt-6 max-w-2xl mx-auto leading-8 text-slate-400">

            I develop modern, responsive and visually appealing websites
            that deliver excellent user experience and help businesses
            establish a strong online presence.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.id}
                className="
                group
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

                {/* Gradient */}

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-blue-600/10
                  via-transparent
                  to-indigo-600/10
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
                    size={32}
                    className="text-white"
                  />
                </div>

                {/* Title */}

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
                  {service.title}
                </h3>

                {/* Description */}

                <p
                  className="
                  relative
                  z-10
                  mt-5
                  leading-7
                  text-slate-400
                  "
                >
                  {service.description}
                </p>


              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}