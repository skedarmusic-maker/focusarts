"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, XCircle, ArrowRight, Layout, Search, Smartphone, Zap } from "lucide-react";
import Link from "next/link";

export default function StrategicSitesPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-foreground selection:bg-neon-green selection:text-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary/10 blur-[150px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green font-bold text-sm mb-6">
                            <Layout size={16} />
                            Web Design Estratégico 2.0
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-outfit text-white mb-8 leading-tight">
                            Seu Site não serve apenas para <span className="text-brand-vivid">"Bonito"</span>. <br />
                            Ele precisa <span className="text-neon-green">Vender</span>.
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            A maioria das empresas locais ainda trata o site como um panfleto digital.
                            Nós criamos <strong className="text-white">Máquinas de Vendas</strong> que funcionam 24h por dia,
                            capturando clientes que o Instagram e o boca-a-boca não alcançam.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contato"
                                className="px-8 py-4 bg-brand-primary hover:bg-neon-green hover:text-black text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(78,15,166,0.3)] hover:shadow-[0_0_30px_#64F222] text-lg flex items-center justify-center gap-2"
                            >
                                Quero um Site Vendedor <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* The "Dead Website" Myth */}
            <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-6">
                                "Ninguém mais acessa site, hoje é só Instagram..."
                            </h2>
                            <p className="text-gray-400 text-lg mb-6">
                                <span className="text-red-500 font-bold block mb-2">MENTIRA.</span>
                                Sabe quem pensa assim? Seu concorrente que está perdendo dinheiro.
                                Enquanto o Instagram é ótimo para *atenção*, o Google (e seu site) é onde acontece a *intenção*.
                            </p>
                            <p className="text-gray-400 text-lg mb-8">
                                Quando você precisa de um "Encanador Urgente" ou "Advogado Trabalhista", você não vai rolar feed no Instagram.
                                Você vai no Google. E se você não tiver um site profissional esperando lá, você perdeu a venda.
                            </p>

                            <div className="bg-[#151515] p-6 rounded-xl border-l-4 border-red-500">
                                <p className="text-white font-medium">
                                    O Instagram é o "Shopping" (passeio). <br />
                                    Seu Site é o "Balcão de Vendas" (fechamento).
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/10 blur-[80px] rounded-full" />
                            <div className="relative bg-[#101010] p-8 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6">Onde seu cliente procura quando...</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-[#050505] rounded-lg border border-white/5">
                                        <span className="text-gray-400">Quer ver fotos bonitas</span>
                                        <span className="text-brand-vivid font-bold">Instagram</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-[#050505] rounded-lg border border-white/5">
                                        <span className="text-gray-400">Quer entretenimento</span>
                                        <span className="text-brand-vivid font-bold">TikTok</span>
                                    </div>
                                    <div className="flex items-center justify-between p-4 bg-neon-green/10 rounded-lg border border-neon-green/30">
                                        <span className="text-white font-bold">Precisa contratar AGORA</span>
                                        <span className="text-neon-green font-bold flex items-center gap-2">
                                            <Search size={16} /> Google (Seu Site)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid Section */}
            <section className="py-24 bg-[#050505] border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-vivid font-bold text-sm mb-6">
                            <Smartphone size={16} />
                            Cases de Sucesso
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                            Sites Reais. <span className="text-neon-green">Resultados Reais.</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Não vendemos templates. Vendemos estruturas de alta conversão projetadas para o seu nicho.
                            Dê o play e veja o nível de qualidade que entregamos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Case 1 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010] hover:border-neon-green/50 transition-all duration-500 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="relative aspect-video">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                >
                                    <source src="/port/elivanGravando 2026-02-01 211229.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <h3 className="text-xl font-bold text-white mb-1">Serviços & Manutenção</h3>
                                <p className="text-neon-green text-sm font-medium">Site Otimizado para Conversão</p>
                            </div>
                        </div>

                        {/* Case 2 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010] hover:border-neon-green/50 transition-all duration-500 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="relative aspect-video">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                >
                                    <source src="/port/mdGravando 2026-02-01 210830.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <h3 className="text-xl font-bold text-white mb-1">Md Eletrica</h3>
                                <p className="text-neon-green text-sm font-medium">Design Premium & SEO</p>
                            </div>
                        </div>

                        {/* Case 3 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010] hover:border-neon-green/50 transition-all duration-500 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="relative aspect-video">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                >
                                    <source src="/port/pettGravando 2026-02-01 211050.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <h3 className="text-xl font-bold text-white mb-1">Pett Vet</h3>
                                <p className="text-neon-green text-sm font-medium">Agendamento & Localização</p>
                            </div>
                        </div>

                        {/* Case 4 */}
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010] hover:border-neon-green/50 transition-all duration-500 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="relative aspect-video">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                >
                                    <source src="/port/simoneGravando 2026-02-01 211128.webm" type="video/webm" />
                                </video>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                <h3 className="text-xl font-bold text-white mb-1">Simone Podologia</h3>
                                <p className="text-neon-green text-sm font-medium">Experiência do Usuário (UX)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Focus & Arts Sites Work */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Diferenciais de um Site <span className="text-neon-green">Focus</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Não usamos templates prontos e lentos. Desenvolvemos tecnologia proprietária focada em três pilares:
                        Velocidade, SEO e Conversão.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-all group">
                        <div className="w-14 h-14 bg-neon-green/10 rounded-xl flex items-center justify-center text-neon-green mb-6 group-hover:scale-110 transition-transform">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Velocidade Extrema</h3>
                        <p className="text-gray-400">
                            Sites que carregam em menos de 1 segundo. O Google ama, e seu cliente não desiste de esperar.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-all group">
                        <div className="w-14 h-14 bg-brand-vivid/10 rounded-xl flex items-center justify-center text-brand-vivid mb-6 group-hover:scale-110 transition-transform">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">SEO Nativo</h3>
                        <p className="text-gray-400">
                            Estrutura de código feita para ser lida pelos robôs do Google. Já nasce pronto para rankear.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-neon-green/30 transition-all group">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                            <Smartphone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Mobile First Real</h3>
                        <p className="text-gray-400">
                            Não é um site "adaptado" para celular. É pensado para a tela pequena, onde 90% das buscas locais acontecem.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-12 text-center">
                        O Barato sai caro: <span className="text-red-500">Site Sobrinho</span> vs <span className="text-neon-green">Site Focus</span>
                    </h2>

                    <div className="overflow-x-auto">
                        <div className="min-w-[800px] bg-[#101010] rounded-2xl border border-white/10 p-8">
                            <div className="grid grid-cols-3 gap-8 mb-8 border-b border-white/10 pb-8">
                                <div className="text-gray-500 font-bold uppercase tracking-wider">Critério</div>
                                <div className="text-red-500 font-bold text-xl">Wix / Sobrinho</div>
                                <div className="text-neon-green font-bold text-xl">Focus & Arts</div>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div className="text-white font-medium">Propriedade</div>
                                    <div className="text-gray-400 text-sm">Alugado (se parar de pagar, perde tudo)</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-neon-green" /> Seu (Vitalício)
                                        <span className="text-xs text-gray-500 font-normal">*Só paga hospedagem</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div className="text-white font-medium">Velocidade</div>
                                    <div className="text-gray-400 text-sm">Lento, código sujo</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-neon-green" /> Otimizado (Next.js)
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div className="text-white font-medium">Google (SEO)</div>
                                    <div className="text-gray-400 text-sm">Invisível</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-neon-green" /> Estruturado para o Topo
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-8 items-center">
                                    <div className="text-white font-medium">Design</div>
                                    <div className="text-gray-400 text-sm">Genérico (igual de todos)</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-neon-green" /> Exclusivo para sua Marca
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 container mx-auto px-6 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#151515] to-[#0A0A0A] border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-neon-green" />

                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Pare de Perder Clientes para quem tem um Site Pior que o seu.
                    </h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Seu concorrente está na primeira página do Google. Vamos tirar ele de lá?
                        Solicite um orçamento de site estratégico agora.
                    </p>
                    <Link
                        href="/contato"
                        className="inline-block px-10 py-5 bg-brand-primary hover:bg-neon-green hover:text-black text-white font-bold rounded-full transition-all duration-300 shadow-lg text-xl"
                    >
                        Quero Dominar meu Mercado
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
