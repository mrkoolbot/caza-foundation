"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-why", label: "Our Why" },
  { href: "/our-programs", label: "Our Programs" },
  { href: "/our-people", label: "Our People" },
  { href: "/walk-with-us", label: "Walk With Us" },
  { href: "/find-shelter", label: "Find Shelter" },
  { href: "/give", label: "Give" },
  { href: "/reach-out", label: "Reach Out" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-alma border-b border-po/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-auto relative">
            <span className="text-2xl font-bold text-cruz tracking-wide">CAZA</span>
            <span className="block text-xs text-po tracking-widest -mt-1">foundation</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-liga hover:text-amor transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/give"
          className="hidden lg:inline-block bg-amor text-alma px-5 py-2 rounded-full text-sm font-bold hover:bg-teto transition-colors duration-200"
        >
          Give Now
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-cruz"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-alma border-t border-po/20 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-semibold text-liga hover:text-amor transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/give"
                className="inline-block bg-amor text-alma px-5 py-2 rounded-full text-sm font-bold hover:bg-teto transition-colors"
                onClick={() => setOpen(false)}
              >
                Give Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
