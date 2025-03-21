import React from 'react';
import { motion } from 'framer-motion';
import { About } from '../organisms/About';

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <About />
    </motion.div>
  );
};