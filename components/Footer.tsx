
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5B63D6] text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
            <span className="text-lg font-bold">MindfulnessbyEli</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-medium">
          <div>
            <h4 className="font-bold mb-4 opacity-50 text-xs uppercase tracking-wider">Sobre nosotros</h4>
            <ul className="space-y-3 opacity-80">
              <li><a href="#" className="hover:opacity-100">Sobre MindfulnessbyEli</a></li>
              <li><a href="#" className="hover:opacity-100">Comunidad</a></li>
              <li><a href="#" className="hover:opacity-100">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 opacity-50 text-xs uppercase tracking-wider">Soporte</h4>
            <ul className="space-y-3 opacity-80">
              <li><a href="#" className="hover:opacity-100">Ayuda</a></li>
              <li><a href="#" className="hover:opacity-100">Contacto</a></li>
              <li><a href="#" className="hover:opacity-100">Accesibilidad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 opacity-50 text-xs uppercase tracking-wider">Contacto</h4>
            <p className="opacity-80 mb-4">hola@mindfulnessbyeli.com</p>
            <div className="flex gap-4 opacity-80">
              <span className="cursor-pointer hover:opacity-100">TW</span>
              <span className="cursor-pointer hover:opacity-100">IG</span>
              <span className="cursor-pointer hover:opacity-100">FB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs opacity-40 border-t border-white/10 pt-8">
        <p>© 2026 MindfulnessbyEli, Inc.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Términos</a>
          <a href="#" className="hover:text-white">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
