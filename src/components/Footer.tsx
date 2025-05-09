import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Porter Robertson</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Creating professional website demos for local businesses in Norman and Oklahoma City.
              University of Oklahoma CS student offering free web design services.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-crimson hover:bg-crimson-dark px-4 py-2 rounded text-sm font-medium transition-colors"
            >
              Get Your Free Demo
            </button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Website Design',
                'Responsive Development',
                'Business Landing Pages',
                'Portfolio Websites',
                'Local Business Websites',
              ].map((service, index) => (
                <li key={index} className="text-gray-400">{service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Porter Robertson. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            University of Oklahoma Computer Science Student
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;