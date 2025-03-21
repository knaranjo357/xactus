import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Rocket, 
  Lightning, 
  Trophy, 
  Users,
  Brain,
  Robot,
  Factory,
  ChartLine,
  Gear,
  Lightbulb,
  Handshake,
  CheckSquare,
  Student
} from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Trophy weight="duotone" />, value: "10+", label: "Años de Experiencia" },
    { icon: <Users weight="duotone" />, value: "50+", label: "Clientes Satisfechos" },
    { icon: <Lightning weight="duotone" />, value: "95%", label: "Eficiencia Mejorada" },
    { icon: <Rocket weight="duotone" />, value: "24/7", label: "Soporte Técnico" },
  ];

  const futureVision = [
    {
      icon: <Brain weight="duotone" className="w-12 h-12" />,
      title: "Inteligencia Artificial",
      description: "Sistemas autónomos y toma de decisiones inteligente"
    },
    {
      icon: <Robot weight="duotone" className="w-12 h-12" />,
      title: "Robótica Avanzada",
      description: "Automatización completa de procesos industriales"
    },
    {
      icon: <Factory weight="duotone" className="w-12 h-12" />,
      title: "Industria 5.0",
      description: "Integración perfecta entre humanos y máquinas"
    }
  ];

  const process = [
    {
      icon: <Lightbulb weight="duotone" className="w-10 h-10" />,
      title: "Sensibilización",
      description: "Exploramos juntos el potencial de la transformación digital"
    },
    {
      icon: <Handshake weight="duotone" className="w-10 h-10" />,
      title: "Taller Colaborativo",
      description: "Identificamos necesidades y oportunidades específicas"
    },
    {
      icon: <CheckSquare weight="duotone" className="w-10 h-10" />,
      title: "Diagnóstico",
      description: "Presentamos un análisis detallado y plan de acción"
    },
    {
      icon: <Gear weight="duotone" className="w-10 h-10" />,
      title: "Desarrollo",
      description: "Implementamos soluciones personalizadas"
    },
    {
      icon: <Student weight="duotone" className="w-10 h-10" />,
      title: "Capacitación",
      description: "Entrenamos a tu equipo en las nuevas tecnologías"
    },
    {
      icon: <ChartLine weight="duotone" className="w-10 h-10" />,
      title: "Implementación",
      description: "Aseguramos una transición suave y exitosa"
    }
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
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0E72A7] to-[#4D8ACA]">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#DEDEDE]">
                  Transformación Digital
                </span>
                <br />
                <span className="text-[#F7F7F7]">que Genera Resultados</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-[#DEDEDE] mb-12 max-w-3xl mx-auto"
            >
              Impulsamos la innovación tecnológica en América Latina y Estados Unidos
              con soluciones IoT, IA y automatización de última generación.
            </motion.p>

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

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
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

      {/* Future Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              El Futuro de la Industria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepárese para los próximos 10-15 años con tecnologías que transformarán la manera de hacer negocios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {futureVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-[#409ACA] mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestro Proceso de Transformación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado y colaborativo para garantizar el éxito de su transformación digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#409ACA]">{step.icon}</div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#409ACA] text-white rounded-full font-semibold hover:bg-[#3089b9] transition-colors shadow-lg"
            >
              Inicie su Transformación
              <ArrowRight weight="bold" className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};