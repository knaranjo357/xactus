import React from 'react';
import { 
  House as HomeIcon,
  Package, 
  Buildings,
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
    name: 'Productos', 
    icon: <Package weight="duotone" className="w-6 h-6" />, 
    id: 'products' 
  },
  { 
    name: 'Sectores', 
    icon: <Buildings weight="duotone" className="w-6 h-6" />, 
    id: 'sectors' 
  },
  { 
    name: 'Nosotros', 
    icon: <Users weight="duotone" className="w-6 h-6" />, 
    id: 'about' 
  },
  { 
    name: 'Contacto', 
    icon: <PhoneCall weight="duotone" className="w-6 h-6" />, 
    id: 'contact' 
  }
];