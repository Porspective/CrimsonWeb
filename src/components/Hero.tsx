import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 md:pt-0 min-h-screen flex items-center bg-cream">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Web Design for Local Businesses
              <span className="block text-crimson mt-2">Free Demos by a CS Student</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I create professional websites for local businesses in Norman and Oklahoma City at no cost.
              This helps me build my portfolio while giving you a chance to see how a modern website can
              help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-crimson hover:bg-crimson-dark text-white font-medium py-3 px-6 rounded-md transition-all transform hover:scale-105"
              >
                Get Your Free Demo
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-crimson text-crimson hover:bg-crimson hover:text-white font-medium py-3 px-6 rounded-md transition-all"
              >
                See My Work
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="./crimland.jpeg" 
                  alt="Crimson Landscaping - Professional landscaping services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Looking for a better website?</h3>
                <p className="text-gray-600 mb-4">
                  As a CS student at the University of Oklahoma, I'm offering my skills to help local 
                  businesses establish a professional online presence.
                </p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>• Professional design</span>
                  <span>• Mobile-friendly</span>
                  <span>• Free demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;