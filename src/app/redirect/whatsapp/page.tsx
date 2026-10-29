'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function WhatsAppRedirect() {
    const searchParams = useSearchParams();
    const project = searchParams.get('project');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!project) {
            setError(true);
            return;
        }

        // Decode project name
        const decodedProject = decodeURIComponent(project);

        // Create WhatsApp message
        const message = `Halo Min, mau order project ${decodedProject} dong!`;
        const whatsappUrl = `https://wa.me/6283171099307?text=${encodeURIComponent(message)}`;

        // Redirect to WhatsApp
        const timer = setTimeout(() => {
            window.location.href = whatsappUrl;
        }, 100);

        return () => clearTimeout(timer);
    }, [project]);

    if (error) {
        return (
            <div className="min-h-screen bg-metal-dark flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="font-['Orbitron'] text-2xl text-white mb-4">Error</h1>
                    <p className="text-gray-400">Project tidak valid</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-metal-dark flex items-center justify-center p-4">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-electric-blue mx-auto mb-4"></div>
                <h1 className="font-['Orbitron'] text-xl text-white mb-2">Membuka WhatsApp...</h1>
                <p className="text-gray-400 text-sm">Jika tidak terbuka otomatis, klik tombol di bawah</p>
                <a
                    href={`https://wa.me/6283171099307?text=${encodeURIComponent(`Halo Min, mau order project ${project} dong!`)}`}
                    className="mt-4 inline-block px-6 py-3 bg-electric-blue text-metal-dark font-['Rajdhani'] font-bold rounded-sm"
                >
                    Buka WhatsApp Manual
                </a>
            </div>
        </div>
    );
}