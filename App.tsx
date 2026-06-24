import React from 'react';
import Hero from './components/Hero';
import VideoPlaceholder from './components/VideoPlaceholder';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Services from './components/Services';
import CtaSection from './components/CtaSection';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      <main>
        <Hero />
        <VideoPlaceholder />
        <Benefits />
        <Testimonial />
        <About />
        <Services />
        <CtaSection />
      </main>
    </div>
  );
};

export default App;


