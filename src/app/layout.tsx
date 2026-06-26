import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAZA Foundation | Strengthening Families Through Faith",
  description:
    "CAZA strengthens families through faith-rooted psychological, educational, and counseling support. We walk with families through their hardest seasons.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-quicksand bg-alma text-cruz">
        {children}
      </body>
    </html>
  );
}
