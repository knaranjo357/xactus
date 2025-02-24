import React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import { ServicesData } from '../../data/services';
import { motion } from 'framer-motion';

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
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Impulsamos la transformación digital con soluciones que generan ROI tangible
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Combinamos experiencia en ingeniería, IA y automatización para crear soluciones que transforman negocios.
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
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué Xactus?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[#409ACA] mb-2">Expertos Certificados</p>
                <p className="text-gray-600">Magíster en IoT, IA e ingenieros con 10+ años en campo</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[#409ACA] mb-2">Tecnología Patentada</p>
                <p className="text-gray-600">15+ diseños de hardware registrados</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[#409ACA] mb-2">Enfoque Full-Stack</p>
                <p className="text-gray-600">Cubrimos diseño, implementación y mantenimiento</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};