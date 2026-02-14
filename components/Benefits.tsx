
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
        <section className="py-32 px-6 bg-[#F9F7F2]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight">
                    Lo que vas a empezar a notar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-[40px] shadow-sm shadow-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 border border-gray-100/50">
                            <div className="text-5xl mb-8">{benefit.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://calendly.com/elicurcio-91/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                    >
                        Quiero empezar
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
