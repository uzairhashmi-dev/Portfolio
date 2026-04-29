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
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "20%",
            right: 0,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "var(--accent)",
            opacity: 0.07,
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "80px 20px 60px",
            width: "100%",
          }}
        >
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 48,
              alignItems: "center",
            }}
          >
            {/* LEFT — Text */}
            <div>
              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 14px",
                  borderRadius: 999,
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--muted)",
                  marginBottom: 32,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <Sparkles size={12} style={{ color: "var(--accent)" }} />
                Available for new opportunities
              </div>

              <h1
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 10vw, 7rem)",
                  lineHeight: 0.95,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                {firstName}
                <br />
                <span style={{ color: "var(--accent)" }}>{lastName}</span>
              </h1>

              <div style={{ height: 40, marginBottom: 24, overflow: "hidden" }}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(0.85rem, 2vw, 1rem)",
                    color: "var(--accent)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(8px)",
                    transition: "opacity 0.3s, transform 0.3s",
                  }}
                >
                  {"< "}{roles[roleIdx]}{" />"}
                </p>
              </div>

              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  maxWidth: 520,
                  marginBottom: 24,
                }}
              >
                {personal.tagline}
              </p>

              {/* Location */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 14,
                  color: "var(--muted)",
                  marginBottom: 36,
                }}
              >
                <MapPin size={14} style={{ color: "var(--accent)" }} />
                {personal.location}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link
                  to="/projects"
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
                  View Projects <ArrowRight size={16} />
                </Link>

                {/* ✅ FIXED ONLY THIS */}
                <a
                  href={personal.links.resume}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 24px",
                    borderRadius: 12,
                    background: "var(--card)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  <Download size={16} /> Resume
                </a>
              </div>
            </div>

            {/* RIGHT — Avatar */}
            <div className="hero-avatar" style={{ position: "relative" }}>
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: 32,
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -12,
                  right: -12,
                  background: "var(--accent)",
                  color: "#0b0b10",
                  padding: "8px 14px",
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {new Date().getFullYear() - 2021}+ yrs exp
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== FEATURED PROJECTS SECTION ======== */}
      <section style={{ paddingBottom: 100 }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 20px" }}>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 40,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
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
                Featured Work
              </p>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--text)",
                  lineHeight: 1,
                }}
              >
                Selected Projects
              </h2>
            </div>

            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 14,
                color: "var(--accent)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: 24,
            }}
          >
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
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--accent)",
            background: "var(--bg2)",
            padding: "3px 10px",
            borderRadius: 6,
          }}
        >
          {project.year}
        </span>
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            background: "var(--accent)",
            color: "#0b0b10",
            padding: "2px 8px",
            borderRadius: 6,
          }}
        >
          Featured
        </span>
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>
        {project.title}
      </h3>

      <p
        style={{
          fontSize: 14,
          color: "var(--muted)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {project.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11,
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--muted)",
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              padding: "3px 10px",
              borderRadius: 6,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}