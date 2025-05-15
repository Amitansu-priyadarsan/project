import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                U
              </div>
              <span className="ml-2 text-2xl font-bold text-white">UniMart</span>
            </div>
            <p className="text-gray-400 mb-4">
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#for-investors" className="text-gray-400 hover:text-white transition duration-300">For Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">GDPR Compliance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="text-white mr-3 mt-1" />
                <span className="text-gray-400">anderntechnologies@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">7449324036</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-3 mt-1" />
                <span className="text-gray-400">Office currently remote</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} UniMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;