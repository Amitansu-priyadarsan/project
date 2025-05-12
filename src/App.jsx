import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import ForInvestors from './components/ForInvestors';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AppPreview />
        <ForInvestors />
      </main>
      <Footer />
      <ScrollToTop scrollY={scrollY} />
    </div>
  );
}

export default App;