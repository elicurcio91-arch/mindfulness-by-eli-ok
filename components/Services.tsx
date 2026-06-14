import React from 'react';

const Services: React.FC = () => {
    return (
        <section className="bg-[#FDFBF7] py-16" id="services">
            <div className="max-w-6xl mx-auto px-6">

                {/* Program Header */}
                <div className="text-center mb-10 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide">
                        Método Calma
                    </h2>
                    <div className="w-12 h-[1px] bg-secondary mx-auto mt-6 mb-8"></div>
                    <p className="text-gray-600 text-lg font-medium italic max-w-2xl mx-auto mb-6">
                        4 semanas para gestionar el estrés y recuperar la calma en el día a día
                    </p>
                </div>

                {/* Program Description */}
                <div className="max-w-3xl mx-auto text-center mb-14 space-y-5 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">
                        Aprendés prácticas concretas de mindfulness para entrenar la mente a volver al presente.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Cada semana incluye videos explicativos, meditaciones diarias, lecturas para profundizar la práctica y material complementario descargable.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Al terminar vas a poder gestionar el estrés de una manera más saludable. Vas a tener más presencia en tu día a día, vas a lograr salir del piloto automático y disfrutar de vos, de tu familia, de tus amigos y de tus momentos de descanso con más plenitud.
                    </p>
                </div>

                {/* Subtitle */}
                <div className="text-center mb-12 animate-fade-in">
                    <h3 className="text-2xl md:text-3xl text-gray-800 font-light">
                        ¿Cómo querés hacerlo?
                    </h3>
                    <div className="w-8 h-[1px] bg-secondary mx-auto mt-5"></div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* Card 1 — On-Demand */}
                    <div className="rounded-[28px] bg-white flex flex-col border border-gray-100/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-600 ease-out">
                        <div className="p-8 md:p-9 flex flex-col flex-grow">
                            <h3 className="text-lg font-medium text-gray-800 mb-6 tracking-wide">Método Calma On-Demand</h3>
                            <ul className="space-y-3.5 mb-8 flex-grow">
                                {[
                                    'Acceso inmediato',
                                    'Acceso de por vida',
                                    'A tu propio ritmo',
                                    'Sin horarios fijos',
                                    'Repetí videos y meditaciones las veces que quieras',
                                    'Flexibilidad total',
                                    'Videos + lecturas + material descargable'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-500 text-[13px] leading-relaxed">
                                        <svg className="w-4 h-4 text-[#7BAE8A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-gray-100 pt-6 mb-6">
                                <p className="text-2xl font-semibold text-gray-800">USD $78</p>
                                <div className="mt-2 inline-flex items-center gap-2 bg-[#F0F7F2] rounded-full px-3.5 py-1.5">
                                    <span className="text-[#4A7C59] text-sm font-semibold">ARS $60.000</span>
                                    <span className="text-[#4A7C59]/60 text-xs">· Residentes en Argentina</span>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/541121829771?text=Hola%20Eli,%20quiero%20hacer%20el%20programa%20On-Demand%20de%20M%C3%A9todo%20Calma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-[46px] rounded-full border border-[#4A7C59] text-[#4A7C59] font-medium flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all duration-500 text-sm tracking-wide"
                            >
                                Quiero empezar hoy
                            </a>
                        </div>
                    </div>

                    {/* Card 2 — Híbrida (DESTACADA) */}
                    <div className="rounded-[28px] bg-[#4A7C59] flex flex-col relative md:-mt-3 md:mb-[-12px] shadow-[0_8px_40px_rgba(74,124,89,0.20)] hover:shadow-[0_12px_48px_rgba(74,124,89,0.28)] transition-all duration-600 ease-out">
                        {/* Badge */}
                        <div className="bg-white/15 text-white/95 text-[11px] font-medium tracking-[0.12em] uppercase text-center py-2.5 px-4 rounded-t-[28px]">
                            ✨ La opción más elegida
                        </div>
                        <div className="p-8 md:p-9 flex flex-col flex-grow">
                            <h3 className="text-lg font-medium text-white mb-6 tracking-wide">Método Calma Híbrida</h3>
                            <ul className="space-y-3.5 mb-8 flex-grow">
                                {[
                                    '1 sesión inicial 1:1',
                                    '4 semanas on-demand',
                                    'Acceso de por vida',
                                    'A tu propio ritmo después de la sesión',
                                    'Comienzo acompañado',
                                    'Videos + lecturas + material descargable'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/85 text-[13px] leading-relaxed">
                                        <svg className="w-4 h-4 text-white/90 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-white/15 pt-6 mb-6">
                                <p className="text-2xl font-semibold text-white">USD $110.50</p>
                                <div className="mt-2 inline-flex items-center gap-2 bg-white/15 rounded-full px-3.5 py-1.5">
                                    <span className="text-white text-sm font-semibold">ARS $85.000</span>
                                    <span className="text-white/60 text-xs">· Residentes en Argentina</span>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/541121829771?text=Hola%20Eli,%20quiero%20hacer%20el%20programa%20H%C3%ADbrida%20de%20M%C3%A9todo%20Calma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-[46px] rounded-full bg-white text-[#4A7C59] font-semibold flex items-center justify-center hover:bg-white/90 transition-all duration-500 text-sm tracking-wide shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
                            >
                                Quiero Híbrida
                            </a>
                        </div>
                    </div>

                    {/* Card 3 — Con Acompañamiento */}
                    <div className="rounded-[28px] bg-white flex flex-col border border-gray-100/80 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-600 ease-out">
                        <div className="p-8 md:p-9 flex flex-col flex-grow">
                            <h3 className="text-lg font-medium text-gray-800 mb-6 tracking-wide">Método Calma con Acompañamiento</h3>
                            <ul className="space-y-3.5 mb-8 flex-grow">
                                {[
                                    'Prácticas personalizadas',
                                    'Feedback directo en cada sesión',
                                    'Sesiones fijas',
                                    'Agenda amplia que se adapta a tus días y horarios',
                                    'Profundidad mayor',
                                    'Seguimiento semana a semana',
                                    'Adaptación según tu progreso',
                                    '100% personalizado'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-500 text-[13px] leading-relaxed">
                                        <svg className="w-4 h-4 text-[#7BAE8A] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-gray-100 pt-6 mb-6">
                                <p className="text-2xl font-semibold text-gray-800">USD $214.50</p>
                                <div className="mt-2 inline-flex items-center gap-2 bg-[#F0F7F2] rounded-full px-3.5 py-1.5">
                                    <span className="text-[#4A7C59] text-sm font-semibold">ARS $165.000</span>
                                    <span className="text-[#4A7C59]/60 text-xs">· Residentes en Argentina</span>
                                </div>
                            </div>
                            <a
                                href="https://wa.me/541121829771?text=Hola%20Eli,%20quiero%20saber%20m%C3%A1s%20sobre%20el%20programa%20con%20Acompa%C3%B1amiento%20de%20M%C3%A9todo%20Calma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-[46px] rounded-full border border-[#4A7C59] text-[#4A7C59] font-medium flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all duration-500 text-sm tracking-wide"
                            >
                                Quiero con acompañamiento
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
