
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Aayush Sharma
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 border border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
