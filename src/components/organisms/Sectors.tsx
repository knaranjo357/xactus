import React from 'react';
import { motion } from 'framer-motion';
import { SectorCard } from '../molecules/SectorCard';
import { SectorsData } from '../../data/sectors';
import { ArrowRight } from '@phosphor-icons/react';

export const Sectors: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Soluciones por Sector
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Cada industria tiene desafíos únicos. Nuestras soluciones se adaptan a las necesidades específicas de cada sector.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SectorsData.map((sector, index) => (
            <motion.div
              key={sector.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <SectorCard sector={sector} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#409ACA] to-blue-600 p-8 rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">¿No encuentra su sector?</h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctenos para discutir cómo podemos adaptar nuestras soluciones a sus necesidades específicas.
            </p>
            <motion.div variants={itemVariants}>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#409ACA] rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg"
              >
                Contactar ahora
                <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};