import React from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from '../../data/team';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const { name, role, specialty, icon: Icon, image, linkedin } = member;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {linkedin && (
          <a 
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          >
            <Icon className="w-5 h-5 text-[#409ACA]" />
          </a>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="w-4 h-4 text-[#409ACA]" />
          <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
        </div>
        <p className="text-[#409ACA] text-sm font-medium mb-1">{role}</p>
        <p className="text-gray-600 text-sm truncate">{specialty}</p>
      </div>
    </motion.div>
  );
};