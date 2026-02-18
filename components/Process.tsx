
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
                <div className="animate-fade-in mb-16 text-center">
                    <span className="micro-copy mb-4 text-primary section-title-center">Acompañamiento a medida</span>
                    <h2 className="mb-6 mx-auto">
                        Un proceso simple, humano y adaptado a vos
                    </h2>
                    <p className="font-medium text-gray-600 max-w-2xl mx-auto text-left-aligned">
                        No seguimos un método rígido. Creamos herramientas para tu momento actual.
                    </p>
                </div>

                <div className="glass p-10 md:p-14 rounded-[40px] border border-bg-secondary/50 mb-16 shadow-lg text-left-aligned">
                    <p className="emotional-quote text-gray-800 mb-10 italic">
                        Primero tenemos una <span className="text-primary font-bold">charla inicial gratuita</span> para entender qué estás viviendo y cómo puedo ayudarte.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-5">
                                <span className="flex-shrink-0 w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-emerald-800 font-bold text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span className="text-gray-900 font-semibold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap">
                        <span className="text-sm-guide font-bold text-gray-400 uppercase tracking-widest">
                            Proceso 100% Online y Flexible
                        </span>
                        <div className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-sm-guide text-emerald-600 font-bold">Cupos limitados</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <a
                        href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button scale-105"
                    >
                        Quiero mi charla gratuita
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
