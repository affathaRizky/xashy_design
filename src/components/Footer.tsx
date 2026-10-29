'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="relative py-16 bg-metal-darker border-t border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="col-span-1 md:col-span-2">
                            <Link href="/" className="font-orbitron text-2xl font-black tracking-wider group">
                                <span className="metallic-text electric-glow-text text-3xl">X</span>
                                <span className="text-white group-hover:text-electric-blue transition-colors">ASHY</span>
                                <span className="metallic-text electric-glow-text">DESIGN</span>
                            </Link>

                            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                                Good Design, Good Impact!
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                {/* Instagram Redirect */}
                                <Link
                                    href="/redirect/instagram"
                                    className="w-10 h-10 rounded-sm bg-metal-gray/30 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-electric-blue hover:text-metal-dark hover:border-electric-blue/50 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072c-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                    </svg>
                                </Link>

                                {/* TikTok Redirect */}
                                <Link
                                    href="/redirect/tiktok"
                                    className="w-10 h-10 rounded-sm bg-metal-gray/30 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-electric-blue hover:text-metal-dark hover:border-electric-blue/50 transition-all duration-300"
                                    aria-label="TikTok"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="font-orbitron font-bold text-white mb-6 text-lg">Contact</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-sm">Bandung, Indonesia</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-4 h-4 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-sm">sashyys28@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-orbitron font-bold text-white mb-6 text-lg">Quick Links</h4>
                            <ul className="space-y-3">
                                {['Home', 'Services', 'Price List', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <a
                                            href={link === 'Price List' ? '/pricelist' : `#${link.toLowerCase().replace(' ', '')}`}
                                            className="text-gray-400 hover:text-electric-blue transition-colors font-rajdhani text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Border */}
                    <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm font-rajdhani">
                            &copy; 2026 XashyDesign. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a
                                href="https://www.instagram.com/affatha.rizkyy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-electric-blue transition-colors font-rajdhani"
                            >
                                Build with ♥ By Xashy Husbando
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}