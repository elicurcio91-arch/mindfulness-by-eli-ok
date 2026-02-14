
import React from 'react';

const Benefits: React.FC = () => {
    const benefits = [
        {
            title: "Menos ruido mental",
            text: "Aprendés a volver al presente y bajar la sobrecarga interna.",
            icon: "✨"
        },
        {
            title: "Más regulación emocional",
            text: "Creás espacio para responder con claridad en lugar de reaccionar desde el estrés.",
            icon: "🍃"
        },
        {
            title: "Más calma y enfoque",
            text: "Recuperás estabilidad para trabajar y vivir con más presencia.",
            icon: "🧘"
        }
    ];

    return (
        <section className="bg-[#F9F7F2]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight">
                    Lo que vas a empezar a notar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="rounded-card text-center md:text-left">
                            <div className="text-5xl mb-6">{benefit.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center flex flex-col items-center">

                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20conversar%20con%20vos."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button px-10"
                    >
                        Hablar conmigo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
