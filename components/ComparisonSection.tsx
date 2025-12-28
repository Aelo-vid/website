
import React from 'react';
import { TranslationStrings } from '../types';

interface ComparisonProps {
  t: TranslationStrings;
  borderColor: string;
}

export const ComparisonSection: React.FC<ComparisonProps> = ({ t, borderColor }) => {
  return (
    <section id="comparison" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-light text-center mb-20 tracking-wide text-white">{t.comparisonTitle}</h3>
        <div className={`overflow-x-auto border-t border-b ${borderColor}`}>
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className={`border-b ${borderColor}`}>
                <th className="px-8 py-6 font-medium text-xs uppercase tracking-widest text-white w-1/4">{t.compMetric}</th>
                <th className="px-8 py-6 font-medium text-xs uppercase tracking-widest text-neutral-500 w-1/4">{t.compIndustry}</th>
                <th className="px-8 py-6 font-medium text-xs uppercase tracking-widest text-neutral-500 w-1/4">{t.compFree}</th>
                <th className="px-8 py-6 font-medium text-xs uppercase tracking-widest text-white w-1/4">{t.compAelo}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/40">
              <ComparisonRow 
                metric={t.metricPrice} 
                industry={t.valIndustryPrice} 
                free={t.valFreePrice}
                aelo={t.valAeloPrice} 
                isHighlight 
              />
              <ComparisonRow 
                metric={t.metricWorkflow} 
                industry={t.valIndustryWorkflow} 
                free={t.valFreeWorkflow}
                aelo={t.valAeloWorkflow} 
              />
              <ComparisonRow 
                metric={t.metricScripting} 
                industry={t.valIndustryScripting} 
                free={t.valFreeScripting}
                aelo={t.valAeloScripting} 
              />
              <ComparisonRow 
                metric={t.metricRendering} 
                industry={t.valIndustryRendering} 
                free={t.valFreeRendering}
                aelo={t.valAeloRendering} 
              />
              <ComparisonRow 
                metric={t.metricUpdates} 
                industry={t.valIndustryUpdates} 
                free={t.valFreeUpdates}
                aelo={t.valAeloUpdates} 
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const ComparisonRow: React.FC<{ 
  metric: string; 
  industry: string; 
  free: string;
  aelo: string; 
  isHighlight?: boolean;
}> = ({ metric, industry, free, aelo, isHighlight }) => (
  <tr className="transition-colors duration-300 hover:bg-neutral-900/30">
    <td className="px-8 py-6 font-normal text-sm text-white">{metric}</td>
    <td className="px-8 py-6 text-sm font-light text-neutral-500">{industry}</td>
    <td className="px-8 py-6 text-sm font-light text-neutral-500">{free}</td>
    <td className={`px-8 py-6 text-sm ${isHighlight ? 'font-bold' : 'font-normal'} text-white`}>{aelo}</td>
  </tr>
);
