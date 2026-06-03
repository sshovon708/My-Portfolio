import { Helmet } from "react-helmet-async";
import { useState } from "react";
import {
  FaRegCalendarAlt,
  FaRegClock,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { allBlogPosts } from "../data/mockData";

export default function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <>
      <Helmet>
        <title>Tech Insights & Web Development Articles | IAShovon Blog</title>
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-24 -right-32 w-[550px] h-[550px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-16 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-[fadeUp_0.65s_0.15s_ease_both]">
            {allBlogPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm"
                onClick={() => setActivePost(post)}
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
                  <h3 className="text-base font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <FaRegClock />
                    <span>{post.readTime}</span>
                  </div>
                  <button className="inline-flex items-center gap-1 text-xs font-bold text-blue-600">
                    Read Article <FaArrowRight className="text-[10px]" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
              onClick={() => setActivePost(null)}
            />
            <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[88vh] overflow-y-auto z-10">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-700 cursor-pointer"
              >
                <FaTimes />
              </button>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-6 leading-snug">
                {activePost.title}
              </h2>
              <div className="text-slate-600 font-light text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {activePost.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
