import React from 'react';
import { XactusLogo } from './XactusLogo';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <XactusLogo className="w-32 h-10" color="#0E72A7" />
    </div>
  );
};