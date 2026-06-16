import React from 'react';

const ProgramIncludes: React.FC = () => {
    const items = [
        "Meditaciones guiadas",
        "Material de apoyo",
        "Acompañamiento por WhatsApp",
        "Sesiones individuales",
        "Herramientas para el día a día"
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide mb-6">
                        ¿Qué incluye el programa de 4 semanas?
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                        Todo lo que necesitás para incorporar mindfulness a tu vida real.
                    </p>
                </div>

                {/* Layout */}
                <div className="relative max-w-5xl mx-auto flex flex-col md:block items-center">
                    
                    {/* Central Image */}
                    <div className="relative z-0 w-full max-w-sm mx-auto md:max-w-none md:w-[45%] rounded-[40px] overflow-hidden mb-12 md:mb-0">
                        <img 
                            src="/programa.png" 
                            alt="Programa Mindfulness" 
                            className="w-full h-auto object-cover rounded-[40px] shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
                        />
                    </div>

                    {/* Desktop Floating Cards (Hidden on Mobile) */}
                    <div className="hidden md:block">
                        {/* Card 1: Top Left */}
                        <div className="absolute top-[15%] left-[8%] z-10 bg-white/90 backdrop-blur-md px-7 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 animate-float">
                            <p className="text-gray-700 font-medium tracking-wide text-[15px]">{items[0]}</p>
                        </div>

                        {/* Card 2: Top Right */}
                        <div className="absolute top-[25%] right-[8%] z-10 bg-[#F9F6F0]/90 backdrop-blur-md px-7 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 animate-float" style={{animationDelay: '1s'}}>
                            <p className="text-gray-700 font-medium tracking-wide text-[15px]">{items[1]}</p>
                        </div>

                        {/* Card 3: Middle Left */}
                        <div className="absolute top-[55%] left-[2%] z-10 bg-[#F0F7F2]/90 backdrop-blur-md px-7 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 animate-float" style={{animationDelay: '2s'}}>
                            <p className="text-[#4A7C59] font-medium tracking-wide text-[15px]">{items[2]}</p>
                        </div>

                        {/* Card 4: Bottom Right */}
                        <div className="absolute bottom-[25%] right-[5%] z-10 bg-white/90 backdrop-blur-md px-7 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 animate-float" style={{animationDelay: '1.5s'}}>
                            <p className="text-gray-700 font-medium tracking-wide text-[15px]">{items[3]}</p>
                        </div>

                        {/* Card 5: Bottom Center */}
                        <div className="absolute bottom-[-8%] left-[50%] transform -translate-x-1/2 z-10 bg-[#FAF7F5]/90 backdrop-blur-md px-8 py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 animate-float" style={{animationDelay: '0.5s'}}>
                            <p className="text-[#8B7355] font-medium tracking-wide text-[15px]">{items[4]}</p>
                        </div>
                    </div>

                    {/* Mobile Cards (Visible only on Mobile) */}
                    <div className="md:hidden flex flex-col gap-3 w-full px-4">
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-700 font-medium tracking-wide text-[15px]">{items[0]}</p>
                        </div>
                        <div className="bg-[#F9F6F0] px-6 py-4 rounded-2xl shadow-sm border border-white text-center">
                            <p className="text-gray-700 font-medium tracking-wide text-[15px]">{items[1]}</p>
                        </div>
                        <div className="bg-[#F0F7F2] px-6 py-4 rounded-2xl shadow-sm border border-white text-center">
                            <p className="text-[#4A7C59] font-medium tracking-wide text-[15px]">{items[2]}</p>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 text-center">
                            <p className="text-gray-700 font-medium tracking-wide text-[15px]">{items[3]}</p>
                        </div>
                        <div className="bg-[#FAF7F5] px-6 py-4 rounded-2xl shadow-sm border border-white text-center">
                            <p className="text-[#8B7355] font-medium tracking-wide text-[15px]">{items[4]}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProgramIncludes;
