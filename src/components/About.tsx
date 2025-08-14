import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Computer Science student with a passion for developing innovative 
            software solutions and exploring the possibilities of artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-blue-600 mr-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-gray-600">California State University, Long Beach</p>
                <p className="text-gray-600">Expected December 2026 • GPA: 3.8</p>
                <p className="text-sm text-blue-600 font-medium">CSULB President's Honor List</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Award className="text-green-600 mr-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">AWS Cloud Practitioner (Ongoing)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">The MERN Full-Stack Guide (Udemy)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Python Data Structure (LinkedIn Learning)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <BookOpen className="text-purple-600 mr-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a Computer Science student at California State University, Long Beach, 
                I've maintained a 3.8 GPA while gaining hands-on experience in software 
                development and AI technologies.
              </p>
              <p>
                My journey includes working as an Instructional Student Assistant, where 
                I've helped over 200 students improve their coding skills, and completing 
                a software engineering internship at Headstarter AI, where I collaborated 
                with industry experts on cutting-edge AI solutions.
              </p>
              <p>
                I'm passionate about creating efficient, user-friendly applications and 
                exploring how AI can solve real-world problems. My goal is to contribute 
                to innovative projects that make a positive impact on people's lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;