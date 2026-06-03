import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/my-image.jpg";
import {
  recentProjects,
  recentBlogPosts,
  featuredProjects,
} from "../data/mockData";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Iftakhar Ahmmed Shovon | Full-Stack Web Developer Bangladesh
        </title>
        <meta
          name="description"
          content="Iftakhar Ahmmed Shovon is a professional Full-Stack Web Developer specializing in React, Node.js, and MongoDB. Explore my portfolio for high-performance web applications."
        />
        <link rel="canonical" href="https://iashovon.netlify.app/" />
        <meta
          property="og:title"
          content="Iftakhar Ahmmed Shovon | Full-Stack Web Developer Portfolio"
        />
        <meta
          property="og:description"
          content="React, Node.js & MongoDB specialist. Building scalable, high-performance web applications."
        />
        <meta property="og:url" content="https://iashovon.netlify.app/" />
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-white">
        {/* ── Soft Clean Glow Blobs Only (No Grid Lines) ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute top-[60%] -left-40 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        {/* ── HERO SECTION ── */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-24 pb-20 border-b border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* LEFT — Copy */}
            <div className="flex flex-col gap-7 animate-[fadeUp_0.65s_ease_both]">
              <div className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Freelance &amp; Full-Time Roles
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.75rem] font-black leading-[1.08] tracking-tight">
                <span className="text-slate-800">I Build</span>{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600">
                    Full-Stack
                  </span>
                </span>
                <br />
                <span className="text-slate-800">Web Apps That</span>
                <br />
                <span className="text-slate-700 font-extrabold">
                  Scale &amp; Convert.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-light">
                Hi, I'm{" "}
                <span className="font-semibold text-slate-800">
                  Iftakhar Ahmmed Shovon
                </span>{" "}
                — a Full-Stack Web Developer specializing in{" "}
                <span className="text-blue-600 font-medium">React</span>,{" "}
                <span className="text-cyan-600 font-medium">Node.js</span>, and{" "}
                <span className="text-indigo-600 font-medium">MongoDB</span>. I
                turn complex product requirements into clean, performant
                applications that recruiters notice and users love.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  "React",
                  "Node.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "MongoDB",
                  "PostgreSQL",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-mono border border-slate-200 hover:border-blue-500/50 hover:text-blue-600 hover:bg-blue-500/5 transition-all duration-200 shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-1">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold text-sm shadow-md shadow-blue-500/20 hover:bg-blue-500 hover:shadow-blue-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  View My Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <a
                  href="mailto:sshovon708@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 bg-white text-slate-600 font-semibold text-sm shadow-sm hover:border-blue-500/40 hover:text-blue-600 hover:bg-blue-500/5 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>

              <div className="flex gap-8 pt-4 border-t border-slate-200">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "20+", label: "Projects Shipped" },
                  { value: "10+", label: "Happy Clients" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-2xl font-black text-slate-800">
                      {value}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5 font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Profile image */}
            <div className="relative flex items-center justify-center animate-[fadeUp_0.65s_0.18s_ease_both]">
              {/* Slow-spin dashed ring (ইমেজের চেয়ে বড় করা হয়েছে যেন বাইরে থেকে দেখা যায়) */}
              <div className="absolute w-[380px] h-[380px] lg:w-[38rem] lg:h-[38rem] rounded-full border-2 border-dashed border-blue-200/60 animate-[spin_30s_linear_infinite]" />

              {/* Counter-rotating ring with orbiting dot (পারফেক্ট বৃত্তাকার বা Circle করার জন্য width ও height সমান করা হয়েছে) */}
              <div className="absolute w-[340px] h-[340px] lg:w-[35rem] lg:h-[35rem] rounded-full border border-indigo-200/50 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_10px_4px_rgba(37,99,235,0.35)]" />
              </div>

              {/* Glow backdrop (ইমেজের ঠিক পেছনে পারফেক্ট সাইজে ব্লাভ ছড়াবে) */}
              <div className="absolute w-72 h-80 lg:w-[30rem] lg:h-[520px] rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 blur-3xl opacity-70" />

              {/* Photo — floating */}
              <div className="relative z-10 animate-[float_5s_ease-in-out_infinite]">
                {/* ইমেজ বড় হওয়ায় পেছনের শ্যাডো গ্লো-টা scale-110 করা হয়েছে */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-xl scale-110 translate-y-4" />

                {/* Image frame (আপনার সেট করা Extra Large সাইজ) */}
                <div className="relative w-80 h-96 lg:w-[28rem] lg:h-[500px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-blue-100/80">
                  <img
                    src={profileImage}
                    alt="Shovon — Full Stack Developer"
                    className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>

                {/* Corner star accent */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 shadow-lg shadow-blue-300/50 flex items-center justify-center">
                  <span className="text-white text-xs font-black">✦</span>
                </div>
              </div>

              {/* Floating badge — top-left */}
              <div className="absolute top-6 left-0 lg:-left-6 animate-[float_5s_1.2s_ease-in-out_infinite] z-20">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-100/80">
                  <span className="text-lg">👨‍💻</span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 leading-none">
                      Open to Work
                    </p>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      Available now
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
                </div>
              </div>

              {/* Floating badge — bottom-right */}
              <div className="absolute bottom-8 right-0 lg:-right-4 animate-[float_5s_2.5s_ease-in-out_infinite] z-20">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-blue-600 shadow-xl shadow-blue-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-blue-200 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-white leading-none">
                      Clean Code
                    </p>
                    <p className="text-[10px] text-blue-300 mt-0.5">Always</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ১. FEATURED PROJECTS SECTION ── */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-2 font-mono">
                // featured_work
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/30 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-4 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-50 border border-slate-200 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-500/20 text-blue-600 ml-auto hover:bg-blue-600 hover:text-white transition-all"
                    >
                      Live Demo <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ২. RECENT PROJECTS SECTION (এখানেও বাটনগুলো যোগ করা হয়েছে) ── */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 border-b border-slate-100 bg-slate-50/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-2 font-mono">
                // recent_updates
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
                Recent Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 group"
            >
              View All Projects{" "}
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-4 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-50 border border-slate-200 text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* রিসেন্ট প্রজেক্ট কার্ডেও গিটহাব ও লাইভ ডেমো বাটন যোগ করা হলো */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-500/20 text-indigo-600 ml-auto hover:bg-indigo-600 hover:text-white transition-all"
                    >
                      Live Demo <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ৩. RECENT BLOGS SECTION ── */}
        <section className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-cyan-600 text-xs font-bold tracking-widest uppercase mb-2 font-mono">
                // recent_articles
              </p>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
                Recent Blog Posts
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-700 group"
            >
              View All Articles{" "}
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlogPosts.map((post) => (
              <Link
                to="/blog"
                key={post.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 flex flex-col shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-md uppercase tracking-wider font-mono">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <FaRegCalendarAlt className="text-[10px]" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <FaRegClock className="text-[10px]" />
                  <span>{post.readTime}</span>
                  <span className="ml-auto flex items-center gap-1 text-cyan-600 font-medium group-hover:text-cyan-500">
                    Read More{" "}
                    <FaArrowRight className="text-[10px] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
      `}</style>
      </div>
    </>
  );
}
