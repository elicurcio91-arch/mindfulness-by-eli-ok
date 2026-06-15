import React from 'react';

const Testimonial: React.FC = () => {
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
        <section className="bg-bg-secondary/10 py-10">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide mb-4">
                        Testimonios
                    </h2>
                    <div className="w-12 h-[1px] bg-secondary mx-auto mt-6 mb-6"></div>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                        Leé lo que dicen quienes se animaron a dar el primer paso.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                    {testimonialImages.map((src, index) => (
                        <div key={index} className="mb-6 break-inside-avoid rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 bg-white">
                            <img 
                                src={`${src}?v=3`} 
                                alt={`Testimonio ${index + 1}`} 
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center animate-fade-in">
                    <a
                        href="#services"
                        className="primary-button"
                    >
                        Quiero comenzar
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
