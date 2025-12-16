import React from 'react';
import { Heart, Check } from 'lucide-react';
import { PACKAGES } from '../constants';
import { SectionHeader } from '../components/SectionHeader';

interface ServicesProps {
  openBooking: (pkgName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ openBooking }) => {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-b from-white to-rose-50 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-rose-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="Exclusive Winter Packages" 
          subtitle="Curated For You" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                  <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <div className="bg-rose-500 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">BEST SELLER</div>
                    <h3 className="font-serif text-2xl font-bold">{pkg.title}</h3>
                  </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full bg-rose-100 flex items-center justify-center">
                         <Check size={10} className="text-rose-500" strokeWidth={3} />
                      </div>
                      <span className="leading-snug">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-6 border-t border-dashed border-rose-100">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="text-4xl font-bold text-rose-600 font-serif">৳{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">৳{pkg.originalPrice}</span>
                    )}
                  </div>
                  <button 
                    onClick={() => openBooking(pkg.title)}
                    className="w-full py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-rose-500 transition-colors duration-300 flex justify-center items-center gap-2 shadow-lg hover:shadow-rose-500/30"
                  >
                    <Heart size={18} className="group-hover:fill-current" /> Book This Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};