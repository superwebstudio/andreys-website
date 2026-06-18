import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

/** Brand logos — lucide-react does not ship Instagram/Facebook/YouTube icons in this version */
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconYoutube({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/timetable", label: "Timetable" },
  { href: "/coaches", label: "Coaches" },
  { href: "/membership", label: "Membership" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-[#cc0000] font-black text-2xl tracking-tight">PREDATORS</span>
              <span className="text-[#c9a84c] font-black text-2xl tracking-tight">MMA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Motivating, instilling confidence, and making you physically and mentally stronger — one session at a time.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-[#cc0000] transition-colors">
                <IconInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-[#cc0000] transition-colors">
                <IconFacebook />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-[#cc0000] transition-colors">
                <IconYoutube />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#cc0000]" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#c9a84c] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training times */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#cc0000]" />
              Training Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { day: "Mon, Wed, Fri", time: "5:30 PM – 9:00 PM" },
                { day: "Tue & Thu", time: "6:00 PM – 8:00 PM" },
                { day: "Saturday", time: "10:00 AM – 1:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((item) => (
                <li key={item.day} className="flex justify-between gap-4 text-gray-400">
                  <span>{item.day}</span>
                  <span className="text-gray-500">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#cc0000]" />
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
                <span>123 Fighter Lane, Manchester, M1 2AB</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={15} className="text-[#c9a84c] shrink-0" />
                <a href="tel:+441234567890" className="hover:text-white transition-colors">+44 123 456 7890</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={15} className="text-[#c9a84c] shrink-0" />
                <a href="mailto:info@predatorsmma.com" className="hover:text-white transition-colors">info@predatorsmma.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Predators MMA. All rights reserved.</p>
          <p>Built for champions.</p>
        </div>
      </div>
    </footer>
  );
}
