import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formspreeEndpoint = "https://formspree.io/f/mdajprgb";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Me | IAShovon</title>
        <meta
          name="description"
          content="Looking for a reliable Full-Stack React & Node.js Developer in Bangladesh? Get in touch with Iftakhar Ahmmed Shovon for freelance projects or full-time roles."
        />
        <link rel="canonical" href="https://iashovon.netlify.app/contact" />
        <meta
          property="og:title"
          content="Hire a Freelance Web Developer | Contact Iftakhar Shovon"
        />
        <meta
          property="og:description"
          content="Let's build something great. Get in touch for freelance collaborations or software roles."
        />
        <meta
          property="og:url"
          content="https://iashovon.netlify.app/contact"
        />
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-white pt-24 pb-20">
        {/* ── Soft Clean Glow Blobs Only (No Grid Background) ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-32 -left-24 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-10 -right-24 w-[550px] h-[550px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 animate-[fadeUp_0.65s_ease_both]">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-blue-500" />
              <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase font-mono">
                // get_in_touch
              </span>
              <span className="w-6 h-px bg-blue-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-4">
              Let's Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Something Great
              </span>
            </h1>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              Have a project in mind, a question to ask, or an opportunity to
              discuss? Fill out the form below or reach out directly — I
              typically respond within 24 hours.
            </p>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
            {/* LEFT — Contact cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 animate-[fadeUp_0.65s_0.1s_ease_both]">
              <a
                href="mailto:sshovon708@gmail.com"
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-500/40 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 flex items-center gap-4 group shadow-sm"
              >
                <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Send an Email
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    sshovon708@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/8801315585665"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 flex items-center gap-4 group shadow-sm"
              >
                <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300 shrink-0">
                  <FaWhatsapp className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">WhatsApp</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    +88 01315-585665
                  </p>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-4 shadow-sm">
                <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100 shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Location</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Chapainawabganj Sadar, Chapainawabganj,
                    <br />
                    Rajshahi, Bangladesh
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <p className="text-xs text-emerald-600 font-medium">
                  Currently available — typical response time is under 24 hours.
                </p>
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div className="lg:col-span-7 animate-[fadeUp_0.65s_0.2s_ease_both]">
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/60 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    WhatsApp Number{" "}
                    <span className="normal-case text-slate-400 font-normal">
                      (optional)
                    </span>
                  </label>
                  <div className="relative">
                    <FaWhatsapp className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500 text-sm pointer-events-none" />
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Collaboration / Freelance Inquiry"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Hi Shovon, I'd love to discuss a project with you..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                {status === "SUCCESS" && (
                  <p className="text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-4 py-3 rounded-xl">
                    ✅ Message sent successfully! I'll be in touch shortly.
                  </p>
                )}
                {status === "ERROR" && (
                  <p className="text-sm font-semibold text-rose-600 bg-rose-50 border border-rose-100 px-4 py-3 rounded-xl">
                    ❌ Something went wrong. Please try again or email me
                    directly.
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm shadow-md hover:bg-blue-500 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Send Message
                  <FaPaperPlane className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
      </div>
    </>
  );
}
