import { TrendingUp, Shield, Users, Store, LineChart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function ForInvestors() {
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

  const investmentPoints = [
    {
      id: 1,
      title: "Market Opportunity",
      description: "The Indian retail market is projected to reach $1.3 trillion by 2025, with e-commerce and quick commerce growing at 25% CAGR.",
      icon: <TrendingUp size={24} className="text-purple-600" />
    },
    {
      id: 2,
      title: "Unique Value Proposition",
      description: "Our deferred discount model and unified platform create a unique moat that's difficult for competitors to replicate.",
      icon: <Shield size={24} className="text-purple-600" />
    },
    {
      id: 3,
      title: "Strong Team",
      description: "Founded by  young and enthusiastic entrepreneurs with backgrounds in  technology and Engineering.",
      icon: <Users size={24} className="text-purple-600" />
    },
    {
      id: 4,
      title: "ONDC Integration",
      description: "Early mover advantage with ONDC integration, positioning us to benefit from government-backed open network initiatives.",
      icon: <Store size={24} className="text-purple-600" />
    },
    {
      id: 5,
      title: "Scalable Model",
      description: "Asset-light business model with high margins and multiple revenue streams from commissions, premium listings, and data insights.",
      icon: <LineChart size={24} className="text-purple-600" />
    },
    {
      id: 6,
      title: "Pre-revenue",
      description: "Pre-revenue and raising capital to expand business capabilities and reach. Funding will enable us to accelerate product development, grow our team, and penetrate key markets.",
      icon: <Clock size={24} className="text-purple-600" />
    }
  ];

  return (
    <section 
      id="for-investors" 
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
            For Investors
          </motion.span>
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold mb-6">
            Why Invest in <span className="text-purple-600">PaperBag</span>
          </motion.h2>
          <motion.p variants={item} className="text-gray-600 max-w-2xl mx-auto text-lg">
            A unique opportunity to be part of the future of retail commerce in India.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {investmentPoints.map((point) => (
            <motion.div 
              key={point.id} 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={item}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-12 text-center"
        >
          <a 
            href="#" 
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            Download Investor Deck
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ForInvestors;