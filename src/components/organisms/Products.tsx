import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '../molecules/ProductCard';
import { ProductsData } from '../../data/products';
import { ArrowRight } from 'lucide-react';

export const Products: React.FC = () => {
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
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Productos Xactus
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tecnología de punta diseñada para resistir, medir y transformar
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ProductsData.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué elegir los productos Xactus?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[#409ACA] mb-2">Diseño & Fabricación Propia</p>
                <p className="text-gray-600">Control total de calidad (0% outsourcing)</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[#409ACA] mb-2">Certificaciones Globales</p>
                <p className="text-gray-600">CE, FCC, RoHS y homologaciones internacionales</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <p className="font-semibold text-[#409ACA] mb-2">Soporte Premium</p>
                <p className="text-gray-600">Instalación in situ + actualizaciones remotas</p>
              </motion.div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#409ACA] text-white rounded-full font-semibold hover:bg-[#3089b9] transition-colors"
              >
                Solicitar información
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};