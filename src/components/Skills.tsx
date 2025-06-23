import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Observability Platforms',
      skills: [
        { name: 'Groundcover (eBPF)', level: 100, color: 'bg-blue-500' },
        { name: 'Prometheus', level: 100, color: 'bg-orange-500' },
        { name: 'Grafana', level: 100, color: 'bg-yellow-500' },
        { name: 'ClickHouse', level: 95, color: 'bg-red-500' },
        { name: 'Jaeger/OpenTelemetry', level: 90, color: 'bg-purple-500' },
      ]
    },
    {
      title: 'Container Orchestration',
      skills: [
        { name: 'Kubernetes', level: 100, color: 'bg-blue-600' },
        { name: 'Docker', level: 100, color: 'bg-blue-400' },
        { name: 'Helm Charts', level: 95, color: 'bg-indigo-500' },
        { name: 'Operators', level: 90, color: 'bg-indigo-600' },
      ]
    },
    {
      title: 'Programming & Automation',
      skills: [
        { name: 'Python', level: 100, color: 'bg-green-500' },
        { name: 'JavaScript/Node.js', level: 95, color: 'bg-yellow-400' },
        { name: 'Shell Scripting', level: 100, color: 'bg-gray-600' },
        { name: 'Go', level: 90, color: 'bg-cyan-500' },
        { name: 'YAML/JSON', level: 100, color: 'bg-gray-500' },
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      skills: [
        { name: 'AWS', level: 95, color: 'bg-orange-400' },
        { name: 'GCP', level: 90, color: 'bg-blue-500' },
        { name: 'Azure', level: 85, color: 'bg-blue-600' },
        { name: 'Terraform', level: 95, color: 'bg-purple-600' },
      ]
    }
  ];

  const specializedSkills = [
    'eBPF Programming',
    'PromQL Mastery',
    'Grafana Plugin Development',
    'Time-Series Database Optimization',
    'ML/AI Integration',
    'Business Intelligence',
    'Incident Response',
    'Capacity Planning',
    'Performance Tuning',
    'Security Monitoring'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across the entire observability stack, from kernel-level 
              monitoring to business intelligence dashboards.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Specialized Expertise */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Specialized Expertise
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {specializedSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={itemVariants}
                  className="tech-badge"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Recognition */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Professional Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold">5+</div>
                <div className="text-primary-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-primary-100">Production Clusters</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-primary-100">Uptime Achievement</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;