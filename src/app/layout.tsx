import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

// Setup Font
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
  title: "XashyDesign",
  description: "Open for design services! I create overlays, logos, and all kinds of graphic design edits to suit your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${orbitron.variable} ${rajdhani.variable} font-rajdhani bg-cyber-dark text-white antialiased selection:bg-cyan-500/30 selection:text-cyan-100`}>
        {children}
      </body>
    </html>
  );
}