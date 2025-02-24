import React from 'react';
import { ClientCard } from '../molecules/ClientCard';
import { ClientsData } from '../../data/clients';

export const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Confían en Nosotros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ClientsData.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              logo={client.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};