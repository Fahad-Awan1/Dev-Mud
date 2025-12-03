import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { LogoMonogram } from './Logo';

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Services', href: '/services', hasDropdown: false },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black border-b border-mud-900 text-mud-400 text-xs py-2 px-4 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex gap-6">
          <a href="tel:+923215765302" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} /> <span>+92 321 5765302</span>
          </a>
          <a href="mailto:devmudservices@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} /> <span>devmudservices@gmail.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-mud-500">24/7 Technical Support Available</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-mud-950/90 backdrop-blur-md shadow-lg border-b border-mud-800 py-2' : 'bg-black/50 backdrop-blur-sm py-4 border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <LogoMonogram />
              <span className="font-display font-bold text-2xl tracking-tight text-white uppercase">
                Dev<span className="text-mud-400">mud</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link to={link.href} className="flex items-center gap-1 text-sm font-medium text-mud-300 hover:text-white transition-colors">
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                  </Link>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact" className="bg-mud-100 hover:bg-white text-black px-6 py-2.5 rounded-sm font-semibold text-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5 inline-block">
                Book Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-mud-200 p-2">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-mud-950 border-t border-mud-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-3 text-base font-medium text-mud-300 hover:text-white hover:bg-mud-900 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="block w-full mt-4 bg-white text-black px-6 py-3 rounded-md font-bold shadow-md text-center">
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
