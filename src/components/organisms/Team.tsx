import React from 'react';
import { motion } from 'framer-motion';
import { TeamCard } from '../molecules/TeamCard';
import { TeamData } from '../../data/team';
import { ArrowRight, Users, Trophy, Brain, Rocket } from '@phosphor-icons/react';

export const Team: React.FC = () => {
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

  const stats = [
    {
      icon: <Trophy weight="duotone" className="w-8 h-8" />,
      value: "10+",
      label: "Años de Experiencia"
    },
    {
      icon: <Users weight="duotone" className="w-8 h-8" />,
      value: "20+",
      label: "Expertos en Tecnología"
    },
    {
      icon: <Brain weight="duotone" className="w-8 h-8" />,
      value: "15+",
      label: "Patentes Registradas"
    },
    {
      icon: <Rocket weight="duotone" className="w-8 h-8" />,
      value: "50+",
      label: "Proyectos Exitosos"
    }
  ];

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
            Nuestro Equipo
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Un equipo multidisciplinario de expertos apasionados por la innovación y la excelencia técnica
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-[#409ACA] mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {TeamData.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-[#409ACA] to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center text-white">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-4"
              >
                ¿Quiere unirse a nuestro equipo?
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Estamos siempre en búsqueda de talento apasionado por la tecnología y la innovación. 
                Si está interesado en formar parte de un equipo líder en soluciones tecnológicas, 
                ¡queremos conocerle!
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a 
                  href="mailto:careers@xactus.io"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#409ACA] rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Enviar CV
                  <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Ver Posiciones Abiertas
                  <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};