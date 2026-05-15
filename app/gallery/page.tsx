"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };

function Animate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const categories = ["All", "Training", "Fighters", "Events", "Gym"];

const photos = [
  { id: 1, category: "Training", label: "Morning Boxing Session", aspect: "aspect-square" },
  { id: 2, category: "Fighters", label: "Competition Day", aspect: "aspect-[3/4]" },
  { id: 3, category: "Gym", label: "Main Training Area", aspect: "aspect-square" },
  { id: 4, category: "Events", label: "Predators Fight Night", aspect: "aspect-[4/3]" },
  { id: 5, category: "Training", label: "BJJ Drilling", aspect: "aspect-square" },
  { id: 6, category: "Fighters", label: "Title Bout — Marcus Hill", aspect: "aspect-[3/4]" },
  { id: 7, category: "Training", label: "Muay Thai Pads", aspect: "aspect-square" },
  { id: 8, category: "Gym", label: "Weights & Conditioning Floor", aspect: "aspect-[4/3]" },
  { id: 9, category: "Events", label: "End of Year Showcase", aspect: "aspect-square" },
  { id: 10, category: "Training", label: "Kids Kickboxing Class", aspect: "aspect-[3/4]" },
  { id: 11, category: "Fighters", label: "Sofia Reyes — BJJ Championship", aspect: "aspect-square" },
  { id: 12, category: "Gym", label: "Changing & Locker Rooms", aspect: "aspect-[4/3]" },
  { id: 13, category: "Training", label: "Evening MMA Sparring", aspect: "aspect-square" },
  { id: 14, category: "Events", label: "Predators Open Day 2024", aspect: "aspect-[3/4]" },
  { id: 15, category: "Fighters", label: "Danny Okafor — Amateur Finals", aspect: "aspect-square" },
];

const colorBlocks = [
  "bg-[#1a0000]",
  "bg-[#110000]",
  "bg-[#1a1500]",
  "bg-[#0d0d1a]",
  "bg-[#0d1a0d]",
  "bg-[#1a0d00]",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((p) => p.id === lightbox);
    setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length].id);
  };

  const handleNext = () => {
    if (lightbox === null) return;
    const idx = filtered.findIndex((p) => p.id === lightbox);
    setLightbox(filtered[(idx + 1) % filtered.length].id);
  };

  const lightboxPhoto = filtered.find((p) => p.id === lightbox);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Gallery
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-white mb-4">
              Life at Predators
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl">
              From early morning sessions to fight nights — a glimpse inside the gym.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-colors ${
                  activeCategory === cat
                    ? "bg-[#cc0000] text-white"
                    : "bg-[#111] border border-white/5 text-gray-400 hover:border-[#cc0000]/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <Animate key={activeCategory}>
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  variants={fadeUp}
                  onClick={() => setLightbox(photo.id)}
                  className={`break-inside-avoid ${photo.aspect} ${colorBlocks[i % colorBlocks.length]} relative overflow-hidden cursor-pointer group border border-white/5 hover:border-[#cc0000]/30 transition-colors`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <span className="text-2xl font-black text-white/10">{photo.id}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#cc0000]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <div className="text-[10px] text-red-200 uppercase tracking-widest font-bold mb-1">{photo.category}</div>
                      <p className="text-white text-sm font-bold">{photo.label}</p>
                    </div>
                  </div>
                  {/* Placeholder text */}
                  <p className="absolute top-2 right-2 text-[9px] text-gray-700">Add photo</p>
                </motion.div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && lightboxPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/60 hover:text-white p-2" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
            <ChevronLeft size={32} />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            <ChevronRight size={32} />
          </button>

          <div
            className="max-w-2xl w-full bg-[#1a1a1a] aspect-[4/3] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-[#cc0000]/20 text-8xl font-black">{lightboxPhoto.id}</div>
              <div className="text-[#c9a84c] text-xs uppercase tracking-widest mt-2">{lightboxPhoto.category}</div>
              <p className="text-white font-bold mt-1">{lightboxPhoto.label}</p>
              <p className="text-gray-600 text-xs mt-2">Add photo here</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
