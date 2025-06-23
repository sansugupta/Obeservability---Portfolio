import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Clock, Globe, Award } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    {
      title: 'Architecture Design',
      description: 'Complete observability strategy development and technology stack optimization',
      icon: '🏗️'
    },
    {
      title: 'Implementation Support',
      description: 'Hands-on implementation, custom dashboard development, and team training',
      icon: '⚙️'
    },
    {
      title: 'Optimization Consulting',
      description: 'Performance tuning, cost optimization, and best practices implementation',
      icon: '📊'
    },
    {
      title: 'Training & Workshops',
      description: 'Observability fundamentals, advanced PromQL, and SRE culture development',
      icon: '🎓'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@domain.com',
      href: 'mailto:your.email@domain.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sanskargupta9',
      href: 'https://www.linkedin.com/in/sanskargupta9/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'yourusername',
      href: 'https://github.com/yourusername'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'UTC+5:30 (IST)',
      href: null
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
    <section id="contact" className="py-20 bg-gray-50">
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
              Professional <span className="gradient-text">Services & Collaboration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your infrastructure monitoring? Let's discuss how advanced 
              observability can drive your business forward.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              💼 Available Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 card-hover text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Start Your Project
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="architecture">Architecture Design</option>
                      <option value="implementation">Implementation Support</option>
                      <option value="optimization">Optimization Consulting</option>
                      <option value="training">Training & Workshops</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your observability challenges and goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-600 mb-8">
                  Ready to discuss your observability needs? I'm available for consultations, 
                  project collaborations, and speaking engagements.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary-600" />
                  Availability
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="font-medium text-primary-600">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Status:</span>
                    <span className="font-medium text-accent-600">Open to new projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timezone:</span>
                    <span className="font-medium">UTC+5:30 (IST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Global Clients:</span>
                    <span className="font-medium text-primary-600">Flexible scheduling</span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="font-semibold text-gray-900">Client Testimonial</span>
                </div>
                <blockquote className="text-gray-600 italic mb-4">
                  "The observability solution delivered exceeded our expectations. The 87% reduction 
                  in MTTD and automated reporting saved our team countless hours while improving 
                  our system reliability significantly."
                </blockquote>
                <div className="text-sm text-gray-500">
                  — Senior DevOps Engineer, Fortune 500 Company
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;