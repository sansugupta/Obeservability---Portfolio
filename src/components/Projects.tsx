import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight, Server, Database, Activity, Users } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Enterprise Cluster Infrastructure Dashboard',
      category: 'Kubernetes Monitoring',
      icon: Server,
      description: 'Comprehensive Kubernetes cluster monitoring across multiple environments with intelligent health scoring and predictive analytics.',
      longDescription: 'Advanced multi-dimensional health scoring system with ML-based capacity forecasting achieving 95% accuracy. Features hierarchical drill-down from cluster to process level, cost optimization insights saving $50K+ annually, and geographic performance distribution across multiple regions.',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'ClickHouse', 'Python', 'ML/AI'],
      features: [
        'Multi-dimensional Health Scoring with weighted algorithms',
        'Predictive Resource Planning with 95% accuracy',
        'Hierarchical Drill-down (Cluster → Pod → Container → Process)',
        'Cost Optimization Insights saving $50K+ annually',
        'Geographic Performance Distribution tracking'
      ],
      metrics: {
        'MTTD Reduction': '87%',
        'Incident Resolution': '65% faster',
        'Uptime Achievement': '99.9%',
        'Cost Optimization': '40%'
      },
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Intelligent Daily Observability System',
      category: 'Automation & AI',
      icon: Activity,
      description: 'Fully automated observability platform performing comprehensive health checks, generating executive reports, and providing self-service diagnostics.',
      longDescription: 'Revolutionary automation platform with multi-environment health validation, AI-powered failure classification, and executive dashboard generation. Includes predictive maintenance alerts and self-healing workflows for common problems.',
      technologies: ['Python', 'AsyncIO', 'Pandas', 'ML/AI', 'Excel', 'Slack API'],
      features: [
        'Multi-environment Health Validation across Prod/Staging/Dev',
        'Smart Failure Classification with AI-powered categorization',
        'Executive Dashboard Generation with business intelligence',
        'Predictive Maintenance Alerts for proactive issue identification',
        'Self-healing Workflows for automated remediation'
      ],
      metrics: {
        'Automation Coverage': '95%',
        'Report Generation': 'Fully Automated',
        'False Positives': '75% reduction',
        'Executive Satisfaction': '92%'
      },
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Next-Generation Real User Monitoring',
      category: 'User Experience',
      icon: Users,
      description: 'Comprehensive end-user experience monitoring with advanced analytics, session replay, and business impact correlation.',
      longDescription: 'Advanced RUM implementation with real-time user journey mapping, performance waterfall analysis, and geographic performance insights. Features A/B testing integration and direct business impact correlation showing revenue impact of performance issues.',
      technologies: ['JavaScript', 'React', 'GroundCover RUM', 'Analytics', 'WebVitals'],
      features: [
        'Real-time User Journey Mapping with complete flow visualization',
        'Performance Waterfall Analysis with detailed request breakdown',
        'Geographic Performance Insights across global regions',
        'A/B Testing Integration for feature performance comparison',
        'Business Impact Correlation linking performance to revenue'
      ],
      metrics: {
        'User Sessions': '1M+ daily',
        'Performance Insights': 'Real-time',
        'Business Correlation': 'Revenue impact tracking',
        'Global Coverage': '50+ countries'
      },
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Intelligent Alerting Ecosystem',
      category: 'ML & Automation',
      icon: Database,
      description: 'ML-enhanced alerting system with smart routing, context-aware notifications, and automated remediation workflows.',
      longDescription: 'Revolutionary alerting system using ML-powered anomaly detection to reduce false positives by 75%. Features dynamic threshold adjustment, contextual alert enrichment with root cause suggestions, and intelligent routing based on severity and business impact.',
      technologies: ['Prometheus', 'AlertManager', 'ML/AI', 'Slack', 'Webhook', 'YAML'],
      features: [
        'ML-powered Anomaly Detection reducing false positives by 75%',
        'Dynamic Threshold Adjustment with self-learning capabilities',
        'Contextual Alert Enrichment with automatic root cause suggestions',
        'Smart Alert Correlation preventing alert storms during incidents',
        'Automated Escalation Workflows with intelligent routing'
      ],
      metrics: {
        'False Positive Reduction': '75%',
        'Alert Response Time': '<30 seconds',
        'Automation Coverage': '90%',
        'Incident Correlation': 'Smart grouping'
      },
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <section id="projects" className="py-20 bg-gray-50">
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
              Featured <span className="gradient-text">Projects & Achievements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Production-ready observability solutions delivering measurable business impact 
              and technical excellence across enterprise environments.
            </p>
          </motion.div>

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <project.icon className="h-5 w-5 mr-2" />
                {project.title}
              </button>
            ))}
          </motion.div>

          {/* Selected Project Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-full">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-accent-600/80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <projects[selectedProject].icon className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">
                        {projects[selectedProject].category}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <span className="tech-badge mb-4">
                        {projects[selectedProject].category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {projects[selectedProject].title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {projects[selectedProject].longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].technologies.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {projects[selectedProject].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Impact Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(projects[selectedProject].metrics).map(([key, value], index) => (
                          <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-xl font-bold text-primary-600">{value}</div>
                            <div className="text-sm text-gray-500">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={projects[selectedProject].demoUrl}
                        className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        View Demo
                      </a>
                      <a
                        href={projects[selectedProject].githubUrl}
                        className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Grid Overview */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-all duration-300 cursor-pointer ${
                  selectedProject === index
                    ? 'border-primary-600 shadow-lg'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
                onClick={() => setSelectedProject(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${
                    selectedProject === index ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-600'
                  }`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;