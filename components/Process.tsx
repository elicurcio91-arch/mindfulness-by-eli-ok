
import React from 'react';

const Process: React.FC = () => {
    const items = [
        "4 sesiones 1:1 por Zoom (50 min)",
        "Audios breves guiados (8–12 min)",
        "Prácticas simples para tu rutina diaria",
        "Acompañamiento entre sesiones por WhatsApp",
        "Material breve personalizado"
    ];

    return (
        <section className="bg-white" id="proceso">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Un proceso simple, humano y adaptado a vos
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
                        No seguís un método rígido. Creamos uno para tu momento actual.
                    </p>
                </div>

                <p className="text-lg text-gray-600 text-center mb-10 leading-relaxed max-w-2xl mx-auto italic">
                    Primero tenemos una charla inicial para entender qué estás viviendo y qué necesitás.
                </p>

                <div className="bg-[#E0F2FE]/20 p-10 md:p-16 rounded-[32px] border border-blue-50/50 mb-24 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-5 text-gray-800 font-bold text-lg md:text-xl">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 text-sm">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-14 pt-10 border-t border-blue-100/50 text-center">
                        <span className="text-sm font-bold text-blue-600/60 tracking-wide">
                            Todo el proceso es online y flexible.
                        </span>
                    </div>
                </div>

                <div className="text-center flex flex-col items-center">
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quiero%20empezar%20mi%20proceso."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button px-10"
                    >
                        Quiero empezar mi proceso
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
