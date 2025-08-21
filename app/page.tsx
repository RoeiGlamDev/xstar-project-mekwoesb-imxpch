'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-white">
      <Header />
      <HeroSection 
        title="Elevate Your Beauty" 
        subtitle="Discover the luxury of FashionTV Cosmetics" 
        buttonText="Shop Now" 
      />
      <FeaturesSection 
        features={[
          { title: "Premium Quality", description: "Experience the best in beauty." },
          { title: "Exclusive Collections", description: "Curated just for you." },
          { title: "Luxury Packaging", description: "Unbox elegance with every product." },
        ]}
      />
      <Footer 
        contactInfo="Contact us: info@fashiontvcosmetics.com" 
        socialLinks={[
          { platform: "Instagram", url: "https://instagram.com/fashiontvcosmetics" },
          { platform: "Facebook", url: "https://facebook.com/fashiontvcosmetics" },
        ]}
      />
    </div>
  );
}