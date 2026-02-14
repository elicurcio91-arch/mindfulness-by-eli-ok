
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
        <section className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
                    Este espacio es para vos si…
                </h2>

                <ul className="space-y-6 mb-12">
                    {bullets.map((text, idx) => (
                        <li key={idx} className="bullet-item">
                            <span className="bullet-dot"></span>
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-8 border-t border-gray-100 text-center md:text-left">
                    <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                        "Lo que te pasa tiene sentido: cuando el sistema nervioso está en alerta, todo se intensifica."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Identification;
