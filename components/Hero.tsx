"use client";

import Link from 'next/link';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import FluidBackground from './FluidBackground';

const Hero = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Fluid animated background */}
      <FluidBackground />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-4 relative inline-block text-gray-900">
              <span className="relative z-10">Hey </span>
            </h1>
            <h2 className="text-7xl md:text-9xl font-bold mb-12 relative inline-block text-primary">
              I'm Huzaifa.
            </h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-medium mb-10 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              I'm a <span className="text-primary font-semibold">Software Engineer</span> with a 
              strong passion for building web applications with great user experiences.
            </motion.h3>
            <motion.p 
              className="text-xl md:max-w-3xl mx-auto mb-14 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Here's a bit more <span className="text-primary font-medium">about me</span>.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-5 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { icon: <FaLinkedin className="text-primary" size={28} />, href: "https://linkedin.com/in/huzaifa-ibrar" },
              { icon: <FaGithub className="text-primary" size={28} />, href: "https://github.com/huzaifa-ibrar" },
              { icon: <FaEnvelope className="text-primary" size={28} />, href: "mailto:huzaifa.57@hotmail.com" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link 
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-white hover:bg-gray-100 shadow-md transition-colors"
                  aria-label={item.href.includes('linkedin') ? 'LinkedIn' : item.href.includes('github') ? 'GitHub' : 'Email'}
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#about" 
              className="inline-block px-10 py-4 text-lg rounded-full font-medium transition-colors duration-300 bg-primary hover:bg-blue-600 text-white"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 