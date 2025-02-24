import React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import { ServicesData } from '../../data/services';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Brain, Rocket } from '@phosphor-icons/react';

export const Services: React.FC = () => {
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
    <section className="py-20 bg-[#F7F7F7]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-[#001011] mb-4"
          >
            Soluciones Tecnológicas de Alto Impacto
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-[#7E7E7E] max-w-3xl mx-auto"
          >
            Combinamos experiencia en ingeniería, IA y automatización para crear soluciones que transforman industrias.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {ServicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-[#0E72A7] to-[#4D8ACA] p-8 rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-8">¿Por qué elegir Xactus?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="text-center">
                <Trophy weight="duotone" className="w-12 h-12 text-[#4FBA78] mx-auto mb-4" />
                <p className="font-semibold text-white mb-2">Experiencia Comprobada</p>
                <p className="text-[#DEDEDE]">Más de 10 años transformando industrias</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <Brain weight="duotone" className="w-12 h-12 text-[#ED6A5A] mx-auto mb-4" />
                <p className="font-semibold text-white mb-2">Tecnología Patentada</p>
                <p className="text-[#DEDEDE]">15+ diseños registrados</p>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <Rocket weight="duotone" className="w-12 h-12 text-[#4FBA78] mx-auto mb-4" />
                <p className="font-semibold text-white mb-2">Soluciones End-to-End</p>
                <p className="text-[#DEDEDE]">Desde el diseño hasta el soporte</p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-[#ED6A5A] text-white rounded-full font-semibold hover:bg-[#ff7a68] transition-all shadow-lg"
              >
                Comencemos su Proyecto
                <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};