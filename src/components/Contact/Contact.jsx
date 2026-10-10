import { Send } from "lucide-react";
import { contactInfo, socialLinks } from "../../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-500 font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl mx-auto leading-8 text-slate-400">
            Have a project in mind or want to collaborate?
            Feel free to contact me anytime.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          
            <div>
            <h3 className="text-2xl font-semibold text-white">

              Contact Information

            </h3>

            <div className="mt-8 space-y-5">

              {contactInfo.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.id}
                    href={item.link}
                    className="
                    group
                    flex
                    items-center
                    gap-5
                    rounded-2xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    p-5
                    transition
                    duration-300
                    hover:border-blue-500
                    hover:-translate-y-1
                    "
                  >

                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-blue-600
                      to-indigo-600
                      "
                    >
                      <Icon
                        size={24}
                        className="text-white"
                      />
                    </div>

                    <div>

                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-slate-400">
                        {item.value}
                      </p>

                    </div>

                  </a>

                );

              })}

            </div>
            </div>

            {/* Social */}
            <div>
            <h3 className="text-xl font-semibold text-white">

                Follow Me

              </h3>

            <div className="mt-10">

              

              <div className="mt-6 flex flex-wrap gap-4 items-center justify-center lg:justify-start">

                {socialLinks.map((social) => {

                  const Icon = social.icon;

                  return (

                    <a
                      key={social.id}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      flex
                      h-34
                      w-34
                      lg:h-40
                      lg:w-40
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-900
                      text-slate-300
                      transition
                      duration-300
                      hover:border-blue-500
                      hover:bg-blue-600
                      hover:text-white
                      hover:-translate-y-1
                      "
                    >
                      <Icon size={44} />
                    </a>

                  );

                })}

              </div>

            </div>

        </div>


        </div>

      </div>

    </section>
  );
}