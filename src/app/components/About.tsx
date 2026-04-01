import { motion } from 'motion/react';
import { GraduationCap, Award, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-400">
                    Bachelor of Technology in Computer Engineering
                  </p>
                  <p className="text-purple-400 mt-1">2020 - 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Specialization</h3>
                  <p className="text-gray-400">
                    Full Stack Web Development
                  </p>
                  <p className="text-gray-400 mt-2">
                    Expert in MERN stack, cloud technologies, and modern web frameworks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="w-6 h-6 mr-3 text-purple-400" />
              Career Objective
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a motivated Computer Engineering student with a passion for full-stack development
              and problem-solving. My goal is to leverage my technical skills in Python, JavaScript,
              and modern web frameworks to create innovative solutions that make a positive impact.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With hands-on experience in building real-world applications like smart attendance systems
              and gesture-controlled interfaces, I'm constantly exploring new technologies and best practices
              in software development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-4 rounded-lg border border-purple-500/20">
                <p className="text-3xl font-bold text-purple-400">10+</p>
                <p className="text-gray-400">Projects</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
                <p className="text-3xl font-bold text-blue-400">3</p>
                <p className="text-gray-400">Internships</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
