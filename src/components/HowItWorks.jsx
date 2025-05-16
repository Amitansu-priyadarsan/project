import { User, ShoppingCart, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function HowItWorks() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "Browse products from any supermart or kirana store, all in one place.",
      icon: <User size={28} className="text-white" />
    },
    {
      id: 2,
      title: "Shop",
      description: "Add items to your cart and enjoy seamless checkout with multiple payment options.",
      icon: <ShoppingCart size={28} className="text-white" />
    },
    {
      id: 3,
      title: "Save",
      description: "Redeem deferred discounts whenever you're ready, with no expiration dates.",
      icon: <Star size={28} className="text-white" />
    },
    {
      id: 4,
      title: "Receive",
      description: "Get your order delivered in minutes with real-time tracking and updates.",
      icon: <Clock size={28} className="text-white" />
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-gradient-to-b from-white to-violet-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={item} className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-3">
            Simple Process
          </motion.span>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="text-purple-600">PaperBag</span> Works
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform makes shopping easier than ever with a simple four-step process.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting lines for desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-purple-200" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              variants={item}
              className="flex flex-col items-center"
            >
              <div className="relative mb-6">
                <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center shadow-md mb-4 z-10 relative">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;