"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();
  
  // Base64 placeholder for project images
  const placeholderImageSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzQyODVmNCIgZmlsbC1vcGFjaXR5PSIwLjIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjMDU1NmJmIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==";
  
  const projects = [
    {
      title: "Car Loan System",
      technologies: "JavaFX, Maven",
      date: "February 2025",
      image: placeholderImageSrc,
      demoUrl: "https://car-loan-demo.example.com",
      githubUrl: "https://github.com/huzaifa-ibrar/car-loan-system",
      description: [
        "Built a JavaFX application with MongoDB for secure user authentication and data storage.",
        "Developed features for loan exploration, inputting details, and tracking loan history.",
        "Designed a database schema to manage vehicles, user records, and financial data."
      ]
    },
    {
      title: "Library Management System",
      technologies: "JavaScript, MongoDB",
      date: "November 2024",
      image: placeholderImageSrc,
      demoUrl: "https://library-system.example.com",
      githubUrl: "https://github.com/huzaifa-ibrar/library-system",
      description: [
        "Developed a full-stack web application using JavaScript, MongoDB, HTML/CSS, and additional frameworks.",
        "Implemented role-based authentication, providing administrators, staff, and regular users with tailored access and menus."
      ]
    },
    {
      title: "Kubernetes GitOps Pipeline",
      technologies: "JavaScript, MongoDB",
      date: "November 2024",
      image: placeholderImageSrc,
      demoUrl: "https://k8s-gitops.example.com",
      githubUrl: "https://github.com/huzaifa-ibrar/k8s-gitops",
      description: [
        "Built a GitOps-based CI/CD pipeline with Argo CD, Rollouts, and Workflows for automated Kubernetes deployments.",
        "Implemented Canary and Blue-Green deployments with auto rollbacks triggered by Git commits and Docker updates."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className={`section py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`group overflow-hidden relative rounded-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg h-full transition-all duration-300`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Project image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <motion.span 
                      className={`text-sm font-medium px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.date}
                    </motion.span>
                    
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-primary shadow-md"
                        aria-label="View live demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-gray-800 shadow-md"
                        aria-label="View source code"
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-200 opacity-90">{project.technologies}</p>
                  </div>
                </div>
              </div>
              
              {/* Project description */}
              <div className="p-6">
                <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex} 
                      className="text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * itemIndex, duration: 0.3 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 