import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './organisms/Navigation';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';

export const AppContent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getActiveSection = () => {
    const path = location.pathname.slice(1);
    return path || 'home';
  };

  const handleSectionChange = (section: string) => {
    navigate(section === 'home' ? '/' : `/${section}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={getActiveSection()}
        setActiveSection={handleSectionChange}
        isMobile={isMobile}
      />
      
      <main className={`pt-16 ${isMobile ? 'pb-20' : 'pb-0'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};