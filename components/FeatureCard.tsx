
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  cardBg: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, cardBg }) => (
  <div className={`p-10 border border-neutral-800 ${cardBg} transition-all duration-500 hover:border-neutral-500`}>
    <div className="w-10 h-10 mb-8 text-white">
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
      </svg>
    </div>
    <h4 className="text-xl font-normal mb-6 tracking-wide text-white">{title}</h4>
    <p className="text-sm leading-loose font-light text-neutral-400">
        {description}
    </p>
  </div>
);
