import React, { useState } from 'react';
import { 
  Shield, 
  Activity, 
  Gauge, 
  Wind, 
  CloudSun,
  Volume2,
  Radio,
  Wifi,
  Cpu,
  Check,
  Copy,
  ChevronRight,
  ChevronLeft,
  X
} from 'lucide-react';
import { PartNumberSearcher } from '../molecules/PartNumberSearcher';
import { generatePartNumber } from '../../utils/partNumber';
import { Specifications } from '../molecules/Specifications';
import type { Config } from '../../types/partNumber';

const steps = [
  { id: 'version', title: 'Versión' },
  { id: 'gas', title: 'Gases' },
  { id: 'particulate', title: 'Material Particulado' },
  { id: 'meteo', title: 'Meteorología' },
  { id: 'noise', title: 'Ruido' },
  { id: 'communications', title: 'Comunicaciones' }
];

export const PartNumberGenerator: React.FC = () => {
  const [config, setConfig] = useState<Config>({
    reference: 'ST',
    version: '',
    gasType: '',
    gases: {
      CO: false,
      NO2: false,
      O3: false,
      SO2: false,
      H2S: false,
      NH3: false,
      CO2: false,
      CH4: false
    },
    particulate: '',
    meteorology: '',
    noise: '',
    communications: ''
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatePartNumber(config));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const versions = [
    { value: 'S', label: 'Standard', icon: <Shield /> },
    { value: 'I', label: 'Intrinsic Safe', icon: <Activity /> },
    { value: 'V', label: 'Vehicle Counter', icon: <Gauge /> }
  ];

  const gasTypes = [
    { value: 'A', label: 'Alphasense', icon: <Cpu /> },
    { value: 'B', label: 'EC Sense', icon: <Cpu /> },
    { value: 'C', label: 'Membrapor', icon: <Cpu /> },
    { value: 'D', label: 'Senva', icon: <Cpu /> }
  ];

  const gases = [
    { id: 'CO', label: 'Monóxido de Carbono (CO)' },
    { id: 'NO2', label: 'Dióxido de Nitrógeno (NO₂)' },
    { id: 'O3', label: 'Ozono (O₃)' },
    { id: 'SO2', label: 'Dióxido de Azufre (SO₂)' },
    { id: 'H2S', label: 'Sulfuro de Hidrógeno (H₂S)' },
    { id: 'NH3', label: 'Amoníaco (NH₃)' },
    { id: 'CO2', label: 'Dióxido de Carbono (CO₂)' },
    { id: 'CH4', label: 'Metano (CH₄)' }
  ];

  const particulateTypes = [
    { value: 'P', label: 'Plantower', icon: <Wind /> },
    { value: 'S', label: 'Sensirion', icon: <Wind /> }
  ];

  const meteoTypes = [
    { value: 'D', label: 'Davis', icon: <CloudSun /> },
    { value: 'R', label: 'Rika', icon: <CloudSun /> },
    { value: 'C', label: 'Chao', icon: <CloudSun /> }
  ];

  const noiseTypes = [
    { value: 'M', label: 'Rika', icon: <Volume2 /> }
  ];

  const commTypes = [
    { value: 'M', label: 'Cellular', icon: <Radio /> },
    { value: 'S', label: 'Satellite Modem', icon: <Radio /> },
    { value: 'L', label: 'LoRaWAN', icon: <Wifi /> }
  ];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0: // Versión
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {versions.map((version) => (
              <button
                key={version.value}
                onClick={() => setConfig({ ...config, version: version.value })}
                className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                  config.version === version.value
                    ? 'bg-[#0E72A7] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <div className="text-2xl">{version.icon}</div>
                <span className="text-lg font-medium">{version.label}</span>
              </button>
            ))}
          </div>
        );

      case 1: // Gases
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => setConfig({
                  ...config,
                  gasType: '',
                  gases: {
                    CO: false,
                    NO2: false,
                    O3: false,
                    SO2: false,
                    H2S: false,
                    NH3: false,
                    CO2: false,
                    CH4: false
                  }
                })}
                className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                  !config.gasType
                    ? 'bg-gray-200 text-gray-700'
                    : 'bg-white text-gray-500 hover:bg-gray-50 border'
                }`}
              >
                <X className="w-8 h-8" />
                <span className="text-lg font-medium">Sin módulo</span>
              </button>
              {gasTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setConfig({ ...config, gasType: type.value })}
                  className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                    config.gasType === type.value
                      ? 'bg-[#0E72A7] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border'
                  }`}
                >
                  <div className="text-2xl">{type.icon}</div>
                  <span className="text-lg font-medium">{type.label}</span>
                </button>
              ))}
            </div>

            {config.gasType && (
              <div className="pt-6 border-t">
                <h4 className="text-lg font-medium mb-4">Seleccione los gases a medir:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {gases
                    .filter(gas => {
                      if (config.gasType === 'D') {
                        return ['CO2', 'CH4'].includes(gas.id);
                      }
                      return !['CO2', 'CH4'].includes(gas.id);
                    })
                    .map((gas) => (
                      <button
                        key={gas.id}
                        onClick={() => setConfig({
                          ...config,
                          gases: {
                            ...config.gases,
                            [gas.id]: !config.gases[gas.id as keyof typeof config.gases]
                          }
                        })}
                        className={`p-4 rounded-lg border transition-all ${
                          config.gases[gas.id as keyof typeof config.gases]
                            ? 'bg-[#0E72A7] text-white border-transparent shadow-lg'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {gas.label}
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        );

      case 2: // Material Particulado
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => setConfig({ ...config, particulate: '' })}
              className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                !config.particulate
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border'
              }`}
            >
              <X className="w-8 h-8" />
              <span className="text-lg font-medium">Sin módulo</span>
            </button>
            {particulateTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setConfig({ ...config, particulate: type.value })}
                className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                  config.particulate === type.value
                    ? 'bg-[#0E72A7] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <div className="text-2xl">{type.icon}</div>
                <span className="text-lg font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        );

      case 3: // Meteorología
        return (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <button
              onClick={() => setConfig({ ...config, meteorology: '' })}
              className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                !config.meteorology
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border'
              }`}
            >
              <X className="w-8 h-8" />
              <span className="text-lg font-medium">Sin módulo</span>
            </button>
            {meteoTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setConfig({ ...config, meteorology: type.value })}
                className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                  config.meteorology === type.value
                    ? 'bg-[#0E72A7] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <div className="text-2xl">{type.icon}</div>
                <span className="text-lg font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        );

      case 4: // Ruido
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => setConfig({ ...config, noise: '' })}
              className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                !config.noise
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border'
              }`}
            >
              <X className="w-8 h-8" />
              <span className="text-lg font-medium">Sin módulo</span>
            </button>
            {noiseTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setConfig({ ...config, noise: type.value })}
                className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                  config.noise === type.value
                    ? 'bg-[#0E72A7] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <div className="text-2xl">{type.icon}</div>
                <span className="text-lg font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        );

      case 5: // Comunicaciones
        return (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <button
              onClick={() => setConfig({ ...config, communications: '' })}
              className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                !config.communications
                  ? 'bg-gray-200 text-gray-700'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border'
              }`}
            >
              <X className="w-8 h-8" />
              <span className="text-lg font-medium">Sin módulo</span>
            </button>
            {commTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setConfig({ ...config, communications: type.value })}
                className={`flex items-center gap-4 p-6 rounded-lg transition-all ${
                  config.communications === type.value
                    ? 'bg-[#0E72A7] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <div className="text-2xl">{type.icon}</div>
                <span className="text-lg font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <PartNumberSearcher />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#001011]">Generador de Números de Parte</h2>
          <p className="text-xl text-[#7E7E7E]">Configure su equipo y genere su número de parte único</p>
        </div>

        {/* Wizard Steps */}
        <div className="mb-12">
          <div className="flex justify-center items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <button
                  onClick={() => setCurrentStep(index)}
                  className="flex flex-col items-center"
                >
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-2
                    ${currentStep === index ? 'bg-[#0E72A7] text-white' : 
                      currentStep > index ? 'bg-[#4FBA78] text-white' : 'bg-gray-200 text-gray-600'}
                  `}>
                    {currentStep > index ? <Check className="w-6 h-6" /> : (index + 1)}
                  </div>
                  <span className="text-sm font-medium text-[#7E7E7E]">{step.title}</span>
                </button>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-1 mx-2 ${
                    currentStep > index ? 'bg-[#4FBA78]' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[#001011]">{steps[currentStep].title}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    disabled={currentStep === 0}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    className="p-2 rounded-lg hover:bg-gray-100"
                    disabled={currentStep === steps.length - 1}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              {renderStepContent(currentStep)}
            </div>
            {/* Current Step Specifications */}
          <div className="lg:sticky lg:top-4 h-fit">
            <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
              <h4 className="text-lg font-semibold mb-4 text-[#001011]">Especificaciones Actuales</h4>
              <Specifications
                type={steps[currentStep].id as any}
                selectedType={
                  steps[currentStep].id === 'version' ? config.version :
                  steps[currentStep].id === 'gas' ? config.gasType :
                  steps[currentStep].id === 'particulate' ? config.particulate :
                  steps[currentStep].id === 'meteo' ? config.meteorology :
                  steps[currentStep].id === 'noise' ? config.noise :
                  steps[currentStep].id === 'communications' ? config.communications :
                  null
                }
                selectedGases={config.gases}
              />
            </div>
          </div>
{/* Número de Parte */}
            <div className="mt-8 bg-gradient-to-br from-[#0E72A7] to-[#4D8ACA] rounded-xl shadow-lg p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Número de Parte</h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 bg-white/10 rounded-lg font-mono text-lg">
                {generatePartNumber(config)}
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href="/brochure.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-[#ED6A5A] text-white rounded-full font-semibold hover:bg-[#ff7a68] transition-all shadow-lg"
                >
                  Descargar Brochure
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
            {/* All Selected Specifications */}
            <div className="mt-8 space-y-6">
              {/* Version Specs */}
              {config.version && (
                <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#001011]">Versión Seleccionada</h4>
                  <Specifications
                    type="version"
                    selectedType={config.version}
                    selectedGases={config.gases}
                  />
                </div>
              )}

              {/* Gas Specs */}
              {config.gasType && (
                <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#001011]">Gases Seleccionados</h4>
                  <Specifications
                    type="gas"
                    selectedType={config.gasType}
                    selectedGases={config.gases}
                  />
                </div>
              )}

              {/* Particulate Specs */}
              {config.particulate && (
                <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#001011]">Material Particulado Seleccionado</h4>
                  <Specifications
                    type="particulate"
                    selectedType={config.particulate}
                    selectedGases={config.gases}
                  />
                </div>
              )}

              {/* Meteo Specs */}
              {config.meteorology && (
                <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#001011]">Meteorología Seleccionada</h4>
                  <Specifications
                    type="meteo"
                    selectedType={config.meteorology}
                    selectedGases={config.gases}
                  />
                </div>
              )}

              {/* Noise Specs */}
              {config.noise && (
                <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#001011]">Ruido Seleccionado</h4>
                  <Specifications
                    type="noise"
                    selectedType={config.noise}
                    selectedGases={config.gases}
                  />
                </div>
              )}

              {/* Communications Specs */}
              {config.communications && (
                <div className="bg-white rounded-xl shadow-lg border border-[#DEDEDE] p-6">
                  <h4 className="text-lg font-semibold mb-4 text-[#001011]">Comunicaciones Seleccionadas</h4>
                  <Specifications
                    type="communications"
                    selectedType={config.communications}
                    selectedGases={config.gases}
                  />
                </div>
              )}
            </div>

            

          
        </div>
      </div>
    </section>
  );
};