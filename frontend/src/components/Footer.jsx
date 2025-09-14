import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Scalprise</h3>
            <p className="text-gray-300 mb-4">
              AI-powered digital agents that help businesses scale, optimize, and improve their operations.
            </p>
            <div className="flex space-x-4">
              {/* Social Links */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://placehold.co/24x24" alt="Twitter social media icon" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://placehold.co/24x24" alt="LinkedIn professional networking icon" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <img src="https://placehold.co/24x24" alt="Facebook social media platform icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@scalprise.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 AI Street, Tech City</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Scalprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;