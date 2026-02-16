
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                            Sobre mí
                        </h2>

                        <div className="space-y-6 mb-10 text-left">
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                Soy <span className="text-gray-900 font-bold">Eli Curcio</span>, instructora de mindfulness certificada internacionalmente, profesora de yoga y coach ontológica.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                Acompaño procesos individuales para personas que sienten estrés, ansiedad o sobrecarga mental y quieren aprender a relacionarse distinto con lo que sienten y piensan.
                            </p>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                Trabajo de forma cercana, práctica y personalizada, porque cada proceso es único.
                            </p>
                        </div>

                        <div className="mb-10">
                            <p className="text-2xl md:text-3xl text-emerald-600 font-bold leading-tight">
                                "Mi intención es que puedas sentirte más en calma dentro de tu propia mente."
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="h-[1px] w-8 bg-gray-200"></span>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
                                Instructora de Mindfulness • Yoga • Coaching
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-sm">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#F9F7F2] rounded-[48px] -rotate-2 z-0"></div>
                            <div className="relative z-10 rounded-[40px] overflow-hidden aspect-[4/5] shadow-xl shadow-black/5 border border-white">
                                <img
                                    src="/eli-curcio.jpg"
                                    alt="Eli Curcio"
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
