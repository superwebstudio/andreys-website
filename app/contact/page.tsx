"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function Animate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Please write at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "119 St Marys Road, Southampton, SO14 0BL, United Kingdom",
    link: "https://www.google.com/maps/search/?api=1&query=119+St+Marys+Road,+Southampton,+SO14+0BL,+United+Kingdom",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 123 456 7890",
    link: "tel:+441234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@predatorsmma.com",
    link: "mailto:info@predatorsmma.com",
  },
];

const hours = [
  { day: "Monday – Friday", time: "6:00 AM – 9:00 PM" },
  { day: "Saturday", time: "8:00 AM – 4:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    // Simulate send — connect to your email service here
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form data:", data);
    setSent(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Get In Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-white mb-4">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl">
              Ready to start? Have a question? Drop us a message and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <Animate>
            <motion.div variants={fadeUp} className="bg-[#111] border border-white/5 p-8 sm:p-10">
              <h2 className="text-2xl font-black text-white mb-1">Send a Message</h2>
              <p className="text-gray-500 text-sm mb-8">We&apos;ll reply within 24 hours.</p>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-[#cc0000] mb-4" />
                  <h3 className="text-white font-black text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for reaching out. We&apos;ll be in touch soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-[#c9a84c] text-sm hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Full Name <span className="text-[#cc0000]">*</span>
                      </label>
                      <input
                        {...register("name")}
                        placeholder="John Smith"
                        className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#cc0000] text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                      />
                      {errors.name && <p className="text-[#cc0000] text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                        Email <span className="text-[#cc0000]">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#cc0000] text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                      />
                      {errors.email && <p className="text-[#cc0000] text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+44 7700 900000"
                      className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#cc0000] text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Subject <span className="text-[#cc0000]">*</span>
                    </label>
                    <select
                      {...register("subject")}
                      className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#cc0000] text-white px-4 py-3 text-sm outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a subject…</option>
                      <option value="trial">Book a Free Trial</option>
                      <option value="membership">Membership Enquiry</option>
                      <option value="timetable">Timetable Question</option>
                      <option value="fighter">Fighter Programme</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-[#cc0000] text-xs mt-1">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      Message <span className="text-[#cc0000]">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us a bit about yourself and what you're looking for…"
                      className="w-full bg-[#0a0a0a] border border-white/10 focus:border-[#cc0000] text-white placeholder-gray-600 px-4 py-3 text-sm outline-none transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[#cc0000] text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#cc0000] hover:bg-[#990000] disabled:opacity-60 text-white font-bold uppercase tracking-widest text-sm py-4 transition-colors"
                  >
                    {isSubmitting ? "Sending…" : (<><Send size={15} /> Send Message</>)}
                  </button>
                </form>
              )}
            </motion.div>
          </Animate>

          {/* Info */}
          <Animate className="flex flex-col gap-8">
            {/* Contact details */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-black text-white mb-6">Find Us</h2>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value, link }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#cc0000]/30 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#cc0000]" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-0.5">{label}</div>
                      <a href={link} className="text-gray-300 hover:text-white transition-colors text-sm" target={link.startsWith("https") ? "_blank" : undefined}>
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Opening hours */}
            <motion.div variants={fadeUp} className="bg-[#111] border border-white/5 p-7">
              <div className="flex items-center gap-2 mb-5">
                <Clock size={16} className="text-[#c9a84c]" />
                <h3 className="text-white font-black text-base uppercase tracking-wide">Opening Hours</h3>
              </div>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-400">{h.day}</span>
                    <span className="text-gray-500">{h.time}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Map placeholder */}
            <motion.div variants={fadeUp} className="bg-[#111] border border-white/5 aspect-[16/9] flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <MapPin size={32} className="text-[#cc0000] mx-auto mb-2" />
                <p className="text-gray-400 text-sm font-medium">119 St Marys Road, Southampton, SO14 0BL</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=119+St+Marys+Road,+Southampton,+SO14+0BL,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] text-xs mt-2 inline-block hover:text-white transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "30px 30px"
              }} />
            </motion.div>
          </Animate>
        </div>
      </section>
    </>
  );
}
