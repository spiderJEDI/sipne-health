import React from 'react';
import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-sm z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex items-center justify-center">
        <Mountain className="h-8 w-8 text-primary" />
        <span className="ml-2 text-xl font-bold text-primary">Spine</span>
      </Link>
      <nav className="ml-auto flex gap-6">
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}