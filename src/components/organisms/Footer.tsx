import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../atoms/Logo';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <p className="mt-4 text-sm text-gray-600 text-center">
            © {currentYear} Xactus.io - {t('footer.rights')}
          </p>
          <p className="mt-2 text-xs text-gray-500 text-center">
            {t('footer.designed')}
          </p>
        </div>
      </div>
    </footer>
  );
};