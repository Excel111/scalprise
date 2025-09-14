import React, { useState, useEffect } from 'react';
import { testimonialsAPI } from '../api/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await testimonialsAPI.getAll();
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Fallback to default testimonials
        setTestimonials([
          {
            _id: '1',
            name: 'Sarah Johnson',
            company: 'TechCorp Inc.',
            message: 'Scalprise\'s AI agents transformed our customer service operations. Response times improved by 70%!'
          },
          {
            _id: '2',
            name: 'Michael Chen',
            company: 'DataFlow Solutions',
            message: 'The analytics agents provided insights we never would have discovered on our own. Game-changer!'
          },
          {
            _id: '3',
            name: 'Emily Rodriguez',
            company: 'InnovateStart',
            message: 'Cost-effective solution that scaled with our growing business needs. Highly recommend!'
          }
        ]);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <img 
                    src="https://placehold.co/48x48" 
                    alt={`Profile of ${testimonial.name}`} 
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-blue-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.message}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;