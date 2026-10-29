import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact"; // <-- Ganti ini
import Footer from "@/components/Footer";    // <-- Tambah ini

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Contact />   {/* <-- Ganti ini */}
      <Footer />    {/* <-- Tambah ini */}
    </main>
  );
}