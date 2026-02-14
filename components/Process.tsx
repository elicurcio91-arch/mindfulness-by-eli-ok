
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
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                    Cómo trabajamos
                </h2>

                <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed max-w-2xl mx-auto">
                    Después de una charla inicial, diseño un proceso adaptado a tu momento actual, tu nivel de estrés y tus objetivos.
                </p>

                <div className="bg-[#E0F2FE]/30 p-8 md:p-12 rounded-[40px] border border-blue-50">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4 text-gray-800 font-medium text-lg">
                                <span className="text-blue-500 text-2xl">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-8 border-t border-blue-100/50 text-center">
                        <span className="text-sm uppercase tracking-widest font-bold text-blue-600/60">
                            Todo el proceso es ONLINE.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
