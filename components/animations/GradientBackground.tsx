import React from 'react';

'use client';

import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  variant?: 'elegant' | 'luxury' | 'blush' | 'pearl';
  animated?: boolean;
  children?: React.ReactNode;
}

export default function GradientBackground({ 
  variant = 'elegant', 
  animated = true,
  children 
}: GradientBackgroundProps) {
  const gradients = {
    elegant: 'bg-gradient-to-br from-pink-600 via-white to-pink-300',
    luxury: 'bg-gradient-to-br from-white via-pink-200 to-pink-500',
    blush: 'bg-gradient-to-br from-pink-300 via-pink-100 to-white',
    pearl: 'bg-gradient-to-br from-white to-pink-50'
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className={`absolute inset-0 ${gradients[variant]}`}
        animate={animated ? {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        } : {}}
        transition={animated ? {
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        } : {}}
        style={{
          backgroundSize: '400% 400%'
        }}
      />
      
      {/* Animated overlay */}
      {animated && (
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(255, 105, 180, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(255, 192, 203, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}