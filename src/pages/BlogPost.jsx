import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaRegCalendarAlt, FaRegClock, FaArrowLeft } from "react-icons/fa";
import { allBlogPosts } from "../data/mockData";

export default function BlogPost() {
  const { slug } = useParams();

  // URL এর slug দিয়ে সঠিক ব্লগ পোস্টটি খুঁজে বের করা
  const post = allBlogPosts.find((b) => b.slug === slug);

  // যদি কোনো কারণে ব্লগ পোস্টটি খুঁজে না পাওয়া যায়
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-800">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link
          to="/blog"
          className="text-blue-600 hover:underline inline-flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title} | IAShovon Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link
          rel="canonical"
          href={`https://iashovon.netlify.app/blog/${post.slug}`}
        />
        <meta property="og:title" content={`${post.title} | IAShovon Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://iashovon.netlify.app/blog/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:author" content="Iftakhar Ahmmed Shovon" />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.category} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sshovon708" />
        <meta name="twitter:creator" content="@sshovon708" />
        <meta name="twitter:title" content={`${post.title} | IAShovon Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content="https://iashovon.netlify.app/iftakhar-ahmmed-shovon-fullstack-developer-bangladesh.jpg" />
        <meta name="twitter:image:alt" content={post.title} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "articleBody": post.content,
            "url": `https://iashovon.netlify.app/blog/${post.slug}`,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Person",
              "name": "Iftakhar Ahmmed Shovon",
              "url": "https://iashovon.netlify.app/"
            },
            "publisher": {
              "@type": "Person",
              "name": "Iftakhar Ahmmed Shovon"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://iashovon.netlify.app/blog/${post.slug}`
            },
            "wordCount": post.content?.split(" ").length || 0
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white text-slate-800 pt-24 pb-20">
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8">
          {/* ব্যাক বাটন */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 mb-8 transition-colors"
          >
            <FaArrowLeft className="text-xs" /> Back to Articles
          </Link>

          <article>
            {/* মেটা ইনফো */}
            <div className="flex items-center gap-4 mb-4 text-xs text-slate-400 font-mono">
              <span className="px-2.5 py-1 font-bold tracking-wider uppercase rounded-md bg-slate-50 border border-slate-200 text-slate-500">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <FaRegCalendarAlt /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FaRegClock /> {post.readTime}
              </span>
            </div>

            {/* মেইন হেডিং (H1 SEO) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-8">
              {post.title}
            </h1>

            {/* ব্লগ কন্টেন্ট বডি */}
            <div className="text-slate-600 font-light text-base sm:text-lg leading-relaxed whitespace-pre-line border-t border-slate-100 pt-8">
              {post.content}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
