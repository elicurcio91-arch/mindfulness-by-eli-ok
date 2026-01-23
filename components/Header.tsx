
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-brand-blue/95 backdrop-blur-sm transition-all">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
        <span className="text-xl font-bold tracking-tight">MindfulnessbyEli</span>
      </div>
      
      <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-white/90">
        <a href="#" className="hover:text-white transition-colors">Meditación</a>
        <a href="#" className="hover:text-white transition-colors">Sueño</a>
        <a href="#" className="hover:text-white transition-colors">Estrés</a>
        <a href="#" className="hover:text-white transition-colors">Mindfulness</a>
      </nav>

      <a 
        href="https://calendly.com/elicurcio-91/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:inline-block px-6 py-2.5 border border-white/30 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-brand-blue transition-all"
      >
        Probalo gratis
      </a>
    </header>
  );
};

export default Header;
