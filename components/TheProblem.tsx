import React from 'react';

const TheProblem: React.FC = () => {
    return (
        <section className="bg-cream py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-editorial text-4xl md:text-5xl text-charcoal mb-8 leading-tight max-w-2xl">
                        Quizás no necesitás hacer más. Quizás necesitás aprender a parar.
                    </h2>
                    <div className="w-12 h-[2px] bg-[#8DA396]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-[#5A5A5A] text-lg leading-relaxed mb-6">
                            Vivimos gran parte del día pensando, resolviendo, anticipando y respondiendo.
                        </p>
                        <p className="text-[#5A5A5A] text-lg leading-relaxed">
                            A veces tenemos unos minutos libres, pero nuestra mente sigue corriendo.
                        </p>
                    </div>

                    <div className="bg-off-white p-8 md:p-10 rounded-sm shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[#E8ECE9]">
                        <p className="text-charcoal font-medium mb-6">Puede que te resulte familiar:</p>
                        <ul className="space-y-4">
                            {[
                                'Sentir que no podés desconectar',
                                'Estar pensando constantemente en lo que viene',
                                'Reaccionar antes de poder hacer una pausa',
                                'Sentir que estás presente físicamente pero tu cabeza está en otro lado',
                                'Querer meditar pero no conseguir sostener una práctica'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start text-[#5A5A5A] text-base leading-relaxed">
                                    <span className="text-[#8DA396] mr-3 mt-1">✦</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <p className="font-editorial text-2xl md:text-3xl text-charcoal italic">
                        30 Días de Calma nace para crear ese espacio de pausa y convertirlo en una práctica.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TheProblem;
