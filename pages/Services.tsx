import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code, Database, Cloud, Cpu, Zap, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

export const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };

  const services = [
    {
      id: "app-development",
      slug: "app-development",
      icon: <Smartphone size={48} />,
      title: "App Development",
      description: "Cutting-edge mobile and desktop applications tailored to modern user expectations and business needs.",
      features: [
        "iOS & Android Native Apps",
        "Cross-platform with Flutter/React Native",
        "Desktop Applications (Electron, .NET)",
        "Progressive Web Apps (PWA)",
        "App Store Optimization",
        "Ongoing Maintenance & Support"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: "web-development",
      slug: "web-development",
      icon: <Globe size={48} />,
      title: "Web Development",
      description: "Custom web solutions that drive results, enhance user experience, and scale with your business.",
      features: [
        "Custom Website Design & Development",
        "E-commerce Solutions (Shopify, WooCommerce)",
        "Web Applications & SaaS Platforms",
        "Content Management Systems (CMS)",
        "SEO Optimization & Analytics",
        "Performance Optimization"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: "custom-software",
      slug: "custom-software",
      icon: <Code size={48} />,
      title: "Custom Software",
      description: "Bespoke software solutions engineered to solve your unique business challenges and workflows.",
      features: [
        "Enterprise Software Development",
        "API Development & Integration",
        "Microservices Architecture",
        "Third-party System Integration",
        "Custom CRM & ERP Systems",
        "Legacy System Modernization"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      id: "ai-machine-learning",
      slug: "ai-machine-learning",
      icon: <Cpu size={48} />,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate, predict, and optimize your operations.",
      features: [
        "AI Strategy & Consulting",
        "Machine Learning Model Development",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI-Powered Chatbots"
      ],
      color: "from-orange-600 to-red-600"
    },
    {
      id: "automation-integration",
      slug: "automation-integration",
      icon: <Zap size={48} />,
      title: "Automation & Integration",
      description: "Streamline workflows and eliminate manual tasks with intelligent automation and seamless integrations.",
      features: [
        "Workflow Automation Design",
        "Business Process Automation",
        "Custom Bot Development",
        "API & Webhook Integrations",
        "Data Pipeline Automation",
        "DevOps & CI/CD Implementation"
      ],
      color: "from-yellow-600 to-amber-600"
    },
    {
      id: "cloud-solutions",
      slug: "cloud-solutions",
      icon: <Cloud size={48} />,
      title: "Cloud Solutions",
      description: "Scalable, secure, and cost-effective cloud infrastructure and migration services.",
      features: [
        "Cloud Architecture Design",
        "AWS, Azure, GCP Implementation",
        "Cloud Migration Services",
        "Serverless Architecture",
        "Cloud Security & Compliance",
        "Performance Monitoring & Optimization"
      ],
      color: "from-indigo-600 to-blue-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, challenges, and technical requirements."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy and roadmap tailored to your specific needs."
    },
    {
      step: "03",
      title: "Development",
      description: "Our expert team builds your solution using industry best practices and cutting-edge technologies."
    },
    {
      step: "04",
      title: "Deployment",
      description: "We ensure a smooth launch with thorough testing, documentation, and training."
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing maintenance, updates, and support to keep your solution running optimally."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-mud-950 to-black overflow-hidden border-b border-mud-900">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">What We Offer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Our <span className="text-mud-400">Services</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-mud-400 max-w-3xl mx-auto font-light">
              Comprehensive technology solutions to accelerate your digital transformation and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-mud-950 rounded-lg p-8 shadow-lg border border-mud-800 hover:border-white transition-all group relative overflow-hidden scroll-mt-24"
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-mud-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-white transition-all duration-300">
                    <div className="text-white group-hover:text-black transition-colors">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-mud-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-start gap-2 text-sm text-mud-500"
                      >
                        <CheckCircle size={16} className="text-white mt-0.5 flex-shrink-0" /> 
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 font-bold text-white hover:text-mud-300 transition-colors group/link"
                  >
                    Get Started 
                    <ArrowRight size={16} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-mud-950 border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Our <span className="text-mud-400">Process</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-black border border-mud-800 rounded-lg p-6 hover:border-white transition-all group h-full">
                  <div className="text-6xl font-display font-black text-mud-900 group-hover:text-mud-700 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-mud-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-mud-800"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Get <span className="text-mud-400">Started</span>?
            </h2>
            <p className="text-xl text-mud-500 mb-10">
              Let's discuss how we can help transform your business with the right technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-white text-black hover:bg-mud-200 px-10 py-4 rounded-sm font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border border-mud-700 text-white hover:bg-mud-900 hover:border-white px-10 py-4 rounded-sm font-bold text-lg transition-all"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
