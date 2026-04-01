import { motion } from 'motion/react';
import { Trophy, Gamepad2, Code2, Users, Award, Zap } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      icon: Trophy,
      title: 'Esports Tournaments',
      description: 'Participated in multiple national-level esports tournaments, showcasing strategic thinking and team coordination skills.',
      achievements: [
        'Top 16 finish in National Gaming Championship',
        'Team Captain for University Esports Team',
        'Organized inter-college gaming events',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Code2,
      title: 'Hackathons & Competitions',
      description: 'Active participant in coding competitions and hackathons, developing innovative solutions under time constraints.',
      achievements: [
        'Won 2nd place in Smart India Hackathon',
        'Participated in 10+ coding competitions',
        'Built 3 projects in 24-hour hackathons',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Coding Club Member',
      description: 'Active member of college coding club, mentoring juniors and organizing technical workshops and events.',
      achievements: [
        'Conducted workshops on Web Development',
        'Mentored 50+ students in programming',
        'Organized technical quiz competitions',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const achievements = [
    { icon: Trophy, label: 'Competitions Won', count: '5+' },
    { icon: Award, label: 'Certifications', count: '10+' },
    { icon: Code2, label: 'Hackathons', count: '15+' },
    { icon: Zap, label: 'Tech Events', count: '20+' },
  ];

  return (
    <section id="activities" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Activities & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center shadow-xl"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg w-fit mx-auto mb-3">
                <item.icon className="w-6 h-6" />
              </div>
              <p className="text-3xl font-bold text-purple-400 mb-1">{item.count}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 shadow-lg`}>
                <activity.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{activity.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {activity.description}
              </p>

              <div className="space-y-2">
                {activity.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${activity.color}`}></div>
                    <p className="text-gray-300 text-sm">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <Gamepad2 className="w-6 h-6 inline mr-2 text-purple-400" />
            Beyond Coding
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-lg mt-1">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Leadership</h4>
                <p className="text-gray-400 text-sm">
                  Led multiple student initiatives and tech events, demonstrating strong organizational and leadership skills.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg mt-1">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Community</h4>
                <p className="text-gray-400 text-sm">
                  Active contributor to open-source projects and tech communities, helping fellow developers grow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
