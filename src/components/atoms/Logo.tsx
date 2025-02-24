import React from 'react';
import { Rocket } from '@phosphor-icons/react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Rocket weight="duotone" className="w-8 h-8 text-[#409ACA]" />
      <span className="text-[#409ACA] text-2xl font-bold">
        xactus
      </span>
    </div>
  );
};