import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavItemProps {
  name: string;
  icon: React.ReactElement<LucideIcon>;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
  to: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  name,
  icon,
  isActive,
  onClick,
  isMobile = false,
  to
}) => {
  const content = (
    <>
      {icon}
      <span className={`${isMobile ? 'text-xs mt-1' : 'ml-2'}`}>{name}</span>
    </>
  );

  const baseClasses = `flex ${isMobile ? 'flex-col' : 'flex-row'} items-center transition-colors duration-300`;
  const activeClasses = isActive ? 'text-[#409ACA]' : 'text-gray-600 hover:text-[#409ACA]';
  const mobileClasses = isMobile ? 'p-2' : 'px-4 py-2 rounded-full';

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${mobileClasses}`}
    >
      {content}
    </Link>
  );
};