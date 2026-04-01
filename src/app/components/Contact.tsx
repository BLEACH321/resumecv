import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sunny.gupta@example.com',
      href: 'mailto:sunny.gupta@example.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: '#',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sunny-gupta',
      color: 'hover:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sunnygupta',
      color: 'hover:text-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-3 text-purple-400" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 bg-slate-800/50 backdrop-blur-lg rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                  >
                    <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`p-4 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20"
            >
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-gray-400 text-sm">
                Currently open to full-time opportunities and freelance projects.
                I typically respond within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/60 transition-colors text-white placeholder-gray-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/60 transition-colors text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500/60 transition-colors text-white placeholder-gray-500 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/50"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
