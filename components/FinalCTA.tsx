
import React from 'react';

const FinalCTA: React.FC = () => {
    return (
        <section className="bg-white relative overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 rounded-full blur-[120px] z-0"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="animate-fade-in">
                    <span className="micro-copy mb-4 text-primary">Próximo paso</span>
                    <h2 className="mb-8">
                        Empezá con una charla de claridad
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed max-w-2xl mx-auto font-medium">
                        En 15 minutos identificamos qué te está frenando hoy y cómo este proceso puede ayudarte a recuperar la calma.
                    </p>

                    <div className="flex flex-col items-center gap-12">
                        <div className="flex flex-col items-center gap-6">
                            <a
                                href="https://calendly.com/elicurcio-91/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-button scale-110"
                            >
                                Agendar mi charla gratuita
                            </a>
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-sm text-gray-700 font-bold uppercase tracking-widest">
                                    15 minutos • Gratis • Por Zoom
                                </span>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">
                                    Espacio seguro • Sin compromiso • 100% Confidencial
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <p className="text-gray-500 font-medium font-outfit">¿Preferís consultar por WhatsApp?</p>
                            <a
                                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="secondary-button"
                            >
                                Escribime por WhatsApp
                            </a>
                        </div>

                        <div className="mt-16 text-gray-400 font-bold uppercase tracking-widest text-base italic opacity-60">
                            Tu bienestar merece un espacio.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
