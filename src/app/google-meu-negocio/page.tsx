import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { TrendingDown, TrendingUp, AlertTriangle, ShieldCheck, MapPin, Search, Star, DollarSign, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Otimização Google Meu Negócio | Focus & Arts',
    description: 'Apareça no topo do Google Empresas. Otimização profissional de Perfil da Empresa no Google para aumentar vendas, ligações e visitas.',
    keywords: ['google meu negócio', 'google empresas', 'minha empresa no google', 'google meu negocio', 'meu negócio no google', 'gestão de tráfego local', 'seo local'],
    alternates: {
        canonical: 'https://focusarts.com.br/google-meu-negocio',
    },
    openGraph: {
        title: 'Otimização Google Meu Negócio | Focus & Arts',
        description: 'Potencialize sua empresa no Google Maps e na Rede de Pesquisa. Aumente sua visibilidade e atraia mais clientes qualificados.',
        url: 'https://focusarts.com.br/google-meu-negocio',
        siteName: 'Focus & Arts',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: 'https://focusarts.com.br/logo.png', // Fallback to logo or specific OG image if available
                width: 1200,
                height: 630,
                alt: 'Otimização de Perfil de Empresa no Google',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Otimização Google Meu Negócio | Focus & Arts',
        description: 'Domine o Google Maps e seja a primeira escolha dos seus clientes.',
        images: ['https://focusarts.com.br/logo.png'],
    },
};

