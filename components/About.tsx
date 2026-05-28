import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-bg-secondary/20 py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl text-gray-900 font-bold">
                        Sobre mí
                    </h2>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-20">
                    <div className="flex-[1.2] animate-fade-in text-left-aligned">
                        <div className="space-y-6">
                            <p className="font-medium text-gray-800 text-lg">
                                Soy Eli, profesora certificada en mindfulness con aval internacional, instructora de yoga y coach ontológica. Hace 7 años me dedico al bienestar de las personas.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Hubo un momento en que estaba completamente desbordada. No podía con mis emociones, no sabía cómo parar. El mindfulness me enseñó a gestionar lo que sentía en lugar de ser arrastrada por ello.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Desde ese momento, mi propósito es acompañar a mujeres a dejar de aguantar el estrés y aprender a gestionarlo, para que puedan estar presentes en su vida y vivirla más plenamente.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Hoy trabajo de forma online, acompañando a mujeres desde cualquier parte del mundo a encontrar más calma, presencia y claridad en su día a día.
                            </p>
                            <p className="font-semibold text-primary text-lg pt-4">
                                Sería un honor para mí poder acompañarte.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-sm mx-auto md:mx-0">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white rounded-[40px] rotate-3 z-0 shadow-sm"></div>
                            <div className="absolute -inset-4 border border-primary/20 rounded-[40px] -rotate-3 z-0"></div>
                            <div className="relative z-10 rounded-[32px] overflow-hidden aspect-[4/5] shadow-lg border-4 border-white">
                                <img
                                    src="/sobre%20mi.jpg"
                                    alt="Eli - Sobre mí"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
