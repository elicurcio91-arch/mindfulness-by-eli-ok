import React from 'react';

const HowItWorks: React.FC = () => {
    const blocks = [
        {
            title: 'PRÁCTICA DIARIA',
            description: 'Meditaciones guiadas durante 30 días.'
        },
        {
            title: 'ENCUENTROS EN VIVO',
            description: 'Un espacio grupal para practicar acompañados.'
        },
        {
            title: 'GRABACIONES',
            description: 'Si algún día no podés estar en vivo, tendrás acceso a la grabación.'
        },
        {
            title: 'COMUNIDAD',
            description: 'Un espacio para compartir el proceso y sostener la práctica.'
        }
    ];

    return (
        <section className="bg-cream py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-4">
                        Cómo va a funcionar
                    </h2>
                    <div className="w-8 h-[2px] bg-[#8DA396] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blocks.map((block, index) => (
                        <div key={index} className="bg-off-white p-8 border border-[#E8ECE9] rounded-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                            <h3 className="text-[#8DA396] font-semibold text-sm tracking-wider uppercase mb-4">
                                {block.title}
                            </h3>
                            <p className="text-[#5A5A5A] text-base leading-relaxed">
                                {block.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
