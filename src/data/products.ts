import { 
  Database, 
  Cpu, 
  Gauge, 
  Wifi, 
  Shield,
  Wrench,
  Wind,
  Droplets,
  Sun,
  Volume2,
  Car,
  Factory
} from 'lucide-react';

export interface Product {
  id: string;
  icon: typeof Database;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: {
    title: string;
    items: string[];
  }[];
  certifications?: string[];
  image: string;
}

export const ProductsData: Product[] = [
  {
    id: 'dataloggers',
    icon: Database,
    name: 'Dataloggers Industriales X-Series',
    subtitle: 'El cerebro detrás de sus datos más críticos',
    description: 'Únicos en el mercado con IA integrada para preprocesamiento de datos y alertas predictivas. Diseñados para resistir las condiciones más extremas mientras mantienen la máxima precisión.',
    features: [
      'Certificación IP68 (resistente a polvo, agua y temperaturas extremas)',
      'Rango de operación: -30°C a 70°C',
      'Autonomía de 2 años con batería de litio',
      'Conectividad 4G/LoRaWAN/Satélite',
      'IA integrada para preprocesamiento',
      'Alertas predictivas avanzadas'
    ],
    applications: [
      'Monitoreo ambiental (calidad del aire, agua)',
      'Eficiencia energética',
      'Agricultura de precisión',
      'Industria pesada',
      'Minería y recursos naturales'
    ],
    specifications: [
      {
        title: 'Procesamiento',
        items: [
          'CPU ARM Cortex-A53 quad-core',
          'Memoria RAM: 2GB DDR4',
          'Almacenamiento: 32GB eMMC'
        ]
      },
      {
        title: 'Conectividad',
        items: [
          '4G LTE Cat-M1/NB-IoT',
          'LoRaWAN Clase A/C',
          'Satélite (opcional)',
          'WiFi 802.11 b/g/n',
          'Bluetooth 5.0 LE'
        ]
      },
      {
        title: 'Interfaces',
        items: [
          '4x Entradas analógicas (16-bit)',
          '2x RS485 Modbus',
          '2x RS232',
          '4x Entradas digitales',
          '2x Salidas de relé'
        ]
      }
    ],
    certifications: [
      'IP68',
      'ATEX Zona 2',
      'IECEx',
      'CE',
      'FCC'
    ],
    image: 'https://images.unsplash.com/photo-1580983218628-25a7117cae61?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'environmental-sensors',
    icon: Gauge,
    name: 'Sensores Ambientales HyperPrecision',
    subtitle: 'La verdad tiene un nuevo estándar',
    description: 'Línea completa de sensores ambientales de alta precisión con certificación EPA. Desde calidad del aire hasta monitoreo de agua, ofrecemos la máxima precisión y confiabilidad.',
    features: [
      'AirMaster Pro: PM2.5, CO2, NO2, SO2, ozono',
      'HydroGuard: Metales pesados en agua',
      'NoiseControl: Sonómetros clase 1',
      'Calibración automática',
      'Compensación de temperatura'
    ],
    applications: [
      'Empresas mineras',
      'Gobiernos locales',
      'Plantas de tratamiento',
      'Industrias bajo normativas OSHA',
      'Certificación ISO 14001'
    ],
    specifications: [
      {
        title: 'AirMaster Pro',
        items: [
          'PM2.5: 0-1000 μg/m³ ±1%',
          'CO2: 0-5000 ppm ±30 ppm',
          'NO2: 0-200 ppb ±2 ppb',
          'SO2: 0-200 ppb ±2 ppb',
          'O3: 0-200 ppb ±2 ppb'
        ]
      },
      {
        title: 'HydroGuard',
        items: [
          'Precisión: 0.001 ppm',
          'Tiempo de respuesta: <30s',
          'Calibración automática',
          'Compensación de temperatura'
        ]
      }
    ],
    certifications: [
      'EPA',
      'ISO 14001',
      'MCERTS'
    ],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'weather-stations',
    icon: Sun,
    name: 'Estaciones Meteorológicas SmartClimate',
    subtitle: 'Pronósticos locales, decisiones globales',
    description: 'Estaciones meteorológicas profesionales con IA integrada para pronósticos hiperlocales. Diseño modular para redes de monitoreo escalables.',
    features: [
      'Pronósticos hiperlocales hasta 72h',
      'Precisión del 92%',
      'Diseño modular escalable',
      'Integración con modelos neuronales',
      'Mantenimiento predictivo'
    ],
    applications: [
      'Agricultura de precisión',
      'Gestión urbana',
      'Investigación climática',
      'Energías renovables',
      'Aviación'
    ],
    specifications: [
      {
        title: 'Sensores',
        items: [
          'Velocidad del viento: ±0.1 m/s',
          'Dirección del viento: ±1°',
          'Temperatura: ±0.1°C',
          'Humedad: ±1%',
          'Presión: ±0.1 hPa',
          'Radiación UV: ±1%',
          'Precipitación: ±0.1 mm'
        ]
      },
      {
        title: 'Sistema',
        items: [
          'Alimentación solar',
          'Batería de respaldo 30 días',
          'Transmisión en tiempo real',
          'Almacenamiento local 1 año'
        ]
      }
    ],
    certifications: [
      'WMO',
      'ISO 9001',
      'IEC 61724-1'
    ],
    image: 'https://images.unsplash.com/photo-1590767600763-5a3075c5550e?w=800&auto=format&fit=crop&q=60'
  }
];