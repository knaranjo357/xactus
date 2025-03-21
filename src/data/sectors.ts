import { 
  Factory, 
  Lightning, 
  Broadcast, 
  Buildings, 
  Bank, 
  ShoppingBag 
} from '@phosphor-icons/react';

export interface Sector {
  id: string;
  icon: typeof Factory;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
}

export const SectorsData: Sector[] = [
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufactura',
    subtitle: 'Industria 4.0 y Automatización Inteligente',
    description: 'La manufactura e Industria 4.0 están convergiendo en una transformación sin precedentes, impulsada por la necesidad de mayor eficiencia, flexibilidad y competitividad.',
    features: [
      'Optimización de la cadena de suministro',
      'Digitalización de procesos industriales',
      'Monitorización avanzada',
      'Mantenimiento predictivo',
      'Control de calidad automatizado'
    ],
    benefits: [
      'Aumento de la productividad mediante flujos de trabajo optimizados',
      'Adaptación más rápida a cambios en la demanda',
      'Reducción de costos operativos y desperdicios',
      'Mayor control y visibilidad de procesos'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'energy',
    icon: Lightning,
    title: 'Energía',
    subtitle: 'Gestión Eficiente y Sostenible',
    description: 'La transformación digital está redefiniendo la eficiencia energética. Impulsamos la sostenibilidad con soluciones basadas en IoT, IA y automatización.',
    features: [
      'Gestión de eficiencia energética',
      'Monitoreo de recursos energéticos',
      'Automatización en empresas de energía',
      'Integración de energías renovables',
      'Control de emisiones'
    ],
    benefits: [
      'Cumplimiento normativo simplificado con plataformas de gestión',
      'Integración de energías renovables para alcanzar metas de sostenibilidad',
      'Reducción de costos operativos y de emisión de carbono',
      'Optimización del consumo energético'
    ],
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'telecommunications',
    icon: Broadcast,
    title: 'Telecomunicaciones',
    subtitle: 'Redes 5G y Conectividad Avanzada',
    description: 'Las redes 5G están revolucionando la conectividad. Impulsamos esta transformación con soluciones de automatización, IA y gestión avanzada de redes.',
    features: [
      'Optimización de infraestructuras',
      'Gestión avanzada de conectividad',
      'Transformación digital en telecomunicaciones',
      'Monitoreo de red en tiempo real',
      'Seguridad de red avanzada'
    ],
    benefits: [
      'Reducción de interrupciones en la red y tiempos de inactividad',
      'Adaptación rápida a las demandas del mercado',
      'Mejor experiencia para los usuarios finales',
      'Mayor eficiencia operativa'
    ],
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'public',
    icon: Buildings,
    title: 'Sector Público',
    subtitle: 'Modernización y Eficiencia Gubernamental',
    description: 'La transformación digital del sector público es clave para una administración más eficiente, transparente y orientada al ciudadano.',
    features: [
      'Digitalización de servicios públicos',
      'Automatización de procesos administrativos',
      'Modernización gubernamental',
      'Gestión de datos públicos',
      'Plataformas de participación ciudadana'
    ],
    benefits: [
      'Aumento de la transparencia en la gestión pública',
      'Reducción de costos operativos',
      'Mejora en la interacción entre el gobierno y los ciudadanos',
      'Mayor eficiencia administrativa'
    ],
    image: 'https://images.unsplash.com/photo-1434615434700-72717ec1e3b4?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'finance',
    icon: Bank,
    title: 'Finanzas',
    subtitle: 'Innovación Financiera Digital',
    description: 'La automatización financiera y la digitalización bancaria son esenciales para el futuro del sector. Implementamos soluciones de Fintech, IA y ciberseguridad.',
    features: [
      'Transformación digital en bancos',
      'Análisis de datos en finanzas',
      'Automatización de procesos bancarios',
      'Gestión de riesgos avanzada',
      'Plataformas de pago digital'
    ],
    benefits: [
      'Mayor agilidad en la toma de decisiones estratégicas',
      'Adaptación más rápida a cambios en la demanda',
      'Experiencias personalizadas para los clientes',
      'Mejora en la seguridad de transacciones'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail',
    subtitle: 'Comercio Inteligente y Personalizado',
    description: 'La automatización y el análisis de datos están revolucionando la gestión de inventarios en retail. Implementamos IA y analítica predictiva para optimizar operaciones.',
    features: [
      'Digitalización de la experiencia del cliente',
      'Análisis predictivo de demanda',
      'Automatización de inventarios y logística',
      'Personalización en tiempo real',
      'Integración omnicanal'
    ],
    benefits: [
      'Incremento en la satisfacción del cliente',
      'Reducción de tiempos y costos operativos',
      'Adaptación rápida a las tendencias del mercado',
      'Optimización de inventarios'
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60'
  }
];