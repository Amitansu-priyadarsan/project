import React from 'react';
import { Phone, Mail, MapPin, Users } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-purple-200">
            We'd love to hear from you! Reach out to us with any questions or inquiries.
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl p-8 sm:p-12 space-y-12">
          
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="bg-purple-500 p-2 rounded-full mr-3">
                <Users size={24} stroke="white" />
              </span>
              Key Personnel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-purple-700">Devayan Dewri</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <a href="tel:+917449324036" className="mt-auto pt-4 inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300">
                  <Phone size={18} className="mr-2" />
                  +91 74493 24036
                </a>
              </div>
              <div className="bg-pink-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-pink-700">Amitansu Priyadarsan</h3>
                <p className="text-gray-600">Founder & CTO</p>
                <a href="tel:+916371640884" className="mt-auto pt-4 inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300">
                  <Phone size={18} className="mr-2" />
                  +91 63716 40884
                </a>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <Mail size={28} className="mr-3 text-purple-600" />
                Email Us
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <a href="mailto:anderntechnologies@gmail.com" className="text-lg text-pink-600 hover:text-pink-800 transition-colors duration-300 flex items-center">
                  <Mail size={20} className="mr-2" />
                  anderntechnologies@gmail.com
                </a>
                <p className="mt-auto pt-4 text-gray-600">We typically respond within 24 hours.</p>
              </div>
            </section>

            <section className="h-full flex flex-col">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin size={28} className="mr-3 text-pink-600" />
                Our Office
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <address className="text-lg text-gray-700 not-italic leading-relaxed">
                  2 Tarapada Chatterjee Lane
                  <br />
                  Howrah, Kolkata
                  <br />
                  West Bengal, India, 711104
                </address>
                 <a 
                  href="https://maps.google.com/?q=2 Tarapada Chatterjee Lane, Howrah, Kolkata, West Bengal, India, 711104" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-auto pt-4 inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300"
                >
                  <MapPin size={18} className="mr-2" />
                  View on Google Maps
                </a>
              </div>
            </section>
          </div>

        </div>
      </div>
     
    </div>
  );
};

export default ContactUs; 