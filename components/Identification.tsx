
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
        <section className="bg-white">
            <div className="max-w-3xl mx-auto px-6">
                <span className="block text-emerald-600 font-bold uppercase tracking-[0.15em] text-xs mb-4">
                    No estás fallando. Tu sistema nervioso está sobrecargado.
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
                    Tal vez te está pasando algo de esto…
                </h2>

                <ul className="space-y-6 mb-16">
                    {bullets.map((text, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-lg md:text-xl text-gray-700 leading-snug">
                            <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-12 border-t border-gray-100">
                    <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8">
                        Lo que sentís tiene sentido. Cuando el sistema nervioso está en alerta, todo se intensifica.
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
        </section>
    );
};

export default Identification;
