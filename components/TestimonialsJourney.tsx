import React from 'react';

const TestimonialsJourney: React.FC = () => {
    const testimonialImages = [
        "/testimonio (1).png",
        "/testimonio (5).png",
        "/testimonio (6).png",
        "/testimonio (7).png",
        "/testimonio (8).png",
        "/testimonio (10).png",
        "/testimonio 11.png",
        "/testimonio 12.jpg"
    ];

    return (
        <section className="bg-[#FDFBF7] py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="max-w-2xl mb-16">
                    <span className="text-xs tracking-[0.2em] text-gray-400 uppercase font-light block mb-3">
                        Experiencias compartidas
                    </span>
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-serif font-light tracking-wide mb-6 leading-snug">
                        Lo que algunas personas empiezan a notar...
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                        Mensajes espontáneos y registros cotidianos. Silencios que se transforman en espacio, 
                        y el simple hábito de volver a estar presentes en el cuerpo y en el día a día. Sin decoraciones, 
                        solo vivencias compartidas en confianza.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">
                    {testimonialImages.map((src, index) => (
                        <div 
                            key={index} 
                            className="mb-6 break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-700 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] hover:scale-[1.01]"
                        >
                            <img 
                                src={`${src}?v=3`} 
                                alt={`Registro de experiencia ${index + 1}`} 
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsJourney;
