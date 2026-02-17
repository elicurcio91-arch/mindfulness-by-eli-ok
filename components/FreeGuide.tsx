
import React from 'react';

const FreeGuide: React.FC = () => {
    return (
        <section className="bg-bg-secondary/20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="animate-fade-in">
                    <span className="micro-copy mb-4 text-secondary">Recurso gratuito</span>
                    <h2 className="mb-6">
                        Probá mindfulness en menos de 10 minutos
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                        Accedé a una práctica guiada diseñada para calmar tu mente cuando más lo necesitás.
                    </p>

                    <div className="relative w-full overflow-hidden rounded-[40px] shadow-xl bg-white border border-white p-8 md:p-16">
                        <div className="mb-10">
                            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                                Recibí tu guía práctica
                            </h3>
                            <p className="text-gray-500 font-medium text-lg">
                                Herramientas para integrar la calma en tu rutina diaria.
                            </p>
                        </div>

                        <div className="relative w-full max-w-[520px] mx-auto overflow-visible min-h-[500px]">
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

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Privacidad protegida • Sin spam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeGuide;
