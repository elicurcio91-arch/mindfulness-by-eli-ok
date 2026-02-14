
import React from 'react';

const Identification: React.FC = () => {
    const bullets = [
        "Vivís con estrés constante y la mente acelerada",
        "Te cuesta desconectar del trabajo",
        "Aparecen ansiedad, enojo o frustración",
        "Sentís cansancio mental o tensión en el cuerpo",
        "Querés herramientas concretas para sentirte mejor"
    ];

    return (
        <section className="py-28 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-14 text-center md:text-left tracking-tight">
                    Este espacio es para vos si…
                </h2>

                <ul className="space-y-8 mb-16">
                    {bullets.map((text, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-xl text-gray-700 leading-snug">
                            <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-12 border-t border-gray-100 text-center md:text-left">
                    <p className="text-2xl text-gray-800 italic font-medium leading-relaxed max-w-2xl">
                        Lo que te pasa tiene sentido: cuando el sistema nervioso está en alerta, todo se intensifica.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Identification;
