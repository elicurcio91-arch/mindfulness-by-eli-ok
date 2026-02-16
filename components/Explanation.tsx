
import React from 'react';

const Explanation: React.FC = () => {
    return (
        <section className="bg-[#F9F7F2]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
                    Qué es mindfulness y por qué ayuda
                </h2>

                <div className="space-y-8 max-w-3xl mx-auto mb-16">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
                        Mindfulness es entrenar la atención para volver al presente con claridad y amabilidad. <br className="hidden md:block" />
                        Con práctica sostenida, ayuda a reducir estrés, ansiedad y reactividad emocional.
                    </p>

                    <div className="inline-block px-8 py-10 bg-white/40 backdrop-blur-sm rounded-[32px] border border-white italic text-xl md:text-2xl text-gray-700 leading-relaxed shadow-sm">
                        No se trata de dejar la mente en blanco. <br className="hidden md:block" />
                        Se trata de aprender a relacionarte distinto con lo que sentís y pensás.
                    </div>

                    <div className="pt-6">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold max-w-lg mx-auto leading-relaxed">
                            Este acompañamiento no reemplaza terapia psicológica ni tratamiento médico.
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
        </section>
    );
};

export default Explanation;
