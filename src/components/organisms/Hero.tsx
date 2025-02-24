import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Lightning, Trophy, Users } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Trophy weight="duotone" />, value: "10+", label: "Años de Experiencia" },
    { icon: <Users weight="duotone" />, value: "50+", label: "Clientes Satisfechos" },
    { icon: <Lightning weight="duotone" />, value: "95%", label: "Eficiencia Mejorada" },
    { icon: <Rocket weight="duotone" />, value: "24/7", label: "Soporte Técnico" },
  ];

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0E72A7] to-[#4D8ACA]">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50 L100,50"
            stroke="#DEDEDE"
            strokeWidth="0.2"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M50,0 L50,100"
            stroke="#DEDEDE"
            strokeWidth="0.2"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0,0 L100,100"
            stroke="#DEDEDE"
            strokeWidth="0.2"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M100,0 L0,100"
            stroke="#DEDEDE"
            strokeWidth="0.2"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

      {/* Animated X Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.svg
          className="w-[800px] h-[800px]"
          viewBox="0 0 100 100"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.path
            d="M20,20 L80,80"
            stroke="#4D8ACA"
            strokeWidth="1"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M80,20 L20,80"
            stroke="#4D8ACA"
            strokeWidth="1"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
      </div>

      {/* Accent Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 transform translate-x-32 -translate-y-32">
        <motion.div
          className="w-full h-full bg-[#ED6A5A] rounded-full opacity-20 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 transform -translate-x-48 translate-y-48">
        <motion.div
          className="w-full h-full bg-[#4FBA78] rounded-full opacity-10 blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#DEDEDE]">
                Transformación Digital
              </span>
              <br />
              <span className="text-[#F7F7F7]">que Genera Resultados</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-[#DEDEDE] mb-12 max-w-3xl mx-auto"
          >
            Impulsamos la innovación tecnológica en América Latina y Estados Unidos
            con soluciones IoT, IA y automatización de última generación.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="flex items-center justify-center px-8 py-4 bg-[#ED6A5A] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:bg-[#ff7a68]"
            >
              Comencemos
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-semibold border-2 border-white hover:bg-white/10 transition-colors"
            >
              Servicios
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-[#4D8ACA]/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-[#4D8ACA]/30 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  delay: index * 0.1 
                }}
              >
                <div className="text-[#4FBA78] mb-3 w-8 h-8 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[#DEDEDE] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};