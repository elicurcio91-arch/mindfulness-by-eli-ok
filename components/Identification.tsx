
import React from 'react';

const Identification: React.FC = () => {
    const bullets = [
        "Vivís con la mente acelerada",
        "Te cuesta desconectar del trabajo",
        "Aparecen ansiedad, enojo o frustración",
        "Sentís cansancio mental o tensión en el cuerpo",
        "Querés herramientas concretas para sentirte mejor"
    ];

    return (
        <section className="bg-secondary/30 pt-16 pb-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="animate-fade-in text-center">
                    {/* Título superior */}
                    <span className="text-[14px] tracking-wide text-gray-500 mb-2 uppercase font-medium block">
                        TU SISTEMA NERVIOSO EN ALERTA
                    </span>

                    {/* Subtítulo */}
                    <h2 className="text-[22px] font-semibold text-center mb-7 mx-auto text-gray-900">
                        Tal vez te está pasando algo de esto...
                    </h2>

                    {/* Tarjetas de síntomas */}
                    <div className="max-w-[92%] mx-auto grid gap-4 mb-9">
                        {bullets.map((text, idx) => (
                            <div key={idx} className="flex items-start text-left gap-4 glass p-5 rounded-2xl border border-white/60 shadow-sm hover:shadow-md transition-shadow">
                                <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-emerald-100/50 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-[17px] leading-[1.4] text-gray-700 font-normal">{text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Transición emocional */}
                    <div className="text-left max-w-[85%] mx-auto mt-9 mb-7 space-y-1">
                        <p className="text-[20px] font-medium text-gray-800">
                            Lo que sentís tiene sentido.
                        </p>
                        <p className="text-[20px] font-medium text-gray-800">
                            Cuando el sistema nervioso está en alerta constante, todo se intensifica.
                        </p>
                        <p className="text-[20px] font-medium text-gray-800">
                            Hay una forma diferente de vivir.
                        </p>
                    </div>

                    {/* Botón */}
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button block w-full max-w-[300px] mx-auto mt-3 mb-[60px]"
                    >
                        Quiero mi charla gratuita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Identification;
