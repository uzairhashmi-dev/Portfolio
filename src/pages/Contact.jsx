import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { personal } from "../data/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function setField(key, val) {
    setForm(prev => ({ ...prev, [key]: val }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  }

  function handleReset() {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: personal.email, href: "mailto:" + personal.email },
    { icon: Phone, label: "Phone", value: personal.phone, href: "tel:" + personal.phone },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
  ];

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm outline-none bg-[var(--bg2)] text-(--text) font-['DM_Sans'] transition-colors duration-200";
  const labelClass = "block text-[11px] font-semibold text-[var(--muted)] font-['JetBrains_Mono'] tracking-[0.1em] uppercase mb-2";
  const errorClass = "text-xs text-red-500 mt-1 font-['JetBrains_Mono']";

  return (
    <div className="pt-25 pb-25">
      <div className="max-w-6xl mx-auto px-5">

        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-(--accent) font-['JetBrains_Mono'] mb-2">
          Contact
        </p>
        <h2 className="font-['Bebas_Neue'] text-[clamp(2.8rem,8vw,5rem)] text-(--text) leading-none mb-4">
          Let's Talk
        </h2>
        <p className="text-base text-(--muted) mb-16 max-w-120">
          Have a project or just want to say hi? My inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10">

          {/* Contact items */}
          <div className="flex flex-col gap-3.5">
            {contactItems.map(item => (
              <div
                key={item.label}
                className="flex gap-4 items-center bg-(--card) border border-(--border) rounded-2xl p-5"
              >
                <div className="w-11 h-11 rounded-xl bg-(--bg2) border border-(--border) flex items-center justify-center text-(--accent) shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-['JetBrains_Mono'] text-(--muted) font-semibold tracking-widest uppercase mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-(--text) no-underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-(--text)">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-(--card) border border-(--border) rounded-[20px] p-8">
            {sent ? (
              <div className="text-center py-10 px-5">
                <CheckCircle2 size={52} className="text-(--accent) mx-auto mb-4 block" />
                <h3 className="font-['Bebas_Neue'] text-[2rem] text-(--text) mb-2">
                  Message Sent!
                </h3>
                <p className="text-(--muted) text-sm mb-6">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-[10px] bg-(--accent) text-[#0b0b10] border-none text-sm font-semibold cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setField("name", e.target.value)}
                      placeholder="Your Name"
                      className={`${inputClass} border ${errors.name ? "border-red-500" : "border-(--border)"}`}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setField("email", e.target.value)}
                      placeholder="Your email"
                      className={`${inputClass} border ${errors.email ? "border-red-500" : "border-(--border)"}`}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setField("subject", e.target.value)}
                    placeholder="Project Inquiry"
                    className={`${inputClass} border border-(--border)`}
                  />
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setField("message", e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${inputClass} border resize-y ${errors.message ? "border-red-500" : "border-(--border)"}`}
                  />
                  {errors.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center gap-2 px-7 py-3.25 rounded-xl border-none text-sm font-semibold transition-all duration-200
                    ${loading
                      ? "bg-(--bg2) text-(--muted) cursor-not-allowed"
                      : "bg-(--accent) text-[#0b0b10] cursor-pointer"
                    }`}
                >
                  {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}