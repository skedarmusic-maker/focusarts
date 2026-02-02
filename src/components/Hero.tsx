import Link from "next/link";
import { ArrowRight, TrendingUp, Search, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-vivid/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 text-neon-green text-sm font-bold mb-8 animate-fade-in-up">
                        <TrendingUp size={16} />
                        <span>Domine o Rankeamento do Google</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-tight mb-6">
                        Não dependa da <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-brand-vivid">
                            Sorte.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Empresas invisíveis no Google perdem clientes todos os dias.
                        <strong className="text-white"> 60% das pessoas ignoram anúncios.</strong>
                        Construa uma autoridade sólida com tráfego orgânico e um site de alta performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="https://wa.me/5511965843545?text=Olá!%20Vi%20o%20site%20da%20Focus%20%26%20Arts%20e%20gostaria%20de%20uma%20análise%20gratuita%20do%20posicionamento%20da%20minha%20empresa%20no%20Google."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-neon-green text-[#050505] font-extrabold text-lg rounded-full hover:shadow-[0_0_30px_#64F222] transition-all flex items-center justify-center gap-2 group"
                        >
                            Consultoria Gratuita
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/servicos"
                            className="px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/5 hover:border-brand-vivid transition-all flex items-center justify-center"
                        >
                            Como Funciona
                        </Link>
                    </div>
                </div>

                {/* Visual Composition */}
                <div className="relative hidden lg:block h-[500px]">
                    {/* Card 1: GMB Profile */}
                    <div className="absolute top-10 left-10 w-72 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl skew-y-3 z-10 hover:skew-y-0 transition-all duration-500 hover:border-brand-primary">
                        <div className="flex gap-3 mb-3">
                            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">FA</div>
                            <div>
                                <div className="h-3 w-32 bg-white/20 rounded mb-1" />
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full" />)}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 mb-4">
                            <div className="flex-1 h-8 bg-brand-vivid rounded-md flex items-center justify-center text-xs text-white font-bold">Ligar</div>
                            <div className="flex-1 h-8 bg-white/10 rounded-md flex items-center justify-center text-xs text-white font-bold">Rota</div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-full bg-white/5 rounded" />
                            <div className="h-2 w-4/5 bg-white/5 rounded" />
                        </div>
                    </div>

                    {/* Card 2: Organic Search Result */}
                    <div className="absolute top-40 right-10 w-80 bg-[#1a1a1a]/90 backdrop-blur-xl border border-neon-green/50 rounded-2xl p-5 shadow-[0_0_40px_rgba(100,242,34,0.1)] -rotate-3 z-20 hover:rotate-0 transition-all duration-500">
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <Search size={14} />
                            <span>google.com.br/search</span>
                        </div>
                        <div className="text-neon-green text-sm font-bold mb-1">Focus & Arts - Marketing Digital</div>
                        <div className="text-xs text-white/60 mb-3">Agência especialista em SEO Local e Desenvolvimento Web...</div>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full">1º Lugar</div>
                            <div className="px-3 py-1 bg-brand-vivid/20 text-brand-vivid text-xs rounded-full">Orgânico</div>
                        </div>
                    </div>

                    {/* Card 3: Map Marker */}
                    <div className="absolute bottom-20 left-32">
                        <div className="relative">
                            <MapPin size={64} className="text-brand-vivid drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-bounce" />
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-brand-vivid/50 blur-sm rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
