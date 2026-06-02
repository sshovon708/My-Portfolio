import { Link } from "react-router-dom";
import myFooterImage from "../assets/images/my-image.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCode,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebookF className="w-4 h-4" />,
    href: "https://www.facebook.com/iftakhar.ahmmed.shovon.2025",
    label: "Facebook",
    color:
      "hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:shadow-blue-500/40",
  },
  {
    icon: <FaInstagram className="w-4 h-4" />,
    href: "https://www.instagram.com/ifthakharahmmed/",
    label: "Instagram",
    color:
      "hover:bg-pink-600 hover:border-pink-500 hover:text-white hover:shadow-pink-500/40",
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    href: "https://github.com/sshovon708",
    label: "GitHub",
    color:
      "hover:bg-slate-800 hover:border-slate-700 hover:text-white hover:shadow-slate-400/30",
  },
  {
    icon: <FaLinkedinIn className="w-4 h-4" />,
    href: "#",
    label: "LinkedIn (coming soon)",
    color:
      "hover:bg-blue-700 hover:border-blue-600 hover:text-white hover:shadow-blue-600/40",
  },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200/80">
      {/* Top gradient accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-200/70">
          {/* ── Column 1: Brand ── */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-200 ring-4 ring-blue-500/5 shadow-sm">
                  <img
                    src={myFooterImage}
                    alt="Iftakhar Ahmmed Shovon"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight">
                  IAS<span className="text-blue-600">.dev</span>
                </h3>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  Iftakhar Ahmmed Shovon
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-light max-w-[240px]">
              Full-Stack Web Developer crafting performant, scalable, and
              beautifully designed applications from scratch.
            </p>

            {/* Tech badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-sm">
              <FaCode className="text-blue-600 shrink-0" />
              <span>
                <span className="text-indigo-600">const</span> stack{" "}
                <span className="text-blue-600">=</span>{" "}
                <span className="text-emerald-600 font-semibold">MERN</span>
              </span>
            </div>
          </div>

          {/* ── Column 2: Contact Info ── */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1 font-mono">
              // contact
            </h4>

            <a
              href="mailto:sshovon708@gmail.com"
              className="group flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-200 shrink-0">
                <FaEnvelope className="w-3.5 h-3.5" />
              </div>
              <span>sshovon708@gmail.com</span>
            </a>

            <a
              href="https://wa.me/8801315585665"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 text-sm text-slate-600 hover:text-emerald-600 transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:border-emerald-500 group-hover:text-white transition-all duration-200 shrink-0">
                <FaWhatsapp className="w-3.5 h-3.5" />
              </div>
              <span>+88 01315-585665</span>
            </a>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
                <FaMapMarkerAlt className="w-3.5 h-3.5" />
              </div>
              <span className="leading-snug font-light">
                Chapainawabganj Sadar,
                <br />
                Chapainawabganj, Rajshahi, Bangladesh
              </span>
            </div>
          </div>

          {/* ── Column 3: Social & Quick Links ── */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">
                // follow_me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map(({ icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    className={`w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:scale-110 hover:shadow-md transition-all duration-200 shadow-sm ${color}`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-mono">
                // quick_links
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-150 flex items-center gap-1.5"
                  >
                    <span className="text-blue-500/40 text-xs">›</span>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-3">
          <p className="text-xs text-slate-400 font-mono">
            &copy; {currentYear}{" "}
            <span className="text-slate-600 font-semibold">IAS.dev</span> — All
            rights reserved.
          </p>
          <p className="text-xs text-slate-400 font-mono">
            Built with <span className="text-blue-600 font-medium">React</span>{" "}
            + <span className="text-cyan-600 font-medium">Tailwind CSS</span> +{" "}
            <span className="text-emerald-600 font-medium">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
