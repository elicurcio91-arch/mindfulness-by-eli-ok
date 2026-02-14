
import React from 'react';

const Explanation: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-[#F9F7F2]">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    Qué es mindfulness y por qué ayuda
                </h2>

                <div className="space-y-8">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Mindfulness es entrenar la atención para volver al presente con claridad y amabilidad. <br />
                        Con práctica sostenida, ayuda a reducir estrés, ansiedad y reactividad emocional.
                    </p>

                    <p className="text-xl text-gray-800 font-bold leading-relaxed">
                        "No se trata de dejar la mente en blanco. Se trata de aprender a relacionarte distinto con lo que sentís y pensás."
                    </p>

                    <div className="pt-10">
                        <p className="text-sm text-gray-500 italic opacity-70">
                            Este acompañamiento no reemplaza terapia psicológica ni tratamiento médico.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explanation;
