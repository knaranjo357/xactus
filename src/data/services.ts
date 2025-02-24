import { Brain, Cpu, Cog, LineChart, HardDrive, Lightbulb, CheckCircle2, Timer, Building2, Activity, Bot, Camera, CloudCog, Cuboid as Cube, FlaskRound as Flask, Microscope, Shield } from 'lucide-react';

export interface ServiceFeature {
  icon: typeof CheckCircle2;
  text: string;
}

export interface Service {
  icon: typeof Brain;
  title: string;
  subtitle: string;
  description: string;
  features?: ServiceFeature[];
  benefits?: string[];
}

export const ServicesData: Service[] = [
  {
    icon: Cog,
    title: 'Automatización Inteligente de Procesos',
    subtitle: 'Transforme sus operaciones con IA',
    description: 'Soluciones de automatización avanzada que optimizan sus procesos y maximizan la eficiencia operativa.',
    features: [
      { icon: CheckCircle2, text: 'Sistemas inteligentes adaptados a sus flujos de trabajo' },
      { icon: Timer, text: 'Monitoreo en tiempo real con alertas predictivas' },
      { icon: Activity, text: 'Optimización continua basada en datos' }
    ],
    benefits: [
      'Reducción significativa de errores operativos',
      'Mejora en la toma de decisiones',
      'Escalabilidad y adaptabilidad garantizada'
    ]
  },
  {
    icon: Cpu,
    title: 'IoT & Smart Cities',
    subtitle: 'Infraestructura Inteligente del Futuro',
    description: 'Soluciones IoT de última generación para ciudades y entornos industriales inteligentes.',
    features: [
      { icon: Activity, text: 'Monitoreo ambiental avanzado: aire, agua y ruido' },
      { icon: Camera, text: 'Sistemas de vigilancia inteligente con IA' },
      { icon: Shield, text: 'Seguridad y encriptación de nivel militar' }
    ],
    benefits: [
      'Hardware propio con garantía extendida',
      'Integración perfecta con sistemas existentes',
      'Análisis predictivo con 95% de precisión'
    ]
  },
  {
    icon: Brain,
    title: 'Inteligencia Artificial & Análisis Avanzado',
    subtitle: 'Potencia tus datos con IA',
    description: 'Soluciones de IA que transforman datos en decisiones estratégicas y ventajas competitivas.',
    features: [
      { icon: LineChart, text: 'Modelos predictivos de alta precisión' },
      { icon: Camera, text: 'Detección de fraude mediante visión artificial' },
      { icon: Bot, text: 'Asistentes virtuales empresariales 24/7' }
    ],
    benefits: [
      'Detección temprana de anomalías',
      'Automatización de procesos complejos',
      'Mejora continua mediante aprendizaje automático'
    ]
  },
  {
    icon: HardDrive,
    title: 'Hardware Industrial Especializado',
    subtitle: 'Tecnología Robusta para Entornos Exigentes',
    description: 'Dispositivos de grado industrial diseñados para operar en las condiciones más demandantes.',
    features: [
      { icon: Shield, text: 'Diseño robusto con protección IP68' },
      { icon: CloudCog, text: 'Conectividad multi-protocolo avanzada' },
      { icon: Lightbulb, text: 'Sistemas modulares personalizables' }
    ],
    benefits: [
      'Soporte técnico especializado',
      'Actualizaciones remotas OTA',
      'Garantía extendida disponible'
    ]
  },
  {
    icon: Cube,
    title: 'Diseño y Prototipado Industrial',
    subtitle: 'De la Idea al Producto Final',
    description: 'Servicios completos de diseño y desarrollo de productos industriales.',
    features: [
      { icon: CheckCircle2, text: 'Diseño industrial optimizado' },
      { icon: Microscope, text: 'Pruebas de calidad exhaustivas' },
      { icon: Shield, text: 'Protección de propiedad intelectual' }
    ],
    benefits: [
      'Optimización para fabricación',
      'Validación en condiciones reales',
      'Documentación técnica completa'
    ]
  },
  {
    icon: Flask,
    title: 'I+D+i Industrial',
    subtitle: 'Innovación Basada en Evidencia',
    description: 'Investigación y desarrollo de soluciones tecnológicas avanzadas para la industria 4.0.',
    features: [
      { icon: CheckCircle2, text: 'Investigación aplicada en IA e IoT' },
      { icon: Timer, text: 'Desarrollo ágil con ciclos cortos' },
      { icon: Shield, text: 'Validación y certificación industrial' }
    ],
    benefits: [
      'Soluciones patentables',
      'Transferencia tecnológica completa',
      'Escalabilidad garantizada'
    ]
  }
];