import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import { LogoMonogram } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-black text-mud-400 py-16 border-t border-mud-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LogoMonogram />
              <span className="font-display font-bold text-2xl text-white">Dev<span className="text-mud-500">mud</span></span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-mud-500">
              Empowering individuals, families, and businesses with expert consulting, software engineering, and automation solutions.
            </p>
            
            {/* Chat on WhatsApp */}
            <a 
              href="https://wa.me/923215765302" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-mud-950 border border-mud-800 hover:border-white text-white px-6 py-3 rounded-sm transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle size={20} />
              <div className="text-left">
                <p className="text-sm font-bold">Chat on WhatsApp</p>
                <p className="text-xs text-mud-400">Quick Response</p>
              </div>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pl-3 border-l-4 border-mud-600">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact', href: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pl-3 border-l-4 border-mud-600">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'App Development', link: '/services#app-development' },
                { name: 'Web Development', link: '/services#web-development' },
                { name: 'Custom Software', link: '/services#custom-software' },
                { name: 'AI & Machine Learning', link: '/services#ai-machine-learning' },
                { name: 'Automation & Integration', link: '/services#automation-integration' },
                { name: 'Cloud Solutions', link: '/services#cloud-solutions' }
              ].map(service => (
                <li key={service.name}>
                  <Link to={service.link} className="hover:text-white transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 pl-3 border-l-4 border-mud-600">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                 <div className="p-2 bg-mud-900 rounded text-white"><Phone size={20} /></div>
                 <div>
                   <p className="text-xs text-mud-600 uppercase font-bold">Call Us</p>
                   <a href="tel:+923215765302" className="text-white font-semibold hover:text-mud-300 transition-colors">+92 321 5765302</a>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-2 bg-mud-900 rounded text-white"><Mail size={20} /></div>
                 <div>
                   <p className="text-xs text-mud-600 uppercase font-bold">Email Us</p>
                   <a href="mailto:devmudservices@gmail.com" className="text-white font-semibold hover:text-mud-300 transition-colors">devmudservices@gmail.com</a>
                 </div>
              </div>
              
              <div className="bg-mud-900/30 p-4 rounded-sm border border-mud-800">
                <p className="text-xs text-mud-400 font-bold mb-1">Service Support</p>
                <p className="text-white font-bold">24/7 Available</p>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-mud-900 mt-16 pt-8 text-center text-sm">
           <p>&copy; {new Date().getFullYear()} Dev Mud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
