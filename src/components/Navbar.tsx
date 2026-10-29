'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-metal-dark/95 backdrop-blur-lg border-b border-electric-blue/20 electric-glow'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo dengan metallic effect */}
                    <Link href="/" className="font-orbitron text-2xl font-black tracking-wider group">
                        <span className="metallic-text electric-glow-text text-3xl">X</span>
                        <span className="text-white group-hover:text-electric-blue transition-colors">ASHY</span>
                        <span className="metallic-text electric-glow-text">DESIGN</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-10">
                        {['Home', 'Services', 'Price List', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Price List' ? '/pricelist' : `#${item.toLowerCase().replace(' ', '')}`}
                                className="relative text-gray-300 hover:text-electric-blue font-rajdhani font-semibold text-lg transition-all group py-2"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue electric-glow transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button - Chrome Effect */}
                    <button className="hidden md:block chrome-button px-6 py-2.5 font-orbitron font-bold text-electric-blue text-sm rounded-lg transition-all hover:scale-105 border border-electric-blue/50">
                        HIRE US
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-electric-blue p-2">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}