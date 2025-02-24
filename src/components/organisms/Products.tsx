import React from 'react';
import { PartNumberGenerator } from './PartNumberGenerator';

export const Products: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PartNumberGenerator />
      </div>
    </section>
  );
};