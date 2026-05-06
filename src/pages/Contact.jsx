import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  X,
  MessageCircle,
} from "lucide-react";
import { personal } from "../data/data";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_k0hibdk";
const EMAILJS_TEMPLATE_ID = "template_pee0xis";
const EMAILJS_AUTOREPLY_ID = "template_9vxjubi";
const EMAILJS_PUBLIC_KEY = "GMV643mk83te9zrUa";

const WHATSAPP_NUMBER = "923297563190";

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  function setField(key, val) {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

 async function handleSubmit(e) {
  e.preventDefault();

  if (loading) return; 

  const errs = validate();
  if (Object.keys(errs).length > 0) {
    setErrors(errs);
    return;
  }

  setErrors({});
  setEmailError("");
  setLoading(true);

    const params = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || "No Subject",
      message: form.message,
      reply_to: form.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY
      );
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_ID,
        params,
        EMAILJS_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error(err);
      setEmailError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setEmailError("");
  }

  const whatsappUrl =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=Hi%20Uzair%2C%20I%20found%20your%20portfolio!";

  return (
    <div className="py-20 px-4">
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

      <div className="max-w-276 mx-auto">
        <p className="text-xs tracking-widest text-(--accent) uppercase mb-2">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-4">Lets Talk</h2>

        <p className="text-(--muted) mb-10 max-w-md">
          Have a project or just want to say hi? My inbox is always open.
        </p>

        {/* GRID */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href={"mailto:" + personal.email}
              className="flex items-center gap-4 border rounded-xl p-4"
            >
              <Mail />
              <div>
                <p className="text-xs text-(--muted)">Email</p>
                <p>{personal.email}</p>
              </div>
            </a>

            {/* Phone */}
            <button
              onClick={() => setShowPhoneModal(true)}
              className="flex items-center gap-4 border rounded-xl p-4 text-left"
            >
              <Phone />
              <div>
                <p className="text-xs text-(--muted)">Phone</p>
                <p>{personal.phone}</p>
              </div>
            </button>

            <div className="flex items-center gap-4 border rounded-xl p-4">
              <MapPin />
              <div>
                <p className="text-xs text-(--muted)">Location</p>
                <p>{personal.location}</p>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-green-400 text-green-500 px-4 py-3 rounded-xl"
            >
              <MessageCircle /> Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-3 border rounded-2xl p-6">
            {sent ? (
              <div className="text-center py-10">
                <CheckCircle2 className="mx-auto mb-4 text-green-500" size={50} />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-sm text-(--muted) mb-4">
                  Thanks {form.name}
                </p>

                <button
                  onClick={handleReset}
                  className="bg-(--accent) px-6 py-2 rounded-lg"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    className="border p-3 rounded-lg"
                  />
                  <input
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    className="border p-3 rounded-lg"
                  />
                </div>

                <input
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setField("subject", e.target.value)}
                  className="border p-3 rounded-lg"
                />

                <textarea
                  rows={5}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setField("message", e.target.value)}
                  className="border p-3 rounded-lg"
                />

                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}

                <button
                  disabled={loading}
                  className="bg-(--accent) py-3 rounded-lg flex justify-center items-center gap-2"
                >
                  {loading ? "Sending..." : <> <Send size={16}/> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}