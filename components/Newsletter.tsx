
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulating API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="relative py-24 px-6 overflow-hidden bg-brand-blue">
            {/* Decorative elements to match the site style */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-yellow/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-brand-yellow text-sm font-bold uppercase tracking-widest">
                    Newsletter
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Recibí herramientas para <br className="hidden md:block" /> tu bienestar en tu correo
                </h2>

                <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                    Sumate a nuestra comunidad y recibí consejos prácticos de mindfulness, ejercicios de respiración y novedades sobre el programa.
                </p>

                {status === 'success' ? (
                    <div className="bg-white/10 backdrop-blur-md border border-brand-yellow/30 p-8 rounded-3xl animate-in fade-in zoom-in duration-500">
                        <div className="text-brand-yellow text-4xl mb-4">✦</div>
                        <h3 className="text-2xl font-bold mb-2">¡Gracias por sumarte!</h3>
                        <p className="opacity-80">Pronto recibirás nuestras novedades en tu casilla de correo.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 text-sm font-bold uppercase tracking-wider text-brand-yellow hover:underline"
                        >
                            Volver a suscribirse
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 px-8 py-5 rounded-full bg-white text-black text-lg focus:outline-none focus:ring-4 focus:ring-brand-yellow/30 transition-shadow"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === 'loading'}
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="px-10 py-5 bg-brand-yellow text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20 disabled:opacity-50 flex items-center justify-center min-w-[160px]"
                            >
                                {status === 'loading' ? (
                                    <svg className="animate-spin h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    'Suscribirme'
                                )}
                            </button>
                        </div>
                        <p className="mt-4 text-sm opacity-60">
                            Respetamos tu privacidad. Podés desuscribirte en cualquier momento.
                        </p>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
