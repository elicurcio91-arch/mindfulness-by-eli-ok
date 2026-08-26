import React from 'react';

const WhoIsThisFor: React.FC = () => {
    return (
        <section className="bg-cream py-24 px-6 border-t border-[#E8ECE9]">
            <div className="max-w-3xl mx-auto">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-4">
                        Este espacio puede ser para vos si...
                    </h2>
                    <div className="w-8 h-[2px] bg-[#8DA396] mx-auto md:mx-0"></div>
                </div>

                <ul className="space-y-6 mb-12">
                    {[
                        'Querés empezar a meditar',
                        'Sentís que necesitás bajar el ritmo',
                        'Tu mente está constantemente ocupada',
                        'Querés desarrollar más presencia',
                        'Te cuesta sostener una práctica por tu cuenta',
                        'Querés explorar mindfulness de una manera práctica'
                    ].map((item, index) => (
                        <li key={index} className="flex items-start text-[#5A5A5A] text-lg leading-relaxed">
                            <span className="text-[#8DA396] mr-4 mt-1 opacity-80">⎯</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="bg-[#E8ECE9]/40 p-6 rounded-sm text-center md:text-left border-l-2 border-[#8DA396]">
                    <p className="text-charcoal font-medium">No necesitás experiencia previa.</p>
                </div>
            </div>
        </section>
    );
};

export default WhoIsThisFor;
