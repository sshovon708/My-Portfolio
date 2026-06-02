import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/images/logo.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`bg-slate-50/80 backdrop-blur-md text-slate-800 border-b border-slate-200/60 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md shadow-slate-200/50" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Hamburger button — Mobile Screen Only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg bg-slate-200/10 text-slate-1000"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <div className="w-6 flex flex-col gap-1.5 overflow-hidden">
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-3" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-3" : ""
                  }`}
                />
              </div>
            </button>

            {/* Logo - <IAS/> completely removed */}
            <Link to="/" className="flex items-center group">
              <img
                src={logoImg}
                alt="IAS Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg text-[14px] font-semibold tracking-wide transition-all duration-600 group ${
                    isActive
                      ? "text-blue-600 bg-blue-500/10"
                      : "text-slate-900 hover:text-slate-100 hover:bg-slate-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{label}</span>

                    {/* Hover Effect: Border bottom expanding from center */}
                    <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-blue-500 rounded-full transition-all duration-300 origin-center -translate-x-1/2 group-hover:w-3/5" />

                    {/* Click Active Slide indicator */}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3/5 h-[2px] rounded-full bg-blue-600 transition-all duration-300" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right side: Hire Me + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Hire Me
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 left-0 h-full w-72 max-w-[85vw] bg-white border-r border-slate-200 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Code decoration */}
          <p className="font-mono text-xs text-slate-600 mb-6 select-none">
            <span className="text-blue-500">const</span> nav{" "}
            <span className="text-cyan-400">=</span>{" "}
            <span className="text-slate-500">{"{"}</span>
          </p>

          <nav className="flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-700 bg-blue-500/20 border border-blue-500/20"
                      : "text-slate-700 hover:text-slate-100 hover:bg-slate-800"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                        isActive
                          ? "bg-blue-400"
                          : "bg-slate-700 group-hover:bg-slate-500"
                      }`}
                    />
                    <span className="font-mono">
                      <span
                        className={
                          isActive ? "text-cyan-400" : "text-slate-500"
                        }
                      >
                        &#34;
                      </span>
                      {label}
                      <span
                        className={
                          isActive ? "text-cyan-400" : "text-slate-500"
                        }
                      >
                        &#34;
                      </span>
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <p className="font-mono text-xs text-slate-600 mt-4 select-none">
            <span className="text-slate-500">{"}"}</span>
          </p>

          <div className="mt-auto">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Hire Me — Let's Talk
            </Link>
            <p className="text-center text-xs text-slate-600 mt-4 font-mono">
              sshovon708@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
