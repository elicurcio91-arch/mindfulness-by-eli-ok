
import React from 'react';

const Explanation: React.FC = () => {
    return (
        <section className="bg-[#F9F7F2]">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14 text-center tracking-tight">
                    Qué es mindfulness y por qué ayuda
                </h2>

                <div className="space-y-12 text-center max-w-3xl mx-auto mb-20">
                    <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-semibold">
                        "Mindfulness es entrenar la atención para volver al presente con claridad y amabilidad.
                        Con práctica sostenida, ayuda a reducir estrés, ansiedad y reactividad emocional."
                    </p>

                    <div className="inline-block px-10 py-8 bg-white/50 backdrop-blur-sm rounded-[32px] border border-gray-100 italic text-xl md:text-2xl text-gray-700 leading-relaxed">
                        No se trata de dejar la mente en blanco. Se trata de aprender a relacionarte distinto con lo que sentís y pensás.
                    </div>

                    <div className="pt-10">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold max-w-lg mx-auto leading-relaxed">
                            Este acompañamiento no reemplaza terapia psicológica ni tratamiento médico.
                        </p>
                    </div>
                </div>

                <div className="text-center flex flex-col items-center">
                    <span className="micro-copy italic">
                        No es compromiso. Es solo una primera conversación para ver si esto puede ayudarte.
                    </span>
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20empezar%20mi%20proceso%20de%20mindfulness%201%3A1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button px-10"
                    >
                        Ver cómo funciona
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Explanation;
