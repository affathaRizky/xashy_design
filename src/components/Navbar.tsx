'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu saat klik link
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Close menu saat klik di luar
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '#services' },
        { label: 'Price List', href: '/pricelist' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-metal-dark/95 backdrop-blur-lg border-b border-electric-blue/20 shadow-[0_0_20px_rgba(0,212,255,0.1)]'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link href="/" className="font-orbitron text-2xl font-black tracking-wider group">
                        <span className="metallic-text electric-glow-text text-3xl">X</span>
                        <span className="text-white group-hover:text-electric-blue transition-colors">ASHY</span>
                        <span className="metallic-text electric-glow-text">DESIGN</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative text-gray-300 hover:text-electric-blue font-rajdhani font-semibold text-lg transition-all group py-2"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-sm border border-gray-700/50 bg-metal-gray/30 hover:border-electric-blue/50 transition-all duration-300 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-electric-blue transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
                        <span className={`block w-6 h-0.5 bg-electric-blue transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-6 h-0.5 bg-electric-blue transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden fixed inset-0 top-20 bg-metal-dark/98 backdrop-blur-xl transition-all duration-500 ${isOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-4'
                    }`}
            >
                {/* Background glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[100px]"></div>

                <div className="relative z-10 flex flex-col items-center justify-start py-12 px-6 h-full">
                    <div className="flex flex-col items-center space-y-8 w-full max-w-sm">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={handleLinkClick}
                                className={`w-full text-center py-4 text-2xl font-orbitron font-bold text-white hover:text-electric-blue transition-all duration-300 border-b border-gray-800/50 hover:border-electric-blue/30 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* CTA Button Mobile */}
                        <Link
                            href="https://wa.me/6283171099307?text=Halo%20Min%2C%20mau%20order%20dong%21"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className={`w-full mt-8 py-4 bg-electric-blue text-metal-dark font-orbitron font-bold text-lg rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 text-center ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                            style={{ transitionDelay: isOpen ? `${navLinks.length * 75}ms` : '0ms' }}
                        >
                            HIRE US
                        </Link>
                    </div>

                    {/* Decorative bottom line */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"></div>
                </div>
            </div>
        </nav>
    );
}