import { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Download,
  Briefcase,
  GraduationCap,
  X,
  MessageCircle,
} from "lucide-react";
import { personal, experience } from "../data/data";

const WHATSAPP_NUMBER = "923297563190";

export default function About() {
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const whatsappUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=Hi%20Uzair%2C%20I%20found%20your%20portfolio!";

  const contactItems = [
    { icon: MapPin, label: "Location", value: personal.location, href: null },
    { icon: Mail, label: "Email", value: personal.email, href: "mailto:" + personal.email },
    { icon: Phone, label: "Phone", value: personal.phone, href: null },
  ];

  return (
    <div className="pt-24 pb-24">
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
      <div className="max-w-6xl mx-auto px-5">
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

        <div className="grid md:grid-cols-[3fr_2fr] gap-10">
          <div className="flex flex-col gap-6">
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
                    {/* 🔥 PHONE special handling */}
                    {item.label === "Phone" ? (
                      <button
                        onClick={() => setShowPhoneModal(true)}
                        className="text-[13px] text-(--text) text-left"
                      >
                        {item.value}
                      </button>
                    ) : item.href ? (
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
                  B.com
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