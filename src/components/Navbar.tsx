"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CazaLogo } from "./CazaLogo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/our-why", label: "Our Why" },
  { href: "/our-programs", label: "Our Programs" },
  { href: "/our-people", label: "Our People" },
  { href: "/walk-with-us", label: "Walk With Us" },
  { href: "/find-shelter", label: "Find Shelter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-alma/95 backdrop-blur-md shadow-sm border-b border-po/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <CazaLogo size="sm" />
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-amor ${scrolled ? "text-liga" : "text-alma/90 hover:text-pele"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/give" className="text-sm font-bold text-alma bg-amor px-5 py-2.5 rounded-full hover:bg-teto transition-all duration-300 hover:scale-105 shadow-md">
            Give Now
          </Link>
        </div>

        <button className={`lg:hidden ${scrolled ? "text-cruz" : "text-alma"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-alma border-t border-po/20 px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-base font-semibold text-liga hover:text-amor transition-colors" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/give" className="inline-block bg-amor text-alma px-6 py-3 rounded-full font-bold text-sm hover:bg-teto transition-colors" onClick={() => setOpen(false)}>
                Give Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
