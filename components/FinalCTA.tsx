
import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="bg-[#F9F7F2] py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
                    Empezá con una charla de claridad
                </h2>

                <p className="text-xl md:text-3xl text-gray-700 mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
                    En 15 minutos vamos a entender qué está pasando hoy, qué necesitás y cómo puedo acompañarte.
                </p>

                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <a
                            href="https://calendly.com/elicurcio-91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-button text-2xl px-16 py-6"
                        >
                            Reservar charla gratuita
                        </a>
                        <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                            15 minutos • Gratis • Sin compromiso
                        </span>
                    </div>

                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                    >
                        O preferís WhatsApp?
                    </a>

                    <div className="mt-12 text-gray-400 font-bold uppercase tracking-widest text-sm italic">
                        Tu bienestar merece un espacio.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
