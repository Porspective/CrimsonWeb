import React from 'react';
import { Check, Zap, Clock } from 'lucide-react';

const Services: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Work With Me</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            As a computer science student passionate about web development, I offer a unique opportunity
            for local businesses to enhance their online presence without any upfront costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Demo */}
          <div className="bg-cream rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-crimson-light rounded-full flex items-center justify-center mb-6 mx-auto">
              <Zap size={32} className="text-crimson" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Free Demo</h3>
            <p className="text-center text-gray-600 mb-6">
              Get a fully functioning website demo at absolutely no cost. This gives you a chance to see
              what your business could look like online before making any commitments.
            </p>
            <ul className="space-y-3">
              {['No upfront costs', 'Fully functional website', 'Custom design for your business'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-crimson mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="mt-6 w-full bg-crimson text-white py-2 px-4 rounded hover:bg-crimson-dark transition-colors flex items-center justify-center"
            >
              Get Started Free
            </button>
          </div>
          
          {/* Basic Package */}
          <div className="bg-cream rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 transform md:translate-y-4">
            <div className="w-16 h-16 bg-crimson-light rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock size={32} className="text-crimson" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Basic Package</h3>
            <p className="text-center text-gray-600 mb-6">
              Perfect for small businesses looking to establish their online presence with a professional website.
            </p>
            <ul className="space-y-3">
              {[
                'Custom domain setup',
                'Mobile-responsive design',
                'Basic SEO optimization',
                '3 months of support'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-crimson mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="mt-6 w-full bg-crimson text-white py-2 px-4 rounded hover:bg-crimson-dark transition-colors flex items-center justify-center"
            >
              Get Started
            </button>
          </div>
          
          {/* Premium Package */}
          <div className="bg-cream rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-crimson-light rounded-full flex items-center justify-center mb-6 mx-auto">
              <Clock size={32} className="text-crimson" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Premium Package</h3>
            <p className="text-center text-gray-600 mb-6">
              Complete solution for businesses needing advanced features and ongoing support.
            </p>
            <ul className="space-y-3">
              {[
                'Everything in Basic Package',
                'Advanced SEO optimization',
                'Content Management System',
                '12 months of support',
                'Monthly performance reports',
                'Priority support response'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check size={20} className="text-crimson mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="mt-6 w-full bg-crimson text-white py-2 px-4 rounded hover:bg-crimson-dark transition-colors flex items-center justify-center"
            >
              Get Started
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            My goal is to help you establish a professional online presence that attracts customers and enhances your business. 
            Let's work together to create a website that truly represents your brand.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-crimson hover:bg-crimson-dark text-white font-medium py-3 px-8 rounded-md transition-all transform hover:scale-105"
          >
            Request Your Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;