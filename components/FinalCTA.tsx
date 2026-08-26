import React from 'react';

const FinalCta: React.FC = () => {
    return (
        <section className="bg-charcoal text-off-white py-24 px-6 text-center relative overflow-hidden" style={{ backgroundColor: '#2D2D2D' }}>
            <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="font-editorial text-4xl md:text-5xl mb-6 text-[#FAFAFA]">
                    ¿Te gustaría hacerlo conmigo?
                </h2>
                
                <p className="text-[#D1D1D1] text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                    Estoy preparando la primera edición de 30 Días de Calma.<br/>
                    Si querés recibir la información cuando abramos, dejá tu email y te aviso.
                </p>
                
                <a href="#waitlist-form" className="btn-accent">
                    QUIERO ENTERARME
                </a>
            </div>
            
            {/* Subtle background texture/blur */}
            <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#3D3D3D] blur-[80px] opacity-50 pointer-events-none"></div>
        </section>
    );
};

export default FinalCta;
