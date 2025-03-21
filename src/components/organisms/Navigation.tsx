import React, { useState, useRef, useEffect } from 'react';
import { NavItem } from '../molecules/NavItem';
import { Logo } from '../atoms/Logo';
import { NavigationItems } from '../../data/navigation';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../molecules/LanguageSelector';
import { ChevronDown } from 'lucide-react';
import { SectorsData } from '../../data/sectors';
import { Link } from 'react-router-dom';

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
  const { t } = useTranslation();
  const [showSectors, setShowSectors] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowSectors(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowSectors(false);
    }, 300); // Add delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <nav className="fixed bottom-0 w-full bg-white shadow-lg z-50">
        <LanguageSelector isMobile />
        <div className="flex justify-around items-center h-16">
          {NavigationItems.map((item) => (
            <NavItem
              key={item.id}
              name={t(`nav.${item.id}`)}
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
            {NavigationItems.map((item) => {
              if (item.id === 'sectors') {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavItem
                      name={t(`nav.${item.id}`)}
                      icon={item.icon}
                      isActive={activeSection === item.id}
                      onClick={() => setActiveSection(item.id)}
                      to={`/${item.id}`}
                    />
                    <ChevronDown 
                      className={`inline-block ml-1 w-4 h-4 transition-transform ${
                        showSectors ? 'rotate-180' : ''
                      }`}
                    />
                    
                    {showSectors && (
                      <div 
                        className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 border"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {SectorsData.map((sector) => (
                          <Link
                            key={sector.id}
                            to={`/sectors/${sector.id}`}
                            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-[#409ACA] transition-colors"
                            onClick={() => {
                              setShowSectors(false);
                              setActiveSection('sectors');
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <sector.icon className="w-5 h-5" />
                              <span>{t(`sectors.${sector.id}.title`)}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <NavItem
                  key={item.id}
                  name={t(`nav.${item.id}`)}
                  icon={item.icon}
                  isActive={activeSection === item.id}
                  onClick={() => setActiveSection(item.id)}
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                />
              );
            })}
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};