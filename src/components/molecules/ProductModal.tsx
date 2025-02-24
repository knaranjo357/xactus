import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Shield, Cpu, Gauge, Wifi, Database, CheckCircle2 } from 'lucide-react';
import type { Product } from '../../data/products';
import { ProductDetails } from '../../data/productDetails';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const details = ProductDetails[product.id];
  const icons = { Shield, Cpu, Gauge, Wifi, Database };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="p-6 border-b flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <product.icon className="w-8 h-8 text-[#409ACA]" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{details.title}</h2>
                    <p className="text-[#409ACA] font-medium">{details.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="prose max-w-none">
                  {/* Descripción */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Descripción General</h3>
                    <p className="text-gray-600 leading-relaxed">{details.description}</p>
                  </div>

                  {/* Especificaciones */}
                  {details.specifications && (
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Especificaciones Técnicas</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {details.specifications.map((spec, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-3 text-[#409ACA]">
                              {icons[spec.icon as keyof typeof icons] && 
                                React.createElement(icons[spec.icon as keyof typeof icons], { 
                                  className: "w-5 h-5" 
                                })
                              }
                              <h4 className="font-semibold">{spec.title}</h4>
                            </div>
                            <ul className="space-y-2">
                              {spec.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-600">
                                  <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-[#409ACA]" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Características */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Características Destacadas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#409ACA] mt-1" />
                          <p className="text-gray-600">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Aplicaciones */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Aplicaciones</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.applications.map((app, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 mt-1 text-[#409ACA]" />
                          <p className="text-gray-600">{app}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sensores Compatibles (solo para DatumX) */}
                  {details.compatibleSensors && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Sensores Compatibles</h3>
                      <div className="grid gap-6">
                        {details.compatibleSensors.map((brand, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-[#409ACA]">{brand.name}</h4>
                              <span className="text-sm text-gray-500">{brand.interface}</span>
                            </div>
                            <ul className="space-y-1">
                              {brand.models.map((model, idx) => (
                                <li key={idx} className="text-gray-600 flex items-start gap-2">
                                  <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0 text-[#409ACA]" />
                                  {model}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Para más información contacte con nuestro equipo de ventas
                  </p>
                  <a
                    href="mailto:info@xactus.io"
                    className="inline-flex items-center px-4 py-2 bg-[#409ACA] text-white rounded-lg hover:bg-[#3089b9] transition-colors"
                  >
                    Contactar
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};