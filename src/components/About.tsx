import React from 'react';
import { GraduationCap, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
              <div className="w-20 h-1 bg-crimson mb-8"></div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="rounded-full w-24 h-24 bg-gradient-to-r from-crimson to-crimson-light flex items-center justify-center text-white text-3xl font-bold mb-4 mx-auto">
                  PR
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Porter Robertson</h3>
                <p className="text-center text-gray-600 mb-4">CS Student @ University of Oklahoma</p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center">
                    <GraduationCap size={18} className="text-crimson mr-2" />
                    <span className="text-sm text-gray-600">Computer Science</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={18} className="text-crimson mr-2" />
                    <span className="text-sm text-gray-600">Norman, OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm Porter Robertson, a computer science student at the University of Oklahoma. I build demo websites for local businesses at no cost to gain experience and help businesses improve their online presence.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My journey into web development started with my passion for combining creative design with technical problem-solving. As a student, I understand that real-world experience is invaluable, which is why I'm offering my services to local businesses in Norman and Oklahoma City.
              </p>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                By working with local businesses, I get to practice my skills while also giving back to my community. It's a win-win situation: you get a professional website demo at no cost, and I build my portfolio with real-world projects.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6">My Skills</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <Code size={24} className="text-crimson mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">Web Development</h4>
                  </div>
                  <p className="text-gray-600">
                    I create responsive websites with modern technologies ensuring a great user experience on all devices.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson mr-3">
                      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06z"></path>
                      <path d="M10 2c1 .5 2 2 2 5"></path>
                    </svg>
                    <h4 className="text-xl font-semibold text-gray-800">Design</h4>
                  </div>
                  <p className="text-gray-600">
                    I focus on clean, professional designs that reflect your brand identity and appeal to your customers.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson mr-3">
                      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z"></path>
                      <path d="M6 9h12"></path>
                      <path d="M6 13h12"></path>
                      <path d="M12 17v-8"></path>
                    </svg>
                    <h4 className="text-xl font-semibold text-gray-800">SEO Basics</h4>
                  </div>
                  <p className="text-gray-600">
                    I implement fundamental SEO practices to help your website rank better in search engines.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson mr-3">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <h4 className="text-xl font-semibold text-gray-800">Performance</h4>
                  </div>
                  <p className="text-gray-600">
                    I build websites that load quickly and run smoothly, providing a better experience for your visitors.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-crimson">
                <p className="text-lg text-gray-700 italic">
                  "I believe that every business, no matter how small, deserves a professional online presence. My goal is to help local businesses shine online with websites that truly represent their brand and services."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;