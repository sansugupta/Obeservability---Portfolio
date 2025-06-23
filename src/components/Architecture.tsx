import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Server, Activity, Zap, Shield, BarChart3 } from 'lucide-react';

const Architecture = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const architectureLayers = [
    {
      title: 'Production Infrastructure',
      icon: Server,
      color: 'bg-blue-500',
      components: ['Production Cluster', 'Staging Cluster', 'Development Cluster', 'Testing Cluster'],
      description: 'Multi-environment Kubernetes infrastructure with comprehensive monitoring coverage'
    },
    {
      title: 'Data Collection Layer',
      icon: Activity,
      color: 'bg-green-500',
      components: ['Groundcover Agent (eBPF)', 'Prometheus Metrics', 'Custom Exporters', 'Business KPIs'],
      description: 'Zero-instrumentation monitoring with revolutionary eBPF technology'
    },
    {
      title: 'Processing & Storage',
      icon: Database,
      color: 'bg-purple-500',
      components: ['ClickHouse Analytics', 'Time Series DB', 'Data Processing', 'ETL Pipelines'],
      description: 'Lightning-fast columnar database with intelligent data aggregation'
    },
    {
      title: 'Intelligence Layer',
      icon: Zap,
      color: 'bg-yellow-500',
      components: ['Grafana Visualization', 'Alert Manager', 'ML Engine', 'Anomaly Detection'],
      description: 'ML-enhanced analytics reducing false positives by 75%'
    },
    {
      title: 'Action & Integration',
      icon: Shield,
      color: 'bg-red-500',
      components: ['Slack Integration', 'Automated Runbooks', 'Executive Reports', 'External APIs'],
      description: 'Context-rich notifications with automated remediation workflows'
    },
    {
      title: 'User Experience Monitoring',
      icon: BarChart3,
      color: 'bg-indigo-500',
      components: ['Real User Monitoring', 'Performance Analytics', 'Session Replay', 'Business Impact'],
      description: 'Complete user journey tracking with business impact correlation'
    }
  ];

  const dataFlow = [
    { from: 0, to: 1, label: 'Metrics Collection' },
    { from: 1, to: 2, label: 'Data Ingestion' },
    { from: 2, to: 3, label: 'Processing & Analysis' },
    { from: 3, to: 4, label: 'Intelligent Alerting' },
    { from: 5, to: 2, label: 'User Data' },
    { from: 3, to: 5, label: 'Insights' }
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
    <section id="architecture" className="py-20 bg-white">
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
              Complete <span className="gradient-text">Observability Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring across multiple dimensions with intelligent data flow 
              and automated decision-making capabilities.
            </p>
          </motion.div>

          {/* Architecture Overview */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                360-Degree Observability Ecosystem
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From infrastructure metrics to user experience analytics, our architecture 
                provides complete visibility across the entire technology stack.
              </p>
            </div>

            {/* Architecture Layers */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${layer.color} text-white mr-4`}>
                      <layer.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {layer.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {layer.description}
                  </p>
                  
                  <div className="space-y-2">
                    {layer.components.map((component, compIndex) => (
                      <div 
                        key={compIndex}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                        {component}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Zero Instrumentation
              </h4>
              <p className="text-gray-600">
                Revolutionary eBPF technology provides comprehensive monitoring without 
                code changes or performance impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Proactive Intelligence
              </h4>
              <p className="text-gray-600">
                ML-enhanced anomaly detection and predictive analytics prevent issues 
                before they impact users.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Business Correlation
              </h4>
              <p className="text-gray-600">
                Direct correlation between technical metrics and business outcomes 
                for data-driven decision making.
              </p>
            </div>
          </motion.div>

          {/* Technical Specifications */}
          <motion.div 
            variants={itemVariants}
            className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical Specifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Metric Ingestion', value: '10M+/min', icon: '📊' },
                { label: 'Log Processing', value: '100GB+/day', icon: '📝' },
                { label: 'Alert Processing', value: '10K+/day', icon: '🚨' },
                { label: 'Dashboard Load', value: '<2 seconds', icon: '⚡' },
              ].map((spec, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{spec.icon}</div>
                  <div className="text-2xl font-bold text-primary-400 mb-1">
                    {spec.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;