import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import profile from "../../assets/images/about.jpeg";
export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <div className="text-center">

          <p className="text-blue-500 font-semibold tracking-widest uppercase">

            About Me

          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">

            Get To Know Me

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-8">

            Passionate Web Developer dedicated to building modern,
            responsive and user-friendly web applications with clean
            code and beautiful interfaces.

          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-14 lg:grid-cols-2 items-center">

          {/* Image */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-500 blur-3xl opacity-20"></div>

              <img
                src={profile}
                  loading="lazy"
                alt="Developer"
                className="relative z-10 w-[320px] rounded-3xl border border-slate-800 object-cover shadow-2xl lg:w-[430px]"
              />
            

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-bold text-white">

              Web Developer &
              <span className="text-blue-500"> UI Enthusiast</span>

            </h3>

            <p className="mt-6 leading-8 text-slate-400">

              I enjoy transforming ideas into interactive and visually
              appealing websites. My focus is writing clean,
              maintainable code while creating smooth user experiences
              across all devices.

            </p>

            <p className="mt-5 leading-8 text-slate-400">

              I continuously learn modern technologies and enjoy solving
              real-world problems through web development.

            </p>

            {/* Info Cards */}

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <UserRound className="text-blue-500 mb-3" />

                <h4 className="font-semibold text-white">

                  Name

                </h4>

                <p className="mt-2 text-slate-400">

                  Zain Ali

                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <GraduationCap className="text-blue-500 mb-3" />

                <h4 className="font-semibold text-white">

                  Education

                </h4>

                <p className="mt-2 text-slate-400">

                  BS Computer Science

                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <BriefcaseBusiness className="text-blue-500 mb-3" />

                <h4 className="font-semibold text-white">

                  Experience

                </h4>

                <p className="mt-2 text-slate-400">

                  Frontend Development

                </p>

              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

                <MapPin className="text-blue-500 mb-3" />

                <h4 className="font-semibold text-white">

                  Location

                </h4>

                <p className="mt-2 text-slate-400">

                  Lahore, Pakistan

                </p>

              </div>

            </div>

            {/* Highlights */}

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-green-500" />

                <span className="text-slate-300">

                  Clean & Maintainable Code

                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-green-500" />

                <span className="text-slate-300">

                  Mobile First Development

                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-green-500" />

                <span className="text-slate-300">

                  Responsive UI Design

                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-green-500" />

                <span className="text-slate-300">

                  Performance Optimized Websites

                </span>

              </div>

            </div>

            {/* Button */}

            <a
              href="#services"
              className="inline-flex mt-12 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 text-white font-semibold transition hover:scale-105"
            >
              Explore Services

              <ArrowRight size={20} />

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}