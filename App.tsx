import React from 'react';
import HeroWaitlist from './components/HeroWaitlist';
import TheProblem from './components/TheProblem';
import WhatIsIt from './components/WhatIsIt';
import HowItWorks from './components/HowItWorks';
import WhatWeExplore from './components/WhatWeExplore';
import WhoIsThisFor from './components/WhoIsThisFor';
import WaitlistForm from './components/WaitlistForm';
import AboutInstructor from './components/AboutInstructor';
import FinalCta from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-[#2D2D2D] bg-[#FAFAFA]">
      <main>
        <HeroWaitlist />
        <TheProblem />
        <WhatIsIt />
        <HowItWorks />
        <WhatWeExplore />
        <WhoIsThisFor />
        <WaitlistForm />
        <AboutInstructor />
        <FinalCta />
      </main>
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-[#E8ECE9] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a href="#waitlist-form" className="btn-primary w-full text-center">
            QUIERO ENTERARME
        </a>
      </div>
    </div>
  );
};

export default App;
