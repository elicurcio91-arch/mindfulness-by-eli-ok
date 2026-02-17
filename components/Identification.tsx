
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
        <section className="bg-secondary/30">
            <div className="max-w-4xl mx-auto px-6">
                <div className="animate-fade-in">
                    <span className="micro-copy mb-4 text-secondary">Tu sistema nervioso en alerta</span>
                    <h2 className="mb-12 max-w-2xl">
                        Tal vez te está pasando algo de esto…
                    </h2>

                    <div className="grid md:grid-cols-1 gap-6 mb-16">
                        {bullets.map((text, idx) => (
                            <div key={idx} className="flex items-center gap-5 glass p-6 rounded-2xl border border-white/50 shadow-sm">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-lg md:text-xl text-gray-700 font-medium">{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-12 border-t border-gray-200/50">
                        <div className="max-w-2xl">
                            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10">
                                Lo que sentís tiene sentido. Cuando el sistema nervioso está en alerta constante, todo se intensifica. <span className="text-primary font-semibold">Hay una forma diferente de vivir.</span>
                            </p>
                            <a
                                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-button"
                            >
                                Quiero mi charla gratuita
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Identification;
