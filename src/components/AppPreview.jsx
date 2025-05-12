import { Star, Clock, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AppPreview() {
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

  const phoneVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };

  const features = [
    {
      id: 1,
      title: "All Stores in One App",
      description: "Browse products from supermarkets, local stores, and specialty shops all in one place.",
      icon: <Star size={20} className="text-purple-600" />
    },
    {
      id: 2,
      title: "Flexible Redemption",
      description: "Buy products with offers now, redeem your freebies or discounts whenever you want.",
      icon: <Clock size={20} className="text-purple-600" />
    },
    {
      id: 3,
      title: "Express Delivery",
      description: "Get your orders delivered in minutes, not hours, with our optimized logistics network.",
      icon: <ShoppingCart size={20} className="text-purple-600" />
    }
  ];

  return (
    <section 
      id="app-preview" 
      className="py-20 bg-gradient-to-b from-violet-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            variants={phoneVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:w-1/2 relative"
          >
            <div className="bg-white p-3 rounded-3xl shadow-xl max-w-xs mx-auto">
              <div className="bg-gray-100 aspect-[9/16] rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-gray-400 flex flex-col items-center">
                  <ShoppingCart size={48} strokeWidth={1.5} />
                  <p className="mt-4 text-sm">App Screenshot</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:w-1/2"
          >
            <motion.span variants={item} className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-3">
              App Preview
            </motion.span>
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Seamless Shopping Experience
            </motion.h2>

            <motion.div variants={container} className="space-y-6">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id} 
                  variants={item}
                  className="flex items-start"
                >
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8">
              <a 
                href="#demo" 
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition duration-300"
              >
                See Full Demo
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AppPreview;