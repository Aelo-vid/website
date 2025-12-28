
import React from 'react';
import { Language } from '../types';

interface Props {
  current: Language;
  onChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<Props> = ({ current, onChange }) => {
  // 常にダークモード（黒背景・白文字）用のスタイルを使用
  const activeClass = 'text-white border-b border-white';
  const inactiveClass = 'text-neutral-500 hover:text-neutral-300';

  return (
    <div className="flex items-center space-x-4 text-[10px] font-medium tracking-widest uppercase">
      <button 
        onClick={() => onChange('en')}
        className={`pb-1 transition-all ${current === 'en' ? activeClass : inactiveClass}`}
      >
        EN
      </button>
      <button 
        onClick={() => onChange('ja')}
        className={`pb-1 transition-all ${current === 'ja' ? activeClass : inactiveClass}`}
      >
        JA
      </button>
    </div>
  );
};
