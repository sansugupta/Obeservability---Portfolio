import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Database, Shield, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const specializations = [
    {
      icon: Server,
      title: 'Kubernetes Orchestration',
      description: 'Expert in managing 50+ production clusters with advanced monitoring and automation'
    },
    {
      icon: Database,
      title: 'eBPF Technology',
      description: 'Advanced kernel-level monitoring and zero-instrumentation observability solutions'
    },
    {
      icon: Shield,
      title: 'SRE Practices',
      description: 'Implementing reliability engineering principles with 99.9% uptime achievement'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'ML-enhanced analytics reducing MTTD by 87% and false positives by 75%'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading cross-functional teams in implementing enterprise observability solutions'
    },
    {
      icon: Award,
      title: 'Business Impact',
      description: 'Delivered $250K+ annual savings through intelligent monitoring and automation'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              About the <span className="gradient-text">Observability Expert</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate Site Reliability Engineer specializing in architecting and implementing 
              next-generation observability ecosystems that predict failures, optimize performance, 
              and deliver exceptional user experiences.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Transforming Infrastructure Monitoring
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  As a passionate Site Reliability Engineer, I specialize in architecting and implementing 
                  <strong className="text-primary-600"> next-generation observability ecosystems</strong> that 
                  don't just monitor systems—they predict failures, optimize performance, and deliver 
                  exceptional user experiences.
                </p>
                
                <p>
                  This portfolio represents months of hands-on experience building production-ready 
                  monitoring solutions for <strong className="text-primary-600">Kubernetes-based applications</strong> using 
                  cutting-edge tools including Groundcover, Prometheus, Grafana, and ClickHouse.
                </p>
                
                <p>
                  My approach focuses on <strong className="text-accent-600">proactive intelligence</strong> rather than 
                  reactive monitoring, implementing ML-enhanced anomaly detection and business-impact 
                  correlation that links technical metrics to business outcomes.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '10M+', label: 'Metrics/Minute' },
                  { value: '50+', label: 'K8s Clusters' },
                  { value: '1M+', label: 'Daily Users Monitored' },
                  { value: '100GB+', label: 'Daily Log Processing' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Specializations */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Core Specializations
              </h3>
              
              <div className="grid gap-4">
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <spec.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {spec.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {spec.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                My Observability Philosophy
              </h3>
              <blockquote className="text-lg text-gray-700 italic max-w-4xl mx-auto">
                "True observability isn't just about collecting data—it's about transforming that data 
                into actionable intelligence that empowers teams to build more reliable, performant, 
                and user-centric systems. Every metric should tell a story, every alert should provide 
                context, and every dashboard should drive decisions."
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;