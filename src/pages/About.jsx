import { MapPin, Mail, Phone, Download, Briefcase, GraduationCap } from "lucide-react";
import { personal, experience } from "../data/data";

export default function About() {
  const contactItems = [
    { icon: MapPin, label: "Location", value: personal.location, href: null },
    { icon: Mail, label: "Email", value: personal.email, href: "mailto:" + personal.email },
    { icon: Phone, label: "Phone", value: personal.phone, href: "tel:" + personal.phone },
  ];

  return (
    <div style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 20px" }}>

        {/* Page heading */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 8,
          }}
        >
          About Me
        </p>

        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            color: "var(--text)",
            lineHeight: 1,
            marginBottom: 16,
          }}
        >
          Who I Am
        </h2>

        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            marginBottom: 64,
            maxWidth: 560,
          }}
        >
          A frontend developer who cares about craft, performance, and the
          humans using the product.
        </p>

        {/* Main grid */}
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 40 }}
        >

          {/* ---- LEFT COLUMN ---- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Bio card */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 32,
              }}
            >
              <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.85 }}>
                {personal.bio}
              </p>
            </div>

            {/* Contact info cards */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
            >
              {contactItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "16px 18px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "var(--bg2)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={15} />
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontSize: 10,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--muted)",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontSize: 13,
                          color: "var(--text)",
                          textDecoration: "none",
                          wordBreak: "break-word",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 13, color: "var(--text)" }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Resume button — full width */}
              <div style={{ gridColumn: "1 / -1" }}>
                <a
                  href={personal.links.resume}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 12,
                    background: "var(--accent)",
                    color: "#0b0b10",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <Download size={15} /> Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* ---- END LEFT COLUMN ---- */}

          {/* ---- RIGHT COLUMN ---- */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Experience card */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  <Briefcase size={14} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    color: "var(--text)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Experience
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    style={{ paddingLeft: 16, borderLeft: "2px solid var(--border)" }}
                  >
                    <p
                      style={{
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "var(--accent)",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {exp.period}
                    </p>
                    <h4
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: 2,
                      }}
                    >
                      {exp.role}
                    </h4>
                    {exp.company && (
                      <p
                        style={{
                          fontSize: 12,
                          color: "var(--muted)",
                          marginBottom: 6,
                        }}
                      >
                        {exp.company}
                      </p>
                    )}
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education card */}
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: 28,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  <GraduationCap size={14} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    color: "var(--text)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Education
                </h3>
              </div>

              <div
                style={{ paddingLeft: 16, borderLeft: "2px solid var(--border)" }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent)",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  2018 — 2022
                </p>
                <h4
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: 2,
                  }}
                >
                  B.Sc. Computer Science
                </h4>
                <p style={{ fontSize: 12, color: "var(--muted)" }}>
                  University of Punjab, Lahore
                </p>
              </div>
            </div>

          </div>
          {/* ---- END RIGHT COLUMN ---- */}

        </div>
      </div>
    </div>
  );
}