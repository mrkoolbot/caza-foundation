import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cruz text-alma">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold tracking-wide mb-1">CAZA</h3>
          <p className="text-sm text-pele tracking-widest mb-4">foundation</p>
          <p className="text-sm text-alma/70 leading-relaxed">
            We walk with families through their hardest seasons so that every home becomes a place where each member feels safe, known, and whole.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-pele mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-alma/70">
            <li><Link href="/" className="hover:text-pele transition-colors">Home</Link></li>
            <li><Link href="/our-why" className="hover:text-pele transition-colors">Our Why</Link></li>
            <li><Link href="/our-programs" className="hover:text-pele transition-colors">Our Programs</Link></li>
            <li><Link href="/our-people" className="hover:text-pele transition-colors">Our People</Link></li>
            <li><Link href="/walk-with-us" className="hover:text-pele transition-colors">Walk With Us</Link></li>
            <li><Link href="/find-shelter" className="hover:text-pele transition-colors">Find Shelter</Link></li>
            <li><Link href="/give" className="hover:text-pele transition-colors">Give</Link></li>
            <li><Link href="/reach-out" className="hover:text-pele transition-colors">Reach Out</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-pele mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-alma/70">
            <li>
              <a href="tel:7542158201" className="hover:text-pele transition-colors">(754) 215-8201</a>
            </li>
            <li>
              <a href="mailto:contact@cazafoundationinc.org" className="hover:text-pele transition-colors">
                contact@cazafoundationinc.org
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <Link
              href="/give"
              className="inline-block bg-barro text-alma px-5 py-2 rounded-full text-sm font-bold hover:bg-amor transition-colors"
            >
              Give Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-alma/10 text-center py-6 text-xs text-alma/40">
        © {new Date().getFullYear()} CAZA Foundation Inc. All rights reserved.
      </div>
    </footer>
  );
}
