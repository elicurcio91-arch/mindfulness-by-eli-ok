
import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-40 px-6 bg-[#F9F7F2]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
                    Podés empezar con una charla breve
                </h2>

                <p className="text-xl md:text-3xl text-gray-700 mb-20 leading-relaxed max-w-3xl mx-auto font-medium">
                    En esta conversación inicial vamos a ver qué está pasando hoy, qué necesitás y cómo podría acompañarte.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20mi%20charla%20gratuita%20de%2015%20minutos."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button text-2xl px-16 py-6 shadow-2xl shadow-violet-500/10 hover:shadow-violet-500/20"
                    >
                        Reservar charla gratuita
                    </a>

                    <div className="flex items-center gap-3 text-gray-500 font-bold uppercase tracking-widest text-sm italic">
                        <span>15 minutos</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                        <span>Por Zoom</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
