import { Star, Clock, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import unitmartImg from '../../assets/unitmart.png';

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
      className="py-24 bg-gradient-to-b from-violet-50 to-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            variants={phoneVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-3" style={{ width: 330, height: 650, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="bg-black rounded-[2rem] overflow-hidden w-full h-full flex items-center justify-center border-4 border-gray-200">
                <img
                  src={unitmartImg}
                  alt="App Screenshot"
                  className="object-contain w-full h-full"
                  style={{ background: '#000' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
              Seamless Shopping Experience
            </motion.h2>

            <motion.div variants={container} className="space-y-8">
              {features.map((feature) => (
                <motion.div 
                  key={feature.id} 
                  variants={item}
                  className="flex items-start bg-white rounded-xl shadow-sm p-5"
                >
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    {feature.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AppPreview;