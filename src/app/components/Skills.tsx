import { motion } from 'motion/react';
import { Code, Database, Globe, GitBranch, Server, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST APIs', level: 85 },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: GitBranch,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <Layers className="w-6 h-6 inline mr-2 text-purple-400" />
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Firebase', 'Git', 'Tailwind'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
              >
                <span className="text-gray-300">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
