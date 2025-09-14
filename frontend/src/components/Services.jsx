import React, { useState, useEffect } from 'react';
import { servicesAPI } from '../api/api';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await servicesAPI.getAll();
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to default services
        setServices([
          {
            _id: '1',
            title: 'AI Scaling Agents',
            description: 'Intelligent agents that help businesses scale operations seamlessly by automating repetitive tasks and optimizing resource allocation.',
            icon: 'scale'
          },
          {
            _id: '2',
            title: 'Analytics Agents',
            description: 'Data-driven agents that provide real-time insights, predictive analytics, and actionable recommendations for business growth.',
            icon: 'analytics'
          },
          {
            _id: '3',
            title: 'Automation Agents',
            description: 'Efficiency-focused agents that streamline workflows, reduce manual intervention, and improve operational productivity.',
            icon: 'automation'
          }
        ]);
      }
    };

    fetchServices();
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our AI Agent Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge AI solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service._id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <img 
                  src="https://placehold.co/48x48" 
                  alt={`Icon representing ${service.title} service`} 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;