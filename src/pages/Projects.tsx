import { ExternalLink, Github, Star, Code, Brain, Rocket, Gamepad2 } from "lucide-react";
import { projects, featuredProjects, otherProjects } from "../data/projects";

const Projects = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ML/AI': return <Brain className="w-4 h-4" />;
      case 'Systems': return <Code className="w-4 h-4" />;
      case 'Web': return <Rocket className="w-4 h-4" />;
      case 'Game': return <Gamepad2 className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-mono">
            <span className="bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              {"<Projects />"}
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-green-400 mt-4 font-mono text-lg">// B.Tech CSE Portfolio</p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-green-400 animate-fade-in-up delay-300 font-mono">
            <Star className="inline w-6 h-6 mr-2" />
            {"// Featured Projects"}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative bg-gray-900/80 border border-green-500/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs font-mono text-green-400">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-purple-500/10 to-blue-500/10"></div>
                  <div className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-3xl font-bold animate-pulse relative z-10`}>
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute bottom-2 left-2 text-xs font-mono text-green-400/60">
                    {"// Deep Learning"}
                  </div>
                </div>
                
                <div className="p-6 bg-gray-900/90">
                  <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-mono hover:bg-green-500/30 transition-colors border border-green-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors hover:scale-105 transform font-mono">
                      <Github className="h-4 w-4" />
                      <span className="text-sm">{"<code />"}</span>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors hover:scale-105 transform font-mono">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">{"<demo />"}</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-400 animate-fade-in-up delay-600 font-mono">
            {"// Other Projects"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative bg-gray-900/80 border border-purple-500/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs font-mono text-purple-400">
                  {getCategoryIcon(project.category)}
                  <span>{project.category}</span>
                </div>
                
                <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-2xl font-bold`}>
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                <div className="p-6 bg-gray-900/90">
                  <h3 className="text-lg font-bold text-purple-400 mb-2 font-mono">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-mono border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors font-mono">
                      <Github className="h-4 w-4" />
                      <span className="text-sm">{"<code />"}</span>
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors font-mono">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">{"<demo />"}</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
