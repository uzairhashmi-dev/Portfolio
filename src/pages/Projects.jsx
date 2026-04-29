import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/data";

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const allTags = ["All"].concat(
  Array.from(new Set(projects.flatMap(p => p.tags))).slice(0, 9)
);

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="pt-25 pb-25">
      <div className="max-w-6xl mx-auto px-5">

        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-(--accent) font-['JetBrains_Mono'] mb-2">
          My Work
        </p>
        <h2 className="font-['Bebas_Neue'] text-[clamp(2.8rem,8vw,5rem)] text-(--text) leading-none mb-4">
          All Projects
        </h2>
        <p className="text-base text-(--muted) mb-12 max-w-120">
          Things I have built — side projects, client work, and experiments.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {allTags.map(tag => {
            const active = filter === tag;
            return (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4.5 py-2 rounded-[10px] text-[13px] border cursor-pointer transition-all duration-200
                  ${active
                    ? "font-semibold border-(--accent) bg-(--accent) text-[#0b0b10] font-['DM_Sans']"
                    : "font-medium border-(--border) bg-(--card) text-(--muted) font-['JetBrains_Mono']"
                  }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-(--muted) py-20 text-base">
            No projects for this filter.
          </p>
        )}

      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-(--card) border border-(--border) rounded-[20px] p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[11px] font-['JetBrains_Mono'] text-(--accent) bg-(--bg2) px-2.5 py-0.75 rounded-md">
          {project.year}
        </span>
        <div className="flex gap-2.5 items-center">
          {project.featured && (
            <span className="text-[10px] font-bold bg-(--accent) text-[#0b0b10] px-2 py-0.5 rounded-md">
              Featured
            </span>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-(--muted) flex">
              <GithubIcon size={15} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-(--muted) flex">
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-[17px font-bold text-(--text)] mb-2.5">{project.title}</h3>
      <p className="text-sm text-(--muted) leading-[1.7] flex-1 mb-5">{project.desc}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="text-[11px] font-['JetBrains_Mono'] text-(--muted) bg-(--bg2) border border-(--border) px-2.5 py-0.75 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}