import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
      ]
    },
    {
      title: 'Backend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Tools & Others',
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 },
        { name: 'Webpack', level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`h-2 w-16 bg-gradient-to-r ${category.color} rounded-full mb-6`}></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full py-4 px-8 shadow-lg">
            <span className="text-gray-700 font-medium">Always learning:</span>
            <div className="flex space-x-3">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Vue.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Rust</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">Go</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;