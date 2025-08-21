'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';

export default function PricingPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      icon: Star,
      features: [
        'Up to 3 products',
        'Basic support',
        '1GB storage',
        'Standard packaging'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/month',
      icon: Zap,
      features: [
        'Unlimited products',
        'Priority support',
        '5GB storage',
        'Luxury packaging',
        'Exclusive discounts'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '$249',
      period: '/month',
      icon: Crown,
      features: [
        'Everything in Premium',
        'Custom product development',
        'Dedicated account manager',
        'Unlimited storage',
        'Personalized branding',
        'VIP access to events'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-white to-pink-300">
      <div className="container mx-auto px-6 py-20">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h1 
              className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Choose Your Beauty Plan
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Select the perfect plan for your beauty needs and start your luxurious journey today.
            </motion.p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <GlassCard 
                className={
                  plan.popular 
                    ? 'relative border-2 border-pink-500 transform scale-105' 
                    : ''
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}