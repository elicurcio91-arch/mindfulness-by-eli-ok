import React from 'react';

const FreeGuide: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <div className="mb-12">
                    <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed mb-6">
                        Dejá tu email y te envío gratuitamente una guía práctica con ejercicios simples para reducir el estrés y volver al presente.
                    </p>
                    <div className="h-1.5 w-24 bg-brand-yellow mx-auto rounded-full"></div>
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="relative w-full rounded-2xl shadow-xl bg-gray-50 border border-gray-100">
                        <iframe
                            src="https://tally.so/embed/xXJEov?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            title="Formulario de suscripción"
                            className="w-full"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeGuide;
