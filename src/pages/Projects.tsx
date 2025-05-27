
import { useState } from "react";
import { ExternalLink, Github, Star, Code, Brain, Rocket, Gamepad2, Server, FileText, Filter } from "lucide-react";
import { projects, articles, getProjectsByCategory } from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showArticles, setShowArticles] = useState(false);
  
  const categories = ['All', 'ML/AI', 'Systems', 'Backend', 'Web', 'Game'];
  const filteredProjects = getProjectsByCategory(activeCategory);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ML/AI': return <Brain className="w-4 h-4" />;
      case 'Systems': return <Code className="w-4 h-4" />;
      case 'Backend': return <Server className="w-4 h-4" />;
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

        {/* Toggle between Projects and Articles */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/80 rounded-full p-1 border border-green-500/30">
            <button
              onClick={() => setShowArticles(false)}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                !showArticles 
                  ? 'bg-green-500 text-black shadow-lg' 
                  : 'text-green-400 hover:text-green-300'
              }`}
            >
              {"<Projects />"}
            </button>
            <button
              onClick={() => setShowArticles(true)}
              className={`px-6 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                showArticles 
                  ? 'bg-purple-500 text-black shadow-lg' 
                  : 'text-purple-400 hover:text-purple-300'
              }`}
            >
              {"<Articles />"}
            </button>
          </div>
        </div>

        {!showArticles ? (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-green-400 to-purple-400 text-black shadow-lg shadow-green-500/30'
                      : 'bg-gray-900/80 text-gray-300 border border-gray-700/50 hover:border-green-500/50 hover:text-green-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category !== 'All' && getCategoryIcon(category)}
                    <span>{category === 'All' ? '// All' : `// ${category}`}</span>
                  </div>
                  {activeCategory !== category && (
                    <div className="absolute inset-0 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group relative bg-gray-900/80 border border-green-500/30 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <div className="absolute top-2 right-2 z-10 flex items-center gap-1 text-xs font-mono text-green-400">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-purple-500/10 to-blue-500/10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover relative z-10"
                    />
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-green-400/60">
                      {project.featured ? "// Featured" : "// Project"}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gray-900/90">
                    <h3 className="text-xl font-bold text-green-400 mb-3 font-mono">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-mono hover:bg-green-500/30 transition-colors border border-green-500/30">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-mono">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors hover:scale-105 transform font-mono"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4" />
                        <span className="text-sm">{"<code />"}</span>
                      </a>
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors hover:scale-105 transform font-mono"
                          onClick={(e) => e.stopPropagation()}
                        >
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
          </>
        ) : (
          /* Articles Section */
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-purple-400 font-mono mb-4">
                <FileText className="inline w-8 h-8 mr-3" />
                {"// Featured on Medium"}
              </h2>
              <p className="text-gray-400 font-mono">Technical articles and insights on AI, ML, and Computer Science</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <div 
                  key={article.id}
                  className="group relative bg-gray-900/80 border border-purple-500/30 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => window.open(article.url, '_blank')}
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10"></div>
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover relative z-10"
                    />
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-purple-400/60 bg-black/60 px-2 py-1 rounded">
                      // Medium Article
                    </div>
                    <div className="absolute bottom-2 right-2 text-xs font-mono text-blue-400/60 bg-black/60 px-2 py-1 rounded">
                      {article.date}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gray-900/90">
                    <h3 className="text-xl font-bold text-purple-400 mb-3 font-mono leading-tight">{article.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{article.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors hover:scale-105 transform font-mono"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">{"<read />"}</span>
                      </a>
                      <span className="text-xs font-mono text-gray-500">Medium</span>
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${article.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
