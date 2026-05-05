import { useState, useEffect } from "react";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { personal, projects } from "../data/data";

const roles = ["Frontend Developer", "React Specialist", "UI Craftsman", "Web Developer"];

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nameParts = personal.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <div>
      <section className="min-h-screen flex items-center relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none 
          bg-[linear-gradient(var(--text)_1px,transparent_1px),linear-gradient(90deg,var(--text)_1px,transparent_1px)] 
          bg-size-[60px_60px]" />

        <div className="absolute top-[20%] right-0 w-100 h-100 md:w-125 md:h-125 rounded-full bg-(--accent) opacity-[0.07] blur-[100px]" />

        <div className="max-w-6xl mx-auto px-5 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-(--card) border border-(--border) text-xs text-(--muted) mb-8 font-['JetBrains_Mono']">
                <Sparkles size={12} className="text-(--accent)" />
                Available for new opportunities
              </div>

              {/* Name */}
              <h1 className="font-['Bebas_Neue'] text-[clamp(3.5rem,10vw,7rem)] leading-[0.95] text-(--text) mb-5">
                {firstName}
                <br />
                <span className="text-(--accent)">{lastName}</span>
              </h1>

              {/* Role animation */}
              <div className="h-10 mb-6 overflow-hidden">
                <p
                  className={`font-['JetBrains_Mono'] text-sm md:text-base text-(--accent) transition-all duration-300 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {"< "}{roles[roleIdx]}{" />"}
                </p>
              </div>

              {/* Tagline */}
              <p className="text-base text-(--muted) leading-[1.8] max-w-130 mb-6">
                {personal.tagline}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-(--muted) mb-8">
                <MapPin size={14} className="text-(--accent)" />
                {personal.location}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-(--accent) text-[#0b0b10] font-semibold text-sm"
                >
                  View Projects <ArrowRight size={16} />
                </Link>

                <a
                  href={personal.links.resume}
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-(--card) border border-(--border) text-(--text) font-semibold text-sm"
                >
                  <Download size={16} /> Resume
                </a>
                
              </div>
           </div>

            {/* RIGHT AVATAR */}
            <div className="relative flex justify-center md:justify-end">
              <div className="w-70 h-65 md:w-80 md:h-80 lg:w-90  rounded-4xl bg-(--card) border border-(--border) overflow-hidden">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-2.5 -right-2.5 bg-(--accent) text-[#0b0b10] px-4 py-2 rounded-xl text-xs font-bold font-['JetBrains_Mono']">
                {new Date().getFullYear() - 2025}+ yrs exp
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5">

          <div className="flex flex-wrap justify-between items-end mb-10 gap-3">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-(--accent) font-['JetBrains_Mono'] mb-2">
                Featured Work
              </p>
              <h2 className="font-['Bebas_Neue'] text-[clamp(2rem,5vw,3.5rem)] text-(--text)">
                Selected Projects
              </h2>
            </div>

            <Link to="/projects" className="flex items-center gap-1 text-sm text-(--accent)">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
            {featured.map((p) => (
              <FeaturedCard key={p.id} project={p} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

function FeaturedCard({ project }) {
  return (
    <div className="bg-(--card) border border-(--border) rounded-[20px] p-6 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-[11px] font-['JetBrains_Mono'] text-(--accent) bg-(--bg2) px-2.5 py-0.5 rounded-md">
          {project.year}
        </span>

        <span className="text-[10px] font-bold bg-(--accent) text-[#0b0b10] px-2 py-0.5 rounded-md">
          Featured
        </span>
      </div>

      <h3 className="text-[17px] font-bold text-(--text)">
        {project.title}
      </h3>

      <p className="text-sm text-(--muted) leading-[1.7] flex-1">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-['JetBrains_Mono'] text-(--muted) bg-(--bg2) border border-(--border) px-2.5 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}