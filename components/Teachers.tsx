
import React from 'react';

const Teachers: React.FC = () => {
  return (
    <section className="bg-white pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Tu Instructora
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
          {/* Contenedor de Imagen */}
          <div className="w-full md:w-5/12 relative group">
            <div className="absolute inset-0 bg-brand-yellow rounded-[40px] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl bg-gray-200">
              <img
                src="/eli-curcio.jpg"
                alt="Eliana"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenedor de Contenido */}
          <div className="w-full md:w-7/12 text-left pt-8">
            <h3 className="text-5xl font-bold text-gray-900 mb-8">Eli Curcio</h3>

            {/* Texto corregido a gris oscuro para contraste sobre fondo blanco */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
              <p>
                Soy Eliana, profesora certificada en mindfulness con aval internacional, instructora de yoga y coach ontológico.
              </p>
              <p>
                Además soy contadora (UBA), magíster en gestión ambiental en España, y emprendedora en bienestar desde hace más de 5 años.
              </p>
              <p>
                Hoy integro todo este camino —lo académico y lo espiritual— para crear y compartir prácticas simples que nos ayuden a estar más presentes, con más calma y claridad en lo cotidiano.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <a
                href="https://instagram.com/mindfulnessbyeli"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-gray-900 font-bold hover:text-brand-blue transition-colors group text-xl"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand-blue/10 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </div>
                <span>@mindfulnessbyeli</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
