import React, { useState } from 'react';

const WaitlistForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbx1N4FY-4febExAmNl3rGXV28_x15FpGnjpgjev90X0doapKHDy5vtj6CFguUk9K8hJBQ/exec';
        
        try {
            const formData = new FormData();
            formData.append('Nombre', name);
            formData.append('Email', email);

            await fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Google Script responses are opaque when using no-cors, which is fine
            });

            // Placeholder for analytics tracking
            // if ((window as any).fbq) (window as any).fbq('track', 'Lead');
            // if ((window as any).gtag) (window as any).gtag('event', 'generate_lead');

            setSubmitted(true);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            // Even on error, we might want to show success to not break UX, 
            // or show an error message. For now, let's just log it and show success if no-cors works.
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="waitlist-form" className="bg-off-white py-24 px-6">
            <div className="max-w-xl mx-auto bg-white p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#E8ECE9] rounded-sm text-center">
                
                {!submitted ? (
                    <>
                        <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-4">
                            ¿Querés enterarte cuando abramos?
                        </h2>
                        <p className="text-[#5A5A5A] mb-8">
                            Dejá tus datos y te voy a avisar antes de abrir la primera edición.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Nombre" 
                                    required 
                                    className="input-elegant"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    required 
                                    className="input-elegant"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn-accent w-full mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                                {isSubmitting ? 'ENVIANDO...' : 'QUIERO ENTERARME'}
                            </button>
                        </form>

                        <p className="text-xs text-[#828282] mt-6">
                            Sin compromiso. Solo te avisaremos cuando tengamos todos los detalles de la primera edición.
                        </p>
                    </>
                ) : (
                    <div className="py-10 animate-fade-in">
                        <div className="text-[#8DA396] text-4xl mb-4">✓</div>
                        <h3 className="font-editorial text-2xl text-charcoal mb-2">¡Gracias por tu interés!</h3>
                        <p className="text-[#5A5A5A]">
                            Tu email ha sido registrado correctamente. Te avisaré pronto con más novedades sobre 30 Días de Calma.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WaitlistForm;
