
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
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        Un proceso simple, humano y adaptado a vos
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                        No seguís un método rígido. Creamos uno para tu momento actual.
                    </p>
                </div>

                <p className="text-lg text-gray-500 mb-10 leading-relaxed italic">
                    Primero tenemos una charla inicial para entender qué estás viviendo y qué necesitás.
                </p>

                <div className="bg-[#F9F7F2] p-8 md:p-12 rounded-[24px] border border-gray-100 mb-16 shadow-sm">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-gray-800 font-bold text-lg">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs mt-1">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                            Todo el proceso es online y flexible.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col items-start px-2">
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

export default Process;
