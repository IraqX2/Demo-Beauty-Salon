import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';
import { SectionHeader } from '../components/SectionHeader';

export const Reviews: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-rose-50 min-h-screen">
      <div className="container mx-auto px-4">
          <SectionHeader 
          title="Customer Love" 
          subtitle="What They Say" 
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-[2rem] shadow-xl shadow-rose-900/5 relative hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-8 right-8 text-rose-100">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-gold-500 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-600 italic mb-8 leading-relaxed relative z-10 text-lg">"{review.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-rose-50 pt-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-rose-200 rounded-full blur-sm"></div>
                  <img src={review.image} alt={review.name} className="relative w-14 h-14 rounded-full object-cover ring-2 ring-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 font-serif text-lg">{review.name}</h4>
                  <span className="text-xs text-rose-500 uppercase tracking-wider font-bold">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};