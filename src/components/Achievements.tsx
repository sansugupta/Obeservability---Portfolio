import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, Shield, DollarSign, Users, Award, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const performanceMetrics = [
    {
      icon: Clock,
      title: 'Mean Time to Detection (MTTD)',
      value: '87%',
      subtitle: 'reduction',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Mean Time to Resolution (MTTR)',
      value: '65%',
      subtitle: 'reduction',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Shield,
      title: 'False Positive Alerts',
      value: '75%',
      subtitle: 'reduction',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: TrendingUp,
      title: 'System Uptime',
      value: '99.9%',
      subtitle: 'achievement',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  ];

  const financialImpact = [
    {
      icon: DollarSign,
      title: 'Annual Cost Savings',
      value: '$250K+',
      description: 'Through intelligent monitoring and automation optimization'
    },
    {
      icon: Shield,
      title: 'Avoided Downtime Costs',
      value: '$1.2M+',
      description: 'Prevented through proactive monitoring and rapid response'
    },
    {
      icon: Users,
      title: 'Productivity Improvements',
      value: '35%',
      description: 'Increase in team efficiency through automated workflows'
    },
    {
      icon: Award,
      title: 'Customer Satisfaction',
      value: '92%',
      description: 'Up from 78% through improved system reliability'
    }
  ];

  const technicalMetrics = [
    { label: 'Cluster Monitoring', value: '50+', unit: 'Kubernetes clusters' },
    { label: 'Metric Ingestion', value: '10M+', unit: 'metrics/minute' },
    { label: 'Log Processing', value: '100GB+', unit: 'daily' },
    { label: 'User Sessions', value: '1M+', unit: 'daily active users monitored' },
    { label: 'Alert Processing', value: '10K+', unit: 'alerts/day intelligently routed' },
    { label: 'Dashboard Load Time', value: '<2', unit: 'seconds' },
    { label: 'Data Processing Latency', value: '<100', unit: 'milliseconds' },
    { label: 'Storage Optimization', value: '60%', unit: 'reduction' }
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

  const countUpVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white">
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
              Performance <span className="gradient-text">Benchmarks & Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable business outcomes and technical achievements demonstrating the 
              real-world impact of advanced observability implementations.
            </p>
          </motion.div>

          {/* Performance Improvements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🚀 Performance Improvements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={countUpVariants}
                  className="metric-card text-center"
                >
                  <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-500 text-sm mb-2">
                    {metric.subtitle}
                  </div>
                  <div className="text-gray-700 font-medium text-sm">
                    {metric.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Financial Impact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              💰 Financial Impact
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <impact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {impact.value}
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">
                    {impact.title}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {impact.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Metrics */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              ⚡ Technical Metrics
            </h3>
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technicalMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary-400 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-gray-300 text-sm mb-1">
                      {metric.unit}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scalability Showcase */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-8">
              📈 Scalability Metrics
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { value: '50+', label: 'Kubernetes Clusters' },
                { value: '10M+', label: 'Metrics/Minute' },
                { value: '100GB+', label: 'Daily Logs' },
                { value: '1M+', label: 'User Sessions' },
                { value: '10K+', label: 'Daily Alerts' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recognition */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12"
          >
            <Target className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Recognition
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              These achievements represent not just technical excellence, but a commitment to 
              delivering measurable business value through innovative observability solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">Enterprise</div>
                <div className="text-gray-500">Scale Solutions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">Global</div>
                <div className="text-gray-500">Impact & Reach</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;