
import React from 'react';

const Process: React.FC = () => {
    const items = [
        "4 sesiones 1:1 por Zoom (50 min)",
        "Audios guiados breves (8–12 min)",
        "Prácticas simples para tu rutina diaria",
        "2 check-ins semanales por WhatsApp",
        "Material breve de apoyo (según tu caso)"
    ];

    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 text-center tracking-tight text-brand-violet">
                    Cómo trabajamos
                </h2>

                <p className="text-xl md:text-2xl text-gray-600 text-center mb-20 leading-relaxed max-w-3xl mx-auto font-medium">
                    Después de una charla inicial, diseño un proceso adaptado a tu momento actual, tu nivel de estrés y tus objetivos.
                </p>

                <div className="bg-[#E0F2FE]/20 p-10 md:p-16 rounded-[48px] border border-blue-50/50 mb-20">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-5 text-gray-800 font-bold text-lg md:text-xl">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600 text-sm">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-14 pt-10 border-t border-blue-100/50 text-center">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-blue-600/40">
                            Todo el proceso es ONLINE.
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20empezar%20mi%20proceso%20de%20mindfulness%201%3A1"
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

export default Process;
