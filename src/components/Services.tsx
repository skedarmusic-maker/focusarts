import { MapPin, Globe, BarChart3, Star } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Google Meu Negócio",
            description: "Transforme seu perfil em uma máquina de atrair clientes. Otimização completa de fotos, categorias e palavras-chave para dominar o Mapa Local.",
            icon: MapPin,
        },
        {
            title: "Web Design & SEO",
            description: "Sites que não são apenas bonitos, mas vendem. Estrutura otimizada para buscadores (SEO Técnico), carregamento ultra-rápido e design persuasivo.",
            icon: Globe,
        },
        {
            title: "Gestão de Reputação",
            description: "Incentive avaliações positivas e responda com estratégia. A prova social é o fator #1 de decisão para novos clientes.",
            icon: Star,
        },
        {
            title: "Consultoria Orgânica",
            description: "Pare de pagar aluguel (Ads) para ter tráfego. Construímos uma estratégia de conteúdo que traz leads qualificados de forma recorrente.",
            icon: BarChart3,
        },
    ];

    return (
        <section className="py-24 bg-[#0a0a0a]" id="servicos">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        Soluções para <span className="text-neon-green">Dominar o Digital</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Combinamos técnica e criatividade para colocar sua empresa na frente dos concorrentes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-[#151515] p-8 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(78,15,166,0.1)]"
                        >
                            <div className="w-14 h-14 bg-brand-dark/30 rounded-xl flex items-center justify-center text-brand-vivid mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-primary group-hover:text-white">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold font-outfit text-white mb-3 group-hover:text-neon-green transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
