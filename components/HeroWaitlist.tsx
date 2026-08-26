import React from 'react';

const HeroWaitlist: React.FC = () => {
    return (
        <section className="bg-off-white min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 text-center relative overflow-hidden">
            {/* Subtle background element for elegance */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F5F3EF] blur-[100px] opacity-70 pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto z-10 animate-fade-in">
                <span className="text-[#8DA396] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6 block">
                    PRÓXIMAMENTE · EXPERIENCIA GRUPAL DE MINDFULNESS
                </span>
                
                <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl text-charcoal mb-6 leading-tight">
                    30 DÍAS DE CALMA
                </h1>
                
                <h2 className="text-xl md:text-2xl text-[#5A5A5A] font-light mb-8 leading-relaxed max-w-2xl mx-auto">
                    Un mes para bajar el ritmo, entrenar tu atención y volver a estar presente.
                </h2>
                
                <p className="text-[#5A5A5A] mb-12 max-w-xl mx-auto text-base md:text-lg">
                    Estoy preparando una nueva experiencia grupal de mindfulness para practicar durante 30 días, acompañados y de forma progresiva. <br/><br/>
                    Durante el programa habrá prácticas guiadas en vivo, comunidad y grabaciones para que puedas seguir el recorrido aunque algún día no puedas estar presente.
                </p>
                
                <div className="flex flex-col items-center gap-4">
                    <a href="#waitlist-form" className="btn-primary">
                        QUIERO ENTERARME
                    </a>
                    <span className="text-sm text-[#828282]">
                        Dejá tu email y te aviso cuando abra la primera edición.
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HeroWaitlist;
