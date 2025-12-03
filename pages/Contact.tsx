import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co to send email without backend
      const formElement = e.target as HTMLFormElement;
      const response = await fetch('https://formsubmit.co/devmudservices@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try emailing us directly at devmudservices@gmail.com');
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+92 321 5765302", "+92 323 0866148"],
      action: "tel:+92 323 0866148"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["devmudservices@gmail.com"],
      action: "mailto:devmudservices@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: ["Faisalabad, Pakistan"],
      action: null
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Mon - Sun: 9:00 AM - 6:00 PM", "24/7 Support Available"],
      action: null
    }
  ];

  const services = [
    "Web Development",
    "App Development",
    "Custom Software",
    "AI & Machine Learning",
    "Automation & Integration",
    "Cloud Solutions",
    "Consulting",
    "Other"
  ];

  const  containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 20 }
    }
  };

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
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Contact <span className="text-mud-400">Us</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-mud-400 max-w-3xl mx-auto font-light">
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-black border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-mud-950 border border-mud-800 rounded-lg p-6 hover:border-white transition-all group"
              >
                <div className="w-12 h-12 bg-mud-900 rounded-sm flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-black transition-all">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  info.action ? (
                    <a 
                      key={i}
                      href={info.action} 
                      className="block text-mud-400 hover:text-white transition-colors mb-1"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={i} className="text-mud-400 mb-1">{detail}</p>
                  )
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-mud-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Send Us a <span className="text-mud-400">Message</span>
              </h2>
              <p className="text-mud-500">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <motion.div 
              className="bg-black border border-mud-800 rounded-lg p-8 md:p-12"
              whileHover={{ borderColor: '#71717a' }}
              transition={{ duration: 0.3 }}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle size={48} className="text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-mud-400 text-lg">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="name" className="block text-sm font-semibold text-mud-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-mud-950 border border-mud-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="Enter your name"
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="email" className="block text-sm font-semibold text-mud-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-mud-950 border border-mud-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="Enter your email"
                      />
                    </motion.div>

                    {/* Phone */}
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="phone" className="block text-sm font-semibold text-mud-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-mud-950 border border-mud-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <label htmlFor="company" className="block text-sm font-semibold text-mud-400 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-mud-950 border border-mud-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                        placeholder="Enter your company name"
                      />
                    </motion.div>
                  </div>

                  {/* Service */}
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="service" className="block text-sm font-semibold text-mud-400 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-mud-950 border border-mud-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white transition-colors cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="message" className="block text-sm font-semibold text-mud-400 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-mud-950 border border-mud-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`w-full bg-white text-black px-8 py-4 rounded-sm font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-mud-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-mud-600 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map/Additional CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-xl text-mud-500 mb-8">
              Give us a call or schedule a free consultation to discuss your project in detail.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="tel:+92 321 5765302" 
                className="bg-white text-black hover:bg-mud-200 px-8 py-4 rounded-sm font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call: +92 321 5765302
              </a>
              <a 
                href="mailto:devmudservices@gmail.com" 
                className="bg-transparent border border-mud-700 text-white hover:bg-mud-900 hover:border-white px-8 py-4 rounded-sm font-bold text-lg transition-all inline-flex items-center justify-center gap-3"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
