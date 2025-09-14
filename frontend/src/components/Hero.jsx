import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Scale Your Business with 
          <span className="text-blue-600"> AI-Powered Agents</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Intelligent digital agents that automate workflows, enhance customer engagement, 
          and unlock new growth opportunities for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Started
          </a>
          <a 
            href="#services" 
            className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Learn More
          </a>
        </div>

        {/* Hero Image/Illustration */}
        <div className="mt-16">
          <img 
            src="https://placehold.co/800x400" 
            alt="AI agent helping business professionals with data analytics and automation" 
            className="rounded-2xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;