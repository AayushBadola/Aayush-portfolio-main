
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      live: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/placeholder.svg",
      tech: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API"],
      github: "#",
      live: "#",
      gradient: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-2xl font-bold`}>
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a href={project.live} className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
