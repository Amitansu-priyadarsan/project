import { ShoppingCart, Clock, Store, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const features = [
    {
      id: 1,
      title: "Quick Commerce",
      description: "Lightning-fast deliveries from unified supermarts and kirana stores, with orders arriving in as little as 10 minutes.",
      icon: <ShoppingCart size={24} className="text-purple-600" />
    },
    {
      id: 2,
      title: "Deferred Discounts",
      description: 'Revolutionary "Buy one, claim one later" model that gives customers unprecedented flexibility with their purchases.',
      icon: <Clock size={24} className="text-purple-600" />
    },
    {
      id: 3,
      title: "ONDC Marketplace",
      description: "Empowering local kirana stores through ONDC integration, helping them reach more customers and compete effectively.",
      icon: <Store size={24} className="text-purple-600" />
    },
    {
      id: 4,
      title: "Unified Platform",
      description: "One app for all shopping needs - from supermarkets to neighborhood stores, with consistent experience and rewards.",
      icon: <Layout size={24} className="text-purple-600" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={item} className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-3">
            Core Features
          </motion.span>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gray-900">Reimagining</span> <span className="text-purple-600">Retail Commerce</span>
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform brings together the best of all worlds to create a seamless shopping experience.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Features;