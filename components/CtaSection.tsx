import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="bg-bg-secondary/30 py-12 border-t border-gray-100/50">
            <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide mb-6">
                    ¿Tenés dudas?
                </h2>
                <div className="space-y-4 mb-10">
                    <p className="text-gray-600 text-lg md:text-xl font-light">
                        Si sentís que esto es para vos, podemos tener una conversación de 15 minutos sin costo para conocernos y ver cómo puedo acompañarte.
                    </p>
                    <p className="text-gray-500 text-base">
                        Sin compromiso. Solo un espacio para que me cuentes qué está pasando y ver cómo podemos trabajarlo.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                    >
                        Hablemos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
