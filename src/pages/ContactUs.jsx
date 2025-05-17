import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-24 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Key Personnel</h2>
          <div className="space-y-3">
            <p className="text-lg">
              <span className="font-medium">Devayan Dewri:</span> Founder & CEO
              <br />
              <a href="tel:+917449324036" className="text-blue-600 hover:text-blue-800">📞 7449324036</a>
            </p>
            <p className="text-lg">
              <span className="font-medium">Amitansu Priyadarsan:</span> Founder & CTO
              <br />
              <a href="tel:+916371640884" className="text-blue-600 hover:text-blue-800">📞 6371640884</a>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Email</h2>
          <p className="text-lg">
            <a href="mailto:anderntechnologies@gmail.com" className="text-blue-600 hover:text-blue-800">📧 anderntechnologies@gmail.com</a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Office Address</h2>
          <p className="text-lg leading-relaxed">
            2/3/2 Tarapada Chatterjee Lane
            <br />
            Howrah, Kolkata
            <br />
            West Bengal, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 