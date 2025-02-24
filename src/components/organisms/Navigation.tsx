import React from 'react';
import { NavItem } from '../molecules/NavItem';
import { Logo } from '../atoms/Logo';
import { NavigationItems } from '../../data/navigation';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobile: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
  isMobile
}) => {
  if (isMobile) {
    return (
      <nav className="fixed bottom-0 w-full bg-white shadow-lg z-50">
        <div className="flex justify-around items-center h-16">
          {NavigationItems.map((item) => (
            <NavItem
              key={item.id}
              name={item.name}
              icon={item.icon}
              isActive={activeSection === item.id}
              onClick={() => setActiveSection(item.id)}
              isMobile
              to={item.id === 'home' ? '/' : `/${item.id}`}
            />
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="flex items-center space-x-2">
            {NavigationItems.map((item) => (
              <NavItem
                key={item.id}
                name={item.name}
                icon={item.icon}
                isActive={activeSection === item.id}
                onClick={() => setActiveSection(item.id)}
                to={item.id === 'home' ? '/' : `/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};