import React from 'react';
import { motion } from 'framer-motion';
import { 
  Robot, 
  Cloud, 
  Gear, 
  ChartLine,
  CircleWavyCheck,
  Lightning,
  Rocket,
  Brain
} from '@phosphor-icons/react';

export const Features = () => {
  const features = [
    {
      icon: <Robot weight="duotone" className="w-10 h-10" />,
      title: "Automatización Inteligente",
      description: "Optimice sus procesos con IA y machine learning"
    },
    {
      icon: <Cloud weight="duotone" className="w-10 h-10" />,
      title: "IoT Industrial",
      description: "Monitoreo en tiempo real y control remoto"
    },
    {
      icon: <Brain weight="duotone" className="w-10 h-10" />,
      title: "Inteligencia Artificial",
      description: "Decisiones basadas en datos precisos"
    },
    {
      icon: <Gear weight="duotone" className="w-10 h-10" />,
      title: "Hardware Especializado",
      description: "Dispositivos robustos para entornos exigentes"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Soluciones de Alto Impacto
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de punta que impulsa su negocio hacia el futuro
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-[#409ACA] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <CircleWavyCheck weight="duotone" className="w-12 h-12 text-[#409ACA] mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Calidad Garantizada</h4>
              <p className="text-gray-600">Certificaciones internacionales</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <Lightning weight="duotone" className="w-12 h-12 text-[#409ACA] mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Alta Eficiencia</h4>
              <p className="text-gray-600">Optimización continua</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <Rocket weight="duotone" className="w-12 h-12 text-[#409ACA] mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Innovación Constante</h4>
              <p className="text-gray-600">Tecnología de vanguardia</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};