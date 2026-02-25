
import React, { useEffect } from 'react';

const ThankYou: React.FC = () => {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const currentScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (currentScript) {
                document.body.removeChild(currentScript);
            }
        };
    }, []);

    return (
        <section className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center py-16 px-6 relative overflow-hidden">
            {/* Subtle decorative background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#A78BFA]/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-[700px] w-full text-center animate-fade-in flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-10 leading-tight">
                    GRACIAS POR COMPLETAR EL FORMULARIO 🤍
                </h1>

                <div className="space-y-8 text-[#555555] text-lg md:text-xl leading-relaxed font-sans subpixel-antialiased">
                    <p>
                        Si llegaste hasta acá, probablemente estés viviendo con la mente acelerada, tensión constante o dificultad para desconectar del trabajo.
                    </p>
                    <p>
                        Este entrenamiento es un proceso <strong>1:1 de 4 semanas</strong> donde trabajamos regulación del sistema nervioso, reducción del ruido mental y herramientas concretas para gestionar ansiedad, enojo y frustración.
                    </p>
                    <p className="text-gray-800 font-medium italic">
                        El siguiente paso es agendar tu charla gratuita de claridad de 15 minutos para entender qué estás necesitando hoy y ver si este acompañamiento es adecuado para vos.
                    </p>
                </div>

                {/* Subtle separator */}
                <div className="w-full max-w-[200px] h-[1px] bg-gray-200 my-12"></div>

                <p className="text-lg md:text-xl text-[#333333] font-semibold mb-10">
                    Elegí tu horario disponible 👇
                </p>

                {/* Calendly Iframe Embed */}
                <div
                    className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100/50"
                    style={{ minWidth: '320px', height: '700px' }}
                >
                    <iframe
                        src="https://calendly.com/elicurcio-91/15min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a78bfa"
                        width="100%"
                        height="700"
                        frameBorder="0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;
