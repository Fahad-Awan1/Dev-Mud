import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowUp } from 'lucide-react';

import { Chatbot } from './Chatbot';

export const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Chatbot />

      <AnimatePresence>
        {showScroll && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed bottom-24 right-6 z-40"
          >
            <button 
              onClick={scrollToTop}
              className="bg-mud-800 border border-mud-600 hover:bg-white hover:text-black text-white p-3 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
            >
               <ArrowUp size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
