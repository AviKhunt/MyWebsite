import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Code className="text-blue-400 mr-2" size={24} />
            <h3 className="text-2xl font-bold">Avi Khunt</h3>
          </div>
          
          <p className="text-gray-400 mb-6">
            Computer Science Student & Software Engineer
          </p>
          
          <div className="flex justify-center items-center text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500 mx-2" size={16} />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Avi Khunt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;