"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services as ServicesSection } from "@/components/Services";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-foreground selection:bg-neon-green selection:text-black">
            <Navbar />
            <div className="pt-20">
                <ServicesSection />



                <section className="py-20 container mx-auto px-6">
                    {/* Serviço 1: Google Perfil */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="order-2 lg:order-1">
                            <div className="inline-block px-4 py-2 bg-brand-primary/10 border border-brand-primary/30 rounded-full text-brand-vivid font-bold text-sm mb-6">
                                Otimização de Perfil (GMB)
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">
                                Seja o <span className="text-neon-green">Primeiro Lugar</span> no Google Maps
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Você sabia que a maioria das buscas locais termina no Google Maps? Se sua empresa não está no topo, seu concorrente está levando seus clientes.
                                Nosso serviço de otimização transforma seu perfil em um ativo de vendas.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Apareça para quem já está procurando seu serviço",
                                    "Aumente chamadas telefônicas e rotas no GPS",
                                    "Destaque-se com fotos profissionais e posts estratégicos",
                                    "Gestão de avaliações para construir autoridade"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start text-gray-300">
                                        <CheckCircle2 className="text-neon-green shrink-0 bg-neon-green/10 rounded-full p-1 w-6 h-6" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Link
                                    href="/preco-otimizacao-google-meu-negocio"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary/20 hover:bg-brand-primary text-white border border-brand-primary/50 rounded-full font-bold transition-all duration-300"
                                >
                                    Ver Valores de Otimização
                                </Link>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-brand-vivid/20 blur-[100px] rounded-full" />
                        <div className="relative bg-[#101010] border border-white/10 rounded-2xl p-8 hover:border-neon-green/50 transition-colors duration-500">
                            {/* Abstract UI Representation */}
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 bg-brand-primary rounded-lg" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-4 bg-white/20 rounded w-3/4" />
                                        <div className="h-3 bg-white/10 rounded w-1/2" />
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(n => <div key={n} className="w-4 h-4 bg-yellow-400 rounded-full" />)}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-px bg-white/10" />
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 h-20 rounded-lg flex flex-col items-center justify-center p-2">
                                        <span className="text-2xl font-bold text-white">+145%</span>
                                        <span className="text-xs text-gray-400">Rotas</span>
                                    </div>
                                    <div className="bg-white/5 h-20 rounded-lg flex flex-col items-center justify-center p-2">
                                        <span className="text-2xl font-bold text-white">+89%</span>
                                        <span className="text-xs text-gray-400">Ligações</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Serviço 2: Sites & SEO */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-neon-green/10 blur-[100px] rounded-full" />
                            <div className="relative bg-[#101010] border border-white/10 rounded-2xl p-4 hover:border-brand-vivid/50 transition-colors duration-500 shadow-2xl">
                                {/* Browser Mockup Header */}
                                <div className="flex justify-between items-center bg-[#151515] p-3 rounded-t-lg border-b border-white/5 mb-[-1px]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="px-4 py-1 bg-[#050505] rounded-full border border-white/5 text-xs text-gray-500 font-mono w-1/2 text-center">
                                        focusarts.com.br/cases-de-sucesso
                                    </div>
                                    <div className="w-12" />
                                </div>

                                {/* Video Grid Container */}
                                <div className="bg-[#050505] relative rounded-b-lg overflow-hidden grid grid-cols-2 gap-2 p-2 h-[400px]">
                                    {/* Center "SEO" Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                        <div className="bg-brand-dark/80 backdrop-blur-sm px-6 py-2 rounded-xl border border-neon-green/30">
                                            <span className="text-2xl font-black text-neon-green tracking-widest">S.E.O.</span>
                                        </div>
                                    </div>

                                    {/* Video 1 */}
                                    <div className="relative rounded-lg overflow-hidden border border-white/5 group">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                            <source src="/port/elivanGravando 2026-02-01 211229.webm" type="video/webm" />
                                        </video>
                                    </div>
                                    {/* Video 2 */}
                                    <div className="relative rounded-lg overflow-hidden border border-white/5 group">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                            <source src="/port/mdGravando 2026-02-01 210830.webm" type="video/webm" />
                                        </video>
                                    </div>
                                    {/* Video 3 */}
                                    <div className="relative rounded-lg overflow-hidden border border-white/5 group">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                            <source src="/port/pettGravando 2026-02-01 211050.webm" type="video/webm" />
                                        </video>
                                    </div>
                                    {/* Video 4 */}
                                    <div className="relative rounded-lg overflow-hidden border border-white/5 group">
                                        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                            <source src="/port/simoneGravando 2026-02-01 211128.webm" type="video/webm" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green font-bold text-sm mb-6">
                                Criação de Sites Estratégicos
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">
                                Não basta ter um site. <br />Ele precisa <span className="text-brand-vivid">Vender</span> por você.
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                A maioria dos sites hoje são apenas "cartões de visita" digitais que ninguém vê. Nós fazemos diferente.
                                Criamos sites que o <strong className="text-white">Google entende e recomenda</strong>.
                                Quando seu cliente pesquisar pelo seu serviço, seu site será a resposta que ele vai encontrar, te colocando na frente da concorrência sem depender de anúncios.
                            </p>

                            <div className="bg-[#151515] p-6 rounded-xl border-l-4 border-neon-green mb-8">
                                <p className="text-white italic">
                                    "Um site bem posicionado trabalha 24h por dia. Ele atrai o cliente no momento exato em que ele precisa comprar."
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Estrutura feita para o Google colocar você no topo",
                                    "Textos persuasivos que convencem o visitante a chamar no WhatsApp",
                                    "Aumenta a força do seu Perfil no Mapa (um ajuda o outro)",
                                    "Seu terreno próprio na internet: não dependa só das redes sociais"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start text-gray-300">
                                        <CheckCircle2 className="text-brand-vivid shrink-0 bg-brand-vivid/10 rounded-full p-1 w-6 h-6" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
