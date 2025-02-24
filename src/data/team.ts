import type { LucideIcon } from 'lucide-react';
import { 
  Code, 
  Brain, 
  Cpu, 
  Wrench,
  Building,
  Calculator,
  ShoppingCart,
  LinkedinLogo
} from '@phosphor-icons/react';

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  icon: LucideIcon;
  image: string;
  linkedin?: string;
}

export const TeamData: TeamMember[] = [
  {
    name: 'Brayan Rosales',
    role: 'Ingeniero Electrónico',
    specialty: 'Magister en IoT',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/brayan-rosales'
  },
  {
    name: 'Giorgio Hernandez',
    role: 'Ingeniero Electrónico',
    specialty: 'Master en IA',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/giorgio-hernandez'
  },
  {
    name: 'Jorge Martinez',
    role: 'Ingeniero Mecatrónico',
    specialty: 'Desarrollo de Software',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/jorge-martinez'
  },
  {
    name: 'Mauro Uribe',
    role: 'Ingeniero Electromecánico',
    specialty: 'Automatización Industrial',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/mauro-uribe'
  },
  {
    name: 'Kevin Naranjo',
    role: 'Ingeniero Mecatrónico',
    specialty: 'IoT y Sensores',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/kevin-naranjo'
  },
  {
    name: 'Manuel Rodríguez',
    role: 'CEO',
    specialty: 'Alta Gerencia',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/manuel-rodriguez'
  },
  {
    name: 'Sandra Gómez',
    role: 'Gerente de Operaciones',
    specialty: 'Administración',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/sandra-gomez'
  },
  {
    name: 'Juan Carlos Pérez',
    role: 'Director de Proyectos',
    specialty: 'Gestión de Proyectos',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/juan-carlos-perez'
  },
  {
    name: 'Neyla Martínez',
    role: 'Directora Financiera',
    specialty: 'Finanzas Corporativas',
    icon: Calculator,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/neyla-martinez'
  },
  {
    name: 'Mayer Castro',
    role: 'Director Comercial',
    specialty: 'Desarrollo de Negocios',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://linkedin.com/in/mayer-castro'
  }
];