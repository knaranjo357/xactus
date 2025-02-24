import React from 'react';

interface ProductIconProps {
  type: 'sensor' | 'noise' | 'supply';
}

export const ProductIcon: React.FC<ProductIconProps> = ({ type }) => {
  switch (type) {
    case 'sensor':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="25" y="25" width="50" height="50" rx="8" stroke="#409ACA" strokeWidth="2" />
          <circle cx="50" cy="50" r="15" stroke="#409ACA" strokeWidth="2" />
          <path d="M50 20 L50 35" stroke="#409ACA" strokeWidth="2" strokeLinecap="round" />
          <path d="M50 65 L50 80" stroke="#409ACA" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 50 L35 50" stroke="#409ACA" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 50 L80 50" stroke="#409ACA" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'noise':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M30 50 Q50 20 70 50" 
            stroke="#409ACA" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M20 50 Q50 10 80 50" 
            stroke="#409ACA" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '0.2s' }}
          />
          <rect x="45" y="40" width="10" height="40" rx="5" fill="#409ACA" />
          <circle cx="50" cy="35" r="5" fill="#409ACA" />
        </svg>
      );
    case 'supply':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="20" y="30" width="60" height="40" rx="8" stroke="#409ACA" strokeWidth="2" />
          <path d="M35 50 L65 50" stroke="#409ACA" strokeWidth="2" strokeLinecap="round" />
          <circle cx="40" cy="40" r="3" fill="#409ACA" />
          <circle cx="60" cy="40" r="3" fill="#409ACA" />
          <path 
            d="M30 80 L70 80" 
            stroke="#409ACA" 
            strokeWidth="2" 
            strokeLinecap="round"
            className="animate-pulse"
          />
        </svg>
      );
  }
};