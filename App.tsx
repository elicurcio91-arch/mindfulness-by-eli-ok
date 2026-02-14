
import React from 'react';
import Hero from './components/Hero';
import Identification from './components/Identification';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Explanation from './components/Explanation';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Identification />
        <Benefits />
        <Process />
        <Explanation />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
