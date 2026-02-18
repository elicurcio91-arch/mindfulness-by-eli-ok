
import React from 'react';

const Benefits: React.FC = () => {
    const benefits = [
        {
            title: "Menos ruido mental",
            text: "Entrenás la capacidad de volver al presente y bajás el volumen de la sobrecarga interna.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
                </svg>
            )
        },
        {
            title: "Regulación emocional",
            text: "Aprendés a responder con claridad en lugar de reaccionar impulsivamente desde el estrés.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        },
        {
            title: "Calma y enfoque",
            text: "Recuperás la estabilidad necesaria para trabajar y vivir con presencia y propósito.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-bg-secondary/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="animate-fade-in mb-16">
                    <span className="micro-copy mb-4 text-secondary">Resultados tangibles</span>
                    <h2 className="mb-6 max-w-3xl">
                        Así se empieza a sentir el cambio en tu día a día
                    </h2>
                    <p className="font-medium text-gray-600 max-w-2xl">
                        No es magia. Es el resultado de entrenar tu mente y regular tu sistema nervioso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="rounded-card flex flex-col items-start group">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="mb-4 text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-600">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-10 py-12 border-t border-gray-200/50">
                    <p className="emotional-quote text-gray-700 italic max-w-2xl">
                        Este proceso puede transformar tu relación con el estrés antes de lo que imaginás.
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

export default Benefits;
