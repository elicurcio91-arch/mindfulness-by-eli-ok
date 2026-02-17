
import React from 'react';

const TrustBanner: React.FC = () => {
    return (
        <section className="pt-24 pb-8 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
                {/* Premium Image Container */}
                <div className="mb-16 flex justify-center">
                    <div className="relative inline-block">
                        {/* Decorative background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-3xl scale-110"></div>

                        {/* Image with premium styling */}
                        <div className="relative">
                            <img
                                src="/hero-illustration.jpg"
                                alt="Mindfulness y respiración consciente"
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white/80 hover:scale-105 transition-transform duration-500"
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="w-12 h-1 bg-primary/20 mx-auto mb-10 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed font-outfit">
                    Un espacio de <span className="text-secondary font-bold">contención y claridad</span> para gestionar el estrés <br className="hidden md:block" /> sin exigencia ni presión.
                </p>
            </div>
        </section>
    );
};

export default TrustBanner;
