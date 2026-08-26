import React from 'react';

const WhatWeExplore: React.FC = () => {
    const topics = [
        'Presencia',
        'Respiración',
        'Cuerpo',
        'Pensamientos',
        'Emociones',
        'Aceptación',
        'Autocompasión',
        'Estrés',
        'Incertidumbre',
        'Presencia en la vida cotidiana'
    ];

    return (
        <section className="bg-off-white py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-14">
                    <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-4">
                        Qué vamos a explorar
                    </h2>
                    <div className="w-8 h-[2px] bg-[#8DA396] mx-auto"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {topics.map((topic, index) => (
                        <div 
                            key={index} 
                            className="bg-cream px-6 py-3 rounded-full text-[#5A5A5A] text-sm md:text-base border border-[#E8ECE9]"
                        >
                            {topic}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeExplore;
