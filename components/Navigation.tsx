'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: ['All Products', 'Featured', 'New Arrivals', 'Best Sellers']
    },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' }
  ];

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-white bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          FashionTV Cosmetics
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.a
                href={item.href}
                className="flex items-center text-white hover:text-pink-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
              </motion.a>

              {item.dropdown && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-lg border border-pink-500/20 py-2"
                >
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:text-pink-400 hover:bg-pink-500/10 transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 bg-white/90 backdrop-blur-lg rounded-lg border border-pink-500/20 p-4"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 text-gray-800 hover:text-pink-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}