import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Modern Horse Sales",
    description: "A sophisticated platform showcasing premium horses with detailed listings and gallery.",
    image: "horse.jpeg",
    category: "Equestrian",
    link: "https://cr-horses.com/#"
  },
  {
    id: 2,
    title: "MDN Lawn & Landscape",
    description: "Professional landscaping and lawn maintenance services website.",
    image: "lawn.jpeg",
    category: "Landscaping",
    link: "https://porspective.github.io/MDN-website/"
  },
  {
    id: 3,
    title: "Crimson Clean",
    description: "Professional pressure washing services for residential and commercial properties in Norman.",
    image: "pressure.jpeg",
    category: "Cleaning Services",
    link: "https://crimson-clean.com/"
  },
  {
    id: 4,
    title: "Crimson Landscaping",
    description: "Complete landscaping solutions including design, installation, and maintenance services.",
    image: "crimland.jpeg",
    category: "Landscaping",
    link: "https://crimson-landscaping.com"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some examples of demo websites I've created for local businesses.
            Each project is designed to meet the specific needs of the business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-crimson bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-crimson px-4 py-2 rounded-md flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  ) : (
                    <button className="bg-white text-crimson px-4 py-2 rounded-md flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <span className="text-xs bg-crimson-light text-crimson-dark px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic mb-4">
            These are placeholder examples. Your business could be featured here next!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center bg-crimson hover:bg-crimson-dark text-white font-medium py-2 px-6 rounded-md transition-all"
          >
            Get Your Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;