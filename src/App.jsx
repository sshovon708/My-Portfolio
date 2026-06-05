import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/Thankyou";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/thank-you" element={<ThankYou/>}/>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
