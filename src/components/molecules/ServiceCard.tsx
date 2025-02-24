import React from 'react';
import { ServiceIcon } from '../atoms/ServiceIcon';
import { CheckCircle2 } from 'lucide-react';
import type { Service } from '../../data/services';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const {
    icon: Icon,
    title,
    subtitle,
    description,
    features,
    examples,
    benefits
  } = service;

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const featureVariants = {
    hover: { x: 10, transition: { duration: 0.2 } }
  };

  return (
    <motion.div 
      className="p-8 bg-white rounded-xl shadow-lg transition-shadow duration-300"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="flex items-center gap-4 mb-6">
        <ServiceIcon Icon={Icon} />
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-lg font-medium text-[#409ACA]">{subtitle}</p>
        </div>
      </div>
      
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

      {features && features.length > 0 && (
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-start group"
              variants={featureVariants}
              whileHover="hover"
            >
              <CheckCircle2 className="w-5 h-5 text-[#409ACA] mt-1 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-gray-700">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      )}

      {examples && examples.length > 0 && (
        <div className="border-t border-gray-100 pt-6 mb-8">
          <p className="font-medium text-gray-900 mb-4">Casos de Éxito:</p>
          <ul className="space-y-3">
            {examples.map((example, index) => (
              <motion.li 
                key={index} 
                className="flex items-center text-gray-700 group"
                whileHover={{ x: 10 }}
              >
                <span className="text-[#409ACA] mr-2 group-hover:scale-110 transition-transform">✔️</span>
                {example.text}
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {benefits && benefits.length > 0 && (
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg"
          whileHover={{ scale: 1.02 }}
        >
          <p className="font-medium text-gray-900 mb-4">Beneficios:</p>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-center text-gray-700 group"
                whileHover={{ x: 10 }}
              >
                <span className="text-[#409ACA] mr-2 group-hover:scale-110 transition-transform">✅</span>
                {benefit}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};