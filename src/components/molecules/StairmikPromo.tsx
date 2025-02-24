import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Activity } from 'lucide-react';

export const StairmikPromo: React.FC = () => (
  <div className="bg-gradient-to-br from-[#409ACA] to-blue-600 text-white py-16 px-8 rounded-2xl mb-12">
    <div className="max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6">
          Stairmik: La Nueva Generación en Monitoreo Ambiental
        </h1>
        <p className="text-xl mb-12 text-white/90 max-w-4xl mx-auto">
          Sistema modular de alta precisión para medición de gases, material particulado, 
          variables meteorológicas y ruido. Diseñado para adaptarse a sus necesidades específicas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <Shield className="w-12 h-12 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Certificado</h3>
            <p className="text-base text-white/80">
              Cumple con estándares internacionales de calidad y seguridad
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <Cpu className="w-12 h-12 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Modular</h3>
            <p className="text-base text-white/80">
              Configure el equipo según sus necesidades específicas
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <Activity className="w-12 h-12 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">Preciso</h3>
            <p className="text-base text-white/80">
              Alta precisión y estabilidad en las mediciones
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);