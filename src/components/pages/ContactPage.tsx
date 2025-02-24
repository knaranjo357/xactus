import React from 'react';
import { motion } from 'framer-motion';
import { Contact } from '../organisms/Contact';

export const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Contact />
    </motion.div>
  );
};