import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import myAboutImage from "../assets/images/iftakhar-ahmmed-shovon-fullstack-developer-bangladesh.jpg";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function About() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaLaptopCode className="text-xl text-blue-600" />,
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Backend & Database",
      icon: <FaServer className="text-xl text-indigo-600" />,
      skills: ["Node.js", "Express", "C / C++ Basics", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Tools & Workflow",
      icon: <FaCode className="text-xl text-cyan-600" />,
      skills: [
        "Git & GitHub",
        "Vite",
        "REST APIs",
        "Clean Architecture",
        "UI/UX Optimization",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Me | IAShovon</title>
        <meta
          name="description"
          content="Learn more about Iftakhar Ahmmed Shovon, a MERN Stack Web Developer based in Bangladesh, specializing in clean engineering, performance optimization, and scalable web apps."
        />
        <link rel="canonical" href="https://iashovon.netlify.app/about" />
        <meta
          property="og:title"
          content="About Iftakhar Ahmmed Shovon | MERN Stack Expert"
        />
        <meta
          property="og:description"
          content="Turning complex business requirements into fast, scalable, and visually compelling web applications."
        />
        <meta property="og:url" content="https://iashovon.netlify.app/about" />
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-white pt-24 pb-20">
        {/* Glow Blur Filter Only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-40 -right-24 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-20 -left-24 w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
            <div className="lg:col-span-5 flex justify-center animate-[fadeUp_0.65s_ease_both]">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 blur-xl scale-105 translate-y-4" />
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-[360px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                  <img
                    src={myAboutImage}
                    alt="Iftakhar Ahmmed Shovon — Senior Full-Stack Developer Profile"
                    width="320"
                    height="360"
                    fetchpriority="high"
                    className="w-full h-full object-cover object-center scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 animate-[fadeUp_0.65s_0.1s_ease_both]">
              <div className="inline-flex items-center gap-2.5">
                <span className="w-8 h-px bg-blue-500" />
                <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase font-mono">
                  // about_me
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
                About Me — Turning Ideas Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Production-Grade
                </span>{" "}
                Software
              </h1>
              <div className="space-y-4 text-base text-slate-600 font-light leading-relaxed">
                <p>
                  Hi, I'm{" "}
                  <span className="font-semibold text-slate-800">
                    Iftakhar Ahmmed Shovon
                  </span>{" "}
                  — a passionate Full-Stack Web Developer based in Bangladesh. I
                  thrive at the intersection of clean engineering and thoughtful
                  design, transforming complex business requirements into fast,
                  scalable, and visually compelling web applications.
                </p>
                <p>
                  My approach is grounded in clean architecture, modular code
                  structure, and a relentless focus on performance. Beyond
                  writing code that works, I care deeply about writing code
                  that's maintainable.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FaMapMarkerAlt className="text-blue-500 shrink-0" />
                <span>
                  Chapainawabganj Sadar, Chapainawabganj, Rajshahi, Bangladesh
                </span>
              </div>
              <div className="mt-2 p-5 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-4 shadow-sm">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-sm">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">
                    Academic Background
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Focused on science, core mathematics, and language studies
                    alongside applied computer programming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16 animate-[fadeUp_0.65s_0.2s_ease_both]">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="text-cyan-600 text-xs font-bold tracking-widest uppercase mb-2 font-mono">
                // tech_stack
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-3">
                My Technology Stack
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/20 hover:shadow-xl hover:shadow-slate-100/60 transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                    {cat.icon}
                    <h3 className="font-bold text-slate-800 text-base">
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-slate-50 border border-slate-200 text-slate-500"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
