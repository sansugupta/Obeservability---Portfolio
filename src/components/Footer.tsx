import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const technologies = [
    'Groundcover',
    'Prometheus',
    'Grafana',
    'ClickHouse',
    'Kubernetes',
    'eBPF',
    'Python',
    'ML/AI'
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sanskargupta9/',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:your.email@domain.com',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Activity className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">
                ObservabilityPro
              </span>
            </motion.div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming Infrastructure Monitoring from Reactive Alerts to Proactive Intelligence. 
              Enterprise-grade observability solutions built for scale, reliability, and actionable insights.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-400">87%</div>
              <div className="text-gray-400 text-sm">MTTD Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-400">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Achievement</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">$250K+</div>
              <div className="text-gray-400 text-sm">Annual Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-gray-400 text-sm">K8s Clusters</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Advanced Observability Portfolio. Built with passion for excellence.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>for better observability</span>
          </div>
        </div>

        {/* Professional Note */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              <strong className="text-primary-400">Open for Collaboration:</strong> 
              {' '}Available for consulting, speaking engagements, and enterprise observability projects. 
              <a 
                href="#contact" 
                className="text-primary-400 hover:text-primary-300 ml-1 inline-flex items-center"
              >
                Let's connect
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;