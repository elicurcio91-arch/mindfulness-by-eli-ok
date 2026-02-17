
import React from 'react';

const Testimonial: React.FC = () => {
    return (
        <section className="bg-bg-secondary/10 pt-0 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <div className="glass rounded-[48px] shadow-2xl shadow-primary/5 p-10 md:p-16 text-center relative overflow-hidden border border-white">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent opacity-30"></div>

                    <div className="mb-10 animate-fade-in">
                        <span className="micro-copy mb-8 text-primary/60">Historia de transformación</span>
                        <div className="relative inline-block">
                            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg"></div>
                            <img
                                src="/testimonio-agusdeslous.jpg"
                                alt="Testimonio de Agus"
                                className="relative z-10 w-24 md:w-28 mx-auto rounded-full shadow-md border-4 border-white"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 mb-10 text-gray-800">
                        <div className="relative">
                            <svg className="absolute -top-6 -left-4 w-12 h-12 text-primary/10" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8c-4.418 0-8 3.582-8 8s3.582 8 8 8c.638 0 1.253-.075 1.844-.216C12.984 25.106 15 27.5 15 27.5l.5-1.5s-2.5-3-2.5-10c0-4.418-3.582-8-8-8zm14 0c-4.418 0-8 3.582-8 8s3.582 8 8 8c.638 0 1.253-.075 1.844-.216C26.984 25.106 29 27.5 29 27.5l.5-1.5s-2.5-3-2.5-10c0-4.418-3.582-8-8-8z" />
                            </svg>
                            <p className="text-xl md:text-2xl leading-relaxed font-medium italic relative z-10">
                                "Hoy tuve mi primera charla con Eli y mi primer acercamiento al mindfulness. No esperaba demasiado de esos 15 minutos y <span className="text-primary font-bold">WOW… mi día cambió completamente</span>."
                            </p>
                        </div>
                        <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-600">
                            Atravesaba días complicados y esa meditación guiada no solo me dio calma, me emocionó desde un lugar que nunca había experimentado.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed font-medium text-gray-600 italic">
                            "Siento que después de hoy voy a conocerme a mí misma desde otro lugar."
                        </p>

                        <div className="pt-6">
                            <p className="font-bold text-gray-900 text-2xl font-outfit">— Agus</p>
                            <span className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">Participante del programa 1:1</span>
                        </div>
                    </div>

                    <div className="pt-10 border-t border-gray-100/50">
                        <div className="flex items-center justify-center gap-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
