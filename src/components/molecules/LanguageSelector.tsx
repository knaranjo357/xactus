import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  isMobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: t('language.en') },
    { code: 'es', name: t('language.es') }
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="flex justify-center py-2">
        <div className="flex gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-3 py-1 rounded-full text-sm ${
                i18n.language === lang.code
                  ? 'bg-[#409ACA] text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#409ACA] transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span>{i18n.language === 'en' ? 'EN' : 'ES'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                i18n.language === lang.code ? 'text-[#409ACA] font-medium' : 'text-gray-600'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};