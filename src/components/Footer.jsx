import { Code2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { personal } from "../data/data";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-(--bg2) border-t border-(--border) mt-20">
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-8">

        <div className="flex flex-wrap gap-10 justify-between mb-10">

          {/* Brand */}
          <div>
            <NavLink to="/" className="flex items-center gap-2 no-underline mb-3">
              <div className="w-7 h-7 bg-(--accent) rounded-[7px] flex items-center justify-center">
                <Code2 size={14} color="#0b0b10" strokeWidth={2.5} />
              </div>
              <span className="font-['Bebas_Neue'] text-[1.2rem] text-(--text)">
                Uzair<span className="text-[var(--accent)">.</span>
              </span>
            </NavLink>
            <p className="text-(--muted)] text-sm max-w-5 leading-[1.7]">
              Frontend Developer building clean and fast web experiences.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-(--muted) font-['JetBrains_Mono'] mb-4">
              Navigate
            </p>
            <ul className="list-none flex flex-col gap-2.5">
              {footerLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `no-underline text-sm transition-colors duration-200
                      ${isActive ? "text-(--accent)" : "text-(--muted)"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-(--muted) font-['JetBrains_Mono'] mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <a href={"mailto:" + personal.email} className="text-sm text-(--muted) no-underline">
                {personal.email}
              </a>
              <a href={"tel:" + personal.phone} className="text-sm text-(--muted) no-underline">
                {personal.phone}
              </a>
              <span className="text-sm text-(--muted)">{personal.location}</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-(--border) pt-6 flex flex-wrap gap-2 justify-between">
          <p className="text-[13px] text-(--muted)">
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-(--muted)">
            Built with React + Vite
          </p>
        </div>

      </div>
    </footer>
  );
}