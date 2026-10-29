export default function Services() {
    const services = [
        {
            title: "KARAKTER ANIMASI ABSEN",
            desc: "Desain karakter animasi untuk absen dengan pilihan random atau request sesuai keinginan (Anime, Chibi, Disney).",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            )
        },
        {
            title: "OVERLAY LIVE STREAM",
            desc: "Desain overlay photo profesional untuk berbagai kebutuhan dengan bebas request desain sesuai keinginan Anda.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            )
        },
        {
            title: "DESAIN LOGO",
            desc: "Pembuatan logo profesional untuk brand, toko, atau personal branding dengan bebas request desain.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            )
        },
        {
            title: "SOCIAL MEDIA DESIGN",
            desc: "Jasa desain pricelist, katalog produk, postingan promosi, banner, dan template sosial media dengan bebas request.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            )
        },
        {
            title: "STREAM BRANDING OVERLAY",
            desc: "Custom logo, store icons, mini promo overlay, dan livestream branding untuk elemen branding di layar livestream.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            )
        },
        {
            title: "DESAIN CV",
            desc: "Pembuatan desain CV/Curriculum Vitae yang profesional dan menarik dengan bebas request sesuai kebutuhan Anda.",
            icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            )
        }
    ];

    return (
        <section id="services" className="relative py-32 overflow-hidden bg-metal-dark">
            <div className="absolute inset-0 bg-gradient-to-b from-metal-dark via-metal-darker to-metal-dark"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="font-rajdhani text-sm font-semibold text-gray-500 tracking-[0.3em] uppercase">What We Offer</span>
                    <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl metallic-text mt-4 mb-6">
                        OUR SERVICES
                    </h2>
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
                        Kami menyediakan berbagai layanan desain grafis profesional dengan kualitas premium dan harga terjangkau.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-b from-metal-gray/80 to-metal-dark border border-gray-800/50 rounded-sm p-8 hover:border-electric-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] overflow-hidden"
                        >
                            {/* Hover Top Line */}
                            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Background Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric-blue/5 rounded-full blur-3xl group-hover:bg-electric-blue/10 transition-all duration-500"></div>

                            <div className="relative">
                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-metal-gray to-metal-dark border border-gray-600/50 rounded-sm mb-6 group-hover:border-electric-blue/50 transition-all duration-300">
                                    <svg className="w-7 h-7 text-gray-300 group-hover:text-electric-blue transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {service.icon}
                                    </svg>
                                </div>

                                {/* Content */}
                                <h3 className="font-orbitron font-bold text-lg text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                                {/* Learn More */}
                                <div className="flex items-center gap-2 text-gray-400 font-rajdhani font-semibold text-sm group-hover:text-electric-blue transition-colors duration-300 cursor-pointer">
                                    <span>LEARN MORE</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}