"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock } from "lucide-react";

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

type ClassEntry = {
  time: string;
  name: string;
  coach: string;
  level: "All" | "Beginner" | "Intermediate" | "Advanced" | "Kids";
  duration: number;
};

type DaySchedule = {
  day: string;
  short: string;
  classes: ClassEntry[];
};

const schedule: DaySchedule[] = [
  {
    day: "Monday",
    short: "Mon",
    classes: [
      { time: "06:00", name: "Boxing Fundamentals", coach: "Danny Okafor", level: "Beginner", duration: 60 },
      { time: "09:30", name: "Yoga & Mobility", coach: "Guest Coach", level: "All", duration: 45 },
      { time: "12:00", name: "BJJ Open Mat", coach: "Sofia Reyes", level: "All", duration: 90 },
      { time: "18:30", name: "Muay Thai Intermediate", coach: "Marcus Hill", level: "Intermediate", duration: 75 },
      { time: "20:00", name: "MMA Sparring", coach: "Marcus Hill", level: "Advanced", duration: 60 },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    classes: [
      { time: "06:00", name: "Muay Thai Basics", coach: "Marcus Hill", level: "Beginner", duration: 60 },
      { time: "10:00", name: "Women's Self-Defence", coach: "Sofia Reyes", level: "All", duration: 60 },
      { time: "17:00", name: "Kids MMA (6–12)", coach: "Danny Okafor", level: "Kids", duration: 45 },
      { time: "18:30", name: "Wrestling", coach: "Marcus Hill", level: "All", duration: 75 },
      { time: "20:00", name: "S&C Conditioning", coach: "Danny Okafor", level: "All", duration: 50 },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    classes: [
      { time: "06:00", name: "Boxing Fundamentals", coach: "Danny Okafor", level: "Beginner", duration: 60 },
      { time: "12:00", name: "BJJ No-Gi", coach: "Sofia Reyes", level: "Intermediate", duration: 90 },
      { time: "17:30", name: "Teens MMA (13–17)", coach: "Marcus Hill", level: "Kids", duration: 60 },
      { time: "18:30", name: "MMA All Levels", coach: "Marcus Hill", level: "All", duration: 75 },
      { time: "20:00", name: "BJJ Drilling", coach: "Sofia Reyes", level: "Advanced", duration: 60 },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    classes: [
      { time: "06:00", name: "Muay Thai Basics", coach: "Marcus Hill", level: "Beginner", duration: 60 },
      { time: "09:30", name: "Yoga & Mobility", coach: "Guest Coach", level: "All", duration: 45 },
      { time: "17:00", name: "Kids MMA (6–12)", coach: "Danny Okafor", level: "Kids", duration: 45 },
      { time: "18:30", name: "Boxing Technique", coach: "Danny Okafor", level: "Intermediate", duration: 75 },
      { time: "20:00", name: "S&C Conditioning", coach: "Danny Okafor", level: "All", duration: 50 },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    classes: [
      { time: "06:00", name: "Boxing Fundamentals", coach: "Danny Okafor", level: "Beginner", duration: 60 },
      { time: "12:00", name: "BJJ Open Mat", coach: "Sofia Reyes", level: "All", duration: 90 },
      { time: "18:00", name: "MMA All Levels", coach: "Marcus Hill", level: "All", duration: 75 },
      { time: "19:30", name: "MMA Sparring", coach: "Marcus Hill", level: "Advanced", duration: 60 },
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    classes: [
      { time: "09:00", name: "MMA All Levels", coach: "Marcus Hill", level: "All", duration: 90 },
      { time: "11:00", name: "BJJ Open Mat", coach: "Sofia Reyes", level: "All", duration: 90 },
      { time: "13:00", name: "Kids Kickboxing", coach: "Danny Okafor", level: "Kids", duration: 45 },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    classes: [
      { time: "10:00", name: "Open Gym / Drilling", coach: "Self-directed", level: "All", duration: 120 },
      { time: "12:00", name: "Fighter Programme", coach: "Marcus Hill", level: "Advanced", duration: 120 },
    ],
  },
];

const levelColors: Record<ClassEntry["level"], string> = {
  All: "bg-white/10 text-gray-300",
  Beginner: "bg-emerald-900/40 text-emerald-400",
  Intermediate: "bg-blue-900/40 text-blue-400",
  Advanced: "bg-[#cc0000]/20 text-[#ff6666]",
  Kids: "bg-purple-900/40 text-purple-400",
};

export default function TimetablePage() {
  const [activeDay, setActiveDay] = useState(0);
  const current = schedule[activeDay];

  return (
    <>
      {/* Hero */}
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
              7 days a week. Multiple disciplines. No excuses. Pick your session and show up ready.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Day selector + Classes */}
      <section className="py-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Day tabs */}
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

          {/* Classes list */}
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-2xl font-black text-white">{current.day}</h2>
            <span className="text-gray-600 text-sm">{current.classes.length} classes</span>
          </div>

          <Animate key={activeDay}>
            <div className="space-y-3">
              {current.classes.map((cls) => (
                <motion.div
                  key={cls.time + cls.name}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/5 hover:border-[#cc0000]/20 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-colors"
                >
                  {/* Time */}
                  <div className="flex items-center gap-2 w-24 shrink-0">
                    <Clock size={13} className="text-[#cc0000]" />
                    <span className="text-white font-bold text-lg">{cls.time}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base">{cls.name}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">with {cls.coach}</p>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-gray-600 text-xs">{cls.duration} min</span>
                    <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1 ${levelColors[cls.level]}`}>
                      {cls.level}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animate>

          {/* Legend */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="text-gray-600 text-xs uppercase tracking-widest">Levels:</span>
            {(Object.entries(levelColors) as [ClassEntry["level"], string][]).map(([level, cls]) => (
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
