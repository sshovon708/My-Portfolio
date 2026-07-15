import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaRegClock, FaArrowRight } from "react-icons/fa";
import { allBlogPosts } from "../data/mockData";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Web Development Blog | MERN Stack Tutorials & Insights by Iftakhar Shovon</title>
        <meta
          name="description"
          content="Read expert web development articles, MERN stack tutorials, React best practices, Node.js tips, and clean coding insights by Full-Stack Developer Iftakhar Ahmmed Shovon from Bangladesh."
        />
        <link rel="canonical" href="https://iashovon.netlify.app/blog" />
        <meta
          property="og:title"
          content="Web Development Blog | MERN Stack Tutorials & Tech Insights"
        />
        <meta
          property="og:description"
          content="Expert articles on React, Node.js, MongoDB, TypeScript, and full-stack web development. Learn from a professional developer's experience."
        />
        <meta property="og:url" content="https://iashovon.netlify.app/blog" />
        <meta property="og:type" content="blog" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "IAShovon Web Development Blog",
            "description": "Expert articles, MERN stack tutorials, and clean coding insights by Full-Stack Developer Iftakhar Ahmmed Shovon.",
            "url": "https://iashovon.netlify.app/blog",
            "author": {
              "@type": "Person",
              "name": "Iftakhar Ahmmed Shovon",
              "url": "https://iashovon.netlify.app/"
            },
            "blogPost": allBlogPosts.map((post) => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "url": `https://iashovon.netlify.app/blog/${post.id}`,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": "Iftakhar Ahmmed Shovon"
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden bg-white pt-24 pb-20">
        {/* ── Soft Clean Glow Blobs ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-24 -right-32 w-137.5 h-137.5 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-16 -left-32 w-125 h-125 rounded-full bg-indigo-500/5 blur-3xl" />
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
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
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
        <style>{`
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    
    .animate-\\[fadeUp_0\\.65s_ease_both\\],
    .animate-\\[fadeUp_0\\.65s_0\\.15s_ease_both\\] {
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