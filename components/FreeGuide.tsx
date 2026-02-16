
import React from 'react';

const FreeGuide: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Probá mindfulness hoy mismo (en menos de 10 minutos)
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                    Una práctica guiada simple para calmar tu mente cuando más lo necesitás.
                </p>

                <div className="relative w-full overflow-hidden rounded-[24px] shadow-sm bg-[#F9F7F2] border border-gray-100 p-8 md:p-12">
                    <div className="mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Recibí tu guía gratuita
                        </h3>
                        <p className="text-gray-500 font-medium">
                            Guía para practicar mindfulness todos los días
                        </p>
                    </div>

                    <div className="relative w-full max-w-[480px] mx-auto overflow-visible min-h-[500px]">
                        <iframe
                            src="https://tally.so/embed/xXJEov?transparentBackground=1&hide-title=1&dynamicHeight=1"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            marginHeight={0}
                            marginWidth={0}
                            title="Formulario de suscripción"
                            scrolling="no"
                            className="w-full"
                            style={{
                                border: 'none',
                                overflow: 'hidden',
                                minHeight: '500px'
                            }}
                        >
                            Cargando…
                        </iframe>
                    </div>

                    <p className="text-xs text-gray-400 mt-8 font-bold uppercase tracking-widest">
                        No envío spam. Solo contenido útil y práctico.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FreeGuide;
