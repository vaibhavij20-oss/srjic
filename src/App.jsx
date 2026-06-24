import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Notices = lazy(() => import("./pages/Notices"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Contact = lazy(() => import("./pages/Contact"));

// Simple loading fallback
const LoadingSpinner = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50/50">
    <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-sm font-medium text-gray-500">Loading page content...</p>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;