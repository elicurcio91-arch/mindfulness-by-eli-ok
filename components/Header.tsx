
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-brand-blue/95 backdrop-blur-sm transition-all">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
        <span className="text-xl font-bold tracking-tight">MindfulnessbyEli</span>
      </div>
    </header>
  );
};

export default Header;
