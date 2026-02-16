
import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="bg-[#F9F7F2] pt-0 pb-20">
            <div className="max-w-3xl mx-auto px-6">
                <div className="bg-white rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 p-10 md:p-16 text-center">
                    <div className="mb-10">
                        <img
                            src="/testimonio-agusdeslous.jpg"
                            alt="Testimonio de Agus"
                            className="w-24 md:w-32 mx-auto rounded-2xl shadow-md border-4 border-white"
                        />
                    </div>

                    <div className="space-y-6 mb-10">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                            Hoy tuve mi primera charla con Eli y mi primer acercamiento al mindfulness. No esperaba demasiado de esos 15 minutos y WOW… mi día cambió.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                            Estoy atravesando días complicados y esa meditación guiada no solo me hizo bien, también me emocionó desde un lugar que nunca había experimentado.
                        </p>
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic">
                            Después de hoy siento que voy a conocerme a mí misma desde otro lugar.
                        </p>

                        <p className="font-bold text-gray-900 text-2xl pt-4">— Agus</p>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <p className="text-gray-400 text-sm md:text-base font-semibold tracking-wide uppercase">
                            Resultados reales desde la primera sesión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
