
import React from 'react';

const Explanation: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="animate-fade-in">
                    <span className="micro-copy mb-4 text-primary">La ciencia de la calma</span>
                    <h2 className="mb-12">
                        ¿Qué es mindfulness y por qué te ayuda?
                    </h2>

                    <div className="space-y-12 max-w-3xl mx-auto mb-16">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                            Mindfulness es entrenar la atención para volver al presente con <span className="text-secondary font-bold">claridad y amabilidad</span>.
                            Con práctica sostenida, aprendés a regular tu respuesta al estrés y la ansiedad.
                        </p>

                        <div className="relative inline-block px-10 py-12 bg-bg-secondary/40 rounded-[40px] border border-bg-secondary italic text-2xl md:text-3xl text-gray-800 leading-relaxed shadow-sm">
                            <span className="absolute top-4 left-6 text-6xl text-primary/20 font-serif">“</span>
                            No se trata de dejar la mente en blanco. <br className="hidden md:block" />
                            Se trata de aprender a relacionarte de forma funcional con lo que sentís y pensás.
                        </div>

                        <div className="pt-6">
                            <p className="text-[11px] text-gray-400 uppercase tracking-widest font-semibold max-w-lg mx-auto leading-relaxed">
                                Este acompañamiento no reemplaza terapia psicológica ni tratamiento médico especializado.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <a
                            href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-button"
                        >
                            Quiero empezar mi proceso
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explanation;
