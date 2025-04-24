"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-40 bg-transparent backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-5">
            <div className="flex justify-center items-center">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center justify-center space-x-8 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    onMouseEnter={() => setActiveLink(item.name)}
                    onMouseLeave={() => setActiveLink(null)}
                    className="relative"
                  >
                    <Link 
                      href={item.href}
                      className="text-gray-800 font-medium block py-2 px-1"
                    >
                      {item.name}
                    </Link>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary w-0"
                      animate={{
                        width: activeLink === item.name ? '100%' : '0%'
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Menu Button */}
              <motion.button 
                className="md:hidden text-black focus:outline-none bg-white/10 backdrop-blur-md p-2 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
            
            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 bg-white rounded-lg p-4 backdrop-blur-md shadow-lg"
                >
                  <div className="flex flex-col space-y-4 pb-4">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ 
                          x: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Link 
                          href={item.href}
                          className="text-gray-800 font-medium block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar; 