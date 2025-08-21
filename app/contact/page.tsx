'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Page() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-pink-500 via-white to-pink-300 p-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-pink-400" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We would love to hear from you! Please reach out with any inquiries or feedback.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}