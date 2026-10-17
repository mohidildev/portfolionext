
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-VERCEL-DOMAIN.vercel.app"),

  title: {
    default: "Mohidil Jahongirova | Portfolio",
    template: "%s | Mohidil Jahongirova",
  },

  description:
    "Mohidil Jahongirovaning portfolio sayti. React, Next.js, TypeScript va zamonaviy web-loyihalar.",

  openGraph: {
    title: "Mohidil Jahongirova | Portfolio",
    description:
      "Mening loyihalarim, tajribam va web dasturlash bo‘yicha ishlarim bilan tanishing.",
    url: "/",
    siteName: "Mohidil Portfolio",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Mohidil Jahongirova Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="min-h-screen bg-[#0b131f] font-sans text-white" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
