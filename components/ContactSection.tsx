import React from 'react';

'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@fashiontv.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 987-6543' },
    { icon: MapPin, label: 'Address', value: '456 Glamour Ave, Fashion City' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-white to-pink-300">
      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to elevate your beauty experience? Let's create something stunning together.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <GlassCard>
              <h2 className="text-3xl font-bold text-black mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon className="w-6 h-6 text-pink-400" />
                    <div>
                      <p className="text-gray-600 text-sm">{info.label}</p>
                      <p className="text-black">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard>
              <h2 className="text-3xl font-bold text-black mb-8">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-pink-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-pink-400"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-pink-400 resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}