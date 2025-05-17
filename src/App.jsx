import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import ForInvestors from './components/ForInvestors';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';

const HomePageLayout = ({ scrollY }) => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        // Timeout to ensure page has rendered and element is available
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]); // Rerun when location changes

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <AppPreview />
      <ForInvestors />
    </>
  );
};

function App() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    setScrollY(0);
    // Scroll to top on route change, unless it's a section scroll on the same page
    if (!location.search.includes('section=')) {
        window.scrollTo(0, 0);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Navbar scrollY={scrollY} />
      <main>
        <Routes>
          <Route path="/" element={<HomePageLayout scrollY={scrollY} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/invest" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop scrollY={scrollY} />
    </div>
  );
}

export default App;