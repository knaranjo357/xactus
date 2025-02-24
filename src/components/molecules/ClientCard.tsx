import React from 'react';

interface ClientCardProps {
  name: string;
  logo: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({ name, logo }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
      <img
        src={logo}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );
};