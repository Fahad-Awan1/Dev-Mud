import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Quote, Building2, Users } from 'lucide-react';

export const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 60, damping: 12 } 
    }
  };

  const testimonials = [
    {
      quote: "Dev Mud transformed our legacy systems into a modern, cloud-native masterpiece. Their expertise in React and Node.js is unmatched. The team was professional, responsive, and delivered beyond our expectations.",
      author: "John Doe",
      role: "CTO",
      company: "TechStart Inc",
      industry: "Technology",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    },
    {
      quote: "Outstanding service! Their automation scripts saved us hundreds of man-hours per month. The ROI was evident within weeks. Dev Mud didn't just deliver code—they delivered a solution that transformed our operations.",
      author: "Sarah Smith",
      role: "Director of Operations",
      company: "Logistics Co",
      industry: "Logistics",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      quote: "The web application they built is flawless. Secure, fast, and beautiful. Dev Mud is the partner you want for mission-critical software. They understood our complex requirements and delivered a solution that exceeded all benchmarks.",
      author: "Mike Johnson",
      role: "Founder & CEO",
      company: "FinTech Solutions",
      industry: "Financial Services",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    {
      quote: "We needed a custom e-commerce platform that could scale with our rapid growth. Dev Mud delivered exactly that. Their attention to detail and commitment to quality is remarkable. The platform handles thousands of transactions daily without a hitch.",
      author: "Emily Chen",
      role: "Head of Digital",
      company: "RetailPro",
      industry: "Retail",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
    },
    {
      quote: "The AI-powered chatbot Dev Mud created for us has revolutionized our customer service. Response times decreased by 70% and customer satisfaction scores increased significantly. Absolutely transformative!",
      author: "David Martinez",
      role: "VP Customer Experience",
      company: "ServiceMax",
      industry: "Customer Service",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
      quote: "From concept to deployment, Dev Mud guided us every step of the way. Their mobile app development expertise helped us launch in record time. The app is intuitive, fast, and our users love it!",
      author: "Lisa Anderson",
      role: "Product Manager",
      company: "HealthTech Innovations",
      industry: "Healthcare",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
    },
    {
      quote: "Dev Mud's cloud migration services saved our company during a critical growth phase. They moved our entire infrastructure to AWS with zero downtime. Their expertise and planning were impeccable.",
      author: "Robert Taylor",
      role: "Chief Infrastructure Officer",
      company: "DataStream Corp",
      industry: "Data Analytics",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"
    },
    {
      quote: "The custom CRM system Dev Mud built for us perfectly fits our unique workflow. It's improved team collaboration and client management tremendously. Best investment we've made in our tech stack.",
      author: "Amanda White",
      role: "Managing Director",
      company: "Consulting Group",
      industry: "Business Consulting",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda"
    },
    {
      quote: "Working with Dev Mud was a game-changer for our startup. They took our vision and turned it into a stunning, functional product. Their agile approach and technical skills are top-notch.",
      author: "James Wilson",
      role: "Co-Founder",
      company: "Innovation Labs",
      industry: "SaaS",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
  ];

  const stats = [
    { value: "150+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "98%", label: "Client Retention" },
    { value: "200+", label: "5-Star Reviews" }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-mud-950 to-black overflow-hidden border-b border-mud-900">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mud-900 via-white to-mud-900 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Client Success Stories</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              What Our <span className="text-mud-400">Clients Say</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-mud-400 max-w-3xl mx-auto font-light">
              Don't just take our word for it—hear from our satisfied partners and clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-mud-500 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-mud-950 border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-black border border-mud-800 p-8 rounded-lg relative hover:border-mud-600 transition-all group"
              >
                {/* Quote icon */}
                <div className="absolute top-0 left-8 -mt-4 bg-black px-2">
                  <Quote size={32} className="text-white fill-white/10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-white fill-white" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg italic text-mud-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="border-t border-mud-800 pt-6 flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full bg-mud-900"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.author}</p>
                    <p className="text-mud-500 text-sm">{testimonial.role}</p>
                    <p className="text-mud-600 text-xs flex items-center gap-1 mt-1">
                      <Building2 size={12} />
                      {testimonial.company} • {testimonial.industry}
                    </p>
                  </div>
                </div>
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
            <div className="flex justify-center mb-6">
              <Users size={48} className="text-mud-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our <span className="text-mud-400">Success Stories</span>
            </h2>
            <p className="text-xl text-mud-500 mb-10">
              Ready to transform your business with technology? Let's create your success story together.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-white text-black hover:bg-mud-200 px-10 py-4 rounded-sm font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border border-mud-700 text-white hover:bg-mud-900 hover:border-white px-10 py-4 rounded-sm font-bold text-lg transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
