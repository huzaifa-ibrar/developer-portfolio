"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Skills = () => {
  const { isDarkMode } = useTheme();
  
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Java", "Spring Boot", "Python", "Django", "REST API", "GraphQL"]
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis", "DynamoDB"]
    },
    {
      category: "DevOps",
      items: ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins", "Terraform", "Prometheus"]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="skills" className={`section py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <div className="container">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}
              variants={itemVariants}
            >
              <div className={`p-5 ${isDarkMode ? 'bg-gray-700/50' : 'bg-primary/10'}`}>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-primary-light' : 'text-primary'}`}>
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        isDarkMode 
                          ? 'bg-gray-700 text-gray-200 border border-gray-600' 
                          : 'bg-gray-100 text-gray-800 border border-gray-200'
                      } transition-colors duration-300`}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: isDarkMode ? 'rgb(29, 78, 216)' : 'rgb(219, 234, 254)',
                        color: isDarkMode ? 'white' : 'rgb(30, 64, 175)'
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 