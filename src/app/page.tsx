"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Impact } from "@/components/Impact";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-foreground overflow-x-hidden selection:bg-neon-green selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Impact />
      <Contact />
      <Footer />
    </main>
  );
}
