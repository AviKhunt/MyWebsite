import React from 'react';
import { Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Instructional Student Assistant",
      company: "California State University, Long Beach",
      period: "August 2024 - Present",
      location: "Long Beach, CA",
      achievements: [
        "Led curriculum development, boosting engagement by 15% through interactive Python workshops",
        "Enhanced coding proficiency for 200+ students with targeted feedback strategies",
        "Revamped the mathematics course, adding 50 participants",
        "Trained new tutors on effective teaching methods and participation strategies"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Headstarter AI",
      period: "July 2024 - September 2024",
      location: "Remote",
      achievements: [
        "Collaborated with industry experts to develop AI solutions and contribute to open-source projects",
        "Utilized React and TypeScript to build dynamic, responsive front-end applications",
        "Created a customer analytics tool that reduced data processing time by 30%",
        "Led cross-functional teams in collaborative environments",
        "Gained hands-on experience with AI tools, Python, and machine learning frameworks"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey combining education, mentorship, and cutting-edge software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="mr-2" size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2" size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;