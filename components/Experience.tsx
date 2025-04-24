"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

// Base64 placeholder for images
const placeholderImageSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2U2ZTZlNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkNvbXBhbnkgSW1hZ2U8L3RleHQ+PC9zdmc+";

const Experience = () => {
  const { isDarkMode } = useTheme();
  
  const experiences = [
    {
      company: "Air Liquide",
      position: "Software Engineer",
      period: "October 2024 – February, 2025",
      location: "Montreal, Canada",
      image: placeholderImageSrc,
      projectUrl: "https://www.airliquide.com/",
      projectDescription: "Digital transformation initiatives focused on internal tooling and process optimization, improving team productivity across departments.",
      responsibilities: [
        "Developed and maintained internal software applications, contributing to digital transformation initiatives that improved team workflow by reducing manual tasks by 15%.",
        "Designed and implemented RESTful APIs, reducing system integration time by 2-3 hours per deployment and improving data consistency across systems.",
        "Optimized database performance and wrote SQL queries for OracleDB, improving query execution time and ensuring data integrity for business operations."
      ]
    },
    {
      company: "Emumba",
      position: "DevOps Engineer",
      period: "July 2024 – October 2024",
      location: "Dubai, UAE",
      image: placeholderImageSrc,
      projectUrl: "https://www.emumba.com/",
      projectDescription: "Cloud infrastructure optimization and CI/CD pipeline development that significantly reduced deployment times and improved overall system reliability.",
      responsibilities: [
        "Automated application deployments with AWS CodePipeline, reducing manual effort by 40 hours per month and deployment time by 30%.",
        "Managed Amazon S3 for secure data storage, improving data retrieval speeds and reducing storage costs by $2,000 annually.",
        "Deployed and managed containerized applications using Docker, ensuring 100% environmental consistency across development and production.",
        "Streamlined CI/CD pipelines, cutting build times from 45 minutes to 25 minutes and drastically increasing the code integration frequency."
      ]
    },
    {
      company: "Pakistan International Airlines",
      position: "Software Developer",
      period: "April 2024 – July 2024",
      location: "Islamabad, Pakistan",
      image: placeholderImageSrc,
      projectUrl: "https://www.piac.com.pk/",
      projectDescription: "Website and booking system revamp that modernized the passenger experience and improved overall digital engagement metrics.",
      responsibilities: [
        "Improved the PIA website's UI/UX, leading to a 30% increase in mobile traffic and reducing bounce rates by 15%.",
        "Designed and implemented routing APIs, cutting front-end and back-end data exchange time by 25%.",
        "Developed a secure, user-friendly passenger ticketing system, processing 1,000+ bookings per week with a 15% reduction in booking errors."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="experience" className="section relative overflow-hidden transition-colors duration-300">
      <div className="container relative z-10 py-16">
        <div className="flex justify-between items-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
        </div>
        
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div 
              key={index} 
              className={`group relative ${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'} p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
              variants={itemVariants}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 relative">
                  <div className="aspect-square relative rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 z-10">
                      <a 
                        href={experience.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-white font-medium bg-primary/80 hover:bg-primary px-3 py-2 rounded-md transition-colors duration-200"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <Image 
                      src={experience.image} 
                      alt={`${experience.company} project`}
                      width={300}
                      height={300}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>{experience.company}</h3>
                      <p className={`text-xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{experience.position}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.period}</p>
                      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <motion.li 
                        key={respIndex} 
                        className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * respIndex, duration: 0.3 }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div 
                    className={`mt-4 p-4 rounded-md ${isDarkMode ? 'bg-gray-700/70' : 'bg-white/90'} backdrop-blur-sm shadow-sm transition-all duration-300 opacity-0 group-hover:opacity-100`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Project Details</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>{experience.projectDescription}</p>
                    <a 
                      href={experience.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} font-medium`}
                    >
                      Visit Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

 