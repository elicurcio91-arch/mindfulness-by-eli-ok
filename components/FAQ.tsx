
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
      question: "¿Qué es el mindfulness y cómo beneficia mi cuerpo?",
      answer: "El mindfulness es la práctica de estar plenamente presente. Beneficia reduciendo el estrés y mejorando la claridad."
    },
    {
      question: "¿Cómo puede el mindfulness ayudarme en mi día a día?",
      answer: "Al entrenar tu cerebro para notar sensaciones sin juzgar, aprendés a salir del piloto automático."
    },
    {
      question: "¿Cuáles son técnicas prácticas para cultivar el mindfulness?",
      answer: "Respiración enfocada, escaneo corporal, meditación caminando y alimentación consciente."
    },
    {
      question: "¿Puede el mindfulness reducir el estrés?",
      answer: "Sí, reduce los niveles de cortisol y ayuda a romper el ciclo de preocupación."
    },
    {
      question: "¿Cómo promueve el bienestar general?",
      answer: "Desarrolla una relación más saludable con tus emociones y una mayor resiliencia."
    }
  ];

  return (
    <section className="bg-white pb-32 px-6">
      <div className="max-w-4xl mx-auto bg-brand-pink rounded-[40px] p-8 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
          ¿Buscás una respuesta?
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
