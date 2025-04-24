"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="about" className={`section relative py-20 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <div className="container">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>
              My Journey
            </h3>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                I'm Huzaifa Ibrar, a passionate software engineer specializing in building robust and user-friendly web applications. With expertise in both frontend and backend technologies, I strive to create seamless digital experiences.
              </p>
              <p>
                My journey in software development began at Lambton College, where I earned my Advanced Diploma in Computer Programming. Since then, I've worked with diverse teams on projects ranging from e-commerce platforms to enterprise solutions.
              </p>
              <p>
                What drives me is the opportunity to solve complex problems through clean, efficient code while continuously learning and adapting to new technologies.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>
                Education
              </h3>
              <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-6 shadow-md`}>
                <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Advanced Diploma in Computer Programming
                </h4>
                <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Lambton College, Toronto | 2022 - 2024
                </p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  GPA: 3.8/4.0
                </p>
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['English', 'Urdu'].map((language, index) => (
                  <div 
                    key={index}
                    className={`${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-700'} p-4 rounded-lg shadow-sm font-medium text-center`}
                  >
                    {language}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 