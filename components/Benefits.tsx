
import React from 'react';

const Benefits: React.FC = () => {
    const benefits = [
        {
            title: "Menos ruido mental",
            text: "Volvés al presente y baja la sobrecarga interna."
        },
        {
            title: "Más regulación emocional",
            text: "Respondés con claridad en lugar de reaccionar desde el estrés."
        },
        {
            title: "Más calma y enfoque",
            text: "Recuperás estabilidad para trabajar y vivir con presencia."
        }
    ];

    return (
        <section className="bg-[#F9F7F2]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Así se empieza a sentir el cambio
                    </h2>
                    <p className="text-xl text-gray-600 font-medium">
                        No es magia. Es regulación del sistema nervioso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="rounded-card text-center md:text-left !p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center flex flex-col items-center gap-10">
                    <p className="text-xl text-gray-700 font-medium italic">
                        Esto puede empezar a pasar antes de lo que imaginás.
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

export default Benefits;
