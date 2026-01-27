import React from 'react';

const FreeGuide: React.FC = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed mb-6">
                        Dejá tu email y te envío gratuitamente una guía práctica con ejercicios simples para reducir el estrés y volver al presente.
                    </p>
                    <div className="h-1.5 w-24 bg-brand-yellow mx-auto rounded-full"></div>
                </div>

                <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-gray-50 border border-gray-100" style={{ minHeight: '600px' }}>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScwA5plGulx8AdMqDJFJM3WZqFRMPZ2sq2lgxHaDFHtnXQeUQ/viewform?embedded=true"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Formulario de suscripción"
                        className="w-full"
                    >
                        Cargando…
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default FreeGuide;
