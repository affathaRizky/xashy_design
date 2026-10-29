import type { Metadata, Viewport } from "next";
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

// 1. Konfigurasi Viewport khusus untuk mobile & in-app browser
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0a0a0a', // Sesuai warna bg-metal-dark
};

export const metadata: Metadata = {
  title: "XashyDesign",
  description: "Creative design studio specializing in futuristic digital experiences, overlay livestream, karakter animasi, dan desain grafis profesional.",
  keywords: ["design grafis", "overlay livestream", "karakter animasi", "desain logo", "XashyDesign"],
  authors: [{ name: "Xashy Hsuband" }],
  creator: "XashyDesign",
  openGraph: {
    title: "XashyDesign",
    description: "Creative design studio specializing in futuristic digital experiences",
    url: "https://xashydesign.vercel.app",
    siteName: "XashyDesign",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XashyDesign | Futuristic Design Studio",
    description: "Creative design studio specializing in futuristic digital experiences",
  },
  // 2. Mencegah iOS/TikTok auto-detect nomor HP jadi link yang merusak layout
  other: {
    'format-detection': 'telephone=no, date=no, address=no, email=no',
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