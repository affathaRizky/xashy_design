export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-metal-dark via-metal-darker to-metal-dark"></div>

            {/* Subtle Electric Blue Ambient Light */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[120px]"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Main Logo */}
                <div className="mb-12">
                    <h1 className="font-orbitron text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
                        <span className="metallic-text block mb-2">XASHY</span>
                        <span className="metallic-text block">DESIGN</span>
                    </h1>
                </div>

                {/* Tagline - Clean & Minimal */}
                <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Good Design,Good Impact!
                </p>

                {/* CTA Buttons - Minimal & Clean */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://drive.google.com/drive/u/3/folders/1-qWqmQ-Cw4TjgMu8Ni0G_U1XIv5x0g7Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex px-8 py-3 bg-electric-blue text-metal-dark font-orbitron font-bold rounded-sm hover:bg-electric-cyan transition-colors duration-300"
                    >
                        <span className="flex items-center gap-2">
                            View Catalog
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="/pricelist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex px-8 py-3 bg-electric-blue text-metal-dark font-orbitron font-bold rounded-sm hover:bg-electric-cyan transition-colors duration-300"
                    >
                        <span className="flex items-center gap-2">
                            View Pricelist
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDYzMTM0NDYyNDkyMTQ2?story_media_id=3932360717206749838_80053152698&stkn=MXF0bGkwYmZoNjljNQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex px-8 py-3 bg-electric-blue text-metal-dark font-orbitron font-bold rounded-sm hover:bg-electric-cyan transition-colors duration-300"
                    >
                        <span className="flex items-center gap-2">
                            View Testimonials
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>

                </div>

                {/* Simple Divider */}
                <div className="mt-20 flex justify-center">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"></div>
                </div>
            </div>

            {/* Minimal Corner Accents */}
            <div className="absolute top-32 left-8 w-px h-24 bg-gradient-to-b from-electric-blue/30 to-transparent hidden lg:block"></div>
            <div className="absolute top-32 right-8 w-px h-24 bg-gradient-to-b from-electric-blue/30 to-transparent hidden lg:block"></div>
        </section>
    );
}