import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { allProjects } from "../data/mockData";

const CATEGORIES = ["All", "Frontend", "Full-Stack", "Backend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  // ItemList Schema for Projects (without image field)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web Development Projects Portfolio | Iftakhar Shovon",
    description:
      "A collection of full-stack and frontend web development projects built with React, Node.js, MongoDB, and Tailwind CSS.",
    numberOfItems: filtered.length,
    itemListElement: filtered.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      description: project.description,
      url: `https://iashovon.netlify.app/projects/${project.id}`,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        keywords: project.tags?.join(", "),
        url: project.liveLink,
        codeRepository: project.githubLink,
        about: {
          "@type": "Thing",
          name: project.category,
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>My Projects | IAShovon</title>
        <meta
          name="description"
          content="Explore 22+ web development projects by Iftakhar Shovon - React apps, Node.js APIs, MERN stack applications, and full-stack solutions with clean code architecture."
        />
        <link rel="canonical" href="https://iashovon.netlify.app/projects" />
        <meta
          property="og:title"
          content="Web Development Projects Portfolio | Iftakhar Shovon"
        />
        <meta
          property="og:description"
          content="Browse 22+ full-stack and frontend projects equipped with clean code architecture. Real-world applications built with React, Node.js, MongoDB."
        />
        <meta
          property="og:url"
          content="https://iashovon.netlify.app/projects"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Web Development Projects | Iftakhar Shovon"
        />
        <meta
          name="twitter:description"
          content="Explore my portfolio of 22+ React, Node.js, and full-stack projects."
        />

        {/* ItemList Schema */}
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-white pt-24 pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-10 -right-32 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-14 animate-[fadeUp_0.65s_ease_both]">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-blue-500" />
              <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase font-mono">
                // showcase
              </span>
              <span className="w-6 h-px bg-blue-500" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-4">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Projects
              </span>
            </h1>
          </div>

          <div className="flex justify-center items-center gap-2.5 mb-12 flex-wrap">
            {CATEGORIES.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${filter === tab ? "bg-blue-600 text-white shadow-md scale-105" : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 shadow-sm"}`}
              >
                {tab}{" "}
                <span className="ml-1 text-xs font-mono opacity-70">
                  (
                  {tab === "All"
                    ? allProjects.length
                    : allProjects.filter((p) => p.category === tab).length}
                  )
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-500/20 hover:shadow-2xl hover:shadow-slate-100/80 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-4 font-mono">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 font-light">
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
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border border-slate-200 text-slate-500 hover:bg-slate-50"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold border border-blue-500/20 text-blue-600 ml-auto hover:bg-blue-600 hover:text-white"
                    >
                      Live Demo <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
