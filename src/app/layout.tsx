import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "CAZA Foundation | Strengthening Families Through Faith",
  description: "CAZA strengthens families through faith-rooted psychological, educational, and counseling support. We walk with families through their hardest seasons.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-quicksand bg-white text-obsidian antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
