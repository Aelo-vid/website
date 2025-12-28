
import React, { useState } from 'react';
import { Language } from './types';
import { translations } from './translations';
import { APP_CONFIG } from './consts';
import { Header } from './components/Header';
import { FeatureCard } from './components/FeatureCard';
import { ComparisonSection } from './components/ComparisonSection';
import { ScriptingShowcase } from './components/ScriptingShowcase';

const App: React.FC = () => {
  // 言語の状態管理
  const [lang, setLang] = useState<Language>('ja');
  // Nightly 表示トグル
  const [showNightly, setShowNightly] = useState<boolean>(false);
  const t = translations[lang];

  // ダークモード固定設定
  const bgColor = 'bg-black text-white';
  const borderColor = 'border-neutral-800';
  const cardBg = 'bg-neutral-900/30';

  return (
    <div className={`min-h-screen ${bgColor}`}>
      <Header 
        lang={lang} setLang={setLang} 
        t={t} borderColor={borderColor} 
      />

      {/* Hero Section (メインビジュアル) */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Beta Tag */}
          <div className={`inline-block px-6 py-2 mb-10 border ${borderColor} text-xs font-medium tracking-[0.2em] uppercase`}>
            {t.betaTag}
          </div>
          
          {/* Main Title */}
          <h2 className="text-5xl md:text-8xl font-thin mb-10 leading-tight tracking-tighter">
            <span className="inline-block">
              {t.heroTitle}
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base md:text-lg mb-16 font-light leading-loose text-neutral-400">
            {t.heroSubtitle}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={APP_CONFIG.links.downloadPrimary}
              target={APP_CONFIG.links.downloadPrimary.startsWith('#') ? '_self' : '_blank'}
              rel={APP_CONFIG.links.downloadPrimary.startsWith('#') ? undefined : 'noopener noreferrer'}
              className="w-full sm:w-auto inline-block text-center px-12 py-4 bg-white text-black font-medium text-sm tracking-widest transition-transform hover:scale-105 active:scale-95 duration-300"
            >
              {t.ctaDownload}
            </a>
            <a
              href={APP_CONFIG.links.learnMore}
              target={APP_CONFIG.links.learnMore.startsWith('#') ? '_self' : '_blank'}
              rel={APP_CONFIG.links.learnMore.startsWith('#') ? undefined : 'noopener noreferrer'}
              className={`w-full sm:w-auto inline-block text-center px-12 py-4 border ${borderColor} font-medium text-sm tracking-widest hover:bg-neutral-500/10 transition-colors duration-300`}>
              {t.ctaLearnMore}
            </a>
          </div>

          {/* Product Visual Placeholder */}
          <div className={`mt-32 border-t border-b ${borderColor} py-4`}>
             <div className="aspect-video bg-neutral-900/20 flex items-center justify-center relative grayscale">
                 {/* 幾何学的な装飾 */}
                 <div className="absolute inset-0 border-x border-dashed border-neutral-800/50 w-2/3 mx-auto"></div>
                 <div className="absolute inset-0 border-y border-dashed border-neutral-800/50 h-2/3 my-auto"></div>
                 
                 <div className="text-4xl font-thin tracking-widest text-white">
                     AELO
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-24 border-y ${borderColor}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
          <Stat value="200+" label={t.statsUsers} />
          <Stat value="12x" label={t.statsRender} />
          <Stat value="∞" label={t.statsPlugins} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureCard 
              title={t.featureFreeTitle} 
              description={t.featureFreeDesc} 
              icon={<path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>}
              cardBg={cardBg}
            />
            <FeatureCard 
              title={t.featureJSTitle} 
              description={t.featureJSDesc} 
              icon={<path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>}
              cardBg={cardBg}
            />
            <FeatureCard 
              title={t.featureHybridTitle} 
              description={t.featureHybridDesc} 
              icon={<path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 6h16M4 12h16m-7 6h7"/>}
              cardBg={cardBg}
            />
            <FeatureCard 
              title={t.featureGPUTitle} 
              description={t.featureGPUDesc} 
              icon={<path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z"/>}
              cardBg={cardBg}
            />
          </div>
        </div>
      </section>

      <ScriptingShowcase t={t} borderColor={borderColor} />

      <ComparisonSection t={t} borderColor={borderColor} />

      {/* Download Section */}
      <section id="download" className="py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-light mb-12 tracking-wide">{t.readyTitle}</h3>
          <p className="text-lg mb-16 font-light leading-loose text-neutral-400">
            {t.readyDesc}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <DownloadButton platform="Windows" />
            <DownloadButton platform="macOS (Silicon)" />
            <DownloadButton platform="Linux" />
          </div>

          {/* Nightly toggle (only show if nightly feature enabled in config) */}
          {APP_CONFIG.nightly?.enabled && (
            <>
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowNightly(s => !s)}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-800 text-sm font-medium tracking-widest hover:bg-neutral-800/40 transition-colors"
                >
                  Nightly Builds
                  <svg className={`w-4 h-4 transition-transform ${showNightly ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M6 9l6 6 6-6"/></svg>
                </button>
              </div>

              {showNightly && (
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-8">
                  <NightlyDownloadButton platform="Windows" />
                  <NightlyDownloadButton platform="macOS (Silicon)" />
                  <NightlyDownloadButton platform="Linux" />
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 px-6 border-t ${borderColor}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl font-normal tracking-[0.5em] mb-4">AELO</h1>
            <p className="text-xs tracking-wider text-neutral-500">© 2024 Aelo Labs. {t.footerRights}</p>
          </div>
          <div className="flex space-x-12 text-xs font-medium tracking-widest uppercase">
            <a href={APP_CONFIG.links.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Twitter</a>
            <a href={APP_CONFIG.links.discord} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">Discord</a>
            <a href={APP_CONFIG.links.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// 統計コンポーネント
const Stat: React.FC<{ value: string, label: string }> = ({ value, label }) => (
  <div>
    <div className="text-5xl md:text-6xl font-thin mb-4 text-white">{value}</div>
    <div className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">{label}</div>
  </div>
);

// ダウンロードボタン
const DownloadButton: React.FC<{ platform: string }> = ({ platform }) => {
  // プラットフォーム名からキーを作る
  const key = platform.toLowerCase().includes('mac') ? 'mac' : platform.toLowerCase().includes('linux') ? 'linux' : 'windows';
  const platformCfg = (APP_CONFIG.links.downloads as Record<string, any>)[key] || { url: '#', enabled: false, label: 'Coming soon' };
  const version = APP_CONFIG.version;

  if (!platformCfg.enabled) {
    // Coming soon / disabled 表示
    return (
      <div className="group text-left px-8 py-5 border border-neutral-800 bg-neutral-900/20 opacity-60 rounded-none w-64 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium tracking-widest text-neutral-400">{platform}</span>
          <span className="text-[10px] font-mono text-neutral-500">{platformCfg.label || 'Coming soon'}</span>
        </div>
        <div className="text-[10px] text-neutral-500 font-mono">{version}</div>
      </div>
    );
  }

  const url = platformCfg.url || '#';

  return (
    <a
      href={url}
      target={url.startsWith('#') ? '_self' : '_blank'}
      rel={url.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="group text-left px-8 py-5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 rounded-none w-64 transition-all inline-block"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium tracking-widest text-white">{platform}</span>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
      <div className="text-[10px] text-neutral-500 font-mono">{version}</div>
    </a>
  );
};

// Nightly用ダウンロードボタン（consts の nightly を参照）
const NightlyDownloadButton: React.FC<{ platform: string }> = ({ platform }) => {
  const key = platform.toLowerCase().includes('mac') ? 'mac' : platform.toLowerCase().includes('linux') ? 'linux' : 'windows';
  const nightlyCfg = (APP_CONFIG as any).nightly || { enabled: false };
  const platformCfg = (nightlyCfg.downloads || {})[key] || { url: '#', enabled: false, label: 'Coming soon' };
  const version = nightlyCfg.version || APP_CONFIG.version;

  if (!platformCfg.enabled || !nightlyCfg.enabled) {
    return (
      <div className="group text-left px-8 py-5 border border-neutral-800 bg-neutral-900/20 opacity-60 rounded-none w-64 transition-all">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium tracking-widest text-neutral-400">{platform}</span>
          <span className="text-[10px] font-mono text-neutral-500">{platformCfg.label || 'Coming soon'}</span>
        </div>
        <div className="text-[10px] text-neutral-500 font-mono">{version}</div>
      </div>
    );
  }

  const url = platformCfg.url || '#';
  return (
    <a
      href={url}
      target={url.startsWith('#') ? '_self' : '_blank'}
      rel={url.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="group text-left px-8 py-5 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 rounded-none w-64 transition-all inline-block"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium tracking-widest text-white">{platform}</span>
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
      <div className="text-[10px] text-neutral-500 font-mono">{version}</div>
    </a>
  );
};

export default App;
