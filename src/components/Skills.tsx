
const Skills = () => {
  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
    { name: "Node.js", level: 85, color: "from-green-500 to-green-400" },
    { name: "Python", level: 80, color: "from-yellow-500 to-yellow-400" },
    { name: "MongoDB", level: 85, color: "from-green-600 to-green-500" },
    { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-600" },
    { name: "Docker", level: 75, color: "from-blue-500 to-blue-400" },
    { name: "AWS", level: 70, color: "from-orange-500 to-orange-400" },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Frontend", "Backend", "Database", "DevOps"].map((category, index) => (
            <div key={category} className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{category}</h3>
              <p className="text-gray-400 text-sm">Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
