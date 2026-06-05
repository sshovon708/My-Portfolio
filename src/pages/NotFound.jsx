import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden px-6">
      {/* ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="text-center max-w-md relative z-10 animate-[fadeUp_0.5s_ease_both]">
        <h1 className="text-9xl font-black text-slate-200 tracking-tighter font-mono mb-2">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight mb-3">
          পাতাটি খুঁজে পাওয়া যায়নি!
        </h2>
        <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
          দুঃখিত, আপনি যে ইউআরএলটি খুঁজছেন তা হয়তো পরিবর্তন করা হয়েছে অথবা
          অস্তিত্বহীন। দয়া করে সঠিক ঠিকানাটি পুনরায় পরীক্ষা করুন।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200"
          >
            <FaHome className="text-xs" /> প্রচ্ছদে ফিরুন
          </Link>
          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 hover:text-slate-800 transition-all duration-200 cursor-pointer"
          >
            <FaArrowLeft className="text-xs" /> পূর্বের পাতায় যান
          </button>
        </div>
      </div>
    </div>
  );
}
