import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'Kanchipuram',
      period: '2023 - 2025',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced development time by 30%',
        'Implemented responsive design standards'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
  

  const education = [
    {
      degree: 'Bachelor of Information Technology',
      school: 'Adhi college of Engineering And Technology',
      location: 'California',
      period: '2022 - 2026',
      description: 'Graduated Magna Cum Laude with focus on software engineering and web development.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background in software development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-purple-600" />
            Professional Experience
          </h3>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-teal-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg`}></div>
                
                <div className="ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                      <h5 className="text-lg font-semibold text-purple-600 mb-2">{exp.company}</h5>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h6 className="font-semibold text-gray-900 mb-2">Key Achievements:</h6>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg className="h-6 w-6 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Education
          </h3>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-red-500"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full border-4 border-white shadow-lg`}></div>
                
                <div className="ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h4>
                      <h5 className="text-lg font-semibold text-orange-600 mb-2">{edu.school}</h5>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;