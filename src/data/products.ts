import { Shield, Cpu, Gauge } from 'lucide-react';

export interface Product {
  id: string;
  icon: typeof Shield;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: {
    title: string;
    items: string[];
  }[];
  image: string;
  configurations: {
    name: string;
    description: string;
    specs: string[];
  }[];
}

export const ProductsData: Product[] = [
  {
    id: 'stairmik',
    icon: Shield,
    name: 'Stairmik',
    subtitle: 'Sistema Modular de Monitoreo Ambiental',
    description: 'Plataforma versátil de monitoreo ambiental que se adapta a sus necesidades específicas. Diseñado para ofrecer máxima flexibilidad y precisión en la medición de variables ambientales.',
    features: [
      'Sistema totalmente modular y configurable',
      'Conectividad multi-protocolo',
      'Procesamiento edge computing',
      'Almacenamiento local y en la nube',
      'Actualización remota de firmware',
      'Diagnóstico y calibración automática'
    ],
    applications: [
      'Monitoreo de calidad del aire urbano',
      'Control ambiental industrial',
      'Estudios de impacto ambiental',
      'Smart Cities',
      'Investigación y desarrollo'
    ],
    specifications: [
      {
        title: 'Sensores',
        items: [
          'Gases: CO, NO2, O3, SO2, H2S, NH3, CO2, CH4',
          'Material Particulado: 0.3-10 µm',
          'Meteorología: Temp, HR, Presión, Viento',
          'Ruido: 30-130 dB'
        ]
      },
      {
        title: 'Comunicaciones',
        items: [
          'Módem 4G LTE Cat-M1/NB-IoT',
          'LoRaWAN Clase A/C',
          'Satélite Iridium (opcional)',
          'WiFi/Ethernet para configuración'
        ]
      }
    ],
    configurations: [
      {
        name: 'Configuración Urbana',
        description: 'Optimizada para monitoreo de calidad del aire en entornos urbanos',
        specs: [
          'Sensores de NO2, O3 y PM2.5/PM10',
          'Estación meteorológica compacta',
          'Comunicación 4G con respaldo LoRaWAN',
          'Panel solar + batería de respaldo'
        ]
      },
      {
        name: 'Configuración Industrial',
        description: 'Diseñada para monitoreo en entornos industriales exigentes',
        specs: [
          'Sensores de CO, SO2, H2S y material particulado',
          'Medición de ruido industrial',
          'Comunicación Ethernet industrial',
          'Alimentación 24V DC'
        ]
      },
      {
        name: 'Configuración Investigación',
        description: 'Configuración avanzada para estudios ambientales detallados',
        specs: [
          'Suite completa de sensores de gases',
          'Estación meteorológica profesional',
          'Almacenamiento local extendido',
          'Conectividad redundante'
        ]
      },
      {
        name: 'Configuración Móvil',
        description: 'Para estudios de campo y monitoreo temporal',
        specs: [
          'Sensores seleccionables según campaña',
          'GPS integrado',
          'Batería de larga duración',
          'Comunicación satelital opcional'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=60'
  }
];