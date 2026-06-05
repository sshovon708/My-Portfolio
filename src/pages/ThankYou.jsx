import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaTwitter } from "react-icons/fa";

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Message Sent | Thank You - Iftakhar Shovon</title>
        <meta
          name="description"
          content="Thank you for reaching out! I've received your message and will get back to you within 24 hours."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://iashovon.netlify.app/thank-you" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-white pt-32 pb-20">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 text-center">
          {/* Success icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center animate-[scaleUp_0.4s_ease_both]">
              <svg
                className="w-10 h-10 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mb-3 animate-[fadeUp_0.5s_ease_both]">
            Message Sent! 🎉
          </h1>

          <p className="text-slate-500 text-base leading-relaxed mb-2 animate-[fadeUp_0.5s_0.1s_ease_both]">
            Thank you for reaching out to me.
          </p>

          <p className="text-slate-400 text-sm leading-relaxed mb-8 animate-[fadeUp_0.5s_0.15s_ease_both]">
            I've received your message and will get back to you within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeUp_0.5s_0.2s_ease_both]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all duration-200"
            >
              <FaHome className="text-xs" /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all duration-200"
            >
              <FaEnvelope className="text-xs" /> Send Another Message
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleUp {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-\\[fadeUp_0\\.5s_ease_both\\],
            .animate-\\[fadeUp_0\\.5s_0\\.1s_ease_both\\],
            .animate-\\[fadeUp_0\\.5s_0\\.15s_ease_both\\],
            .animate-\\[fadeUp_0\\.5s_0\\.2s_ease_both\\],
            .animate-\\[scaleUp_0\\.4s_ease_both\\] {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
