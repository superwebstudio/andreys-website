"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock } from "lucide-react";
import { levelColors, schedule } from "@/lib/gym-data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

function Animate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

export default function TimetablePage() {
  const [activeDay, setActiveDay] = useState(0);
  const current = schedule[activeDay];

  return (
    <>
      <section className="relative pt-32 pb-16 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Schedule
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-white mb-4">
              Weekly Timetable
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl">
              K-1, Muay Thai, boxing, grappling and kids classes across the week. Pick your session and show up ready.
            </motion.p>
          </Animate>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-4 mb-10 no-scrollbar">
            {schedule.map((d, i) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(i)}
                className={`flex-shrink-0 px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                  activeDay === i
                    ? "bg-[#cc0000] text-white"
                    : "bg-[#111] border border-white/5 text-gray-400 hover:border-[#cc0000]/30 hover:text-white"
                }`}
              >
                {d.short}
              </button>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-2xl font-black text-white">{current.day}</h2>
            <span className="text-gray-600 text-sm">
              {current.classes.length === 0
                ? "No classes scheduled"
                : `${current.classes.length} class${current.classes.length === 1 ? "" : "es"}`}
            </span>
          </div>

          <Animate key={activeDay}>
            {current.classes.length === 0 ? (
              <motion.div
                variants={fadeUp}
                className="bg-[#111] border border-white/5 p-10 text-center text-gray-500"
              >
                No classes on {current.day}. Check another day on the timetable.
              </motion.div>
            ) : (
              <div className="space-y-3">
                {current.classes.map((cls) => (
                  <motion.div
                    key={cls.time + cls.name}
                    variants={fadeUp}
                    className="bg-[#111] border border-white/5 hover:border-[#cc0000]/20 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-colors"
                  >
                    <div className="flex items-center gap-2 w-28 shrink-0">
                      <Clock size={13} className="text-[#cc0000]" />
                      <span className="text-white font-bold text-lg">{cls.time}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base">{cls.name}</h3>
                    </div>

                    <div className="shrink-0">
                      <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 ${levelColors[cls.level]}`}>
                        {cls.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </Animate>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-gray-600 text-xs uppercase tracking-widest">Levels:</span>
            {Object.entries(levelColors).map(([level, cls]) => (
              <span key={level} className={`text-xs font-bold uppercase tracking-wide px-3 py-1 ${cls}`}>
                {level}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
