
import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="bg-[#F9F7F2] py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Empezá con una charla de claridad
                </h2>

                <p className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                    En 15 minutos vamos a entender qué está pasando hoy y cómo puedo acompañarte.
                </p>

                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="https://calendly.com/elicurcio-91/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-button text-xl px-12 py-5"
                        >
                            Quiero mi charla
                        </a>
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                                15 minutos • Gratis • Sin compromiso
                            </span>
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                                Sesión confidencial • Sin juicio • Espacio seguro
                            </span>
                        </div>
                    </div>

                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                    >
                        Escribirme por WhatsApp
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
