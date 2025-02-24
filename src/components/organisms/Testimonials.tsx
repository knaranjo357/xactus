import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quotes as Quote } from '@phosphor-icons/react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Director de Operaciones",
      company: "Industrias XYZ",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      text: "La implementación de IoT ha revolucionado nuestra forma de trabajar. La eficiencia aumentó un 40% en solo 3 meses."
    },
    {
      name: "Ana Martínez",
      role: "Gerente de Innovación",
      company: "Tech Solutions",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400",
      text: "El equipo de Xactus demostró un profundo conocimiento técnico y un compromiso excepcional con nuestro éxito."
    },
    {
      name: "Miguel Sánchez",
      role: "CTO",
      company: "Smart Cities Co",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
      text: "Su solución de monitoreo ambiental nos ha permitido tomar decisiones más informadas y mejorar la calidad de vida en nuestra ciudad."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Quote weight="duotone" className="w-16 h-16 text-[#0E72A7] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-[#001011]">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-[#7E7E7E] max-w-3xl mx-auto">
              Historias de éxito que demuestran nuestro compromiso con la excelencia
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#F7F7F7] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#DEDEDE]"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    weight="fill"
                    className="w-5 h-5 text-[#ED6A5A]"
                  />
                ))}
              </div>
              <p className="text-[#7E7E7E] mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#001011]">{testimonial.name}</h4>
                  <p className="text-sm text-[#7E7E7E]">{testimonial.role}</p>
                  <p className="text-sm text-[#0E72A7]">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};