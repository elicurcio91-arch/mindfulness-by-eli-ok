
import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="bg-[#F9F7F2] pt-0 pb-16">
            <div className="max-w-3xl mx-auto px-6">
                <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"></div>
                    <div className="mb-8">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-6">✔ TESTIMONIO REAL</span>
                        <img
                            src="/testimonio-agusdeslous.jpg"
                            alt="Testimonio de Agus"
                            className="w-20 md:w-24 mx-auto rounded-full shadow-sm border-4 border-[#F9F7F2]"
                        />
                    </div>

                    <div className="space-y-6 mb-8">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
                            Hoy tuve mi primera charla con Eli y mi primer acercamiento al mindfulness. No esperaba demasiado de esos 15 minutos y WOW… mi día cambió.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
                            Estoy atravesando días complicados y esa meditación guiada no solo me hizo bien, también me emocionó desde un lugar que nunca había experimentado.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium italic">
                            Después de hoy siento que voy a conocerme a mí misma desde otro lugar.
                        </p>

                        <p className="font-bold text-gray-900 text-xl pt-4">— Agus</p>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <p className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase">
                            Resultados reales desde la primera sesión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
