import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XashyDesign | Futuristic Design Studio",
  description: "Creative design studio specializing in futuristic digital experiences, overlay livestream, karakter animasi, dan desain grafis profesional.",
  keywords: ["design grafis", "overlay livestream", "karakter animasi", "desain logo", "XashyDesign"],
  authors: [{ name: "XashyDesign" }],
  creator: "XashyDesign",
  openGraph: {
    title: "XashyDesign | Futuristic Design Studio",
    description: "Creative design studio specializing in futuristic digital experiences, overlay livestream, karakter animasi, dan desain grafis profesional.",
    url: "https://xashydesign.vercel.app", // Ganti dengan domain kamu nanti
    siteName: "XashyDesign",
    images: [
      {
        url: "/og-image.jpg", // Buat gambar preview di public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "XashyDesign Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XashyDesign | Futuristic Design Studio",
    description: "Creative design studio specializing in futuristic digital experiences",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${orbitron.variable} ${rajdhani.variable} font-rajdhani bg-metal-dark text-white antialiased selection:bg-electric-blue selection:text-metal-dark`}>
        {children}
      </body>
    </html>
  );
}