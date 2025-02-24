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

const defaultUserImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.1&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D';

export const TeamData: TeamMember[] = [
  {
    name: 'Brayan Rosales',
    role: 'Ingeniero Electrónico',
    specialty: 'Magister en IoT',
    icon: Cpu,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/brayan-rosales'
  },
  {
    name: 'Giorgio Hernandez',
    role: 'Ingeniero Electrónico',
    specialty: 'Master en IA',
    icon: Brain,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/giorgio-hernandez'
  },
  {
    name: 'Jorge Martinez',
    role: 'Ingeniero Mecatrónico',
    specialty: 'Desarrollo de Software',
    icon: Code,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/jorge-martinez'
  },
  {
    name: 'Mauro Uribe',
    role: 'Desarrollador Frontend',
    specialty: 'React & TypeScript',
    icon: Code,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/mauro-uribe'
  },
  {
    name: 'Kevin Naranjo',
    role: 'Líder de Desarrollo',
    specialty: 'Arquitectura de Software',
    icon: Brain,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/kevin-naranjo'
  },
  {
    name: 'Manuel Rodríguez',
    role: 'CEO',
    specialty: 'Alta Gerencia',
    icon: Building,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/manuel-rodriguez'
  },
  {
    name: 'Sandra Gómez',
    role: 'Gerente de Operaciones',
    specialty: 'Administración',
    icon: Building,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/sandra-gomez'
  },
  {
    name: 'Juan Carlos Pérez',
    role: 'Director de Proyectos',
    specialty: 'Gestión de Proyectos',
    icon: Building,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/juan-carlos-perez'
  },
  {
    name: 'Neyla Martínez',
    role: 'Directora Financiera',
    specialty: 'Finanzas Corporativas',
    icon: Calculator,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/neyla-martinez'
  },
  {
    name: 'Mayer Castro',
    role: 'Director Comercial',
    specialty: 'Desarrollo de Negocios',
    icon: ShoppingCart,
    image: defaultUserImage,
    linkedin: 'https://linkedin.com/in/mayer-castro'
  }
];