import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon: LucideIcon;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ Icon }) => {
  return (
    <div className="text-[#409ACA] mb-4">
      <Icon className="w-8 h-8" />
    </div>
  );
};