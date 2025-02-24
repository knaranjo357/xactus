import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeSimple, 
  Phone, 
  WhatsappLogo 
} from '@phosphor-icons/react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone weight="duotone" className="w-6 h-6" />,
      text: "+57 300 4855633",
      link: "tel:+573004855633",
      color: "text-[#0E72A7]",
      label: "Línea directa"
    },
    {
      icon: <WhatsappLogo weight="duotone" className="w-6 h-6" />,
      text: "WhatsApp",
      link: "https://wa.me/573004855633",
      color: "text-[#0E72A7]",
      label: "Chat instantáneo"
    },
    {
      icon: <EnvelopeSimple weight="duotone" className="w-6 h-6" />,
      text: "info@xactus.io",
      link: "mailto:info@xactus.io",
      color: "text-[#0E72A7]",
      label: "Correo"
    }
  ];

  return (
    <section className="py-12 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Información de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-2">Contáctenos</h2>
          <p className="text-gray-600 mb-8">Estamos aquí para ayudarle en su transformación digital</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-all group"
                whileHover={{ y: -4 }}
              >
                <div className={`${info.color} mb-3 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="font-medium text-gray-900">{info.text}</p>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t text-center">
            <p className="text-sm text-gray-600 mb-4">
              Respuesta garantizada en menos de 24 horas
            </p>
            <a
              href="https://wa.me/573004855633"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0E72A7] text-white rounded-lg font-medium hover:bg-[#0E72A7]/90 transition-colors"
            >
              Contactar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};