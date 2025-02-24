import { Brain, Cpu, Cog, LineChart, HardDrive, Lightbulb, CheckCircle2, Timer, Building2, Activity, Workflow, Bot, Camera, CloudCog, Cuboid as Cube, FlaskRound as Flask, Microscope, Printer } from 'lucide-react';

export interface ServiceFeature {
  icon: typeof CheckCircle2;
  text: string;
}

export interface ServiceExample {
  text: string;
}

export interface Service {
  icon: typeof Brain;
  title: string;
  subtitle: string;
  description: string;
  features?: ServiceFeature[];
  examples?: ServiceExample[];
  benefits?: string[];
}

export const ServicesData: Service[] = [
  {
    icon: Cog,
    title: 'Automatización Inteligente de Procesos',
    subtitle: '¿Procesos lentos que drenan su productividad?',
    description: 'Nosotros los convertimos en ventajas competitivas.',
    features: [
      { icon: CheckCircle2, text: 'Software a medida: Sistemas que se adaptan a sus flujos, no al revés' },
      { icon: Timer, text: 'ROI en 90 días: Reducción de costos operativos hasta en un 40%' },
      { icon: Workflow, text: 'Automatización end-to-end: Desde facturación hasta logística' }
    ],
    examples: [
      { text: 'Optimización de cadenas de suministro para multinacionales' },
      { text: 'Integración de ERP + IA para toma de decisiones en tiempo real' }
    ]
  },
  {
    icon: Cpu,
    title: 'IoT & Smart Cities',
    subtitle: 'Ciudades del futuro, hoy',
    description: 'Diseñamos e implementamos infraestructura tecnológica de última generación.',
    features: [
      { icon: Activity, text: 'Monitoreo ambiental: Calidad del aire, agua y ruido' },
      { icon: Camera, text: 'Movilidad inteligente: Cámaras de conteo vehicular + algoritmos predictivos' },
      { icon: Building2, text: 'Gobernanza 4.0: Postes inteligentes con sensores y conectividad 5G' }
    ],
    benefits: [
      'Fabricación propia de hardware (control total de calidad)',
      'Integración con modelos de IA para pronósticos con un 95% de exactitud'
    ]
  },
  {
    icon: Brain,
    title: 'Desarrollo de IA & Visión Artificial',
    subtitle: 'No basta con recolectar datos: hay que convertirlos en acciones',
    description: 'Transformamos datos en decisiones inteligentes con tecnología de punta.',
    features: [
      { icon: LineChart, text: 'Modelos predictivos para variables ambientales y logística' },
      { icon: Camera, text: 'Visión artificial para detección de fallas y seguridad' },
      { icon: Bot, text: 'Agentes conversacionales con NLP para servicio 24/7' }
    ]
  },
  {
    icon: HardDrive,
    title: 'Hardware de Alta Ingeniería',
    subtitle: 'Tecnología que resiste el mundo real',
    description: 'Dispositivos robustos diseñados para condiciones extremas.',
    features: [
      { icon: CheckCircle2, text: 'Dataloggers industriales certificados IP68' },
      { icon: CloudCog, text: 'Estaciones meteorológicas completas' },
      { icon: Lightbulb, text: 'Soluciones a medida para necesidades específicas' }
    ],
    benefits: [
      '3 años de soporte técnico',
      'Actualizaciones remotas incluidas',
      'Operativos en rangos de -20°C a 60°C'
    ]
  },
  {
    icon: Cube,
    title: 'Diseño y Desarrollo 3D',
    subtitle: 'De la imaginación a la realidad',
    description: 'Servicios completos de diseño, modelado e impresión 3D profesional.',
    features: [
      { icon: CheckCircle2, text: 'Modelado 3D de alta precisión' },
      { icon: Printer, text: 'Impresión en resina y FDM' },
      { icon: Microscope, text: 'Control de calidad y post-procesado' }
    ],
    benefits: [
      'Prototipos funcionales',
      'Piezas finales de producción',
      'Acabados profesionales'
    ]
  },
  {
    icon: Flask,
    title: 'Investigación y Desarrollo',
    subtitle: 'Innovación basada en evidencia',
    description: 'Investigación de mercado y desarrollo de productos con metodologías ágiles.',
    features: [
      { icon: CheckCircle2, text: 'Estudios de mercado profundos' },
      { icon: Timer, text: 'Pruebas de calidad exhaustivas' },
      { icon: Workflow, text: 'Desarrollo iterativo con feedback continuo' }
    ],
    examples: [
      { text: 'Validación de productos con usuarios reales' },
      { text: 'Optimización de procesos basada en datos' }
    ]
  }
];