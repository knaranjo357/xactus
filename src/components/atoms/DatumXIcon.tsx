import React from 'react';

export const DatumXIcon = () => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <circle cx="50" cy="50" r="45" fill="#409ACA" fillOpacity="0.1" />
      <circle cx="50" cy="50" r="35" stroke="#409ACA" strokeWidth="2" />
      <path 
        d="M50 15 L50 85" 
        stroke="#409ACA" 
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path 
        d="M15 50 L85 50" 
        stroke="#409ACA" 
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="50" r="15" fill="#409ACA" />
      <g className="animate-pulse">
        <circle cx="50" cy="20" r="4" fill="#409ACA" />
        <circle cx="80" cy="50" r="4" fill="#409ACA" />
        <circle cx="50" cy="80" r="4" fill="#409ACA" />
        <circle cx="20" cy="50" r="4" fill="#409ACA" />
      </g>
    </svg>
  );
};