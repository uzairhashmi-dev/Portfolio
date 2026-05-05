import { useState } from "react";
import { Code2, Phone, X, MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
import { personal } from "../data/data";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "923297563190";

export default function Footer() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const whatsappUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=Hi%20Uzair%2C%20I%20found%20your%20portfolio!";

  return (
    <footer className="bg-(--bg2) border-t border-(--border) mt-20">
      
      {/* PHONE MODAL */}
      {showPhoneModal && (
        <div
          onClick={() => setShowPhoneModal(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-(--card) border border-(--border) rounded-2xl p-6 w-full max-w-sm relative"
          >
            <button
              onClick={() => setShowPhoneModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border rounded-md"
            >
              <X size={16} />
            </button>

            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-sm text-(--muted) mb-6">
              {personal.phone}
            </p>

            <div className="flex flex-col gap-3">
              <a
                href={"tel:" + personal.phone}
                className="flex items-center gap-3 bg-(--accent) text-black px-4 py-3 rounded-xl font-semibold"
              >
                <Phone size={18} /> Call Now
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>

              <button
                onClick={() => setShowPhoneModal(false)}
                className="border rounded-xl py-2 text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-5 pt-12 pb-8">

        <div className="flex flex-wrap gap-10 justify-between mb-10">

          {/* Brand */}
          <div>
            <NavLink to="/" className="flex items-center gap-2 no-underline mb-3">
              <div className="w-7 h-7 bg-(--accent) rounded-[7px] flex items-center justify-center">
                <Code2 size={14} color="#0b0b10" strokeWidth={2.5} />
              </div>
              <span className="font-['Bebas_Neue'] text-[1.2rem] text-(--text)">
                Uzair<span className="text-(--accent)">.</span>
              </span>
            </NavLink>
            <p className="text-(--muted) text-sm max-w-40 leading-7">
              Frontend Developer building clean and fast web experiences.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-(--muted) font-['JetBrains_Mono'] mb-4">
              Navigate
            </p>
            <ul className="list-none flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `no-underline text-sm transition-colors duration-200 ${
                        isActive
                          ? "text-(--accent)"
                          : "text-(--muted)"
                      }`
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
              <a
                href={"mailto:" + personal.email}
                className="text-sm text-(--muted) no-underline"
              >
                {personal.email}
              </a>

              {/* PHONE (opens modal now) */}
              <button
                onClick={() => setShowPhoneModal(true)}
                className="text-sm text-(--muted) text-left"
              >
                {personal.phone}
              </button>

              <span className="text-sm text-(--muted)">
                {personal.location}
              </span>
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