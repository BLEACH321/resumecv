import { motion } from 'motion/react';
import { ExternalLink, Github, Zap } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Attendance System',
      description: 'An intelligent attendance tracking system using facial recognition technology to automate and streamline the attendance process for educational institutions.',
      techStack: ['Python', 'OpenCV', 'MySQL', 'Flask'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Face Recognition', 'Real-time Processing', 'Automated Reports'],
    },
    {
      title: 'Virtual Mouse using Hand Gestures',
      description: 'Revolutionary gesture control interface that allows users to control their computer mouse using hand movements detected through webcam, powered by computer vision.',
      techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Gesture Recognition', 'Mouse Control', 'Click Detection'],
    },
    {
      title: 'RedPulse Platform',
      description: 'A comprehensive blood donation platform connecting donors with recipients, featuring real-time notifications, donor management, and emergency request handling.',
      techStack: ['ReactJS', 'Node.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80',
      gradient: 'from-red-500 to-orange-500',
      features: ['Donor Management', 'Emergency Requests', 'Real-time Updates'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-sm text-gray-300">Key Features</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-slate-700/50 rounded text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-purple-500/30 text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
