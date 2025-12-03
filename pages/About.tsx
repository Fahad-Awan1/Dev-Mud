import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Target, Trophy, Zap, Shield, Heart, Lightbulb } from 'lucide-react';

// Team Carousel Component
const TeamCarousel = ({ team }: { team: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [team.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
      const gap = 32; // 2rem gap
      carouselRef.current.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-mud-950 border border-mud-800 rounded-lg p-8 hover:border-white transition-all group relative overflow-hidden flex-shrink-0 w-[350px]"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-mud-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-mud-800 group-hover:border-white transition-all">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover bg-mud-900"
                  />
                </div>
              </div>

              {/* Name and Role */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-mud-400 font-semibold mb-1">{member.role}</p>
                <p className="text-mud-500 text-sm italic">{member.specialty}</p>
              </div>

              {/* Bio */}
              <p className="text-mud-400 text-sm leading-relaxed mb-6 text-center">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-mud-900 border border-mud-800 rounded-full text-xs text-mud-300 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-mud-700'
            }`}
            aria-label={`Go to team member ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 20 }
    }
  };

  const values = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "We write maintainable, scalable code that stands the test of time."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Your success is our success. We partner with you every step of the way."
    },
    {
      icon: <Zap size={32} />,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to solve complex problems."
    },
    {
      icon: <Shield size={32} />,
      title: "Reliable & Secure",
      description: "Security and reliability are built into everything we create."
    }
  ];

  const team = [
    {
      name: "Muneeb Hassan",
      role: "Leader",
      specialty: "Full Stack Development",
      bio: "4+ years of experience building scalable enterprise solutions. Passionate about clean code and innovative tech.",
      image: "/images/alex-rivera.jpg",
      skills: ["Full Stack Development", "Tailwind CSS", "Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"]
    },
    {
      name: "Fahad Malik",
      role: "Co Leader",
      specialty: "AI Automation & agentic AI ",
      bio: "Former tech lead at major AI companies. Specializes in building intelligent automation systems.",
      image: "/images/fahad.jpg",
      skills: ["RAG", "AI Automation", "Agentic AI", "AI Strategy", "AI Development","Python"]
    },
    {
      name: "Muhammad Saddique",
      role: "Lead Developer",
      specialty: "Data Science",
      bio: "Expert in Data Science and Machine Learning. Creates beautiful, performant user experiences.",
      image: "/images/Saddique.jpg",
      skills: ["Data Science", "Machine Learning", "Python", "R", "Data Analysis", "Data Visualization"]
    },
    {
      name: "Inam Ur Rahman",
      role: "Senior Developer",
      specialty: "Machine Learning",
      bio: "Specializes in building intelligent automation systems.",
      image: "/images/Inaam.jpg",
      skills: ["Machine Learning", "Data Science", "AI Strategy"]
    },
    {
      name: "Muhammad Sufyan",
      role: "Cloud Solutions & DevOps",
      specialty: "Cloud Solutions & DevOps",
      bio: "Specializes in scalable backend systems and cloud infrastructure. Passionate about automation.",
      image: "/images/sufyan.jpg",
      skills: ["Node.js", "AWS", "Kubernetes"]
    },
    {
      name: "Muhammad Ahsan",
      role: "Mobile Developer",
      specialty: "iOS & Android",
      bio: "Mobile-first developer with expertise in React Native and native app development.",
      image: "/images/masair.jpg",
      skills: ["React Native", "Swift", "Kotlin","Android", "iOS", "Flutter"]
    },
    {
      name: "Muhammad Mumshad",
      role: "UI/UX Designer",
      specialty: "Product Design",
      bio: "Creates intuitive, beautiful interfaces that users love. Expert in design systems.",
      image: "/images/Mumshad.jpg",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"]
    },
    {
      name: "Muhammad Adil",
      role: "Blockchain Developer",
      specialty: "Blockchain Development",
      bio: "Specializes in building robust and scalable blockchain systems and smart contracts.",
      image: "/images/Adil.jpg",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "Web3", "Blockchain"]
    },
    {
      name: "Muhammad Jamshaid",
      role: "Cyber Security",
      specialty: "Cyber Security",
      bio: "Expert in cybersecurity and penetration testing. Protects systems from vulnerabilities and threats.",
      image: "/images/Jamshaid.jpg",
      skills: ["Cyber Security", "Penetration Testing", "Ethical Hacking", "Network Security", "Data Security"]
    },
    {
      name: "Muhammad Huzaifa",
      role: "QA Engineer",
      specialty: "Quality Assurance",
      bio: "Ensures every product meets the highest quality standards through rigorous testing.",
      image: "/images/Huzaifa.jpg",
      skills: ["Test Automation", "Selenium", "Jest", "Cypress", "Manual Testing"]
    },
    {
      name: "Muhammad Faheem",
      role: "Full Stack Developer",
      specialty: "Full Stack Development",
      bio: "Passionate about building end-to-end web applications with modern technologies.",
      image: "/images/faheem.jpg",
      skills: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "Next.js"]
    }

  ];

  const achievements = [
    { icon: <Trophy size={40} />, value: "180+", label: "Projects Delivered" },
    { icon: <Users size={40} />, value: "150+", label: "Happy Clients" },
    { icon: <Target size={40} />, value: "99%", label: "Success Rate" },
    { icon: <Heart size={40} />, value: "4.9/5", label: "Client Satisfaction" }
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
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Who We <span className="text-mud-400">Are</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-mud-400 max-w-3xl mx-auto font-light">
              A team of passionate engineers and innovators dedicated to transforming ideas into powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Our Company - Who We Are Section */}
      <section className="py-24 bg-black border-b border-mud-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Our Company</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                About <span className="text-mud-400">Dev Mud</span>
              </h2>
            </div>

            <div className="space-y-8 text-lg text-mud-400 leading-relaxed">
              <p className="text-2xl md:text-3xl text-white font-semibold mb-6">
                <span className="text-mud-400">Dev Mud</span> stands at the intersection of robust engineering and sleek innovation.
              </p>
              
              <p>
                We're not just developers—we're your strategic technical partners in navigating the 
                complex landscape of modern software, digital infrastructure, and AI integration.
              </p>
              
              <p>
                With a foundation built on clean code principles and a forward-thinking approach powered 
                by the latest tech stacks, we deliver scalable solutions that drive measurable growth. 
                Whether you're a startup validating an MVP or an enterprise needing legacy modernization, 
                we have the expertise to help you succeed.
              </p>

              <p>
                Our team combines years of industry experience with a passion for emerging technologies. 
                From sophisticated web applications to intelligent automation systems, we craft solutions 
                that not only meet today's needs but are built to scale with tomorrow's opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-mud-950 border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              What Drives <span className="text-mud-400">Us</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-black border border-mud-800 rounded-lg p-8 hover:border-white transition-all group"
              >
                <div className="w-16 h-16 bg-mud-900 rounded-sm flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-mud-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Leaders Section */}
      <section className="py-24 bg-black border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Meet Our Leaders</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Our <span className="text-mud-400">Leadership</span>
            </h2>
            <p className="text-mud-500 text-lg mt-4">
              Guiding our team with vision and expertise
            </p>
          </motion.div>

          {/* Leaders Grid - Cards with Avatars */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.slice(0, 6).map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-mud-950 border border-mud-800 rounded-lg p-8 hover:border-white transition-all group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-mud-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-mud-800 group-hover:border-white transition-all">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover bg-mud-900"
                      />
                    </div>
                  </div>

                  {/* Name - Blue Gradient like Demo */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    
                    {/* Role */}
                    <p className="text-mud-300 font-semibold text-lg mb-1">{member.role}</p>
                  </div>

                  {/* Bio - Full Description like Demo */}
                  <p className="text-mud-400 text-sm leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  {/* Specialty/Expertise */}
                  <div className="text-center pt-4 border-t border-mud-800">
                    <p className="text-xs text-mud-500 italic">
                      <span className="text-mud-300">{member.specialty}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-mud-950 border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Our <span className="text-mud-400">Expert Team</span>
            </h2>
            <p className="text-mud-500 text-lg mt-4">
              Talented professionals dedicated to bringing your vision to life
            </p>
          </motion.div>

          {/* Auto-Scrolling Horizontal Carousel */}
          <TeamCarousel team={team.slice(6)} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-black border-b border-mud-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-mud-500 font-bold tracking-widest uppercase text-sm border-b border-mud-800 pb-1">Our Track Record</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Proven <span className="text-mud-400">Results</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-mud-950 border border-mud-800 rounded-lg p-10 text-center hover:border-mud-500 transition-all group"
              >
                <div className="flex justify-center mb-6 text-white group-hover:text-mud-400 transition-colors">
                  {achievement.icon}
                </div>
                <div className="text-5xl font-bold text-white font-display mb-2">{achievement.value}</div>
                <div className="text-mud-500 font-semibold uppercase tracking-wider text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-mud-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black border border-mud-800 rounded-lg p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb size={40} className="text-white" />
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-xl md:text-2xl text-mud-400 leading-relaxed mb-6">
                To empower businesses of all sizes with innovative, reliable, and scalable technology solutions 
                that drive growth, efficiency, and competitive advantage.
              </p>
              <p className="text-lg text-mud-500 leading-relaxed">
                We believe technology should be an enabler, not a barrier. That's why we're committed to 
                delivering solutions that are not only technically excellent but also accessible, understandable, 
                and aligned with your business goals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