export default function GoogleMyBusinessPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://focusarts.com.br"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Google Meu Negócio",
                        "item": "https://focusarts.com.br/google-meu-negocio"
                    }
                ]
            },
            {
                "@type": "Service",
                "name": "Otimização de Perfil Google Meu Negócio",
                "provider": {
                    "@type": "Organization",
                    "name": "Focus & Arts",
                    "url": "https://focusarts.com.br"
                },
                "serviceType": "SEO Local e Gestão de Google Empresas",
                "description": "Serviço completo de otimização, recuperação e gestão de perfis no Google Business Profile para empresas locais.",
                "areaServed": {
                    "@type": "Country",
                    "name": "Brasil"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Serviços de Otimização",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Atualização de Dados e Horários"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Gestão de Avaliações e Respostas"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Publicação de Fotos e Produtos"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Por que minha empresa não aparece no Google Maps?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Isso geralmente ocorre por falta de verificação do perfil, informações incompletas, suspensão pelo Google ou baixa relevância local. Nossa otimização resolve esses pontos técnicos."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quanto tempo demora para ver resultados no Google Meu Negócio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Algumas correções têm efeito imediato (como horário de funcionamento), mas o ranqueamento no topo geralmente leva de 30 a 90 dias de trabalho consistente de otimização e publicações."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "A Focus & Arts ajuda a recuperar conta suspensa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, fazemos a análise da causa da suspensão e conduzimos todo o processo de pedido de restabelecimento junto ao suporte do Google."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="bg-[#050505] min-h-screen text-foreground selection:bg-neon-green selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Hero Section SEO Heavy */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 blur-[150px] -z-10" />
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mb-6">
                            <MapPin size={16} />
                            Google Meu Negócio & Google Empresas
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-outfit text-white mb-8 leading-tight">
                            Não deixe seu cliente dizer: <br />
                            <span className="text-brand-vivid">"Não achei sua empresa no Google Maps."</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            96% dos brasileiros pesquisam no <strong>Google Meu Negócio</strong> antes de comprar.
                            Se sua empresa não aparece ou está com dados errados, você está entregando dinheiro para o concorrente.
                            Domine o topo das buscas locais.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contato"
                                className="px-8 py-4 bg-brand-primary hover:bg-neon-green hover:text-black text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(78,15,166,0.3)] hover:shadow-[0_0_30px_#64F222] text-lg flex items-center justify-center gap-2"
                            >
                                Quero Otimizar Meu Perfil
                            </Link>
                            <Link
                                href="/preco-otimizacao-google-meu-negocio"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 text-lg flex items-center justify-center gap-2"
                            >
                                Ver Preços da Otimização
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Data Section - The Cost of Invisibility */}
            <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-6">
                            O Custo REAL da Invisibilidade
                        </h2>
                        <p className="text-gray-300 text-lg">
                            Dados de janeiro de 2026 da Weblish mostram que o prejuízo de ignorar o <span className="text-white font-bold">Google Empresas</span> é muito maior do que você imagina.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                                <DollarSign size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">R$ 120.000/ano</h3>
                            <p className="text-gray-300 text-sm">
                                Prejuízo médio de receita anual para pequenas empresas com perfis não otimizados no Google.
                            </p>
                        </div>
                        <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                                <TrendingDown size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">87% de Rejeição</h3>
                            <p className="text-gray-300 text-sm">
                                Dos consumidores nem sequer consideram empresas com nota média inferior a 3 estrelas.
                            </p>
                        </div>
                        <div className="bg-[#101010] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group">
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 mb-6">
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">32% com Erros</h3>
                            <p className="text-gray-300 text-sm">
                                Das empresas têm horários errados, gerando frustração imediata e perda de visita física.
                            </p>
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="max-w-4xl mx-auto bg-[#151515] rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="p-8 bg-black/40 border-b border-white/10 text-center">
                            <h3 className="text-2xl font-bold text-white">Perfil Otimizado vs. Perfil Negligenciado</h3>
                        </div>
                        <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 font-bold text-sm text-gray-300">
                            <div className="p-4 border-r border-white/10">Métrica</div>
                            <div className="p-4 border-r border-white/10 text-red-500 bg-red-900/10">Perfil Ruim</div>
                            <div className="p-4 text-neon-green bg-neon-green/10">Perfil Focus (Bom)</div>
                        </div>

                        <div className="grid grid-cols-3 border-b border-white/10 text-gray-300 hover:bg-white/5 transition-colors">
                            <div className="p-4 border-r border-white/10 font-medium text-white">Confiança</div>
                            <div className="p-4 border-r border-white/10">Alta desconfiança</div>
                            <div className="p-4 text-brand-primary font-bold">2,7x mais confiança</div>
                        </div>
                        <div className="grid grid-cols-3 border-b border-white/10 text-gray-300 hover:bg-white/5 transition-colors">
                            <div className="p-4 border-r border-white/10 font-medium text-white">Conversão</div>
                            <div className="p-4 border-r border-white/10 text-red-400">Apenas 2,1%</div>
                            <div className="p-4 text-neon-green font-bold">Média de 6,2%</div>
                        </div>
                        <div className="grid grid-cols-3 border-b border-white/10 text-gray-300 hover:bg-white/5 transition-colors">
                            <div className="p-4 border-r border-white/10 font-medium text-white">Decisão de Compra</div>
                            <div className="p-4 border-r border-white/10 text-red-400">87% de rejeição (nota baixa)</div>
                            <div className="p-4 text-white font-bold">50% mais propensos</div>
                        </div>
                        <div className="grid grid-cols-3 text-gray-300 hover:bg-white/5 transition-colors">
                            <div className="p-4 border-r border-white/10 font-medium text-white">Visitas ao Local</div>
                            <div className="p-4 border-r border-white/10 text-red-400">Perda de fluxo</div>
                            <div className="p-4 text-brand-primary font-bold">70% mais chances</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keyword Rich SEO Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-2 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green font-bold text-sm mb-6">
                            Você no Topo das Buscas
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                            Como o Brasileiro Consome Hoje?
                        </h2>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center shrink-0 text-brand-vivid">
                                    <Search size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Intenção Local Explosiva</h3>
                                    <p className="text-gray-300">
                                        46% de todas as buscas têm intenção local. Saber <strong>como colocar sua empresa no Google</strong> é o primeiro passo para parar de perder vendas para o vizinho.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center shrink-0 text-brand-vivid">
                                    <Star size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Filtro de Confiança</h3>
                                    <p className="text-gray-300">
                                        Ter um perfil otimizado torna sua empresa 2,7x mais confiável. Avaliações respondidas e fotos recentes são obrigatórias.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center shrink-0 text-brand-vivid">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Google Empresas Verificado</h3>
                                    <p className="text-gray-300">
                                        Nós cuidamos de toda a burocracia para <strong>cadastrar sua empresa no Google</strong> e blindar sua ficha contra edições maliciosas.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-vivid/20 blur-[100px] rounded-full" />
                        <div className="relative bg-[#101010] p-8 rounded-2xl border border-white/10 shadow-2xl">
                            <div className="text-center mb-8">
                                <p className="text-gray-300 text-sm mb-2">Termos mais buscados pelos seus clientes</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Google Meu Negócio</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Minha Empresa no Google</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Google Empresas</span>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">Meu Negócio Google</span>
                                </div>
                            </div>

                            {/* Visual Representation of Rankings */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-lg border border-neon-green/50 shadow-[0_0_15px_rgba(100,242,34,0.1)] transform scale-105 transition-transform">
                                    <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center text-black font-bold">1</div>
                                    <div className="flex-1">
                                        <div className="h-3 w-32 bg-white/20 rounded mb-2"></div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                                            <span className="text-xs text-gray-300 ml-2">(4.9)</span>
                                        </div>
                                    </div>
                                    <CheckCircle2 className="text-neon-green" />
                                </div>
                                <div className="flex items-center gap-4 bg-[#151515] p-4 rounded-lg border border-white/5 opacity-50">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 font-bold">2</div>
                                    <div className="flex-1">
                                        <div className="h-3 w-24 bg-white/10 rounded mb-2"></div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                                            <span className="text-xs text-gray-600 ml-2">(3.1)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-[#151515] p-4 rounded-lg border border-white/5 opacity-50">
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 font-bold">3</div>
                                    <div className="flex-1">
                                        <div className="h-3 w-28 bg-white/10 rounded mb-2"></div>
                                        <div className="flex gap-1">
                                            {[1, 2].map(i => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                                            <span className="text-xs text-gray-600 ml-2">(2.5)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-neon-green font-bold text-sm mt-6 animate-pulse">
                                Nós colocamos você na 1ª posição.
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
