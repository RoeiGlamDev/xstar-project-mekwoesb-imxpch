'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Team Members', value: '30+' },
    { icon: Target, label: 'Products Launched', value: '150+' },
    { icon: Award, label: 'Awards Won', value: '20+' },
    { icon: Sparkles, label: 'Years Experience', value: '5+' }
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
              About Our Luxury Vision
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are dedicated to crafting exquisite beauty experiences that embody elegance and sophistication.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassCard className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-pink-400" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-700">{stat.label}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <GlassCard className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Established with a passion for luxury, we blend innovative technology with artistic flair 
                  to create beauty products that redefine elegance.
                </p>
                <p className="text-gray-700">
                  Our team of skilled artisans and beauty experts collaborate to deliver products that inspire 
                  confidence and celebrate individuality.
                </p>
              </div>
              <div className="relative">
                <motion.div
                  className="w-full h-64 bg-gradient-to-br from-pink-500/20 to-white/20 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </div>
  );
}