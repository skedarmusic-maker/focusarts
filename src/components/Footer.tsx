import Link from "next/link";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-outfit tracking-tighter mb-4 inline-block">
                            <span className="text-white">Focus</span>
                            <span className="text-brand-vivid">&</span>
                            <span className="text-white">Arts</span>
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Agência digital focada em resultados reais. Transformamos cliques em clientes através de SEO, Design e Estratégia.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Serviços</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/google-meu-negocio" className="hover:text-neon-green transition-colors">Otimização GMB</Link></li>
                            <li><Link href="/preco-otimizacao-google-meu-negocio" className="hover:text-neon-green transition-colors">Preços Otimização GMN</Link></li>
                            <li><Link href="/sites-estrategicos" className="hover:text-neon-green transition-colors">Criação de Sites</Link></li>
                            <li><Link href="#" className="hover:text-neon-green transition-colors">SEO Local</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Empresa</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-neon-green transition-colors">Sobre Nós</Link></li>
                            <li><Link href="#" className="hover:text-neon-green transition-colors">Cases de Sucesso</Link></li>
                            <li><Link href="#" className="hover:text-neon-green transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-neon-green transition-colors">Carreiras</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/focus_artss/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary transition-colors" aria-label="Instagram">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-primary transition-colors" aria-label="Facebook">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Focus & Arts. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
