import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">PaperBag</span>
            </div>
            <p className="text-gray-400 mb-6">
              Unifying commerce under one platform to create a seamless shopping experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#for-investors" className="text-gray-400 hover:text-white transition duration-300">For Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-100 mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="text-white mr-3 mt-1" />
                <span className="text-gray-400">anderntechnologies@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-white mr-3 mt-1" />
                <span className="text-gray-400">7449324036</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-white mr-3 mt-1" />
                <span className="text-gray-400">Office currently remote</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PaperBag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;