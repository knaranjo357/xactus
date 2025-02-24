import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { GasModules, ParticulateModules, MeteoModules, NoiseModule } from '../../data/specifications';

interface SpecificationsProps {
  type: 'version' | 'gas' | 'particulate' | 'meteo' | 'noise' | 'communications' | null;
  selectedType: string | null;
  selectedGases?: Record<string, boolean>;
}

export const Specifications: React.FC<SpecificationsProps> = ({
  type,
  selectedType,
  selectedGases
}) => {
  const getSpecifications = () => {
    if (!type) return null;

    switch (type) {
      case 'gas':
        if (!selectedType || !GasModules[selectedType]) return (
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h4 className="text-lg font-medium mb-4">Módulo de Gases</h4>
            <p className="text-gray-600">
              Seleccione un tipo de sensor para ver sus especificaciones detalladas.
            </p>
          </div>
        );
        
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-4">Especificaciones del Sensor</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-2 text-left">Gas</th>
                      <th className="border p-2 text-left">Rango</th>
                      <th className="border p-2 text-left">Resolución</th>
                      <th className="border p-2 text-left">Límite de Detección</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedGases && Object.entries(selectedGases)
                      .filter(([gas, selected]) => selected && GasModules[selectedType].gases[gas])
                      .map(([gas]) => (
                        <tr key={gas} className="hover:bg-gray-50">
                          <td className="border p-2 font-medium text-[#409ACA]">{gas}</td>
                          <td className="border p-2">{GasModules[selectedType].gases[gas].range}</td>
                          <td className="border p-2">{GasModules[selectedType].gases[gas].resolution}</td>
                          <td className="border p-2">{GasModules[selectedType].gases[gas].detectionLimit}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Capacidad máxima: {GasModules[selectedType].maxSensors}
              </p>
            </div>
          </div>
        );

      case 'particulate':
        const particulate = selectedType ? ParticulateModules[selectedType] : null;
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h4 className="text-lg font-medium mb-4">Especificaciones de Material Particulado</h4>
              {particulate ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <th className="border p-2 text-left bg-gray-50">Rango de medición</th>
                        <td className="border p-2">{particulate.range}</td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left bg-gray-50">Resolución</th>
                        <td className="border p-2">{particulate.resolution}</td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left bg-gray-50">Precisión</th>
                        <td className="border p-2">
                          <ul className="list-disc list-inside space-y-1">
                            {particulate.precision.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">
                  Seleccione un tipo de sensor para ver sus especificaciones detalladas.
                </p>
              )}
            </div>
          </div>
        );

      case 'meteo':
        const meteo = selectedType ? MeteoModules[selectedType] : null;
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h4 className="text-lg font-medium mb-4">Parámetros Meteorológicos</h4>
              {meteo ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Parámetro</th>
                        <th className="border p-2 text-left">Rango</th>
                        <th className="border p-2 text-left">Resolución</th>
                        <th className="border p-2 text-left">Precisión</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(meteo.parameters).map(([param, specs]) => (
                        <tr key={param} className="hover:bg-gray-50">
                          <td className="border p-2 font-medium text-[#409ACA]">{param}</td>
                          <td className="border p-2">{specs.range}</td>
                          <td className="border p-2">{specs.resolution}</td>
                          <td className="border p-2">{specs.precision}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">
                  Seleccione un tipo de estación para ver sus especificaciones detalladas.
                </p>
              )}
            </div>
          </div>
        );

      case 'noise':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h4 className="text-lg font-medium mb-4">Especificaciones de Ruido</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr>
                      <th className="border p-2 text-left bg-gray-50">Rango de medición</th>
                      <td className="border p-2">{NoiseModule.range}</td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left bg-gray-50">Rango de frecuencia</th>
                      <td className="border p-2">{NoiseModule.frequency}</td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left bg-gray-50">Precisión</th>
                      <td className="border p-2">{NoiseModule.precision}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'version':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h4 className="text-lg font-medium mb-4">Características de la Versión</h4>
              {selectedType ? (
                <div className="space-y-4">
                  {selectedType === 'S' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Diseñado para uso en ambientes industriales normales</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>IP65 para protección contra polvo y agua</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Temperatura de operación: -20°C a 60°C</span>
                      </div>
                    </div>
                  )}
                  {selectedType === 'I' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Certificado para uso en áreas peligrosas (ATEX Zona 1)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>IP66 para mayor protección en ambientes agresivos</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Temperatura de operación: -40°C a 70°C</span>
                      </div>
                    </div>
                  )}
                  {selectedType === 'V' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Optimizado para conteo y clasificación vehicular</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Incluye algoritmos de IA para clasificación</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>IP67 para instalación en vías</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">
                  Seleccione una versión para ver sus características detalladas.
                </p>
              )}
            </div>
          </div>
        );

      case 'communications':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h4 className="text-lg font-medium mb-4">Características de Comunicación</h4>
              {selectedType ? (
                <div className="space-y-4">
                  {selectedType === 'M' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Módem 4G LTE Cat-M1/NB-IoT</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Cobertura global con roaming automático</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Bajo consumo de energía</span>
                      </div>
                    </div>
                  )}
                  {selectedType === 'S' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Conectividad satelital Iridium</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Cobertura global incluso en áreas remotas</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Transmisión bidireccional de datos</span>
                      </div>
                    </div>
                  )}
                  {selectedType === 'L' && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Conectividad LoRaWAN Clase A/C</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Largo alcance y bajo consumo</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-[#409ACA] mt-0.5" />
                        <span>Compatible con redes públicas y privadas</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">
                  Seleccione un tipo de comunicación para ver sus características detalladas.
                </p>
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
    <AnimatePresence mode="wait">
      {specs && (
        <motion.div
          key={`${type}-${selectedType}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-50 rounded-xl p-6"
        >
          {specs}
        </motion.div>
      )}
    </AnimatePresence>
  );
};