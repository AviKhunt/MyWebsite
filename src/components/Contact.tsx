import React from 'react';
import { Mail, Phone, Linkedin, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations 
            about technology and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-blue-600 mr-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're looking for a software engineer, want to discuss a project, 
                or just want to chat about technology, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:Avikhunt61@gmail.com"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <Mail className="text-blue-600 mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">Avikhunt61@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+15626200649"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <Phone className="text-green-600 mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (562) 620-0649</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/avikhunt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <Linkedin className="text-blue-700 mr-4 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <p className="text-gray-600">Connect with me professionally</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="text-red-600 mr-4" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Long Beach, California</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">What I'm Looking For</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Software Engineering Roles</h4>
                <p className="text-gray-300">
                  Full-stack development positions where I can apply my skills in React, 
                  TypeScript, Python, and AI technologies.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">Internship Opportunities</h4>
                <p className="text-gray-300">
                  Summer 2025 internships in software development, AI/ML, or 
                  full-stack web development.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Collaboration Projects</h4>
                <p className="text-gray-300">
                  Open-source contributions, hackathons, and collaborative projects 
                  with other developers and students.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Mentorship & Learning</h4>
                <p className="text-gray-300">
                  Opportunities to learn from experienced developers and contribute 
                  to innovative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;