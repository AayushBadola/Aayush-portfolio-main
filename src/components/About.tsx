
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Aayush, a passionate software and ML engineer specializing in 
              Backend Development, Machine Learning, Deep Learning, and System Design. 
              I create intelligent solutions that bridge the gap between complex AI concepts 
              and real-world applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise in developing CNN models for medical imaging, efficient algorithms 
              for exoplanet detection, and scalable backend systems, I focus on building 
              technology that makes a meaningful impact. I believe in writing clean, 
              maintainable code and creating user experiences that delight and engage.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">15+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">3+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-40"></div>
              <div className="absolute inset-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-6xl font-bold">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
