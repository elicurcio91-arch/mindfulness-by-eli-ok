
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            Sobre mí
                        </h2>

                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                            <p>
                                Soy Eli Curcio, instructora de mindfulness con aval internacional, profesora de yoga y coach ontológica.
                            </p>
                            <p>
                                Acompaño procesos individuales para que puedas regular el estrés, comprender tus emociones y construir una relación más calma con tu mente.
                            </p>
                            <p>
                                Mi enfoque es práctico, humano y personalizado.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                                Instructora de Mindfulness • Yoga • Coaching
                            </span>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 order-1 md:order-2">
                        <div className="relative">
                            {/* Decorative background element */}
                            <div className="absolute -inset-4 bg-[#D1FAE5] rounded-[48px] rotate-3 -z-10 opacity-50"></div>

                            <div className="aspect-[4/5] rounded-[40px] overflow-hidden soft-shadow bg-gray-100">
                                <img
                                    src="/eli-curcio.jpg"
                                    alt="Eli Curcio"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
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
