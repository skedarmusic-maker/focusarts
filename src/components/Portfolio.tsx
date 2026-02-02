import { TrendingUp } from "lucide-react";

export function Portfolio() {
    return (
        <section className="py-20 bg-[#080808] border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-4">
                        Resultados Reais: <span className="text-neon-green">Crescimento Constante</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Um perfil 100% atualizado e otimizado não apenas aparece, ele <strong className="text-white">convence</strong>.
                        Veja o impacto de um trabalho consistente de SEO Local.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-neon-green/10 blur-[100px] rounded-full -z-10" />
                    <div className="bg-[#101010] p-4 rounded-2xl border border-white/10 shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full rounded-lg border border-white/5"
                        >
                            <source src="/images/portfolio-simone.webm" type="video/webm" />
                            Seu navegador não suporta vídeos.
                        </video>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6 items-center">
                        <div className="bg-[#151515] p-6 rounded-xl border border-white/5 hover:border-neon-green/30 transition-colors">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_#64F222]" />
                                <span className="text-white font-bold">Status: Em Crescimento</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Início do projeto: <strong className="text-white">Setembro de 2025</strong>.
                                Desde a otimização, o perfil registra recordes de acessos e novos clientes mês a mês.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                            <div className="flex items-center gap-2 text-neon-green">
                                <TrendingUp size={24} />
                                <span className="font-bold text-lg">Alta Performance</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Investimento em atualização de fotos, respostas rápidas nos comentários e gestão de avaliações criam imã para novos clientes no Google Maps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
