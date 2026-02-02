"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-foreground selection:bg-neon-green selection:text-black">
            <Navbar />
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
