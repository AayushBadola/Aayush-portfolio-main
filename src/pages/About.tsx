
import { Award, Code, Coffee, Users, BookOpen, GraduationCap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+", color: "text-purple-400" },
    { icon: Coffee, label: "Years Experience", value: "3+", color: "text-pink-400" },
    { icon: Users, label: "Technologies", value: "15+", color: "text-blue-400" },
    { icon: Award, label: "Articles Written", value: "5+", color: "text-cyan-400" },
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
              Hey there! 👋 I'm Aayush Badola, a passionate software and ML engineer who specializes in 
              Backend Development, Machine Learning, Deep Learning, and System Design. I find immense joy 
              in turning complex AI concepts into practical solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans developing CNN models for brain tumor classification, creating efficient 
              algorithms for exoplanet detection, and building scalable backend systems. I believe that 
              every line of code has the potential to contribute to something meaningful, whether it's 
              uncovering patterns in data or creating systems that can make a difference.
            </p>

            {/* Certifications Section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-purple-400">Certifications</h3>
              </div>
              <p className="text-gray-300 mb-3">
                I hold multiple certifications from prestigious institutions including:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Harvard', 'Google', 'IBM', 'Microsoft', 'LinkedIn', 'DeepLearn.AI'].map((cert) => (
                  <span key={cert} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-mono hover:bg-purple-500/30 transition-colors border border-purple-500/30">
                    {cert}
                  </span>
                ))}
              </div>
              <a 
                href="https://www.linkedin.com/in/aayushbadola/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm"
              >
                <span>View all on LinkedIn →</span>
              </a>
            </div>

            {/* Favorite Book Section */}
            <div className="mt-6 p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-400">Current Favorite Book</h3>
              </div>
              <p className="text-gray-300 italic">
                "Skin in the Game" by Nassim Nicholas Taleb - A book that transformed my perspective on 
                decision-making, risk, and the importance of having personal investment in your work.
              </p>
            </div>
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
