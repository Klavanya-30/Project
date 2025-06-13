import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-lg">Made with</span>
            <Heart className="h-5 w-5 text-red-500 fill-current" />
            <span className="text-lg">by Lavanya</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Lavanya. All rights reserved.
          </p>
          
          <div className="text-sm text-gray-500">
            <p>Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;