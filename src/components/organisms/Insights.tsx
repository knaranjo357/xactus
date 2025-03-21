import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Robot, 
  Users, 
  Rocket,
  ArrowRight 
} from '@phosphor-icons/react';

export const Insights: React.FC = () => {
  const insights = [
    {
      icon: <Database weight="duotone" className="w-12 h-12" />,
      title: 'Big Data y Analítica Avanzada',
      subtitle: 'El Futuro de las Decisiones Empresariales',
      description: 'Descubre cómo el análisis de datos está transformando la toma de decisiones en las empresas modernas.',
      link: '#'
    },
    {
      icon: <Robot weight="duotone" className="w-12 h-12" />,
      title: 'Automatización Inteligente',
      subtitle: 'El Motor de la Eficiencia Empresarial',
      description: 'Explora las últimas tendencias en automatización y cómo están revolucionando los procesos empresariales.',
      link: '#'
    },
    {
      icon: <Users weight="duotone" className="w-12 h-12" />,
      title: 'Innovación Colaborativa',
      subtitle: 'La Clave para el Éxito Empresarial',
      description: 'Aprende cómo la colaboración y la innovación abierta están definiendo el futuro del trabajo.',
      link: '#'
    },
    {
      icon: <Rocket weight="duotone" className="w-12 h-12" />,
      title: 'Transformación Digital 2025',
      subtitle: 'Preparando tu Empresa para el Futuro',
      description: 'Conoce las tecnologías y estrategias que definirán el éxito empresarial en los próximos años.',
      link: '#'
    }
  ];

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
            Insights y Tendencias
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Mantente al día con las últimas tendencias en tecnología, transformación digital e innovación.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-8">
                <div className="text-[#409ACA] mb-6">
                  {insight.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{insight.title}</h3>
                <p className="text-[#409ACA] font-medium mb-4">{insight.subtitle}</p>
                <p className="text-gray-600 mb-6">{insight.description}</p>
                <a
                  href={insight.link}
                  className="inline-flex items-center text-[#409ACA] hover:text-[#3089b9] font-medium"
                >
                  Leer más
                  <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
                </a>
              </div>
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
            <h3 className="text-2xl font-bold mb-4">¿Quiere mantenerse informado?</h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Suscríbase a nuestro newsletter para recibir las últimas actualizaciones y tendencias del sector.
            </p>
            <motion.div variants={itemVariants} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Su correo electrónico"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#409ACA]"
                />
                <button className="px-6 py-3 bg-[#ED6A5A] text-white rounded-lg hover:bg-[#ff7a68] transition-colors">
                  Suscribirse
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};