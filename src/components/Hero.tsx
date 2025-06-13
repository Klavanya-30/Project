import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Lavanya
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-light">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications with modern technologies. 
            Passionate about creating seamless user experiences and writing clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
            
            <button className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
              <Download className="h-5 w-5" />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-teal-600 transform hover:scale-110 transition-all duration-300">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;