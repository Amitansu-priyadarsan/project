import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import paperbagImg from '../../assets/paperbag.png';

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stats = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' }
  ];

  return (
    <section 
      id="hero" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-violet-50 to-white overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center md:text-left md:flex md:items-center md:justify-between"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            <motion.span 
              variants={item} 
              className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6"
            >
              Revolutionizing Retail
            </motion.span>
            
            <motion.h1 
              variants={item} 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="text-purple-600">Unifying Commerce</span> <br />
              <span className="text-gray-900">Under One Platform</span>
            </motion.h1>
            
            <motion.p 
              variants={item} 
              className="text-lg text-gray-600 max-w-2xl mb-8"
            >
              Connect supermarts and kirana shops in a single ecosystem. Offer innovative deferred discounts and seamless delivery experiences.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#for-investors" 
                className="px-8 py-3 border border-purple-200 hover:border-purple-300 text-purple-700 font-medium rounded-md transition duration-300 flex items-center justify-center"
              >
                Investor Deck
              </a>
            </motion.div>
            
            <motion.div 
              variants={item} 
              className="flex items-center justify-center md:justify-start mt-10 space-x-2"
            >
              {/* Removed stats display and "500+ retailers already onboarded" text */}
            </motion.div>
          </div>
          
          <motion.div 
            variants={item} 
            className="md:w-1/2 relative"
          >
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden p-2">
              <img
                src={paperbagImg}
                alt="PaperBag App Preview"
                className="w-full h-auto object-contain rounded" 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;