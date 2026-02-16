
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
        <section className="pt-12 pb-32 md:pt-16 md:pb-40 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <span className="block text-emerald-600 font-bold uppercase tracking-[0.15em] text-sm mb-4 text-center md:text-left">
                    No estás fallando. Tu sistema nervioso está sobrecargado.
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16 text-center md:text-left tracking-tight">
                    Tal vez te está pasando algo de esto…
                </h2>

                <ul className="space-y-10 mb-20">
                    {bullets.map((text, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-xl text-gray-700 leading-snug">
                            <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-emerald-400/90 flex-shrink-0"></span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-14 border-t border-gray-100 text-center md:text-left flex flex-col items-center md:items-start">
                    <p className="text-2xl text-gray-800 font-medium leading-relaxed max-w-2xl mb-8">
                        Lo que sentís tiene sentido. Cuando el sistema nervioso está en alerta, todo se intensifica.
                    </p>
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button px-10"
                    >
                        Reservar charla gratuita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Identification;
