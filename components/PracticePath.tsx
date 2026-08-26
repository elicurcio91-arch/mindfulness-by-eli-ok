import React from 'react';

const PracticePath: React.FC = () => {
    return (
        <section className="bg-[#FDFBF7] py-24 relative overflow-hidden" id="practica">
            {/* Background Organic Shapes */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#F5EFE6]/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#E8EFE9]/40 rounded-full blur-3xl pointer-events-none translate-x-1/2"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#4A7C59] uppercase block mb-3">
                        El Camino
                    </span>
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide">
                        La Práctica
                    </h2>
                    <div className="w-12 h-[1px] bg-[#4A7C59]/40 mx-auto mt-6 mb-8"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        El camino de la atención plena no es lineal, pero sí tiene una dirección clara: hacia tu interior. 
                        Te propongo dos formas de recorrerlo según el momento en el que estés.
                    </p>
                </div>

                {/* Journey Layout / Organic Split Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch max-w-5xl mx-auto">
                    
                    {/* Path 1: On-Demand */}
                    <div className="relative group bg-white/65 backdrop-blur-md rounded-[32px] p-8 md:p-10 border border-[#EBE6DD] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(74,124,89,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
                        {/* Decorative Step Indicator */}
                        <div className="absolute -top-5 left-8 bg-[#EAE3D5] text-[#766348] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                            Camino Autónomo
                        </div>

                        <div>
                            <div className="mb-8 pt-4">
                                <h3 className="text-2xl font-light text-gray-800 tracking-wide">
                                    Calma On-Demand
                                </h3>
                                <p className="text-gray-500 text-sm mt-2 font-light italic">
                                    Un recorrido flexible a tus tiempos, con autonomía y profundidad.
                                </p>
                            </div>

                            {/* Features as points along a path */}
                            <div className="relative pl-6 border-l border-dashed border-[#D1C7BD] space-y-6 mb-10">
                                {/* Bullet points represented as stops on the path */}
                                {[
                                    { text: "Acceso inmediato y de por vida.", desc: "Para que repases el contenido siempre que lo necesites." },
                                    { text: "A tu propio ritmo y sin horarios fijos.", desc: "Integralo a tu rutina diaria sin presiones." },
                                    { text: "Repetí videos y meditaciones cuando quieras.", desc: "La repetición es la base de la práctica." },
                                    { text: "Videos explicativos + lecturas de apoyo.", desc: "Para profundizar en la teoría detrás de cada ejercicio." },
                                    { text: "Material complementario descargable.", desc: "Llevá las guías y ejercicios con vos en cualquier dispositivo." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-[#A89F91] ring-4 ring-white"></div>
                                        <h4 className="text-gray-800 text-[15px] font-medium leading-normal">{item.text}</h4>
                                        <p className="text-gray-500 text-xs mt-0.5 font-light">{item.desc}</p>
                                    </div>
                                ))}

                                {/* Plus highlighted point */}
                                <div className="relative pt-2">
                                    <div className="absolute -left-[32px] top-4.5 w-3 h-3 rounded-full bg-[#4A7C59] ring-4 ring-white"></div>
                                    <div className="bg-[#F0F7F2] p-4.5 rounded-2xl border border-[#E3EFE6]">
                                        <span className="text-[#4A7C59] font-semibold text-[13px] block">
                                            Plus Especial
                                        </span>
                                        <p className="text-[#4A7C59] text-[13px] font-medium mt-0.5">
                                            Podés sumar una primera sesión online individual para alinear tus intenciones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="border-t border-[#EBE6DD] pt-8 mt-auto">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div>
                                    <span className="text-xs text-gray-400 block uppercase tracking-wider font-medium">Inversión</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-light text-gray-800 font-mono">ARS $60.000</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-[#F0F7F2] rounded-full px-3 py-1 self-start sm:self-center">
                                    <span className="text-[#4A7C59] text-[11px] font-semibold">🇦🇷 Descuento especial para Argentina</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5491121829771?text=Hola%20Eli%2C%20estuve%20viendo%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20pr%C3%A1ctica%20On-Demand."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-[52px] rounded-full border border-[#4A7C59] text-[#4A7C59] font-medium flex items-center justify-center hover:bg-[#4A7C59] hover:text-white transition-all duration-500 text-sm tracking-wide shadow-sm"
                            >
                                Quiero empezar el Camino On-Demand
                            </a>
                        </div>
                    </div>

                    {/* Path 2: Personalizado */}
                    <div className="relative group bg-[#4A7C59] rounded-[32px] p-8 md:p-10 border border-[#3E684A] shadow-[0_20px_45px_rgba(74,124,89,0.12)] hover:shadow-[0_25px_55px_rgba(74,124,89,0.2)] hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between text-white">
                        {/* Decorative Step Indicator */}
                        <div className="absolute -top-5 left-8 bg-[#E8EFE9] text-[#4A7C59] text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase shadow-sm">
                            Acompañamiento Guiado
                        </div>

                        <div>
                            <div className="mb-8 pt-4">
                                <h3 className="text-2xl font-light text-white tracking-wide">
                                    Calma Personalizado
                                </h3>
                                <p className="text-white/70 text-sm mt-2 font-light italic">
                                    Un proceso íntimo y a tu medida, transitado codo a codo en cada paso.
                                </p>
                            </div>

                            {/* Features as points along a path */}
                            <div className="relative pl-6 border-l border-dashed border-white/30 space-y-6 mb-10">
                                {/* Bullet points represented as stops on the path */}
                                {[
                                    { text: "Acompañamiento 100% individual.", desc: "Enfocado enteramente en tu situación personal." },
                                    { text: "Sesiones 1:1 por Zoom (50 min).", desc: "Un espacio seguro de conversación y práctica en vivo." },
                                    { text: "Prácticas adaptadas a tu momento actual.", desc: "Herramientas diseñadas para tus desafíos de hoy." },
                                    { text: "Feedback directo en cada sesión.", desc: "Resolvemos dudas y ajustamos la técnica en tiempo real." },
                                    { text: "Acompañamiento semana a semana por WhatsApp.", desc: "Contacto continuo para sostener el hábito y resolver inquietudes." },
                                    { text: "Agenda flexible.", desc: "Coordinamos los encuentros adaptándonos a tus tiempos." },
                                    { text: "Material complementario exclusivo.", desc: "Lecturas y meditaciones grabadas hechas para tu proceso." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-white ring-4 ring-[#4A7C59]"></div>
                                        <h4 className="text-white text-[15px] font-medium leading-normal">{item.text}</h4>
                                        <p className="text-white/70 text-xs mt-0.5 font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Pricing & CTA */}
                        <div className="border-t border-white/20 pt-8 mt-auto">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div>
                                    <span className="text-xs text-white/60 block uppercase tracking-wider font-medium">Inversión</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-light text-white font-mono">ARS $90.000</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1 self-start sm:self-center">
                                    <span className="text-white text-[11px] font-semibold">🇦🇷 Descuento especial para Argentina</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/5491121829771?text=Hola%20Eli%2C%20estuve%20viendo%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20pr%C3%A1ctica%20Personalizada."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-[52px] rounded-full bg-white text-[#4A7C59] font-semibold flex items-center justify-center hover:bg-[#E8EFE9] transition-all duration-500 text-sm tracking-wide shadow-md"
                            >
                                Quiero empezar el Camino Personalizado
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PracticePath;
