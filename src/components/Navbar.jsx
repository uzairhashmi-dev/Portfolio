import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || open
          ? "bg-(--nav) backdrop-blur-lg border-b border-(--border)"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 no-underline"
        >
          <div className="w-8 h-8 bg-(--accent) rounded-lg flex items-center justify-center">
            <Code2 size={16} color="#0b0b10" strokeWidth={2.5} />
          </div>
          <span className="font-['Bebas_Neue'] text-[1.4rem] text-(--text)">
            UZAIR<span className="text-(--accent)">.</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="list-none flex gap-1">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-[10px] text-sm font-medium no-underline transition-all duration-200
                    ${isActive
                      ? "text-(--accent) bg-(--bg2)"
                      : "text-(--muted) bg-transparent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-[10px] bg-(--card) border border-(--border) flex items-center justify-center text-(--text) cursor-pointer"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {isMobile && (
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 rounded-[10px] bg-(--card) border border-(--border) flex items-center justify-center text-(--text) cursor-pointer"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`overflow-hidden transition-all duration-300 bg-(--nav) backdrop-blur-lg
            ${open ? "max-h-100 border-b border-(--border)" : "max-h-0 border-b-0"}`}
        >
          <ul className="list-none px-4 pt-3 pb-5 flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-[15px] no-underline
                    ${isActive
                      ? "font-semibold text-(--accent) bg-(--bg2)"
                      : "font-medium text-(--text) bg-transparent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}