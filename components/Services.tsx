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
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-5 animate-fade-in">
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

                {/* Floating Cards & Big Image Layout */}
                <div className="relative max-w-[1100px] mx-auto flex flex-col md:block items-center mb-28 animate-fade-in">
                    
                    {/* Central Image - BIGGER */}
                    <div className="relative z-0 w-full max-w-2xl mx-auto md:max-w-none md:w-[90%] rounded-[32px] md:rounded-[48px] overflow-hidden mb-16 md:mb-0">
                        <img 
                            src="/programa.png" 
                            alt="Programa Mindfulness" 
                            className="w-full h-auto object-cover rounded-[32px] md:rounded-[48px] shadow-[0_12px_48px_rgba(0,0,0,0.05)] border border-gray-100"
                        />
                    </div>

                    {/* Desktop Floating Cards (Overlapping image elegantly) */}
                    <div className="hidden md:block">
                        {/* Card 1 — Sage Green Accent */}
                        <div className="absolute top-[8%] left-[-1%] lg:left-[-4%] z-10 bg-white/95 backdrop-blur-lg px-6 py-4.5 rounded-[20px] shadow-[0_20px_45px_rgba(0,0,0,0.05)] border-l-4 border-l-[#4A7C59] border-y border-r border-gray-100/80 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 animate-float max-w-[280px]">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#4A7C59] uppercase block mb-1">Herramientas</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">
                                Gestioná el estrés con más herramientas
                            </p>
                        </div>
                        {/* Card 2 — Muted Gold Accent */}
                        <div className="absolute top-[22%] right-[-1%] lg:right-[-4%] z-10 bg-white/95 backdrop-blur-lg px-6 py-4.5 rounded-[20px] shadow-[0_20px_45px_rgba(0,0,0,0.05)] border-l-4 border-l-[#D4AF37] border-y border-r border-gray-100/80 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 animate-float max-w-[280px]" style={{animationDelay: '1s'}}>
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#B59424] uppercase block mb-1">Emociones</span>
                            <p className="text-[#614D38] font-semibold text-[15px] leading-relaxed">
                                Aprendé a acompañar tus emociones
                            </p>
                        </div>
                        {/* Card 3 — Lilac Accent */}
                        <div className="absolute top-[48%] left-[-3%] lg:left-[-6%] z-10 bg-white/95 backdrop-blur-lg px-6 py-4.5 rounded-[20px] shadow-[0_20px_45px_rgba(0,0,0,0.05)] border-l-4 border-l-[#7E6B8F] border-y border-r border-gray-100/80 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 animate-float max-w-[280px]" style={{animationDelay: '2s'}}>
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#7E6B8F] uppercase block mb-1">Presencia</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">
                                Cultivá más presencia en tu día a día
                            </p>
                        </div>
                        {/* Card 4 — Taupe Accent */}
                        <div className="absolute top-[64%] right-[-3%] lg:right-[-6%] z-10 bg-white/95 backdrop-blur-lg px-6 py-4.5 rounded-[20px] shadow-[0_20px_45px_rgba(0,0,0,0.05)] border-l-4 border-l-[#8B7355] border-y border-r border-gray-100/80 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 animate-float max-w-[280px]" style={{animationDelay: '1.5s'}}>
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#8B7355] uppercase block mb-1">Acompañamiento</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">
                                Recibí acompañamiento durante el proceso
                            </p>
                        </div>
                        {/* Card 5 — Mint Accent */}
                        <div className="absolute bottom-[-4%] left-[50%] transform -translate-x-1/2 z-10 bg-white/95 backdrop-blur-lg px-8 py-4.5 rounded-[20px] shadow-[0_20px_45px_rgba(0,0,0,0.05)] border-l-4 border-l-[#5F8575] border-y border-r border-gray-100/80 hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] transition-all duration-300 animate-float max-w-[320px] text-center" style={{animationDelay: '0.5s'}}>
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#5F8575] uppercase block mb-1">Práctica</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">
                                Construí una práctica sostenible
                            </p>
                        </div>
                    </div>

                    {/* Mobile Cards (Visible only on Mobile) */}
                    <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-4 mt-[-40px] relative z-10">
                        <div className="bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.04)] border-l-4 border-l-[#4A7C59] border-y border-r border-gray-100 text-left">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#4A7C59] uppercase block mb-1">Herramientas</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">Gestioná el estrés con más herramientas</p>
                        </div>
                        <div className="bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.04)] border-l-4 border-l-[#D4AF37] border-y border-r border-gray-100 text-left">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#B59424] uppercase block mb-1">Emociones</span>
                            <p className="text-[#614D38] font-semibold text-[15px] leading-relaxed">Aprendé a acompañar tus emociones</p>
                        </div>
                        <div className="bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.04)] border-l-4 border-l-[#7E6B8F] border-y border-r border-gray-100 text-left">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#7E6B8F] uppercase block mb-1">Presencia</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">Cultivá más presencia en tu día a día</p>
                        </div>
                        <div className="bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.04)] border-l-4 border-l-[#8B7355] border-y border-r border-gray-100 text-left">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#8B7355] uppercase block mb-1">Acompañamiento</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">Recibí acompañamiento durante el proceso</p>
                        </div>
                        <div className="bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-[0_12px_24px_rgba(0,0,0,0.04)] border-l-4 border-l-[#5F8575] border-y border-r border-gray-100 text-left sm:col-span-2">
                            <span className="text-[10px] font-bold tracking-[0.15em] text-[#5F8575] uppercase block mb-1">Práctica</span>
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">Construí una práctica sostenible</p>
                        </div>
                    </div>
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
                        {/* Badge Oferta */}
                        <div className="bg-[#F0F7F2] text-[#4A7C59] text-[11px] font-bold tracking-[0.12em] uppercase text-center py-2.5 px-4 rounded-t-[28px] border-b border-[#E3EFE6]">
                            ✨ Oferta lanzamiento · Mes de junio
                        </div>
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

                {/* PDF Download Section */}
                <div className="mt-16 text-center max-w-xl mx-auto animate-fade-in">
                    <p className="text-gray-500 text-sm mb-4 font-light uppercase tracking-wider">
                        ¿Querés descargar la información del programa?
                    </p>
                    <a
                        href="/programa 4 semanas .pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white hover:bg-[#FAF9F6] text-gray-800 font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm border border-gray-200 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
                    >
                        <svg className="w-5 h-5 text-[#4A7C59]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Descargar programa en PDF
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;
