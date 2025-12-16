import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <span className="block font-script text-3xl md:text-4xl text-rose-400 mb-2">{subtitle}</span>
      <h2 className="font-serif text-3xl md:text-5xl text-gray-900 font-bold tracking-tight">
        {title}
        <span className="block h-1 w-24 bg-gradient-to-r from-rose-300 to-gold-400 mt-4 mx-auto rounded-full" />
      </h2>
    </div>
  );
};