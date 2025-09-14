import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of multiple industries with tailored AI solutions for your specific business needs.',
      icon: 'expertise'
    },
    {
      title: '24/7 Availability',
      description: 'Our AI agents work around the clock, ensuring continuous operation and support for your business.',
      icon: 'availability'
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your operations without limitations with our flexible and scalable AI infrastructure.',
      icon: 'scalable'
    },
    {
      title: 'Cost-Effective',
      description: 'Reduce operational costs significantly while maintaining high-quality service and efficiency.',
      icon: 'cost-effective'
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Scalprise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our AI-powered approach to business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <img 
                  src="https://placehold.co/48x48" 
                  alt={`Icon representing ${benefit.title} benefit`} 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Businesses Served</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-gray-600">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;