import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, Zap, BarChart, Shield, Phone, Mail, ExternalLink, Smartphone, Globe, Code, Database } from 'lucide-react';

// Hero Component
const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 60, damping: 20 }
    },
  };

  const taglineVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
      }
    },
  };

  const titleLeftVariants: Variants = {
    hidden: { opacity: 0, x: -100, filter: "blur(20px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const titleRightVariants: Variants = {
    hidden: { opacity: 0, x: 100, filter: "blur(20px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const tagline = "Software Engineering & Digital Solutions";

  return (
    <section id="home" className="relative bg-black min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Spotlight Glow Effects - Silver/White */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Title Lettering with Metal Gradient */}
          <div className="flex justify-center items-center gap-4 mb-6 md:mb-10 overflow-visible">
            <motion.span 
              variants={titleLeftVariants}
              className="font-display font-black text-6xl md:text-9xl text-chrome-gradient tracking-tighter drop-shadow-2xl inline-block"
            >
              DEV
            </motion.span>
             <motion.span 
              variants={titleRightVariants}
              className="font-display font-black text-6xl md:text-9xl text-chrome-gradient tracking-tighter drop-shadow-2xl inline-block"
            >
              MUD
            </motion.span>
          </div>

          <motion.div variants={itemVariants} className="h-px w-32 md:w-64 bg-gradient-to-r from-transparent via-mud-500 to-transparent mx-auto mb-8"></motion.div>

          <motion.h2 variants={taglineVariants} className="text-xl md:text-3xl font-bold text-mud-400 uppercase tracking-[0.2em] mb-6">
            {tagline.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
            CUSTOM SOFTWARE, WEB DEVELOPMENT, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-mud-300 to-white">AI TECHNOLOGY</span> & CONSULTING
          </motion.h1>

          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg text-mud-400">
             <div className="flex items-center gap-2">
                <Phone className="text-white" size={20} />
                <span>+92 321 5765302</span>
             </div>
             <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-mud-600"></div>
             <div className="flex items-center gap-2">
                <Mail className="text-white" size={20} />
                <span>devmudservices@gmail.com</span>
             </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white hover:bg-mud-200 text-black px-8 py-4 rounded-sm font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95 duration-200">
              Book Free Consultation
            </Link>
            <Link to="/services" className="bg-transparent border border-mud-700 text-white hover:bg-mud-900 hover:border-white px-8 py-4 rounded-sm font-bold text-lg transition-all hover:-translate-y-1 hover:scale-105 active:scale-95 duration-200">
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const stats = [
    { icon: <CheckCircle size={32} />, value: '180+', label: 'Projects Shipped' },
    { icon: <Zap size={32} />, value: '4.9/5', label: 'Client Rating' },
    { icon: <BarChart size={32} />, value: '2024', label: 'Founded' },
    { icon: <Shield size={32} />, value: '99%', label: 'Success Rate' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="bg-mud-950 py-16 border-t border-mud-900 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 border border-mud-800 rounded-lg p-8 flex items-center gap-4 hover:border-mud-500 transition-all group hover:bg-mud-900/50"
            >
              <div className="p-3 rounded-lg bg-mud-900 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-mud-500 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Tech Highlight Section
const TechHighlight = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 50, damping: 20 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.1)",
      borderColor: "rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 bg-mud-950 overflow-hidden relative border-t border-mud-900">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-block bg-mud-900 px-4 py-1.5 rounded-full shadow-sm border border-mud-700 mb-8">
             <span className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
               <Zap size={16} className="text-white fill-white" /> The Future is Now
             </span>
          </motion.div>

          <motion.h2 
             variants={itemVariants}
             className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6"
          >
            AI, Technology & <br/><span className="text-mud-400">Automation Consulting</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-mud-500 font-light mb-16">
            Reinventing What's Possible with Artificial Intelligence
          </motion.p>

          <motion.div variants={itemVariants} className="bg-black rounded-lg shadow-2xl border border-mud-800 p-8 md:p-12 text-left max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-mud-200 font-medium mb-8 relative overflow-hidden">
               At Dev Mud, we don't just keep up with technology — <motion.span 
                 initial={{ backgroundPosition: "0% 50%" }}
                 animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-mud-400 to-white font-bold bg-[length:200%_auto]"
               >we lead with it.</motion.span>
            </p>
            <p className="text-mud-400 mb-8 leading-relaxed">
               Our <strong className="text-white">AI, Technology & Automation Division</strong> empowers businesses to simplify, 
               streamline, and scale every part of their operational lives through intelligent systems.
               We help you harness AI-powered tools, predictive analytics, and digital transformation 
               to unlock your next level of growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: <Zap className="text-white" />, text: "Streamline workflows and reduce manual effort" },
                { icon: <Shield className="text-white" />, text: "Improve accuracy, security, and decision-making" },
                { icon: <Database className="text-white" />, text: "Lower costs while increasing productivity" },
                { icon: <BarChart className="text-white" />, text: "Unlock growth through automation and intelligence" }
              ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   variants={cardVariants}
                   whileHover="hover"
                   className="flex items-start gap-4 p-4 rounded-sm bg-mud-900/50 border border-mud-800 transition-colors cursor-default"
                 >
                    <div className="mt-1">{item.icon}</div>
                    <span className="text-mud-300 font-medium">{item.text}</span>
                 </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/services" className="bg-white hover:bg-mud-200 text-black px-8 py-3.5 rounded-sm font-bold shadow-lg inline-flex items-center gap-2 mx-auto transition-all">
                Explore AI Consulting Services <ExternalLink size={18} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Brief Services Preview
const ServicesPreview = () => {
  const services = [
    {
      icon: <Smartphone size={40} />,
      title: "App Development",
      description: "Cutting-edge mobile and desktop applications tailored to modern user expectations.",
      features: ["iOS & Android Apps", "Cross-platform Flutter/React Native", "Desktop Applications", "App Maintenance"],
      link: "/services#app-development"
    },
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description: "Custom web solutions that drive results and enhance your digital presence.",
      features: ["Website Design & Development", "E-commerce Solutions", "Web Applications (SaaS)", "SEO Optimization"],
      link: "/services#web-development"
    },
    {
      icon: <Code size={40} />,
      title: "Automation",
      description: "Streamline your workflows with intelligent automation scripts and bot integration.",
      features: ["Workflow Automation Design", "API Integrations", "Custom Bot Development", "Legacy System Migration"],
      link: "/services#automation-integration"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black border-t border-mud-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Why Choose Dev Mud?</h2>
          <p className="text-xl text-mud-500">We're committed to delivering exceptional value and code quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
              className="bg-mud-950 rounded-lg p-8 shadow-lg border border-mud-800 hover:border-white transition-colors group"
            >
              <div className={`w-16 h-16 bg-mud-900 rounded-sm flex items-center justify-center mb-6 group-hover:bg-white transition-all duration-300`}>
                <div className="text-white group-hover:text-black transition-colors">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-mud-400 mb-6 min-h-[60px]">{service.description}</p>
              
              <motion.ul 
                className="space-y-3 mb-8"
                variants={{
                  hover: {
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center gap-2 text-sm text-mud-500 opacity-80"
                    variants={{
                      hover: { opacity: 1, y: -4, x: 4, color: "#ffffff" }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle size={16} className="text-white" /> {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <Link to={service.link} className="inline-flex items-center font-bold text-white hover:text-mud-300 transition-colors border-b border-white hover:border-mud-300 pb-0.5">
                Learn More <ExternalLink size={16} className="ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="bg-transparent border border-mud-600 text-white hover:bg-white hover:text-black px-10 py-4 rounded-sm font-bold shadow-md hover:shadow-lg transition-all text-lg inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section className="py-20 bg-black border-t border-mud-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Ready to <span className="text-mud-400">Transform</span> Your Business?
        </h2>
        <p className="text-xl text-mud-500 mb-10">
          Schedule your free consultation today and discover how our expert engineering solutions can help you achieve your goals.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact" className="bg-white text-black hover:bg-mud-200 px-8 py-4 rounded-sm font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-all duration-300">
            Book Free Consultation &rarr;
          </Link>
          <a href="tel:+923215765302" className="bg-transparent border border-mud-700 text-white hover:bg-mud-900 hover:border-white px-8 py-4 rounded-sm font-bold text-lg flex items-center justify-center gap-3 transition-all">
            <Phone size={20} /> Call Now: +92 321 5765302
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-mud-600 text-sm font-medium">
          <span className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> No Commitment Required</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Expert Guidance</span>
          <span className="flex items-center gap-2"><CheckCircle size={16} className="text-white" /> Personalized Solutions</span>
        </div>
      </div>
    </section>
  );
};

// Main Home Page
export const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <TechHighlight />
      <ServicesPreview />
      <CTA />
    </>
  );
};
