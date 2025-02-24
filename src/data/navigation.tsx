import React from 'react';
import { 
  House as HomeIcon,
  Briefcase, 
  Package, 
  Users, 
  Phone as PhoneCall
} from '@phosphor-icons/react';

export const NavigationItems = [
  { 
    name: 'Inicio', 
    icon: <HomeIcon weight="duotone" className="w-6 h-6" />, 
    id: 'home' 
  },
  { 
    name: 'Servicios', 
    icon: <Briefcase weight="duotone" className="w-6 h-6" />, 
    id: 'services' 
  },
  { 
    name: 'Productos', 
    icon: <Package weight="duotone" className="w-6 h-6" />, 
    id: 'products' 
  },
  { 
    name: 'Equipo', 
    icon: <Users weight="duotone" className="w-6 h-6" />, 
    id: 'team' 
  },
  { 
    name: 'Contacto', 
    icon: <PhoneCall weight="duotone" className="w-6 h-6" />, 
    id: 'contact' 
  }
];