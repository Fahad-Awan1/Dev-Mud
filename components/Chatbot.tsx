import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Phone, Mail, Calendar, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

const SYSTEM_CONTEXT = `You are Dev Mud's professional AI assistant. Dev Mud is a software development and consulting company based in Faisalabad, Pakistan.

SERVICES WE OFFER:
1. **App Development**: We develop mobile apps for iOS, Android, React Native, and Flutter.
2. **Web Development**: We create custom websites, e-commerce platforms, and SaaS solutions.
3. **Custom Software**: We design and develop enterprise solutions, APIs, and microservices.
4. **AI & Machine Learning**: We provide AI strategy, ML model development, NLP, and Computer Vision services.
5. **Automation & Integration**: We offer workflow automation, bot development, and API integrations.
6. **Cloud Solutions**: We provide services for AWS, Azure, GCP, migration, and DevOps.

CONTACT INFORMATION:
- Email: devmudservices@gmail.com
- Phone: +92 321 5765302
- Location: Faisalabad, Pakistan
- Hours: Monday-Sunday 9:00 AM - 6:00 PM
- 24/7 Support Available

TEAM:
11 experienced professionals including Full Stack Developers, AI Engineers, Data Scientists, Mobile Developers, UI/UX Designers, Blockchain Developers, Cyber Security Experts, and QA Engineers.

IMPORTANT RULES:
1. ONLY answer questions related to Dev Mud's services, technology stack, team, contact information, or general software development consulting.
2. If asked about topics unrelated to Dev Mud or software development, politely redirect: "I'm here to assist with Dev Mud's services. How can I help you with your software development needs?"
3. Be professional, concise, and helpful.
4. Suggest relevant services when appropriate.
5. Donot answer about pricing or budget related query and reply politely "For budget or pricing related queries please contact us at devmudservices@gmail.com or call us at +92 321 5765302"
6. Encourage users to book a consultation or contact us for detailed quotes.
7. Use Markdown formatting for lists and emphasis (bold) to make responses easy to read.`;

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        role: 'assistant',
        content: `Hi! I'm Dev Mud's AI assistant. 👋

I can help you with:
• Our software development services
• Technology consulting
• Project quotes & timelines
• Scheduling consultations
• Answering questions about our expertise

How can I assist you today?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check if API key is available
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    if (!apiKey) {
      const errorMessage: Message = {
        role: 'assistant',
        content: "Configuration Error: API Key is missing. Please add VITE_GROQ_API_KEY to your .env.local file and RESTART the development server (npm run dev).",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              {
                role: 'system',
                content: SYSTEM_CONTEXT
              },
              {
                role: 'user',
                content: input.trim()
              }
            ],
            temperature: 0.7,
            max_tokens: 500,
          })
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || `API Error: ${response.statusText}`);
      }
      
      if (data.choices && data.choices[0]?.message?.content) {
        const aiMessage: Message = {
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error('Invalid response format from AI');
      }
    } catch (error) {
      console.error('Error calling Groq API:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact support.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'quote':
        navigate('/contact');
        setIsOpen(false);
        break;
      case 'call':
        window.location.href = 'tel:+923215765302';
        break;
      case 'services':
        navigate('/services');
        setIsOpen(false);
        break;
      case 'contact':
        navigate('/contact');
        setIsOpen(false);
        break;
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 w-14 h-14 bg-mud-950 border-2 border-mud-800 hover:border-white rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-white/20 transition-all z-50"
          >
            <MessageCircle size={24} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 w-[400px] h-[600px] bg-black border-2 border-mud-800 rounded-lg shadow-2xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-mud-950 to-black border-b border-mud-800 p-4 flex items-center justify-between rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-mud-900 rounded-full flex items-center justify-center relative">
                  <MessageCircle size={20} className="text-white" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">DevMud Assistant</h3>
                  <p className="text-green-500 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-mud-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-mud-800 text-white'
                        : 'bg-mud-950 border border-mud-800 text-mud-200'
                    }`}
                  >
                    <div className="text-sm [&_strong]:text-white [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:list-decimal [&_ol]:pl-4 [&_li]:my-1 [&_p]:my-2">
                      <ReactMarkdown>{message.content}</ReactMarkdown>
                    </div>
                    <p className="text-xs text-mud-600 mt-1">
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-mud-950 border border-mud-800 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-mud-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-mud-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-mud-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="border-t border-mud-800 p-3 bg-mud-950">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  onClick={() => handleQuickAction('quote')}
                  className="flex items-center gap-2 bg-mud-900 hover:bg-mud-800 text-white text-xs px-3 py-2 rounded transition-colors"
                >
                  <Mail size={14} />
                  Get a Quote
                </button>
                <button
                  onClick={() => handleQuickAction('call')}
                  className="flex items-center gap-2 bg-mud-900 hover:bg-mud-800 text-white text-xs px-3 py-2 rounded transition-colors"
                >
                  <Phone size={14} />
                  Book a Call
                </button>
                <button
                  onClick={() => handleQuickAction('services')}
                  className="flex items-center gap-2 bg-mud-900 hover:bg-mud-800 text-white text-xs px-3 py-2 rounded transition-colors"
                >
                  <Briefcase size={14} />
                  View Services
                </button>
                <button
                  onClick={() => handleQuickAction('contact')}
                  className="flex items-center gap-2 bg-mud-900 hover:bg-mud-800 text-white text-xs px-3 py-2 rounded transition-colors"
                >
                  <Calendar size={14} />
                  Contact Us
                </button>
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-mud-800 p-4 bg-black rounded-b-lg">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-mud-950 border border-mud-800 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-mud-600"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-white hover:bg-mud-200 text-black px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="text-xs text-mud-600 text-center mt-2">Powered by Dev Mud</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
