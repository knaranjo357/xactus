import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../organisms/Hero';
import { Features } from '../organisms/Features';
import { Testimonials } from '../organisms/Testimonials';
import { CallToAction } from '../organisms/CallToAction';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};