export default function Contact() {
    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-metal-dark">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-metal-darker to-metal-dark"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="font-rajdhani text-sm font-semibold text-gray-500 tracking-[0.3em] uppercase">
                        Get In Touch
                    </span>
                    <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl metallic-text mt-4 mb-6">
                        CONTACT US
                    </h2>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"></div>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                        Siap mewujudkan ide kreatifmu? Hubungi kami langsung melalui channel di bawah ini untuk respon yang lebih cepat dan diskusi yang lebih personal.
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Card 1: WhatsApp */}
                    <a
                        href="https://wa.me/6283171099307?text=Permisi%20kak%20mau%2C%20mau%20order%20dong%21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-b from-metal-gray/80 to-metal-dark border border-gray-800/50 rounded-sm p-8 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 flex items-center justify-center bg-metal-dark border border-gray-700 rounded-sm group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300 flex-shrink-0">
                                <svg className="w-7 h-7 text-gray-400 group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-green-400 transition-colors duration-300">WHATSAPP</h3>
                                <span className="inline-flex items-center gap-2 text-green-400 font-rajdhani font-bold text-sm tracking-wider group-hover:gap-3 transition-all duration-300">
                                    CHAT SEKARANG
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>

                    {/* Card 2: Instagram */}
                    <a
                        href="https://www.instagram.com/_xsdesign/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-b from-metal-gray/80 to-metal-dark border border-gray-800/50 rounded-sm p-8 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 flex items-center justify-center bg-metal-dark border border-gray-700 rounded-sm group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all duration-300 flex-shrink-0">
                                <svg className="w-7 h-7 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072c-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">INSTAGRAM</h3>
                                <span className="inline-flex items-center gap-2 text-pink-400 font-rajdhani font-bold text-sm tracking-wider group-hover:gap-3 transition-all duration-300">
                                    @xashydesign
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>

                    {/* Card 3: TikTok */}
                    <a
                        href="https://tiktok.com/@urfavsashy_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-gradient-to-b from-metal-gray/80 to-metal-dark border border-gray-800/50 rounded-sm p-8 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 flex items-center justify-center bg-metal-dark border border-gray-700 rounded-sm group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-300 flex-shrink-0">
                                <svg className="w-7 h-7 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">TIKTOK</h3>
                                <span className="inline-flex items-center gap-2 text-cyan-400 font-rajdhani font-bold text-sm tracking-wider group-hover:gap-3 transition-all duration-300">
                                    @xashydesign
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>

                    {/* Card 4: Working Hours */}
                    <div className="group relative bg-gradient-to-b from-metal-gray/80 to-metal-dark border border-gray-800/50 rounded-sm p-8 hover:border-gray-500/50 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 flex items-center justify-center bg-metal-dark border border-gray-700 rounded-sm group-hover:border-gray-500/50 transition-all duration-300 flex-shrink-0">
                                <svg className="w-7 h-7 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-orbitron font-bold text-lg text-white mb-2">JAM OPERASIONAL</h3>
                                <p className="text-gray-400 text-sm mb-3">Kami siap melayani pesanan dan revisi di jam berikut:</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                    <span className="text-gray-200 font-rajdhani font-bold text-sm tracking-wider">
                                        Senin - Minggu: 09.00 - 20.00 WIB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}