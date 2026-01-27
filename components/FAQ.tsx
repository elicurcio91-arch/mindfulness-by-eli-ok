
import React, { useState } from 'react';

const AccordionItem: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-dark text-lg font-bold pr-8">
          {question}
        </span>
        <span className="text-2xl text-dark/50 font-light">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-dark/70 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "🧠 ¿Qué es el mindfulness y cómo puede beneficiar mi cuerpo y mi mente?",
      answer: "El mindfulness es una práctica que te ayuda a entrenar la atención en el momento presente, reduciendo la rumiación mental y mejorando tu capacidad de regular el estrés, las emociones y la concentración. Con práctica regular, favorece un mayor equilibrio emocional, mejor descanso y más claridad mental."
    },
    {
      question: "🌿 ¿Cómo puede ayudarme el mindfulness en mi vida diaria?",
      answer: "El mindfulness te permite pausar, observar tus pensamientos y responder con mayor calma frente a situaciones de presión. En el día a día, ayuda a manejar mejor el estrés laboral, mejorar el foco, dormir mejor y relacionarte de manera más consciente con vos y con los demás."
    },
    {
      question: "🧘 ¿Qué técnicas prácticas voy a aprender?",
      answer: "Vas a aprender ejercicios simples de respiración consciente, meditación guiada, escáner corporal y prácticas breves que podés integrar fácilmente en tu rutina diaria, incluso en medio del trabajo o en pocos minutos."
    },
    {
      question: "🔥 ¿El mindfulness realmente ayuda a reducir el estrés?",
      answer: "Sí. Diversos estudios muestran que la práctica regular de mindfulness reduce los niveles de estrés, ansiedad y tensión corporal. Al entrenar la atención, el sistema nervioso se regula y el cuerpo entra más fácilmente en estados de calma y recuperación."
    },
    {
      question: "✨ ¿Cómo mejora mi bienestar general?",
      answer: "El mindfulness fortalece la conexión con tu cuerpo y tus emociones, mejora la calidad del sueño, la concentración y la capacidad de disfrute. A largo plazo, contribuye a una vida más equilibrada, consciente y saludable."
    }
  ];

  return (
    <section className="bg-white pb-32 px-6">
      <div className="max-w-4xl mx-auto bg-brand-pink rounded-[40px] p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-1">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
