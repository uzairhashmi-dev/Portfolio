import { skills } from "../data/data";

const categoryIcons = { Frontend: "⚛", Backend: "⚙", Tools: "🛠" };

const otherTools = ["Postman", "Linux", "Netlify", "Vercel", "npm", "Webpack", "ESLint", "Prettier", "Chrome DevTools"];

export default function Skills() {
  return (
    <div className="pt-25 pb-25">
      <div className="max-w-6xl mx-auto px-5">

        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-(--accent) font-['JetBrains_Mono'] mb-2">
          Technical Skills
        </p>
        <h2 className="font-['Bebas_Neue'] text-[clamp(2.8rem,8vw,5rem)] text-(--text) leading-none mb-4">
          My Stack
        </h2>
        <p className="text-base text-(--muted) mb-16 max-w-120">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-(--card) border border-(--border) rounded-[20px] p-8">

              <div className="flex items-center gap-2.5 mb-7">
                <span className="text-[22px]">{categoryIcons[category]}</span>
                <h3 className="font-['Bebas_Neue'] text-[1.6rem] text-(--text) tracking-[0.04em]">
                  {category}
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {items.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[13px] font-['JetBrains_Mono'] text-(--text) font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs font-['JetBrains_Mono'] text-(--accent) font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-(--bg2) overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: skill.level + "%",
                          background: "linear-gradient(90deg, var(--accent2), var(--accent))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Other Tools */}
        <div className="bg-(--card) border border-(--border) rounded-[20px] p-8">
          <h3 className="font-['Bebas_Neue'] text-[1.6rem] text-(--text) tracking-[0.04em] mb-5">
            Other Tools
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {otherTools.map(t => (
              <span
                key={t}
                className="px-4 py-1.75 rounded-[10px] bg-(--bg2) border border-(--border) text-[13px] text-(--muted) font-['JetBrains_Mono']"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}