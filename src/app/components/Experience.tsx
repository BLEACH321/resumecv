import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Cloud Counselage',
      role: 'Full Stack Developer Intern',
      period: 'Jun 2023 - Aug 2023',
      description: 'Developed and maintained full-stack web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Built responsive web applications serving 10k+ users',
        'Optimized database queries improving performance by 40%',
        'Implemented RESTful APIs and integrated third-party services',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Simplilearn',
      role: 'Web Development Intern',
      period: 'Jan 2023 - May 2023',
      description: 'Worked on frontend development projects using React and modern JavaScript frameworks. Focused on creating intuitive user interfaces and improving user experience.',
      achievements: [
        'Developed reusable React components library',
        'Improved page load times by 35% through optimization',
        'Collaborated with designers to implement pixel-perfect UIs',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      company: 'Greenifit',
      role: 'Software Development Intern',
      period: 'Aug 2022 - Dec 2022',
      description: 'Contributed to the development of fitness tracking applications. Worked with Python and Firebase to build backend services and real-time features.',
      achievements: [
        'Built real-time data synchronization features',
        'Implemented user authentication and authorization',
        'Created automated testing scripts increasing code coverage',
      ],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                        <p className={`text-lg bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-medium`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                          <p className="text-gray-300 text-sm">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                  >
                    <Briefcase className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
