
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, color: "from-yellow-500 to-yellow-400" },
        { name: "Java", level: 85, color: "from-orange-500 to-red-500" },
        { name: "C++", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "C", level: 88, color: "from-gray-600 to-gray-400" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-400" },
        { name: "SQL", level: 85, color: "from-blue-500 to-cyan-500" },
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning", level: 92, color: "from-green-500 to-green-400" },
        { name: "Deep Learning", level: 90, color: "from-purple-500 to-purple-400" },
        { name: "Data Science", level: 88, color: "from-cyan-500 to-blue-500" },
        { name: "TensorFlow", level: 85, color: "from-orange-500 to-orange-400" },
        { name: "Keras", level: 83, color: "from-red-500 to-red-400" },
        { name: "Computer Vision", level: 80, color: "from-indigo-500 to-purple-500" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 90, color: "from-orange-600 to-orange-500" },
        { name: "CSS", level: 85, color: "from-blue-600 to-blue-500" },
        { name: "GraphQL", level: 75, color: "from-pink-500 to-pink-400" },
        { name: "React", level: 80, color: "from-cyan-400 to-blue-400" },
        { name: "Node.js", level: 78, color: "from-green-600 to-green-500" },
        { name: "REST APIs", level: 82, color: "from-teal-500 to-teal-400" },
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 88, color: "from-blue-700 to-blue-600" },
        { name: "PostgreSQL", level: 85, color: "from-blue-600 to-blue-500" },
        { name: "Git", level: 90, color: "from-orange-600 to-red-600" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-400" },
        { name: "Linux", level: 80, color: "from-yellow-600 to-yellow-500" },
        { name: "System Design", level: 78, color: "from-gray-600 to-gray-500" },
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 p-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                    style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-glow`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100 + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
