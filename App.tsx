
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Teachers from './components/Teachers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CTASection from './components/CTASection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-blue text-white relative overflow-x-hidden selection:bg-brand-yellow selection:text-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Teachers />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
