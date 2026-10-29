'use client';

import { useEffect } from 'react';

export default function InstagramRedirect() {
    useEffect(() => {
        // Redirect otomatis setelah 500ms
        const timer = setTimeout(() => {
            window.location.href = 'https://www.instagram.com/_xsdesign/';
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-metal-dark flex flex-col items-center justify-center p-4 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-electric-blue mx-auto mb-6"></div>
            <h1 className="font-['Orbitron'] text-xl text-white mb-2">Membuka Instagram...</h1>
            <p className="text-gray-400 text-sm mb-6">Jika tidak terbuka otomatis, klik tombol di bawah</p>
            <a
                href="https://www.instagram.com/_xsdesign/"
                className="px-6 py-3 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold rounded-sm hover:bg-electric-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300"
            >
                Buka Instagram Manual
            </a>
        </div>
    );
}