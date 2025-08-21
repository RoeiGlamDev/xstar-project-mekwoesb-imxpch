'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Gift, Diamond } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Star,
      title: 'Luxurious Quality',
      description: 'Experience the finest ingredients and formulations for your skin.'
    },
    {
      icon: Heart,
      title: 'Cruelty-Free',
      description: 'Ethically sourced and never tested on animals.'
    },
    {
      icon: Gift,
      title: 'Exclusive Collections',
      description: 'Limited edition products designed for the discerning customer.'
    },
    {
      icon: Diamond,
      title: 'Elegant Packaging',
      description: 'Beautifully crafted packaging that reflects our brand's luxury.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-500 via-white to-pink-200">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent mb-6">
            Exquisite Features
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the luxurious features that set our cosmetics apart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <feature.icon className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}