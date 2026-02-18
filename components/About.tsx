
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-bg-secondary/20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
                    <div className="flex-[1.2] animate-fade-in">
                        <span className="micro-copy mb-4 text-secondary">Cercanía y profesionalismo</span>
                        <h2 className="mb-8">
                            Acompañarte a encontrar <br /> tu propio espacio de calma.
                        </h2>

                        <div className="space-y-6 mb-12 text-left">
                            <p className="font-medium text-gray-800">
                                Soy <span className="text-primary font-bold">Eli Curcio</span>, instructora de mindfulness certificada, profesora de yoga y coach ontológica.
                            </p>
                            <p className="text-gray-700">
                                Acompaño procesos individuales para personas que sienten que el estrés y la ansiedad están ocupando demasiado espacio en su vida.
                            </p>
                            <p className="text-gray-700">
                                Mi trabajo es brindarte herramientas prácticas para que puedas regular tu sistema nervioso y vivir con mayor presencia, claridad y menos reactividad emocional.
                            </p>
                        </div>

                        <div className="mb-12 border-l-4 border-primary/20 pl-8 py-2">
                            <p className="emotional-quote text-gray-800 italic">
                                "Mi intención es que puedas recuperar la estabilidad y sentirte bien con vos mismo."
                            </p>
                        </div>

                        <div className="flex items-center gap-4 py-4 border-t border-gray-200/50">
                            <p className="text-sm-guide uppercase tracking-[0.1em] font-bold text-gray-400">
                                Mindfulness • Yoga • Coaching Ontológico
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-sm md:max-w-md">
                        <div className="relative">
                            <div className="absolute -inset-6 bg-white rounded-[60px] rotate-3 z-0 shadow-sm"></div>
                            <div className="absolute -inset-6 border border-primary/10 rounded-[60px] -rotate-3 z-0"></div>
                            <div className="relative z-10 rounded-[50px] overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/5 border-8 border-white">
                                <img
                                    src="/eli-curcio.jpg"
                                    alt="Eli Curcio"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
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
