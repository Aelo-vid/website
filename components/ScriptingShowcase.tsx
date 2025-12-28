
import React from 'react';
import { TranslationStrings } from '../types';

export const ScriptingShowcase: React.FC<{ t: TranslationStrings, borderColor: string }> = ({ t, borderColor }) => (
  <section className={`py-32 px-6 border-t border-b ${borderColor} bg-black`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-20">
      <div className="flex-1 pt-8">
        <h3 className="text-3xl font-light mb-8 tracking-wide text-white">{t.scriptingTitle}</h3>
        <p className="text-base mb-12 leading-loose font-light text-neutral-400">{t.scriptingDesc}</p>
        <ul className="space-y-6">
          {[t.scriptItem1, t.scriptItem2, t.scriptItem3, t.scriptItem4].map((item, index) => (
            <li key={index} className="flex items-center space-x-4 group">
              <span className="block w-8 h-[1px] bg-white transition-all group-hover:w-12"></span>
              <span className="font-normal text-sm tracking-wider uppercase text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Code Window */}
      <div className={`flex-1 w-full border ${borderColor} bg-black p-8 font-mono text-sm relative`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-neutral-800"></div>
        <pre className="overflow-x-auto text-neutral-300">
          <code>{`// Aelo Scripting Example
import { Layer, Motion } from 'aelo';

export default function animate() {
  const cube = Layer.find('MainCube');
  
  // Real-time procedural rotation
  cube.rotation.y = Motion.sin(Time.now * 2) * 45;
  
  // Dynamic color shift
  const speed = cube.velocity.length();
  cube.material.color = Color.lerp(
    '#000000', '#FFFFFF', speed / 100
  );
}`}</code>
        </pre>
        <div className="mt-6 flex justify-end">
            <span className="text-[10px] uppercase tracking-widest border border-current px-2 py-1 opacity-50 text-white">JavaScript</span>
        </div>
      </div>
    </div>
  </section>
);
