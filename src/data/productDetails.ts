import { SensorCompatibilityData } from './sensorCompatibility';

export interface ProductSpecification {
  icon: string;
  title: string;
  details: string[];
}

export interface ProductDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specifications: ProductSpecification[];
  features: string[];
  applications: string[];
  compatibleSensors?: typeof SensorCompatibilityData;
}

export const ProductDetails: Record<string, ProductDetail> = {
  datumx: {
    id: 'datumx',
    title: 'DatumX',
    subtitle: 'Datalogger Industrial de Alta Precisión',
    description: `El Datalogger DatumX es un dispositivo compacto que permite la adquisición, almacenamiento, procesamiento y transmisión de datos, previamente medidos desde sensores, hacia la nube. Proporciona múltiples interfaces para sensores, desde entradas analógicas y digitales hasta protocolos industriales relevantes como RS485. Entre sus características destaca el almacenamiento de datos tanto local como remoto, compatibilidad con módems 3G/4G para transmisión de datos a la nube y funciones de respaldo en tarjeta SD.`,
    specifications: [
      {
        icon: 'Cpu',
        title: 'Procesador',
        details: [
          'Frecuencia: 1.5Ghz',
          'Cores: 4',
          'Set de instrucciones: Quad-Core ARM Cortex A72 (64bits)',
          'Memoria RAM: 8Gb',
          'Sistema Operativo: Linux'
        ]
      },
      {
        icon: 'Database',
        title: 'Almacenamiento',
        details: [
          '16Gb (O.S. + Data)',
          'Aproximadamente 10 millones de valores',
          'Reloj DS3232 con vida útil de hasta 5 años',
          'Temperatura de operación: -35°C a 50°C'
        ]
      },
      {
        icon: 'Gauge',
        title: 'Interfaces de Sensores',
        details: [
          '2 puertos RS232 (hasta 2 sensores)',
          '1 puerto RS485 (hasta 10 sensores)',
          '4 puertos USB (hasta 10 sensores)',
          '2 entradas analógicas (16 bits)',
          '2 entradas de pulso digital'
        ]
      },
      {
        icon: 'Wifi',
        title: 'Conectividad',
        details: [
          'WiFi IEEE 802.11b/g hotspot',
          'Ethernet 10/100Mbps',
          'Protocolos: IPv4/v6, TCP/UDP, HTTP(s), FTP/SFTP',
          'Transmisión FTP, HTTP-JSON, LoRaWAN'
        ]
      },
      {
        icon: 'Shield',
        title: 'Características Especiales',
        details: [
          'Protección contra sobrevoltaje y sobrecorriente',
          'Carcasa metálica resistente al polvo',
          'Configuración vía servidor web integrado',
          'Alertas y monitoreo en tiempo real'
        ]
      }
    ],
    features: [
      'Servidor web incorporado para visualización en tiempo real y configuración',
      'Compatible con módems industriales (3G, 4G, Satélite)',
      'Sistema de alertas configurable con múltiples condiciones',
      'Integración con sistemas de terceros vía API REST, FTP, HTTP-JSON'
    ],
    applications: [
      'Monitoreo ambiental',
      'Control de procesos industriales',
      'Seguimiento de activos',
      'Estaciones meteorológicas',
      'Gestión de recursos hídricos',
      'Monitoreo de calidad del aire'
    ],
    compatibleSensors: SensorCompatibilityData
  },
  'noise-monitoring': {
    id: 'noise-monitoring',
    title: 'Monitoreo de Ruido',
    subtitle: 'Sistemas Avanzados de Medición Acústica',
    description: 'Soluciones completas para la medición y análisis de ruido ambiental e industrial, con capacidad de transmisión en tiempo real y generación automática de informes.',
    specifications: [
      {
        icon: 'Gauge',
        title: 'Medición',
        details: [
          'Rango de medición: 30-130 dB',
          'Precisión: Clase 1 según IEC 61672',
          'Ponderaciones frecuenciales: A, C, Z',
          'Tiempo de respuesta: Fast, Slow, Impulse'
        ]
      },
      {
        icon: 'Wifi',
        title: 'Conectividad',
        details: [
          'Transmisión de datos en tiempo real',
          'Almacenamiento local y en la nube',
          'Integración con DatumX',
          'Alertas configurables'
        ]
      }
    ],
    features: [
      'Medición de nivel sonoro continuo',
      'Análisis espectral en tiempo real',
      'Registro de eventos sonoros',
      'Calibración automática',
      'Transmisión de datos en tiempo real'
    ],
    applications: [
      'Control ambiental urbano',
      'Monitoreo industrial',
      'Evaluación de impacto acústico',
      'Mapas de ruido'
    ]
  },
  'sensor-supply': {
    id: 'sensor-supply',
    title: 'Suministro de Sensores',
    subtitle: 'Sensores Industriales y Ambientales',
    description: 'Ofrecemos una amplia gama de sensores industriales y ambientales, todos compatibles con nuestro DatumX y respaldados por soporte técnico especializado.',
    specifications: [
      {
        icon: 'Shield',
        title: 'Garantía y Soporte',
        details: [
          'Garantía extendida disponible',
          'Soporte técnico especializado',
          'Mantenimiento preventivo',
          'Calibración y certificación'
        ]
      },
      {
        icon: 'Gauge',
        title: 'Tipos de Sensores',
        details: [
          'Calidad del aire',
          'Variables meteorológicas',
          'Nivel y caudal',
          'Variables industriales'
        ]
      }
    ],
    features: [
      'Sensores calibrados y certificados',
      'Soporte técnico especializado',
      'Garantía extendida',
      'Integración con DatumX',
      'Mantenimiento preventivo'
    ],
    applications: [
      'Monitoreo de calidad del aire',
      'Medición de variables meteorológicas',
      'Control de procesos industriales',
      'Monitoreo ambiental'
    ]
  }
};