import React from 'react';

const AboutInstructor: React.FC = () => {
    return (
        <section className="bg-cream py-24 px-6 border-t border-[#E8ECE9]">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
                
                <div className="w-full md:w-1/3 flex-shrink-0">
                    {/* Placeholder for real photo. Do not generate artificial faces. */}
                    <div className="aspect-[3/4] bg-[#E8ECE9] rounded-sm overflow-hidden flex items-center justify-center relative">
                        {/* If public/sobre mi.jpg exists and works, we can use it. But leaving placeholder text for clarity as requested. */}
                        <img 
                            src="/sobre mi.jpg" 
                            alt="Eli - Instructora de Mindfulness" 
                            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
                            onError={(e) => {
                                // Fallback to placeholder text if image is not found
                                (e.target as HTMLElement).style.display = 'none';
                            }}
                        />
                        <span className="text-[#8DA396] text-sm uppercase tracking-widest text-center px-4 z-10">
                            [FOTOGRAFÍA REAL DE LA INSTRUCTORA]
                        </span>
                    </div>
                </div>

                <div className="w-full md:w-2/3">
                    <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-6">
                        Hola, soy Eli
                    </h2>
                    
                    <div className="space-y-5 text-[#5A5A5A] text-base md:text-lg leading-relaxed">
                        <p>
                            Soy profesora de mindfulness certificada, instructora de yoga y coach ontológica.
                        </p>
                        <p>
                            Hace años trabajo creando espacios y experiencias relacionadas con el bienestar y me interesa especialmente acercar herramientas prácticas que ayuden a las personas a relacionarse de otra manera con el estrés, las emociones y su experiencia cotidiana.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutInstructor;
