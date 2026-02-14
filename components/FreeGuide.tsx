
import React from 'react';

const FreeGuide: React.FC = () => {
    return (
        <section className="bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Descargá tu guía gratuita para empezar hoy
                </h2>
                <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto font-medium">
                    Recibí una práctica guiada para calmar tu mente en menos de 10 minutos.
                </p>

                <div className="relative w-full overflow-hidden rounded-[32px] shadow-2xl shadow-black/5 bg-[#F9F7F2] border border-gray-100" style={{ minHeight: '600px' }}>
                    <iframe
                        src="https://tally.so/r/xXJEov?transparentBackground=1"
                        width="100%"
                        height="700"
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
