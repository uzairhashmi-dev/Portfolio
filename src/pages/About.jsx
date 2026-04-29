import { MapPin, Mail, Phone, Download, Briefcase, GraduationCap } from "lucide-react";
import { personal, experience } from "../data/data";

export default function About() {
  const contactItems = [
    { icon: MapPin, label: "Location", value: personal.location, href: null },
    { icon: Mail, label: "Email", value: personal.email, href: "mailto:" + personal.email },
    { icon: Phone, label: "Phone", value: personal.phone, href: "tel:" + personal.phone },
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-(--accent) font-['JetBrains_Mono'] mb-2">
          About Me
        </p>

        <h2 className="font-['Bebas_Neue'] text-[clamp(2.8rem,8vw,5rem)] text-(--text) leading-none mb-4">
          Who I Am
        </h2>

        <p className="text-base text-(--muted) mb-16 max-w-140">
          A frontend developer who cares about craft, performance, and the
          humans using the product.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-10">

          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* Bio */}
            <div className="bg-(--card) border border-(--border) rounded-[20px] p-8">
              <p className="text-base text-(--muted) leading-[1.85]">
                {personal.bio}
              </p>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-3.5">
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-(--card) border border-(--border) rounded-2xl px-4 py-4 flex gap-3.5"
                >
                  <div className="w-9 h-9 rounded-[10px] bg-(--bg2) border border-(--border) flex items-center justify-center text-(--accent) shrink-0">
                    <item.icon size={15} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-['JetBrains_Mono'] text-(--muted) font-semibold tracking-widest uppercase mb-1">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[13px] text-(--text) wrap-break-word no-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[13px] text-(--text)">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Resume */}
              <div className="col-span-full">
                <a
                  href={personal.links.resume}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-(--accent) text-[#0b0b10] text-sm font-semibold"
                >
                  <Download size={15} /> Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">

            {/* Experience */}
            <div className="bg-(--card) border border-(--border) rounded-[20px] p-7">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-(--bg2) border border-(--border) flex items-center justify-center text-(--accent)">
                  <Briefcase size={14} />
                </div>
                <h3 className="font-['Bebas_Neue'] text-2xl text-(--text) tracking-wide">
                  Experience
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {experience.map((exp, i) => (
                  <div key={i} className="pl-4 border-l-2 border-(--border)">
                    <p className="text-[11px] font-['JetBrains_Mono'] text-(--accent) font-semibold mb-1">
                      {exp.period}
                    </p>
                    <h4 className="text-sm font-bold text-(--text)">
                      {exp.role}
                    </h4>
                    {exp.company && (
                      <p className="text-xs text-(--muted) mb-1.5">
                        {exp.company}
                      </p>
                    )}
                    <p className="text-sm text-(--muted) leading-[1.6]">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-(--card) border border-(--border) rounded-[20px] p-7">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 rounded-lg bg-(--bg2) border border-(--border) flex items-center justify-center text-(--accent)">
                  <GraduationCap size={14} />
                </div>
                <h3 className="font-['Bebas_Neue'] text-2xl text-(--text) tracking-wide">
                  Education
                </h3>
              </div>

              <div className="pl-4 border-l-2 border-(--border)">
                <p className="text-[11px] font-['JetBrains_Mono'] text-(--accent) font-semibold mb-1">
                  2018 — 2022
                </p>
                <h4 className="text-sm font-bold text-(--text)">
                  B.Sc. Computer Science
                </h4>
                <p className="text-xs text-(--muted)">
                  University of Punjab, Lahore
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}