
import React from 'react';
import { Language, TranslationStrings } from '../types';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationStrings;
  borderColor: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, t, borderColor }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md bg-black/50 ${borderColor} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <h1 className="text-2xl font-light tracking-[-0.05em] text-white">
            AELO
          </h1>
          
          <div className="hidden md:flex space-x-10 text-xs font-medium tracking-widest uppercase">
            <a href="#features" className="transition-opacity hover:opacity-50 text-white">{t.navFeatures}</a>
            <a href="#comparison" className="transition-opacity hover:opacity-50 text-white">{t.navComparison}</a>
            <a href="#download" className="transition-opacity hover:opacity-50 text-white">{t.navDownload}</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <LanguageSwitcher current={lang} onChange={setLang} />
        </div>
      </div>
    </nav>
  );
};
