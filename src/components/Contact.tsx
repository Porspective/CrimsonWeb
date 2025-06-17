import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/xwpbqlzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your website needs? Fill out the form below, and I'll get back to you
            as soon as possible to discuss your free demo website.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 md:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-center max-w-md">
                  Your message has been received. I'll get back to you as soon as possible to discuss your website project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent"
                    placeholder="Your phone (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent"
                    placeholder="Tell me about your business and website needs"
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-600 text-sm">{error}</div>
                )}
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-crimson hover:bg-crimson-dark text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-crimson mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Email</h4>
                    <p className="text-gray-600">porter.j.robertson+website@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-crimson mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Phone</h4>
                    <p className="text-gray-600">(580) 504-6396</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-crimson mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Location</h4>
                    <p className="text-gray-600">Norman, Oklahoma</p>
                    <p className="text-gray-600">University of Oklahoma</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-crimson rounded-lg shadow-md p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              <ul className="space-y-3">
                {[
                  'Website Design & Development',
                  'Business Landing Pages',
                  'Portfolio Websites',
                  'Local Business Websites',
                  'Responsive Web Design'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={18} className="mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;