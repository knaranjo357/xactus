import React from 'react';
import { motion } from 'framer-motion';
import { Products } from '../organisms/Products';

export const ProductsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Products />
    </motion.div>
  );
};