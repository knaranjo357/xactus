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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const parallaxVariants = {
    initial: { y: 0 },
    scroll: {
      y: -50,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 20,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        initial="initial"
        animate="scroll"
        variants={parallaxVariants}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#409ACA] to-blue-600">
              Transformación Digital
              <br />
              <span className="text-gray-900">que Genera Resultados</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Impulsamos la innovación tecnológica en América Latina y Estados Unidos
            con soluciones IoT, IA y automatización de última generación.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-16">
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate('/contact')}
              className="flex items-center px-8 py-4 bg-[#409ACA] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Comencemos
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </motion.button>
            
            <motion.button
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate('/services')}
              className="flex items-center px-8 py-4 bg-white text-[#409ACA] rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow border-2 border-[#409ACA]"
            >
              Servicios
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-[#409ACA] mb-3 w-8 h-8 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};