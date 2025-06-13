

import { ArrowRight, Code, Terminal, Cpu, Database, Brain } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleTechStackClick = (category: string) => {
    navigate(`/projects?category=${category}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Enhanced animated background with coding theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/15 rounded-full filter blur-3xl animate-bounce delay-500"></div>
        
        {/* Code-like grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-r from-green-500/10 via-transparent to-purple-500/10" 
               style={{backgroundImage: 'linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Terminal-like header */}
          <div className="mb-8 animate-fade-in-up delay-100">
            <div className="inline-block bg-gray-900/80 border border-green-500/30 rounded-xl p-4 font-mono text-left">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2">~/portfolio</span>
              </div>
              <div className="text-green-400 text-sm">
                <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">"Aayush Badola"</span>;
              </div>
            </div>
          </div>

          {/* Main heading with oval background */}
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-xl"></div>
            <h1 className="relative text-4xl sm:text-6xl lg:text-8xl font-bold font-mono animate-glow px-8 py-4">
              <span className="bg-gradient-to-r from-green-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Aayush Badola
              </span>
            </h1>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-green-400 mb-2 animate-fade-in-up delay-300 font-mono">
              {"<FullStackDeveloper />"}
            </p>
            <p className="text-lg text-purple-400 mb-2 animate-fade-in-up delay-400 font-mono">
              Software Developer | ML Engineer
            </p>
            <p className="text-base text-blue-400 mb-6 max-w-3xl mx-auto animate-fade-in-up delay-500 leading-relaxed">
              Specializing in Machine Learning, Deep Learning, and System Programming. 
              Building intelligent solutions with Python, TensorFlow, C++, and modern web technologies. 
              From brain cancer classification to exoplanet detection - turning complex problems into elegant code.
            </p>
          </div>

          {/* Tech stack showcase with elegant rotating animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-600">
            {[
              { icon: <Brain className="w-6 h-6" />, label: "ML/AI", color: "text-green-400", haloColor: "border-green-400/40", category: "ML/AI" },
              { icon: <Terminal className="w-6 h-6" />, label: "Systems", color: "text-purple-400", haloColor: "border-purple-400/40", category: "Systems" },
              { icon: <Cpu className="w-6 h-6" />, label: "Deep Learning", color: "text-blue-400", haloColor: "border-blue-400/40", category: "ML/AI" },
              { icon: <Database className="w-6 h-6" />, label: "Backend", color: "text-cyan-400", haloColor: "border-cyan-400/40", category: "Backend" }
            ].map((item, index) => (
              <div 
                key={item.label} 
                className="group bg-gray-900/50 border border-gray-700/50 rounded-lg p-3 hover:border-green-500/50 transition-all duration-300 cursor-pointer relative overflow-hidden hover:scale-105 transform"
                onClick={() => handleTechStackClick(item.category)}
              >
                {/* Multiple rotating rings for sophisticated effect */}
                <div 
                  className={`absolute inset-0 rounded-lg border-2 ${item.haloColor} opacity-30`}
                  style={{
                    animation: `spin ${12 + index * 3}s linear infinite`,
                    borderStyle: 'dashed',
                    animationDelay: `${index * 800}ms`
                  }}
                ></div>
                
                <div 
                  className={`absolute inset-1 rounded-lg border ${item.haloColor} opacity-50`}
                  style={{
                    animation: `spin ${8 + index * 2}s linear infinite reverse`,
                    borderStyle: 'dotted',
                    animationDelay: `${index * 1200}ms`
                  }}
                ></div>
                
                <div 
                  className={`absolute -inset-1 rounded-lg border-2 ${item.haloColor} opacity-20`}
                  style={{
                    animation: `spin ${16 + index * 4}s linear infinite`,
                    borderStyle: 'solid',
                    animationDelay: `${index * 600}ms`
                  }}
                ></div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`${item.color} mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {item.icon}
                </div>
                <p className="text-gray-300 text-sm font-mono relative z-10">{item.label}</p>
              </div>
            ))}
          </div>
          
          {/* Enhanced oval buttons with dynamic reactions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
            <Link 
              to="/projects"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 rounded-full text-white font-semibold font-mono transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 flex items-center gap-2"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              <div className="absolute w-32 h-32 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                   style={{left: 'var(--mouse-x)', top: 'var(--mouse-y)'}}></div>
              <span className="relative z-10">{"<ViewProjects />"}</span>
            </Link>
            
            <a 
              href="https://www.linkedin.com/in/aayushbadola/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold font-mono hover:bg-purple-500/10 transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 hover:border-purple-400"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
            >
              <div className="absolute w-24 h-24 bg-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
                   style={{left: 'var(--mouse-x)', top: 'var(--mouse-y)'}}></div>
              <span className="relative z-10">{"<Certifications />"}</span>
            </a>
          </div>

          {/* Code snippet showcase */}
          <div className="mt-12 max-w-md mx-auto animate-fade-in-up delay-800">
            <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 font-mono text-left text-sm">
              <div className="text-gray-500 mb-2">// Latest project</div>
              <div className="text-green-400">
                <span className="text-purple-400">import</span> <span className="text-yellow-400">BrainCancerClassifier</span> <span className="text-purple-400">from</span> <span className="text-blue-400">'./projects'</span>
              </div>
              <div className="text-green-400 mt-1">
                <span className="text-purple-400">const</span> <span className="text-blue-400">accuracy</span> = <span className="text-yellow-400">96.5</span><span className="text-gray-400">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

