
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
        <section className="py-24 px-6 bg-[#F9F7F2]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
                    Lo que vas a empezar a notar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-[32px] soft-shadow hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-6">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
