import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Rate-My-Professor AI",
      period: "August 2024",
      description: "A professor-rating web app with live AI assistance that improved user engagement by 20%.",
      achievements: [
        "Implemented dynamic UI with TypeScript, React, Tailwind, and Next.js, reducing load times by 25%",
        "Integrated AI chat with Gemini API handling 100+ requests per minute",
        "Enhanced security and authentication with Pinecone, improving data efficiency by 15%",
        "Collaborated with stakeholders to achieve 30% increase in user satisfaction"
      ],
      technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Gemini API", "Pinecone"],
      category: "AI/Web Application"
    },
    {
      title: "MERN Stack Photo Sharing App",
      period: "July 2024",
      description: "A web application for sharing photos and descriptions to explore and document locations interactively.",
      achievements: [
        "Built full-stack application using MongoDB, Express.js, React, and Node.js",
        "Designed user-friendly frontend with ReactJS, HTML, and CSS",
        "Developed RESTful API for CRUD operations, reducing response time by 15%",
        "Integrated Google Maps API for photo locations and real-time notifications with WebSockets"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Google Maps API", "WebSockets"],
      category: "Full-Stack Web Application"
    },
    {
      title: "Pokémon Game",
      period: "October 2023",
      description: "A dynamic, real-life Pokémon game built with Python using Object-Oriented Programming principles.",
      achievements: [
        "Implemented game features including in-game purchases and battle system",
        "Built custom hospital location for Pokémon battles",
        "Applied OOP principles and data structures for efficient game mechanics",
        "Created engaging user experience with comprehensive game features"
      ],
      technologies: ["Python", "OOP", "Data Structures", "Visual Studio Code"],
      category: "Game Development"
    },
    {
      title: "Bookstore Inventory System",
      period: "November 2022",
      description: "A Python-based inventory management system for bookstores with comprehensive data structure implementation.",
      achievements: [
        "Designed system using various data structures (Stacks, Queues, Lists, Hash-Maps)",
        "Implemented book search, shopping cart management, and purchase functionality",
        "Applied OOP principles for modular and reusable code architecture",
        "Created efficient algorithms for inventory management and user interactions"
      ],
      technologies: ["Python", "Data Structures", "OOP", "Hash-Maps", "Visual Studio Code"],
      category: "System Design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, AI integration, 
            and software engineering principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="mr-2" size={16} />
                    {project.period}
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              <div className="space-y-3 mb-6">
                {project.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;