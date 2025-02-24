import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, Info } from 'lucide-react';
import { GasModules, ParticulateModules, MeteoModules, NoiseModule } from '../../data/specifications';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  selectedType?: string;
  selectedGases?: Record<string, boolean>;
  type: 'version' | 'gas' | 'particulate' | 'meteo' | 'noise' | 'communications';
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  icon, 
  children, 
  selectedType,
  selectedGases,
  type 
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const getSpecifications = () => {
    if (!selectedType) return null;

    switch (type) {
      case 'gas':
        if (!GasModules[selectedType]) return null;
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Especificaciones</h4>
              <p className="text-gray-600 mb-4">
                Capacidad máxima: {GasModules[selectedType].maxSensors}
              </p>
              {selectedGases && Object.entries(selectedGases)
                .filter(([gas, selected]) => selected && GasModules[selectedType].gases[gas])
                .map(([gas]) => (
                  <div key={gas} className="mb-6 last:mb-0">
                    <h5 className="font-medium mb-2">{gas}</h5>
                    <dl className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="text-gray-600">Rango</dt>
                        <dd className="font-medium">{GasModules[selectedType].gases[gas].range}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Resolución</dt>
                        <dd className="font-medium">{GasModules[selectedType].gases[gas].resolution}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-600">Límite de detección</dt>
                        <dd className="font-medium">{GasModules[selectedType].gases[gas].detectionLimit}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
            </div>
          </div>
        );

      case 'particulate':
        if (!ParticulateModules[selectedType]) return null;
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Especificaciones</h4>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-600 mb-1">Rango de medición</dt>
                  <dd className="font-medium">{ParticulateModules[selectedType].range}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">Resolución</dt>
                  <dd className="font-medium">{ParticulateModules[selectedType].resolution}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">Precisión</dt>
                  <dd className="font-medium">
                    <ul className="list-disc list-inside space-y-1">
                      {ParticulateModules[selectedType].precision.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        );

      case 'meteo':
        if (!MeteoModules[selectedType]) return null;
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Parámetros</h4>
              {Object.entries(MeteoModules[selectedType].parameters).map(([param, specs]) => (
                <div key={param} className="mb-6 last:mb-0">
                  <h5 className="font-medium mb-2">{param}</h5>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-gray-600">Rango</dt>
                      <dd className="font-medium">{specs.range}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Resolución</dt>
                      <dd className="font-medium">{specs.resolution}</dd>
                    </div>
                    <div>
                      <dt className="text-gray-600">Precisión</dt>
                      <dd className="font-medium">{specs.precision}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        );

      case 'noise':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Especificaciones</h4>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-600 mb-1">Rango de medición</dt>
                  <dd className="font-medium">{NoiseModule.range}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">Rango de frecuencia</dt>
                  <dd className="font-medium">{NoiseModule.frequency}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 mb-1">Precisión</dt>
                  <dd className="font-medium">{NoiseModule.precision}</dd>
                </div>
              </dl>
            </div>
          </div>
        );

      case 'version':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Características</h4>
              {selectedType === 'S' && (
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Diseñado para uso en ambientes industriales normales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>IP65 para protección contra polvo y agua</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Temperatura de operación: -20°C a 60°C</span>
                  </li>
                </ul>
              )}
              {selectedType === 'I' && (
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Certificado para uso en áreas peligrosas (ATEX Zona 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>IP66 para mayor protección en ambientes agresivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Temperatura de operación: -40°C a 70°C</span>
                  </li>
                </ul>
              )}
              {selectedType === 'V' && (
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Optimizado para conteo y clasificación vehicular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Incluye algoritmos de IA para clasificación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>IP67 para instalación en vías</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        );

      case 'communications':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Características</h4>
              {selectedType === 'M' && (
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Módem 4G LTE Cat-M1/NB-IoT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Cobertura global con roaming automático</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Bajo consumo de energía</span>
                  </li>
                </ul>
              )}
              {selectedType === 'S' && (
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Conectividad satelital Iridium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Cobertura global incluso en áreas remotas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Transmisión bidireccional de datos</span>
                  </li>
                </ul>
              )}
              {selectedType === 'L' && (
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Conectividad LoRaWAN Clase A/C</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Largo alcance y bajo consumo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                    <span>Compatible con redes públicas y privadas</span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const specs = getSpecifications();

  return (
    <div className="bg-white rounded-xl shadow-sm border p-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-6"
      >
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="lg:pr-8">{children}</div>
              {specs && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="lg:border-l lg:pl-8"
                >
                  {specs}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};