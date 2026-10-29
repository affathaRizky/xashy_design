import Link from "next/link";

// Helper function untuk generate link WhatsApp
const getWaLink = (projectName: string) => {
    const message = `Halo Min, mau order project ${projectName} dong!`;
    return `https://wa.me/6283171099307?text=${encodeURIComponent(message)}`;
};

export default function PriceListPage() {
    return (
        <main className="min-h-screen relative overflow-x-hidden bg-metal-dark text-gray-200 font-['Inter']">

            {/* Back Button (Fixed Top Left) */}
            <Link
                href="/"
                className="fixed top-24 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-metal-dark/80 backdrop-blur-sm border border-gray-700/50 rounded-sm text-gray-400 hover:text-electric-blue hover:border-electric-blue/50 transition-all duration-300 group"
            >
                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-['Rajdhani'] font-semibold text-sm tracking-wider">BACK</span>
            </Link>

            {/* Main Pricelist Container */}
            <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
                {/* Background Effects */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-metal-dark"></div>

                    {/* Diagonal Lines (top-left) - Diubah ke electric blue subtle */}
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] overflow-hidden opacity-20">
                        <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[3px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent transform rotate-[-30deg]"></div>
                        <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent transform rotate-[-30deg] translate-y-6"></div>
                        <div className="absolute -top-1/2 -left-1/4 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent transform rotate-[-30deg] translate-y-12"></div>
                    </div>

                    {/* Diagonal Lines (bottom-right) */}
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] overflow-hidden opacity-20">
                        <div className="absolute -bottom-1/2 -right-1/4 w-[200%] h-[3px] bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent transform rotate-[-30deg]"></div>
                        <div className="absolute -bottom-1/2 -right-1/4 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent transform rotate-[-30deg] -translate-y-6"></div>
                        <div className="absolute -bottom-1/2 -right-1/4 w-[200%] h-[2px] bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent transform rotate-[-30deg] -translate-y-12"></div>
                    </div>

                    {/* Radial glow */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-electric-blue/10 via-transparent to-transparent rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto pt-10">

                    {/* Header Logo Section */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <h1 className="font-['Orbitron'] font-black text-5xl sm:text-6xl md:text-7xl tracking-wider metallic-text drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                                XASHYDESIGN
                            </h1>
                        </div>
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent h-[1px] top-1/2 -translate-y-1/2"></div>
                            <span className="relative px-6 font-['Orbitron'] font-bold text-xl sm:text-2xl tracking-[0.3em] text-electric-blue bg-metal-dark electric-glow-text">
                                PRICELIST
                            </span>
                        </div>
                    </div>

                    {/* ==================== SECTION: OVERLAY LIVE STREAM ==================== */}
                    <div className="mb-16">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                            <h2 className="font-['Orbitron'] font-bold text-2xl sm:text-3xl text-white tracking-wider">
                                OVERLAY LIVE STREAM
                            </h2>
                            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                        </div>

                        {/* BASIC TIER */}
                        <div className="mb-12">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-['Orbitron'] font-black text-3xl sm:text-4xl metallic-text">
                                        BASIC
                                    </h3>
                                    <svg className="w-10 h-10 text-electric-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                                <div className="text-center sm:text-right">
                                    <span className="font-['Orbitron'] font-bold text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">IDR 50.000,-</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                                Untuk desain sederhana, clean, minimalis. Tanpa karakter animasi.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div className="text-gray-300 text-sm">
                                        <span className="font-['Rajdhani'] font-semibold text-white">Frame Facecam</span>
                                        <span className="text-gray-500 ml-2">(Pakai/Tidak)</span>
                                    </div>
                                </div>

                                {/* POINT TERAKHIR + TOMBOL ORDER SEJAJAR */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-3 flex-1">
                                        <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div className="text-gray-300 text-sm">
                                            <span className="font-['Rajdhani'] font-semibold text-white">Landscape/Potrait</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={getWaLink("Overlay Live Stream Basic")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-sm tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                    >
                                        ORDER SEKARANG
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent my-12"></div>

                        {/* ADVANCED TIER */}
                        <div className="mb-12">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-['Orbitron'] font-black text-3xl sm:text-4xl metallic-text">
                                        ADVANCED
                                    </h3>
                                    <svg className="w-10 h-10 text-electric-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                                <div className="text-center sm:text-right">
                                    <span className="font-['Orbitron'] font-bold text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">IDR 85.000,-</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                                Untuk desain dengan detail tambahan, 1 karakter animasi ornamen dan efek visual yang menarik.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div className="text-gray-300 text-sm">
                                        <span className="font-['Rajdhani'] font-semibold text-white">Frame Facecam</span>
                                        <span className="text-gray-500 ml-2">(Pakai/Tidak)</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div className="text-gray-300 text-sm">
                                        <span className="font-['Rajdhani'] font-semibold text-white">Landscape/Potrait</span>
                                    </div>
                                </div>

                                {/* POINT TERAKHIR + TOMBOL ORDER SEJAJAR */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-3 flex-1">
                                        <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div className="text-gray-300 text-sm">
                                            <span className="font-['Rajdhani'] font-semibold text-white">+1 Karakter Animasi</span>
                                            <span className="text-gray-500 ml-2">(Berlaku Kelipatan)</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={getWaLink("Overlay Live Stream Advanced")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-sm tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                    >
                                        ORDER SEKARANG
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent my-12"></div>

                        {/* PREMIUM TIER */}
                        <div className="mb-12">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <h3 className="font-['Orbitron'] font-black text-3xl sm:text-4xl metallic-text">
                                        PREMIUM
                                    </h3>
                                    <svg className="w-10 h-10 text-electric-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                                <div className="text-center sm:text-right">
                                    <span className="font-['Orbitron'] font-bold text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">IDR 125.000,-</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                                Untuk desain kompleks dengan banyak detail, efek 3D, 1 karakter animasi, background animasi, dengan komposisi khusus.
                            </p>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div className="text-gray-300 text-sm">
                                        <span className="font-['Rajdhani'] font-semibold text-white">Frame Facecam</span>
                                        <span className="text-gray-500 ml-2">(Pakai/Tidak)</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <div className="text-gray-300 text-sm">
                                        <span className="font-['Rajdhani'] font-semibold text-white">Landscape/Potrait</span>
                                    </div>
                                </div>

                                {/* POINT TERAKHIR + TOMBOL ORDER SEJAJAR */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    <div className="flex items-start gap-3 flex-1">
                                        <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <div className="text-gray-300 text-sm">
                                            <span className="font-['Rajdhani'] font-semibold text-white">+1 Karakter Animasi</span>
                                            <span className="text-gray-500 ml-2">(Berlaku Kelipatan)</span>
                                        </div>
                                    </div>
                                    <Link
                                        href={getWaLink("Overlay Live Stream Premium")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-sm tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                    >
                                        ORDER SEKARANG
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================== SECTION: KARAKTER ANIMASI ABSEN ==================== */}
                    <div className="mb-16">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                            <h2 className="font-['Orbitron'] font-bold text-2xl sm:text-3xl text-white tracking-wider">
                                KARAKTER ANIMASI ABSEN
                            </h2>
                            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                        </div>

                        <div className="space-y-8">
                            {/* Item 1 */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group p-4 rounded-sm bg-metal-gray/30 border border-gray-800/50 hover:border-electric-blue/50 transition-all duration-300">
                                <div className="flex items-center gap-4 flex-1 justify-center sm:justify-start">
                                    <svg className="w-6 h-6 text-electric-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                    <div className="text-center sm:text-left">
                                        <h3 className="font-['Rajdhani'] font-bold text-xl sm:text-2xl text-white">GERAKAN KARAKTER ANIMASI</h3>
                                        <p className="font-['Rajdhani'] text-gray-500 text-sm">(RANDOM)</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end gap-3 text-center sm:text-right w-full sm:w-auto">
                                    <span className="font-['Orbitron'] font-bold text-2xl text-electric-blue">IDR 40.000,-</span>
                                    <Link
                                        href={getWaLink("Gerakan Karakter Animasi (Random)")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                    >
                                        ORDER
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-electric-blue/20 to-transparent"></div>

                            {/* Item 2 */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 group p-4 rounded-sm bg-metal-gray/30 border border-gray-800/50 hover:border-electric-blue/50 transition-all duration-300">
                                <div className="flex items-center gap-4 flex-1 justify-center sm:justify-start">
                                    <svg className="w-6 h-6 text-electric-blue flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                    <div className="text-center sm:text-left">
                                        <h3 className="font-['Rajdhani'] font-bold text-xl sm:text-2xl text-white">GERAKAN KARAKTER ANIMASI</h3>
                                        <p className="font-['Rajdhani'] text-gray-500 text-sm">(REQUEST)</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end gap-3 text-center sm:text-right w-full sm:w-auto">
                                    <span className="font-['Orbitron'] font-bold text-2xl text-electric-blue">IDR 55.000,-</span>
                                    <Link
                                        href={getWaLink("Gerakan Karakter Animasi (Request)")}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                    >
                                        ORDER
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Info Notes */}
                        <div className="mt-10 space-y-4 max-w-2xl mx-auto">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Karakter bisa dibuat dari photo yang customer berikan / membuat karakter sesuai request dan keinginan customer.
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-electric-blue mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div className="text-gray-400 text-sm leading-relaxed">
                                    <p className="mb-2">Bebas request karakter dibuat menjadi:</p>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-500 pl-4">
                                        <li>Karakter Anime</li>
                                        <li>Karakter Anime Chibi</li>
                                        <li>Karakter Disney</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ==================== SECTION: DESAIN LAINNYA ==================== */}
                    <div className="mb-16">
                        <div className="flex items-center justify-center gap-4 mb-10">
                            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                            <h2 className="font-['Orbitron'] font-bold text-2xl sm:text-3xl text-white tracking-wider">
                                DESAIN LAINNYA
                            </h2>
                            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
                        </div>

                        <div className="space-y-6">
                            {/* Overlay Photo */}
                            <div className="bg-metal-gray/30 border border-gray-800/50 rounded-sm p-6 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-start sm:items-center gap-4 flex-1">
                                        <svg className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        <div>
                                            <h3 className="font-['Rajdhani'] font-bold text-xl text-white">OVERLAY PHOTO</h3>
                                            <p className="text-gray-500 text-xs font-['Rajdhani'] tracking-wider">ALL DESAIN BEBAS REQUEST</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                                        <span className="font-['Orbitron'] font-bold text-xl text-electric-blue">IDR 40.000,-</span>
                                        <Link
                                            href={getWaLink("Overlay Photo")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        >
                                            ORDER
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Desain Logo */}
                            <div className="bg-metal-gray/30 border border-gray-800/50 rounded-sm p-6 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-start sm:items-center gap-4 flex-1">
                                        <svg className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        <div>
                                            <h3 className="font-['Rajdhani'] font-bold text-xl text-white">DESAIN LOGO</h3>
                                            <p className="text-gray-500 text-xs font-['Rajdhani'] tracking-wider">ALL DESAIN BEBAS REQUEST</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                                        <span className="font-['Orbitron'] font-bold text-xl text-electric-blue">IDR 40.000,-</span>
                                        <Link
                                            href={getWaLink("Desain Logo")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        >
                                            ORDER
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Desain Service */}
                            <div className="bg-metal-gray/30 border border-gray-800/50 rounded-sm p-6 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-start sm:items-center gap-4 flex-1">
                                        <svg className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        <div>
                                            <h3 className="font-['Rajdhani'] font-bold text-xl text-white">SOCIAL MEDIA DESAIN SERVICE</h3>
                                            <p className="text-gray-500 text-xs font-['Rajdhani'] tracking-wider mb-2">BEBAS REQUEST</p>
                                            <p className="text-gray-500 text-xs leading-relaxed max-w-md">Jasa desain pricelist, katalog produk, postingan promosi, banner, dan template sosial media</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                                        <span className="font-['Orbitron'] font-bold text-xl text-electric-blue whitespace-nowrap">IDR 35.000,-</span>
                                        <Link
                                            href={getWaLink("Social Media Desain Service")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        >
                                            ORDER
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Stream Branding Overlay Video */}
                            <div className="bg-metal-gray/30 border border-gray-800/50 rounded-sm p-6 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-start sm:items-center gap-4 flex-1">
                                        <svg className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        <div>
                                            <h3 className="font-['Rajdhani'] font-bold text-xl text-white">STREAM BRANDING OVERLAY VIDEO</h3>
                                            <p className="text-gray-400 text-xs font-['Rajdhani'] tracking-wider mb-2">Custom Logo • Store Icons • Mini Promo Overlay • Livestream Branding</p>
                                            <p className="text-gray-500 text-xs leading-relaxed max-w-md">Elemen branding di layar livestream, termasuk logo kecil, badge, dan overlay promosi</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                                        <span className="font-['Orbitron'] font-bold text-xl text-electric-blue whitespace-nowrap">IDR 50.000,-</span>
                                        <Link
                                            href={getWaLink("Stream Branding Overlay Video")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        >
                                            ORDER
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Desain CV */}
                            <div className="bg-metal-gray/30 border border-gray-800/50 rounded-sm p-6 hover:border-electric-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)] transition-all duration-300 group">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                                    <div className="flex items-start sm:items-center gap-4 flex-1">
                                        <svg className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1 sm:mt-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                        </svg>
                                        <div>
                                            <h3 className="font-['Rajdhani'] font-bold text-xl text-white">DESAIN CV</h3>
                                            <p className="text-gray-500 text-xs font-['Rajdhani'] tracking-wider">ALL DESAIN BEBAS REQUEST</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:items-end gap-3 w-full sm:w-auto">
                                        <span className="font-['Orbitron'] font-bold text-xl text-electric-blue whitespace-nowrap">IDR 15.000,-</span>
                                        <Link
                                            href={getWaLink("Desain CV")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold text-xs tracking-wider rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                                        >
                                            ORDER
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}