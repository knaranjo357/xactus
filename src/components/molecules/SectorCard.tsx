import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Sector } from '../../data/sectors';

interface SectorCardProps {
  sector: Sector;
}

export const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
  const {
    icon: Icon,
    title,
    subtitle,
    description,
    features,
    benefits,
    image
  } = sector;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{subtitle}</span>
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Características Principales
            </h4>
            <ul className="space-y-2">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#409ACA] mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Beneficios
            </h4>
            <ul className="space-y-2">
              {benefits.slice(0, 2).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#4FBA78] mt-1 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t flex justify-end">
          <button className="inline-flex items-center text-sm font-medium text-[#409ACA] hover:text-[#3089b9] transition-colors">
            Ver más detalles
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};