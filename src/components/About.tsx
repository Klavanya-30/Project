import React from 'react';
import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
              <User className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who I Am</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-teal-100 p-8 rounded-2xl">
              <Heart className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Love</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm passionate about creating seamless user experiences, learning new technologies, 
                and collaborating with teams to build products that users love. I believe in 
                writing clean, maintainable code.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-100 to-purple-100 p-8 rounded-2xl">
              <Code className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I specialize in building responsive web applications using modern frameworks 
                and technologies. From concept to deployment, I handle the entire development lifecycle.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-800">Frontend Development</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-800">Backend Development</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-800">UI/UX Design</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-800">Database Design</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-8 rounded-2xl">
              <Coffee className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fun Facts</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Coffee enthusiast ☕ (3+ cups daily)</li>
                <li>• Love exploring new frameworks and libraries</li>
                <li>• Enjoy photography in my spare time</li>
                <li>• Always learning something new</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;