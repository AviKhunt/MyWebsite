import React from 'react';
import { Code, Database, Server, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        "Python", "JavaScript", "TypeScript", "Java", "C", "C++", 
        "R", "C#", "Kotlin", "PHP", "Go", "Perl", "Ruby"
      ],
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Web Development",
      icon: <Server className="text-green-600" size={24} />,
      skills: [
        "HTML", "CSS", "jQuery", "AngularJS", "ReactJS", "NodeJS", 
        "ExpressJS", "Bootstrap", "DevOps", "REST APIs", "GraphQL"
      ],
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Database Management",
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        "Oracle", "SQL", "MySQL", "MongoDB", "PostgreSQL", 
        "Firebase", "Docker"
      ],
      color: "from-purple-50 to-pink-50"
    },
    {
      title: "Tools & Frameworks",
      icon: <Tool className="text-orange-600" size={24} />,
      skills: [
        "Git", "GitHub", "Agile", "MATLAB", "Google Cloud", 
        "Linux", "Visual Studio Code"
      ],
      color: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies 
            I use to build robust software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r ${category.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg text-center text-gray-800 font-medium hover:bg-white/90 transition-all duration-200 hover:transform hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              I'm always expanding my skill set and staying up-to-date with the latest technologies. 
              Currently pursuing AWS Cloud Practitioner certification and exploring advanced AI/ML concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;