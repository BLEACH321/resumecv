import { motion } from 'motion/react';

export default function App() {
  const experiences = [
    {
      period: '2023.01 – Present',
      company: 'Cloud Counselage Pvt. Ltd.',
      role: 'Full Stack Development Intern',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Implemented RESTful APIs and integrated third-party services. Collaborated with cross-functional teams to deliver high-quality software solutions.',
    },
    {
      period: '2022.06 – 2022.08',
      company: 'Simplilearn',
      role: 'Front-End Development Intern',
      description: 'Built responsive user interfaces using React and Tailwind CSS. Optimized application performance and improved user experience. Participated in code reviews and contributed to best practices documentation.',
    },
    {
      period: '2021.12 – 2022.02',
      company: 'Greenifit',
      role: 'Web Development Intern',
      description: 'Created dynamic web pages using HTML, CSS, and JavaScript. Integrated Firebase for backend services and user authentication. Enhanced website accessibility and mobile responsiveness.',
    },
  ];

  const skills = [
    'Python', 'Java', 'JavaScript', 'TypeScript',
    'HTML', 'CSS', 'ReactJS', 'Node.js',
    'MySQL', 'MongoDB', 'Firebase', 'Git',
    'RESTful APIs', 'Express.js', 'Tailwind CSS', 'Redux'
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' },
  ];

  const projects = [
    {
      name: 'Smart Attendance System',
      tech: 'Python, OpenCV, Face Recognition',
      description: 'Automated attendance tracking system using facial recognition technology.'
    },
    {
      name: 'Virtual Mouse',
      tech: 'Python, MediaPipe, Hand Gestures',
      description: 'Control computer mouse using hand gestures captured through webcam.'
    },
    {
      name: 'RedPulse Platform',
      tech: 'React, Node.js, MongoDB',
      description: 'Full-stack web application for blood donation management and coordination.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 relative overflow-hidden font-sans selection:bg-emerald-500/30">
      {/* Dynamic Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Aurora Blobs */}
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-emerald-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -50, 50],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500/5 rounded-full blur-[150px]"
        />

        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 sm:p-10 lg:p-16">
        <div className="flex flex-col lg:grid lg:grid-cols-[300px,1fr] gap-12 lg:gap-16">
          {/* Left Sidebar - Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-sm uppercase tracking-wider">Contacts</h2>
                <span className="text-gray-500 text-sm">01</span>
              </div>
              <div className="border-b border-gray-700 w-full mb-6"></div>
              <div className="space-y-3 text-sm">
                <a
                  href="https://github.com/BLEACH321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  GITHUB.COM/BLEACH321
                </a>

                <a
                  href="mailto:sunnygupta2543@gmail.com"
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  sunnygupta2543@gmail.com
                </a>
                <p className="text-gray-400">+91 8591466581</p>
              </div>
            </div>

            {/* Activities Section */}
            <div className="pt-8">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-sm uppercase tracking-wider">Activities</h2>
                <span className="text-gray-500 text-sm">06</span>
              </div>
              <div className="border-b border-gray-700 w-full mb-6"></div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white mb-1">Esports Tournament Winner</p>
                  <p className="text-gray-400 text-xs">2024 – National Level</p>
                </div>
                <div>
                  <p className="text-white mb-1">Hackathon Participant</p>
                  <p className="text-gray-400 text-xs">Multiple events</p>
                </div>
                <div>
                  <p className="text-white mb-1">Coding Club Member</p>
                  <p className="text-gray-400 text-xs">University Chapter Lead</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-16 order-1 lg:order-2">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight mb-4 text-white">
                Sunny Gupta <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-amber-400 to-indigo-400 animate-gradient-x block sm:inline">
                  Full Stack Developer
                </span>
              </h1>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm uppercase tracking-widest font-semibold text-emerald-400/80">Experience</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                <span className="text-gray-600 text-sm font-mono">02</span>
              </div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                    <h3 className="text-xl mb-1">{exp.company}</h3>
                    <p className="text-gray-300 text-sm mb-3">{exp.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills and Languages Grid */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-sm uppercase tracking-wider">Skills</h2>
                  <span className="text-gray-500 text-sm">04</span>
                </div>
                <div className="border-b border-gray-700 w-full mb-8"></div>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(52, 211, 153, 0.5)' }}
                      className="text-xs text-gray-300 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-full transition-all cursor-default text-center"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-sm uppercase tracking-wider">Languages</h2>
                  <span className="text-gray-500 text-sm">05</span>
                </div>
                <div className="border-b border-gray-700 w-full mb-8"></div>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm">{lang.name}</span>
                      <span className="text-sm text-gray-400">{lang.level}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm uppercase tracking-wider">Education</h2>
                <span className="text-gray-500 text-sm">03</span>
              </div>
              <div className="border-b border-gray-700 w-full mb-8"></div>
              <div>
                <p className="text-sm text-gray-400 mb-2">2020 – 2024</p>
                <h3 className="text-xl mb-1">Mumbai University</h3>
                <p className="text-gray-300 text-sm">Bachelor of Engineering - Computer Engineering</p>
              </div>
            </motion.div>

            {/* Projects Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm uppercase tracking-wider">Projects</h2>
                <span className="text-gray-500 text-sm">07</span>
              </div>
              <div className="border-b border-gray-700 w-full mb-8"></div>

              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      rotateX: 10,
                      rotateY: -5,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative p-6 bg-[#252525] border border-gray-800 rounded-xl overflow-hidden cursor-default perspective-1000"
                  >
                    {/* Glowing background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4 italic">
                        {project.tech.split(',').map((t, i) => (
                           <span key={i} className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                             {t.trim()}
                           </span>
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-emerald-400 transition-colors">
                        <span className="uppercase tracking-widest">Explore Case Study</span>
                        <div className="w-8 h-[1px] bg-gray-700 transition-all group-hover:w-12 group-hover:bg-emerald-500"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
