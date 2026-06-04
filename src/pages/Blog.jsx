import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaRegClock, FaArrowRight } from "react-icons/fa";
import { allBlogPosts } from "../data/mockData";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Tech Blog | IAShovon</title>
        <meta
          name="description"
          content="Read expert articles, MERN stack tutorials, clean coding tips, and industry insights written by Full-Stack Developer Iftakhar Ahmmed Shovon."
        />
        <link rel="canonical" href="https://iashovon.netlify.app/blog" />
        <meta
          property="og:title"
          content="Tech Insights & Web Development Articles | IAShovon Blog"
        />
        <meta
          property="og:description"
          content="Stay updated with web development techniques, React practices, and full-stack guides."
        />
        <meta property="og:url" content="https://iashovon.netlify.app/blog" />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-white pt-24 pb-20">
        {/* ── Soft Clean Glow Blobs ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-24 -right-32 w-[550px] h-[550px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-16 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-14 animate-[fadeUp_0.65s_ease_both]">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-blue-500" />
              <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase font-mono">
                // articles
              </span>
              <span className="w-6 h-px bg-blue-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-4">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Insights
              </span>{" "}
              &amp; Stories
            </h1>
            <p className="text-slate-500 font-light text-base leading-relaxed">
              Deep dives into modern web engineering, clean code architectures,
              and full-stack performance optimization strategies.
            </p>
          </div>

          {/* BLOG GRID — আপনার অরিজিনাল ডিজাইন */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-[fadeUp_0.65s_0.15s_ease_both]">
            {allBlogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 mb-4">
                    <span className="px-2.5 py-0.5 font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-md uppercase tracking-wider font-mono">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaRegCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h2 className="text-base font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <FaRegClock />
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-blue-600 cursor-pointer"
                  >
                    Read Article <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}