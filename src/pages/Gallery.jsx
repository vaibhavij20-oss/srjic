import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// Importing your actual available assets from the directory
import annualImg from "../assets/annual.webp";
import sportsImg from "../assets/sports.webp";
import scienceImg from "../assets/science.webp";
import classroomImg from "../assets/classroom.webp";
import culturalImg from "../assets/cultural.webp";
import awardImg from "../assets/award.webp";

const galleryImages = [
  { id: 1, title: "Annual Day Celebration", category: "Events", src: annualImg },
  { id: 2, title: "Sports Competition", category: "Sports", src: sportsImg },
  { id: 3, title: "Science Exhibition", category: "Academics", src: scienceImg },
  { id: 4, title: "Classroom Activities", category: "Academics", src: classroomImg },
  { id: 5, title: "Cultural Program", category: "Culture", src: culturalImg },
  { id: 6, title: "Award Ceremony", category: "Events", src: awardImg },
];

const categories = ["All", "Academics", "Sports", "Culture", "Events"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            School Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Capturing moments, achievements, and vibrant snapshots from our campus timeline
          </motion.p>
        </div>
      </section>

      {/* Gallery Main Workspace */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition shadow-sm ${
                  activeCategory === category
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-md border border-gray-100"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Information Text Panel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 z-10">
                      <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-1">
                        {image.category}
                      </p>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {image.title}
                      </h4>
                    </div>

                    {/* Hover Utility Cover Layer */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center z-20">
                      <div className="bg-yellow-400 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                        <ZoomIn className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Overlay View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video relative w-full flex items-center justify-center bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
                
                {/* Information Header Footer Inside Modal */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 down to-transparent p-6 pt-12 text-left">
                  <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">
                    {selectedImage.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-white mt-1">
                    {selectedImage.title}
                  </h4>
                </div>
              </div>

              {/* Close Overlay Anchor */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md text-white p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition z-30 border border-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}