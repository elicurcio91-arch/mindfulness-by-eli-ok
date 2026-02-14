
import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#F9F7F2]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Podés empezar con una <br className="hidden md:block" /> charla breve
                </h2>

                <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
                    En esta conversación inicial vamos a ver qué está pasando hoy, qué necesitás y cómo podría acompañarte.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href="https://calendly.com/elicurcio-91/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button text-xl px-12"
                    >
                        Agendar charla gratuita
                    </a>
                    <span className="text-gray-500 font-medium tracking-tight">
                        15 minutos • Por Zoom
                    </span>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
