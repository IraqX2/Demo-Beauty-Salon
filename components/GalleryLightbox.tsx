import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const GalleryLightbox: React.FC<LightboxProps> = ({ item, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in-up">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <X size={32} />
      </button>

      <div className="relative w-full h-full flex items-center justify-center px-4 md:px-20 py-10">
        {hasPrev && (
          <button 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all"
          >
            <ChevronLeft size={40} />
          </button>
        )}

        <div className="max-w-5xl max-h-[85vh] relative group">
          <img 
            src={item.image} 
            alt={item.title} 
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-rose-400 text-sm font-bold uppercase tracking-wider">{item.category}</span>
            <h3 className="text-white font-serif text-2xl">{item.title}</h3>
          </div>
        </div>

        {hasNext && (
          <button 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all"
          >
            <ChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  );
};