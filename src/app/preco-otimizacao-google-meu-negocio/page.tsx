import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { DollarSign } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';
import { VideoCarousel } from "@/components/VideoCarousel";

export const metadata: Metadata = {
    title: 'Quanto custa Otimização Google Meu Negócio? | FocusArts',
    description: 'Descubra o valor e os benefícios da otimização profissional do seu Perfil no Google (GMN). Preço único e estratégia completa.',
    alternates: {
        canonical: 'https://focusarts.com.br/preco-otimizacao-google-meu-negocio',
    },
    openGraph: {
        title: 'Quanto custa Otimização Google Meu Negócio? | FocusArts',
        description: 'Descubra o valor e os benefícios da otimização profissional do seu Perfil no Google (GMN). Preço único e estratégia completa.',
        url: 'https://focusarts.com.br/preco-otimizacao-google-meu-negocio',
        siteName: 'FocusArts',
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function PricingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Otimização de Perfil da Empresa no Google (GMN)",
        "description": "Serviço profissional de otimização de ficha do Google Meu Negócio para aumentar a visibilidade local e atrair mais clientes.",
        "image": "https://focusarts.com.br/images/google-meu-negocio-hero.jpg",
        "brand": {
            "@type": "Brand",
            "name": "FocusArts"
        },
        "offers": {
            "@type": "Offer",
            "url": "https://focusarts.com.br/preco-otimizacao-google-meu-negocio",
            "priceCurrency": "BRL",
            "price": "250.00",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "FocusArts"
            }
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "127"
        }
    };

    return (
        <main className="bg-[#050505] min-h-screen text-foreground selection:bg-neon-green selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-[150px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-6">
                            <DollarSign size={16} />
                            Investimento & Valor
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-8 leading-tight">
                            Quanto custa a Otimização do Perfil da Empresa no Google (Antigo GMN)?
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            A resposta direta: Por um valor único de <span className="text-white font-bold">R$ 250</span>, transformamos sua ficha no Google na vitrine principal do seu negócio. Mas cuidado: preço não é tudo, estratégia é.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://wa.me/5511965843545?text=Olá!%20Gostaria%20de%20otimizar%20meu%20Perfil%20no%20Google%20pelo%20valor%20de%20R$%20250."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-brand-primary hover:bg-neon-green hover:text-black text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(78,15,166,0.3)] hover:shadow-[0_0_30px_#64F222] text-lg flex items-center justify-center gap-2"
                            >
                                Quero otimizar meu perfil agora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 2: O Conceito da Vitrine */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-8 text-center">
                            Por que atualizar seu Perfil no Google é inegociável?
                        </h2>

                        <div className="bg-[#101010] p-8 md:p-12 rounded-3xl border border-white/10 mb-12">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center font-light">
                                "Imagine que o Google é a avenida mais movimentada da sua cidade. O seu Perfil da Empresa é a fachada da sua loja.
                                <br /><br />
                                <span className="text-white font-medium">Se a fachada está suja, com informações erradas ou 'apagada', o cliente passa direto e entra no concorrente.</span>"
                            </p>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                                O que entregamos na Otimização (R$ 250,00):
                            </h3>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[#151515] p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors">
                                    <div className="text-brand-primary mb-4">
                                        <DollarSign className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Organização Visual</h4>
                                    <p className="text-gray-400 text-sm">
                                        Uma "fachada" bonita e profissional que passa credibilidade imediata.
                                    </p>
                                </div>

                                <div className="bg-[#151515] p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors">
                                    <div className="text-brand-primary mb-4">
                                        <DollarSign className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Clareza de Informação</h4>
                                    <p className="text-gray-400 text-sm">
                                        Horários, contatos e serviços descritos para que o Google entenda exatamente o que você vende.
                                    </p>
                                </div>

                                <div className="bg-[#151515] p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors">
                                    <div className="text-brand-primary mb-4">
                                        <DollarSign className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Geolocalização</h4>
                                    <p className="text-gray-400 text-sm">
                                        Ajustes técnicos para você aparecer para quem está perto de você.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 3: A Virada de Chave (O Problema) */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-neon-green/5 blur-[120px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 font-bold text-sm mb-6">
                            A Verdade sobre o Google
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-8">
                            O Segredo que as Agências não contam: <br />
                            <span className="text-gray-400">O Perfil sozinho tem um teto.</span>
                        </h2>

                        <div className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light space-y-6">
                            <p>
                                Um perfil otimizado é ótimo, mas ele funciona muito melhor quando tem um <span className="text-neon-green font-medium">"motor"</span> empurrando ele. Esse motor é um <strong className="text-white">Site de Alta Performance</strong>.
                            </p>
                            <p>
                                O Google prioriza empresas que conectam um perfil forte com um site rápido e seguro. Um potencializa o outro. <span className="text-white font-medium">É a diferença entre ter uma lojinha e ter uma franquia dominante.</span>
                            </p>
                        </div>

                        {/* Google Authority Box */}
                        <div className="mt-12 bg-[#101010] border border-white/10 rounded-2xl p-8 text-left relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-white pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-blue-400">Google Confirma:</span> O Site é Combustível para o Perfil
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 italic border-l-2 border-blue-500 pl-4 py-1 leading-relaxed">
                                "O destaque também se baseia em informações que o Google tem sobre uma empresa em toda a Web... <strong className="text-white">Sua posição nos resultados da Web também é levada em conta.</strong> Portanto, seguir as práticas recomendadas de SEO (otimização de mecanismos de pesquisa) é fundamental."
                            </p>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-mono text-gray-500">
                                <a
                                    href="https://support.google.com/business/answer/7091?hl=pt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline flex items-center gap-1 transition-colors hover:text-blue-300"
                                >
                                    Fonte Oficial: Google Business Profile Help (Artigo 7091)
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-center">
                            <Link
                                href="https://wa.me/5511965843545?text=Olá!%20Li%20sobre%20o%20Conceito%20da%20Vitrine%20e%20gostaria%20de%20otimizar%20meu%20Perfil%20no%20Google."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-neon-green text-black font-black rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_30px_#64F222] text-xl flex items-center gap-3"
                            >
                                Falar com um Especialista agora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 4: A Oferta Irresistível (Upsell) */}
            <section className="py-24 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#101010] to-[#050505]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto bg-[#151515] border border-neon-green/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(100,242,34,0.1)]">
                        <div className="p-2 bg-neon-green text-black text-center font-bold text-sm tracking-widest uppercase">
                            Oferta Exclusiva por Tempo Limitado
                        </div>

                        <div className="p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-6 leading-tight">
                                    🔥 O Desafio 30 Dias: <br />
                                    <span className="text-neon-green">Otimização + Site Turbo</span>
                                </h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Não quer apenas "aparecer", mas quer dominar o topo do Google na sua região? <strong className="text-white">Eu te faço uma proposta ousada.</strong>
                                    <br /><br />
                                    Por apenas R$ 100 a mais do que o valor da otimização padrão (Total: <span className="text-white font-bold">R$ 350</span>), eu entrego o pacote completo para colocar seu negócio no topo em 30 dias.
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-2">O que você recebe por R$ 350 (Setup Inicial):</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 items-start text-gray-300 text-sm">
                                            <div className="min-w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green mt-0.5">✓</div>
                                            <span><strong className="text-white">Otimização Completa do Perfil do Google</strong> (O serviço de R$ 250 incluso).</span>
                                        </li>
                                        <li className="flex gap-3 items-start text-gray-300 text-sm">
                                            <div className="min-w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green mt-0.5">✓</div>
                                            <span><strong className="text-white">Criação de Site Novo e Moderno:</strong> Desenvolvido com tecnologia de ponta, ultrarrápido para celulares.</span>
                                        </li>
                                        <li className="flex gap-3 items-start text-gray-300 text-sm">
                                            <div className="min-w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green mt-0.5">✓</div>
                                            <span><strong className="text-white">Meta de ROI:</strong> Estratégia desenhada para garantir de 2 a 5 novos clientes já no primeiro mês (pagando o investimento logo de cara).</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link
                                    href="https://wa.me/5511965843545?text=Olá!%20Aceito%20o%20Desafio%2030%20Dias%20(Otimização%20%2B%20Site)%20por%20R$%20350."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-neon-green hover:bg-[#52c41a] text-black font-black rounded-xl transition-all duration-300 shadow-[0_0_20px_#64F222] hover:shadow-[0_0_30px_#64F222] text-lg flex items-center justify-center gap-2 uppercase tracking-wide transform hover:scale-[1.02]"
                                >
                                    Aceitar o Desafio 30 Dias
                                </Link>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    *Vagas limitadas para garantir a qualidade da entrega.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-neon-green/20 blur-[80px] rounded-full -z-10" />
                                <div className="relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <VideoCarousel />

                                    <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-4 rounded-xl shadow-xl border border-white/10 transform -rotate-6 z-30">
                                        <span className="block text-xs uppercase tracking-wider opacity-80">Valor Total</span>
                                        <span className="block text-3xl font-black">R$ 350</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 5: Continuidade (Recorrência) */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold font-outfit text-white mb-6">
                            E depois dos 30 dias? Nós aceleramos ainda mais.
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Após validarmos o trabalho e você sentir o impacto real no seu faturamento (telefone tocando, orçamentos chegando), seguimos com nossa parceria de sucesso.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-[#101010] border border-white/10 rounded-2xl p-8 hover:border-brand-primary/30 transition-colors">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-8 mb-8">
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Plano de Aceleração Contínua</h4>
                                <p className="text-sm text-gray-400">Manutenção, Segurança e Crescimento</p>
                            </div>
                            <div className="text-right">
                                <span className="block text-2xl font-bold text-white">R$ 250<span className="text-sm text-gray-400 font-normal">/mês</span></span>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    🚀
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Site no Ar e Rápido</h5>
                                    <p className="text-xs text-gray-400 mt-1">Hospedagem e manutenção técnica inclusas.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    ⭐
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Gestão de Reputação</h5>
                                    <p className="text-xs text-gray-400 mt-1">Monitoramento e resposta de avaliações no Google.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    📢
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Conteúdo Fresco</h5>
                                    <p className="text-xs text-gray-400 mt-1">1 Postagem semanal para manter seu perfil ativo.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                                    📈
                                </div>
                                <div>
                                    <h5 className="font-bold text-white text-sm">Garantia de Performance</h5>
                                    <p className="text-xs text-gray-400 mt-1">Monitoramento constante para manter seu ranqueamento.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 6: Matadora de Objeções (Garantia) */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[120px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white font-bold text-sm mb-6">
                            🛡️ Garantia de Liberdade
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-8">
                            Sem Multas. Sem Pegadinhas. <br />
                            <span className="text-brand-primary">Liberdade Total.</span>
                        </h2>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                            O mercado de agências adora contratos de fidelidade de 12 meses. <strong className="text-white">Eu não.</strong>
                            <br />
                            Eu confio tanto no meu resultado que deixo você livre.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#101010] p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                                🔓
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Sem fidelidade</h3>
                            <p className="text-gray-400">
                                Cancele quando quiser. Não prendemos ninguém com papelada.
                            </p>
                        </div>

                        <div className="bg-[#101010] p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                                🚫
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Sem multa</h3>
                            <p className="text-gray-400">
                                Parou de pagar, parou o serviço. Simples assim. Sem letras miúdas.
                            </p>
                        </div>

                        <div className="bg-[#101010] p-8 rounded-3xl border border-white/10 hover:border-brand-primary/50 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                                🤝
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">O site é seu</h3>
                            <p className="text-gray-400">
                                Se decidir encerrar a parceria mensal, você pode levar o projeto do site com você. O ativo é seu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 7: Tabela Comparativa (Ancoragem) */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-8">
                            Comparativo de Mercado: <br />
                            <span className="text-gray-400">Preço Médio de Otimização</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                        <div className="grid grid-cols-3 bg-[#151515] p-6 border-b border-white/10 text-sm md:text-lg font-bold">
                            <div className="text-gray-400 flex items-center">Serviço</div>
                            <div className="text-gray-400 text-center">Agência Tradicional</div>
                            <div className="text-neon-green text-center bg-neon-green/10 py-2 rounded-lg border border-neon-green/20">
                                Minha Proposta <br />
                                <span className="text-xs font-normal text-gray-300">(Desafio 30 Dias)</span>
                            </div>
                        </div>

                        <div className="bg-[#101010] divide-y divide-white/5">
                            {/* Row 1 */}
                            <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                                <div className="text-white font-medium text-sm md:text-base">Otimização de Perfil (GMN)</div>
                                <div className="text-red-400 text-center text-sm md:text-base">R$ 400 - R$ 800</div>
                                <div className="text-neon-green text-center font-bold text-sm md:text-lg">Incluso</div>
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                                <div className="text-white font-medium text-sm md:text-base">Criação de Site Otimizado</div>
                                <div className="text-red-400 text-center text-sm md:text-base">R$ 1.500 - R$ 3.000</div>
                                <div className="text-neon-green text-center font-bold text-sm md:text-lg">Incluso</div>
                            </div>

                            {/* Row 3 */}
                            <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                                <div className="text-white font-medium text-sm md:text-base">Manutenção Mensal</div>
                                <div className="text-red-400 text-center text-sm md:text-base">R$ 500+</div>
                                <div className="text-neon-green text-center font-bold text-sm md:text-lg">R$ 250</div>
                            </div>

                            {/* Row 4 */}
                            <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors items-center">
                                <div className="text-white font-medium text-sm md:text-base">Multa de Cancelamento</div>
                                <div className="text-red-400 text-center text-sm md:text-base">Sim</div>
                                <div className="text-neon-green text-center font-bold text-sm md:text-lg">NÃO</div>
                            </div>

                            {/* Row 5 - Footer/Total */}
                            <div className="grid grid-cols-3 p-6 bg-[#151515] items-center border-t border-white/10">
                                <div className="text-white font-bold text-sm md:text-lg">Investimento Inicial</div>
                                <div className="text-red-400 text-center font-bold text-sm md:text-lg line-through opacity-70">R$ 2.000+</div>
                                <div className="text-black bg-neon-green py-2 rounded-lg text-center font-black text-lg md:text-2xl shadow-[0_0_20px_#64F222]">
                                    R$ 350
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Block 8: FAQ (Perguntas Frequentes) */}
            <section className="py-24 bg-[#050505] border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                            Perguntas Frequentes
                        </h2>
                        <p className="text-gray-400">
                            Tire suas dúvidas sobre o investimento e o retorno.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-[#101010] border border-white/10 rounded-2xl p-8 hover:border-brand-primary/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                                <span className="text-neon-green">?</span>
                                Qual o preço médio para otimizar o Google Meu Negócio?
                            </h3>
                            <p className="text-gray-300 leading-relaxed pl-7">
                                O mercado cobrar entre <strong className="text-white">R$ 400 e R$ 800</strong> apenas pela otimização da ficha.
                                Aqui na FocusArts, cobramos <strong className="text-neon-green">R$ 250</strong> pela otimização avulsa ou <strong className="text-neon-green">R$ 350</strong> no pacote completo com Site (Desafio 30 Dias).
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-[#101010] border border-white/10 rounded-2xl p-8 hover:border-brand-primary/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                                <span className="text-neon-green">?</span>
                                Vale a pena pagar mensalidade para site local?
                            </h3>
                            <p className="text-gray-300 leading-relaxed pl-7">
                                <strong className="text-white">Sim.</strong> O Google muda algoritmos constantemente. A mensalidade garante que seu site e perfil estejam sempre atualizados tecnicamente e à frente da concorrência, além de blindar seu negócio com nossa gestão de reputação.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-[#101010] border border-white/10 rounded-2xl p-8 hover:border-brand-primary/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                                <span className="text-neon-green">?</span>
                                Em quanto tempo vejo resultados?
                            </h3>
                            <p className="text-gray-300 leading-relaxed pl-7">
                                Com o <strong>Desafio 30 Dias</strong>, focamos em gerar de <strong className="text-white">2 a 5 novos clientes já no primeiro mês</strong> para validar o retorno do seu investimento.
                                A partir daí, com a otimização contínua, buscamos um crescimento constante de cerca de 30% em novos clientes mês a mês. O resultado é cumulativo: quanto mais tempo, mais forte sua marca fica.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
