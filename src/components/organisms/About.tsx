import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Trophy,
  Brain,
  Users,
  Leaf
} from '@phosphor-icons/react';
import { Services } from './Services';
import { Team } from './Team';

export const About: React.FC = () => {
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

  const values = [
    {
      icon: <Brain weight="duotone" className="w-12 h-12" />,
      title: 'Innovación continua',
      description: 'Estamos comprometidos con la búsqueda constante de nuevas ideas y tecnologías para ofrecer soluciones disruptivas.'
    },
    {
      icon: <Users weight="duotone" className="w-12 h-12" />,
      title: 'Colaboración estratégica',
      description: 'Trabajamos de la mano con nuestros clientes para diseñar estrategias personalizadas y efectivas.'
    },
    {
      icon: <Trophy weight="duotone" className="w-12 h-12" />,
      title: 'Excelencia técnica',
      description: 'Nuestro equipo combina experiencia y habilidades para garantizar resultados de alta calidad.'
    },
    {
      icon: <Leaf weight="duotone" className="w-12 h-12" />,
      title: 'Sostenibilidad',
      description: 'Integramos prácticas responsables que beneficien tanto a nuestros clientes como al entorno.'
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Quiénes Somos
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Xactus nace con la misión de transformar la manera en que las empresas operan, 
                ayudándolas a enfrentar los desafíos tecnológicos y a aprovechar las oportunidades del futuro.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-6">
                  <Target weight="duotone" className="w-10 h-10 text-[#409ACA]" />
                  <h2 className="text-2xl font-bold">Misión</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Nuestra filosofía se basa en convertir las ideas en acciones. 
                  Trabajamos con nuestros clientes en el diseño e implementación de estrategias 
                  para lograr resultados tangibles y sostenibles.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-4 mb-6">
                  <Rocket weight="duotone" className="w-10 h-10 text-[#409ACA]" />
                  <h2 className="text-2xl font-bold">Visión</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Convertirnos en 2030 en referentes en Latam en transformación digital, 
                  reconocidos por nuestra capacidad de integrar tecnología e innovación.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Nuestros Valores
            </motion.h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-[#409ACA] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Services />
      <Team />
    </>
  );
};