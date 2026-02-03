"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Sobre", href: "/sobre" },
        { name: "Serviços", href: "/servicos" },
        { name: "Contato", href: "/contato" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#050505]/80 backdrop-blur-md border-b border-brand-primary/20 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-outfit tracking-tighter group">
                    <span className="text-white group-hover:text-neon-green transition-colors duration-300">Focus</span>
                    <span className="text-brand-vivid">&</span>
                    <span className="text-white group-hover:text-neon-green transition-colors duration-300">Arts</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium tracking-wide uppercase transition-colors relative group",
                                pathname === link.href
                                    ? "text-neon-green"
                                    : "text-white/80 hover:text-neon-green"
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-px bg-neon-green shadow-[0_0_8px_#64F222]" />
                            )}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/5511965843545?text=Olá!%20Vi%20o%20site%20da%20Focus%20%26%20Arts%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20posicionamento%20da%20minha%20empresa%20no%20Google."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-brand-primary hover:bg-neon-green hover:text-black text-white rounded-full font-bold transition-all duration-300 neon-border shadow-[0_0_15px_rgba(78,15,166,0.5)] hover:shadow-[0_0_20px_#64F222]"
                        aria-label="Fale conosco no WhatsApp"
                    >
                        Fale Conosco
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-neon-green transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Abrir menu de navegação"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 md:hidden flex flex-col items-center gap-6 py-8 transition-all duration-300 origin-top",
                    isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0 overflow-hidden"
                )}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "text-xl font-bold hover:text-neon-green transition-colors",
                            pathname === link.href ? "text-neon-green" : "text-white"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="https://wa.me/5511965843545?text=Olá!%20Vi%20o%20site%20da%20Focus%20%26%20Arts%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20posicionamento%20da%20minha%20empresa%20no%20Google."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="px-8 py-3 bg-brand-primary hover:bg-neon-green hover:text-black text-white rounded-full font-bold shadow-[0_0_15px_rgba(78,15,166,0.5)]"
                    aria-label="Fale conosco no WhatsApp"
                >
                    Fale Conosco
                </Link>
            </div>
        </nav>
    );
}
