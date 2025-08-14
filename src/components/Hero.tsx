import React from 'react';
import { ChevronDown, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Avi Khunt</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-blue-200 mt-4">
              Software Engineer
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Computer Science student passionate about building innovative solutions with 
            cutting-edge technologies and AI
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <a 
              href="mailto:Avikhunt61@gmail.com" 
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <Mail size={20} />
              Avikhunt61@gmail.com
            </a>
            <a 
              href="tel:+15626200649" 
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <Phone size={20} />
              +1 (562) 620-0649
            </a>
            <a 
              href="https://www.linkedin.com/in/avikhunt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
              <ChevronDown className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;