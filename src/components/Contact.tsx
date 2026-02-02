import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050505]" id="contato">
            <div className="absolute inset-0 bg-brand-primary/5 clip-path-slant" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16">
                <div className="md:w-1/2">
                    <h2 className="text-4xl text-white font-bold font-outfit mb-6">
                        Pronto para sair da <span className="text-neon-green">Invisibilidade?</span>
                    </h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Não deixe dinheiro na mesa. Sua concorrência local já está se movendo.
                        Agende uma análise gratuita da sua presença digital hoje mesmo.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-neon-green">
                                <Phone size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">WhatsApp / Telefone</div>
                                <div className="font-bold">+55 (11) 96584-3545</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-white">
                            <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-neon-green">
                                <Mail size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Email</div>
                                <div className="font-bold">contato@focusarts.com.br</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-white">
                            <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-neon-green">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <div className="text-sm text-gray-400">Localização</div>
                                <div className="font-bold">São Paulo, SP</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 bg-[#101010] p-8 rounded-3xl border border-white/5 shadow-2xl">
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                        <input type="hidden" name="access_key" value="93209a18-1fc1-401b-afbf-60fa58388b39" />

                        {/* Redirecionamento após envio (opcional, pode ser para uma página de obrigado ou a mesma) */}
                        <input type="hidden" name="redirect" value="https://focusarts.com.br" />

                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Nome da Empresa</label>
                            <input
                                type="text"
                                name="business_name"
                                required
                                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                                placeholder="Ex: Padaria do João"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Seu Nome</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Email ou WhatsApp</label>
                            <input
                                type="text"
                                name="contact"
                                required
                                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors"
                                placeholder="contato@..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-2">Como podemos ajudar?</label>
                            <textarea
                                name="message"
                                required
                                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-primary transition-colors h-32"
                                placeholder="Quero aparecer no Google..."
                            />
                        </div>
                        <button type="submit" className="w-full py-4 bg-brand-primary hover:bg-neon-green hover:text-black text-white font-bold rounded-lg transition-all duration-300 shadow-lg text-lg">
                            Solicitar Análise Grátis
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
