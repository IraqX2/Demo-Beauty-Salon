import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../constants';
import { SectionHeader } from '../components/SectionHeader';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Facial', 'Hair', 'Makeup', 'Nails', 'Ambience'];
  
  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === lightboxItem.id);
    if (direction === 'next' && currentIndex < filteredItems.length - 1) {
      setLightboxItem(filteredItems[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setLightboxItem(filteredItems[currentIndex - 1]);
    }
  };

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Artistry" 
          subtitle="Real Results" 
          centered={true}
        />
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${filter === cat 
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105' 
                  : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(item)} 
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-rose-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <span className="text-rose-200 text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                   <h3 className="text-white font-serif text-xl font-bold mb-4">{item.title}</h3>
                   <div className="bg-white/20 backdrop-blur p-3 rounded-full text-white inline-block">
                     <Camera size={24} />
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Sparkles size={48} className="mx-auto mb-4 text-rose-200" />
            <p>No images found in this category yet.</p>
          </div>
        )}
      </div>

      <GalleryLightbox 
        item={lightboxItem} 
        onClose={closeLightbox}
        onNext={() => navigateLightbox('next')}
        onPrev={() => navigateLightbox('prev')}
        hasNext={lightboxItem ? filteredItems.findIndex(i => i.id === lightboxItem.id) < filteredItems.length - 1 : false}
        hasPrev={lightboxItem ? filteredItems.findIndex(i => i.id === lightboxItem.id) > 0 : false}
      />
    </section>
  );
};