import React from 'react';

const Services: React.FC = () => {
    return (
        <section className="bg-[#FDFBF7] py-10" id="services">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide">
                        Formas en que puedo acompañarte
                    </h2>
                    <div className="w-12 h-[1px] bg-secondary mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 bg-white flex flex-col group border border-gray-50">
                        <div className="overflow-hidden">
                            <img 
                                src="/metodo calma.png" 
                                alt="Método Calma" 
                                className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col flex-grow">
                            <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">Método Calma</h3>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                4 semanas de acompañamiento on line 1:1 para aprender a gestionar el estrés y recuperar la calma en el día a día.
                            </p>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Trabajamos juntas con prácticas concretas de mindfulness adaptadas a tu vida real. Sin cambiar toda tu rutina, sin meditar una hora al día.
                            </p>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Al terminar, vas a poder reconocer cuándo el estrés aparece, saber cómo manejarlo y terminar el día sin llevarte el trabajo a la cama.
                            </p>
                            <p className="text-sm md:text-base font-semibold text-gray-800 mt-auto pt-4">
                                Proceso 100% con acompañamiento
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 bg-white flex flex-col group border border-gray-50">
                        <div className="overflow-hidden">
                            <img 
                                src="/aprende a meditar.png" 
                                alt="Aprendé a meditar" 
                                className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col flex-grow">
                            <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">Aprendé a meditar en 30 días</h3>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Un programa on line para empezar desde cero y construir una práctica real que puedas sostener en el tiempo.
                            </p>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Durante 30 días recibís audios de meditación, material y ejercicios prácticos. Sin experiencia previa, a tu ritmo.
                            </p>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Vas a tener una práctica propia. Una forma de estar más presente, más tranquila y conectada con vos misma.
                            </p>
                            <p className="text-sm md:text-base font-medium text-secondary mt-auto pt-4">
                                Disponible con o sin acompañamiento 1:1.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 bg-white flex flex-col group border border-gray-50">
                        <div className="overflow-hidden">
                            <img 
                                src="/sesiones ind.png" 
                                alt="Sesiones individuales" 
                                className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col flex-grow">
                            <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">Sesiones individuales</h3>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Un espacio para vos, de 50 minutos on line, donde trabajamos lo que necesitás en este momento.
                            </p>
                            <p className="mb-4 text-sm md:text-base text-gray-500 leading-relaxed">
                                Puede ser una práctica guiada, trabajar una emoción, aprender una herramienta concreta o simplemente tener un momento de pausa en tu semana.
                            </p>
                            <p className="text-sm md:text-base font-medium text-secondary mt-auto pt-4">
                                Sin compromiso de continuidad. Solo cuando lo necesitás.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
