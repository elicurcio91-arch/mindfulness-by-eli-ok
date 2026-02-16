
import React from 'react';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Identification from './components/Identification';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Explanation from './components/Explanation';
import Testimonial from './components/Testimonial';
import FreeGuide from './components/FreeGuide';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Website optimization build trigger
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <TrustBanner />
        <Identification />
        <Benefits />
        <Process />
        <Explanation />
        <Testimonial />
        <FreeGuide />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
