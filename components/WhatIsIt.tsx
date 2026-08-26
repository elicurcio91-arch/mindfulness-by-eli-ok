import React from 'react';

const WhatIsIt: React.FC = () => {
    return (
        <section className="bg-off-white py-24 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-editorial text-4xl md:text-5xl text-charcoal mb-10 leading-tight">
                    30 días para practicar, no para hacerlo perfecto.
                </h2>
                
                <div className="space-y-6 text-[#5A5A5A] text-lg leading-relaxed">
                    <p>
                        La propuesta es encontrarnos durante 30 días para practicar mindfulness de forma progresiva.
                    </p>
                    <p>
                        No necesitás experiencia previa.<br/>
                        No necesitás tener una mente tranquila.<br/>
                        No necesitás hacerlo perfecto.
                    </p>
                    <p>
                        La idea es aprender a observar, volver al presente y desarrollar una práctica que puedas llevar también a tu vida cotidiana.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatIsIt;
