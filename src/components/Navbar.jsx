import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import paperBagLogo from '../../assets/logo2.png';

function Navbar({ scrollY }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const isScrolled = scrollY > 10;

  // Hide/show navbar on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      // Only apply hide/show logic if not on a page that might be shorter than scroll threshold
      // This check can be improved by knowing which routes are long/short
      // For now, let's assume ContactUs page might be short
      if (window.location.pathname.startsWith('/contact') || window.location.pathname.startsWith('/invest')) {
        setShowNavbar(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // scrollY removed from dependencies to avoid issues with path changes

  // Close mobile menu when clicking a link
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/80 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center mt-2">
            <Link to="/" className="flex items-center" aria-label="PaperBag Home" onClick={handleNavLinkClick}>
              <img src={paperBagLogo} alt="PaperBag Logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/?section=features" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={handleNavLinkClick}>
              Features
            </Link>
            <Link to="/?section=how-it-works" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={handleNavLinkClick}>
              How It Works
            </Link>
            <Link to="/?section=for-investors" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={handleNavLinkClick}>
              For Investors
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={handleNavLinkClick}>
              Contact Us
            </Link>
            <Link 
              to="/invest" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-md hover:shadow-lg"
              onClick={handleNavLinkClick}
            >
              Invest
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/?section=features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={handleNavLinkClick}
            >
              Features
            </Link>
            <Link 
              to="/?section=how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={handleNavLinkClick}
            >
              How It Works
            </Link>
            <Link 
              to="/?section=for-investors" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={handleNavLinkClick}
            >
              For Investors
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              onClick={handleNavLinkClick}
            >
              Contact Us
            </Link>
            <Link 
              to="/invest" 
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-purple-600 text-white hover:bg-purple-700"
              onClick={handleNavLinkClick}
            >
              Invest
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;