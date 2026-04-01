import { motion } from 'motion/react';
import { ArrowDown, Download, Briefcase } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-400 mb-4"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Sunny Gupta
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-4">
                Full Stack Developer
              </h2>
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <Briefcase className="w-5 h-5" />
                <span>Computer Engineering Student</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Passionate about building innovative web applications and solving complex problems.
              Specializing in full-stack development with a focus on creating seamless user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-purple-500/50"
              >
                <Briefcase className="w-5 h-5" />
                <span>View Projects</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => scrollToSection('about')}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ArrowDown className="w-8 h-8 mx-auto" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
