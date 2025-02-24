import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-700"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <product.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{product.subtitle}</span>
          </div>
          <h3 className="text-xl font-bold">{product.name}</h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>

        <div className="space-y-6 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Características Principales
            </h4>
            <ul className="space-y-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="w-4 h-4 text-[#409ACA] mt-1 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {product.certifications && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Certificaciones
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-50 text-[#409ACA] text-xs font-medium rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto flex justify-between items-center pt-4 border-t">
          <a
            href="/contact"
            className="text-sm text-[#409ACA] hover:text-[#3089b9] font-medium transition-colors"
          >
            Solicitar ficha técnica
          </a>
          <button
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-[#409ACA] transition-colors"
          >
            Ver detalles
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};