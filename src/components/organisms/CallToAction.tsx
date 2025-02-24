import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const CallToAction = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section className="py-20 bg-gradient-to-br from-[#409ACA] to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <Rocket weight="duotone" className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para transformar su negocio?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Únase a las empresas líderes que ya están aprovechando el poder de la tecnología
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-[#409ACA] rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              Contactar ahora
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Ver servicios
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};