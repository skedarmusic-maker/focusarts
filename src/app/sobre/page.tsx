"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
    return (
        <main className="bg-[#050505] min-h-screen text-foreground selection:bg-neon-green selection:text-black">
            <Navbar />
            <div className="pt-32 pb-16 container mx-auto px-6">
                <h1 className="text-5xl font-bold font-outfit mb-8 text-center">Sobre a <span className="text-brand-vivid">Focus & Arts</span></h1>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-gray-300">
                        <p>
                            Não somos apenas uma agência digital. Somos estrategistas obcecados por fazer o "pequeno" se tornar <strong>gigante</strong> no Google.
                        </p>
                        <p>
                            Nascemos da indignação de ver excelentes negócios locais perderem espaço para redes medíocres apenas porque não sabiam jogar o jogo da internet.
                        </p>
                        <div className="bg-[#151515] p-6 rounded-xl border border-white/5">
                            <h3 className="text-xl text-white font-bold mb-4">Nossa Missão</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3"><CheckCircle2 className="text-neon-green" /> Democratizar o SEO para negócios locais.</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-neon-green" /> Eliminar a dependência de anúncios pagos.</li>
                                <li className="flex gap-3"><CheckCircle2 className="text-neon-green" /> Construir ativos digitais que valorizam com o tempo.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-[400px] bg-brand-dark/20 rounded-2xl border border-brand-primary/30 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent transition-opacity group-hover:opacity-50" />
                        <Image
                            src="/logo.png"
                            alt="Focus & Arts Logo"
                            fill
                            className="object-contain p-12 drop-shadow-[0_0_15px_rgba(78,15,166,0.5)]"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
