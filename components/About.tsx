
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
                            Sobre mí
                        </h2>
                        <div className="space-y-6 mb-12">
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                                Soy Eli Curcio, instructora de mindfulness con aval internacional, profesora de yoga y coach ontológica.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                                Acompaño procesos individuales para que puedas regular el estrés, comprender tus emociones y construir una relación más calma con tu mente.
                            </p>
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                                Mi enfoque es práctico, humano y personalizado.
                            </p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <span className="h-[1px] w-8 bg-gray-200"></span>
                            <p className="text-sm uppercase tracking-[0.3em] font-black text-gray-400">
                                Instructora de Mindfulness • Yoga • Coaching
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <div className="relative">
                            {/* Decorative background shape */}
                            <div className="absolute -inset-4 bg-[#F9F7F2] rounded-[60px] -rotate-3 z-0"></div>

                            <div className="relative z-10 rounded-[48px] overflow-hidden aspect-[4/5] shadow-2xl shadow-black/10">
                                <img
                                    src="/eli-curcio.jpg"
                                    alt="Eli Curcio"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                                    }}
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
