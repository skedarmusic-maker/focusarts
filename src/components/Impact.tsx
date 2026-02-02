import { AlertTriangle, Ban, TrendingDown, TrendingUp, Search, XCircle, CheckCircle2 } from "lucide-react";

export function Impact() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm mb-6 uppercase tracking-wider">
                        <AlertTriangle size={16} />
                        Alerta de Mercado 2026
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">
                        O Custo da <span className="text-red-500">Invisibilidade</span>
                    </h2>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Dados recentes mostram que ignorar o Google não é apenas "deixar de ganhar".
                        <br className="hidden md:block" />
                        É perder o que já poderia ser seu. Veja o que acontece quando sua empresa não aparece:
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {/* Card 1 */}
                    <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                            <TrendingDown size={32} />
                        </div>
                        <h3 className="text-gray-400 font-medium mb-2">Prejuízo Anual Médio</h3>
                        <div className="text-4xl font-bold text-white mb-4">R$ 120.000</div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Pequenas empresas com perfis não otimizados perdem cerca de 295 oportunidades de venda por ano. É dinheiro indo direto para o concorrente.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                            <Ban size={32} />
                        </div>
                        <h3 className="text-gray-400 font-medium mb-2">Rejeição Automática</h3>
                        <div className="text-4xl font-bold text-white mb-4">87%</div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Dos consumidores nem consideram empresas com nota média inferior a 3 estrelas. Sua reputação online é o filtro número 1.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                        <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                            <Search size={32} />
                        </div>
                        <h3 className="text-gray-400 font-medium mb-2">Hábito Brasileiro</h3>
                        <div className="text-4xl font-bold text-white mb-4">96%</div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Pesquisam no Google antes de ligar ou visitar. Se você não aparece no topo na hora da busca, para o cliente, você não existe.
                        </p>
                    </div>
                </div>

                {/* Comparison Section */}
                <div className="bg-[#0A0A0A] rounded-3xl border border-white/10 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* The Problem (Left) */}
                        <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <XCircle size={100} className="text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-red-500" />
                                Perfil Negligenciado
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <TrendingDown className="text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg">Conversão de 2,1%</strong>
                                        <span className="text-gray-500 text-sm">A cada 100 visitas, apenas 2 viram clientes.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg">Invisibilidade Local</strong>
                                        <span className="text-gray-500 text-sm">32% das empresas têm horários errados, "expulsando" clientes na porta.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Ban className="text-red-500 shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg">Alta Desconfiança</strong>
                                        <span className="text-gray-500 text-sm">Sem avaliações respondidas, o cliente assume que o serviço é ruim.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* The Solution (Right) */}
                        <div className="p-10 md:p-14 bg-gradient-to-br from-[#0A0A0A] to-[#0d1a0d] relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <CheckCircle2 size={100} className="text-neon-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-neon-green" />
                                Perfil Otimizado Focus
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <TrendingUp className="text-neon-green shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg">Conversão de 6,2%</strong>
                                        <span className="text-gray-500 text-sm">Triplique seus pedidos com o mesmo número de visualizações.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-neon-green shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg">Confiança 2,7x Maior</strong>
                                        <span className="text-gray-500 text-sm">Empresas completas passam credibilidade imediata.</span>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Search className="text-neon-green shrink-0 mt-1" />
                                    <div>
                                        <strong className="text-white block text-lg">Intenção de Compra</strong>
                                        <span className="text-gray-500 text-sm">Capture o cliente no exato momento em que ele digita "perto de mim".</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
