import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Activity, Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
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

  const floatingIcons = [
    { Icon: Activity, delay: 0, x: 100, y: 50 },
    { Icon: Zap, delay: 1, x: -80, y: 80 },
    { Icon: Shield, delay: 2, x: 120, y: -60 },
    { Icon: TrendingUp, delay: 0.5, x: -100, y: -40 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-primary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-200"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [1, 1.2, 1],
            x: [x, x + 20, x],
            y: [y, y - 20, y]
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ left: `${50 + x}px`, top: `${50 + y}%` }}
        >
          <Icon className="h-12 w-12" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 border border-primary-200">
              <Activity className="h-4 w-4 mr-2" />
              Enterprise Observability Expert
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Advanced{' '}
            <span className="gradient-text">Observability</span>
            <br />
            Portfolio
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Transforming Infrastructure Monitoring from{' '}
            <span className="text-red-500 font-semibold">Reactive Alerts</span> to{' '}
            <span className="text-accent-600 font-semibold">Proactive Intelligence</span>
          </motion.p>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-500 max-w-3xl mx-auto"
          >
            Comprehensive showcase of enterprise-grade observability solutions built for scale, 
            reliability, and actionable insights using cutting-edge tools including{' '}
            <span className="font-semibold text-primary-600">Groundcover</span>,{' '}
            <span className="font-semibold text-primary-600">Prometheus</span>,{' '}
            <span className="font-semibold text-primary-600">Grafana</span>, and{' '}
            <span className="font-semibold text-primary-600">ClickHouse</span>.
          </motion.p>

          {/* Key Metrics */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '87%', label: 'MTTD Reduction' },
              { value: '99.9%', label: 'Uptime Achievement' },
              { value: '75%', label: 'False Positive Reduction' },
              { value: '$250K+', label: 'Annual Savings' },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center text-gray-400"
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;