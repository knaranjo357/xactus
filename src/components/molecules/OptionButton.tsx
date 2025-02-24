import React from 'react';
import { X } from 'lucide-react';

interface OptionButtonProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
  selected: boolean;
  onClick: () => void;
}

export const OptionButton: React.FC<OptionButtonProps> = ({ icon, label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-4 p-6 rounded-lg transition-all w-full ${
      selected 
        ? 'bg-[#409ACA] text-white shadow-lg' 
        : 'bg-white text-gray-700 hover:bg-gray-50 border'
    }`}
  >
    <div className="text-2xl">{icon}</div>
    <span className="text-lg font-medium">{label}</span>
  </button>
);

export const NoneOption: React.FC<{ onClick: () => void; selected: boolean }> = ({ onClick, selected }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-4 p-6 rounded-lg transition-all w-full ${
      selected 
        ? 'bg-gray-200 text-gray-700' 
        : 'bg-white text-gray-500 hover:bg-gray-50 border'
    }`}
  >
    <X className="w-8 h-8" />
    <span className="text-lg font-medium">Sin módulo</span>
  </button>
);