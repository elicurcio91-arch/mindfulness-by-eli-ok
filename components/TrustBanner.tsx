
import React from 'react';

const TrustBanner: React.FC = () => {
    return (
        <section className="pt-24 pb-8 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
                <div className="w-12 h-1 bg-primary/20 mx-auto mb-10 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed font-outfit">
                    Un espacio de <span className="text-secondary font-bold">contención y claridad</span> para gestionar el estrés <br className="hidden md:block" /> sin exigencia ni presión.
                </p>
            </div>
        </section>
    );
};

export default TrustBanner;
