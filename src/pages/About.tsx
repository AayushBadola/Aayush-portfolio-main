
import { Award, Code, Coffee, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+", color: "text-purple-400" },
    { icon: Coffee, label: "Years Experience", value: "3+", color: "text-pink-400" },
    { icon: Users, label: "Happy Clients", value: "25+", color: "text-blue-400" },
    { icon: Award, label: "Technologies", value: "15+", color: "text-cyan-400" },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up delay-300">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Aayush, a passionate full-stack developer with a love for creating 
              beautiful and functional web applications. I specialize in modern JavaScript 
              frameworks and have a keen eye for design.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 3 years of experience in web development, I've worked on various 
              projects ranging from e-commerce platforms to complex web applications. 
              I believe in writing clean, maintainable code and creating user experiences 
              that delight and engage.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good cup of coffee while reading about 
              the latest trends in web development.
            </p>
          </div>
          
          <div className="relative animate-fade-in-up delay-500">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-40 animate-pulse delay-1000"></div>
              <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center animate-glow">
                <div className="w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-6xl font-bold">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <h3 className={`text-2xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
