
import React from 'react';

const FreeGuide: React.FC = () => {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Probá mindfulness hoy mismo (en menos de 10 minutos)
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                    Una práctica guiada simple para calmar tu mente cuando más lo necesitás.
                </p>

                <div className="relative w-full overflow-visible rounded-[32px] shadow-2xl shadow-black/5 bg-[#F9F7F2] border border-gray-100 p-8 md:p-14 pb-16 md:pb-24">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">
                        Recibí tu guía gratuita
                    </h3>

                    <div className="relative w-full max-w-[480px] mx-auto overflow-visible">
                        <iframe
                            src="https://tally.so/embed/xXJEov?transparentBackground=1&hide-title=1&dynamicHeight=1"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            title="Formulario de suscripción"
                            scrolling="no"
                            className="w-full"
                            style={{
                                border: 'none',
                                overflow: 'hidden',
                                minHeight: '600px'
                            }}
                        >
                            Cargando…
                        </iframe>
                    </div>

                    <p className="text-sm text-gray-500 mt-10 font-medium">
                        No envío spam. Solo contenido útil y práctico.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FreeGuide;
