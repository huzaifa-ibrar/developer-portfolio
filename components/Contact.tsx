"use client";

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const Contact = () => {
  const { isDarkMode } = useTheme();

  const contactInfo = [
    { 
      icon: <FaPhone className="text-2xl" />, 
      label: "Phone", 
      value: "(+1) 647-572-4056", 
      href: "tel:+16475724056" 
    },
    { 
      icon: <FaEnvelope className="text-2xl" />, 
      label: "Email", 
      value: "huzaifa.57@hotmail.com", 
      href: "mailto:huzaifa.57@hotmail.com" 
    },
    { 
      icon: <FaLinkedin className="text-2xl" />, 
      label: "LinkedIn", 
      value: "linkedin.com/in/huzaifa-ibrar", 
      href: "https://linkedin.com/in/huzaifa-ibrar" 
    },
    { 
      icon: <FaGithub className="text-2xl" />, 
      label: "GitHub", 
      value: "github.com/huzaifa-ibrar", 
      href: "https://github.com/huzaifa-ibrar" 
    },
    { 
      icon: <FaMapMarkerAlt className="text-2xl" />, 
      label: "Location", 
      value: "Toronto, Canada", 
      href: "https://maps.google.com/?q=Toronto,Canada" 
    }
  ];

  return (
    <section id="contact" className={`section py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="container">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  } transition-colors duration-300`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-600 text-primary-light' : 'bg-primary/10 text-primary'}`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{info.label}</p>
                    <p className={`${isDarkMode ? 'text-white' : 'text-gray-800'} font-medium`}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>
              Send Me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-primary-light' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary'
                    } border focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300`} 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-primary-light' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary'
                    } border focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300`} 
                    placeholder="Your email" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-primary-light' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary'
                  } border focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300`} 
                  placeholder="Subject" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className={`w-full px-4 py-3 rounded-lg ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-primary-light' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary'
                  } border focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300`} 
                  placeholder="Your message" 
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className={`px-6 py-3 rounded-lg font-medium ${
                  isDarkMode 
                    ? 'bg-primary-light hover:bg-blue-500 text-white' 
                    : 'bg-primary hover:bg-blue-600 text-white'
                } transition-colors duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 