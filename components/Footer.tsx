"use client";

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-300`}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#">
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>Huzaifa Ibrar</h3>
            </Link>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Software Engineer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            {[
              { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/huzaifa-ibrar", label: "LinkedIn" },
              { icon: <FaGithub size={18} />, href: "https://github.com/huzaifa-ibrar", label: "GitHub" },
              { icon: <FaEnvelope size={18} />, href: "mailto:huzaifa.57@hotmail.com", label: "Email" },
              { icon: <FaPhone size={18} />, href: "tel:+16475724056", label: "Phone" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-white hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                } shadow-sm transition-colors duration-300`}
                aria-label={item.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isDarkMode 
                ? 'bg-primary-light hover:bg-blue-500' 
                : 'bg-primary hover:bg-blue-600'
            } text-white shadow-md transition-colors duration-300`}
            aria-label="Scroll to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp size={16} />
          </motion.button>
        </div>
        
        <div className="mt-8 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Huzaifa Ibrar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 