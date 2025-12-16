import React, { useState } from 'react';
import { Phone, Sparkles, ArrowRight, Star, Heart, Check, Camera, Quote, MapPin, Mail, Clock, MessageCircle, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_BG, HERO_MODEL, PACKAGES, REVIEWS, GALLERY_ITEMS } from '../constants';
import { SectionHeader } from '../components/SectionHeader';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { GalleryItem } from '../types';

interface HomeProps {
  openBooking: (pkgName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ openBooking }) => {
  // Gallery State
  const [filter, setFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const galleryCategories = ['All', 'Facial', 'Hair', 'Makeup', 'Nails', 'Ambience'];
  const filteredGalleryItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const openLightbox = (item: GalleryItem) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);
  
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!lightboxItem) return;
    const currentIndex = filteredGalleryItems.findIndex(i => i.id === lightboxItem.id);
    if (direction === 'next' && currentIndex < filteredGalleryItems.length - 1) {
      setLightboxItem(filteredGalleryItems[currentIndex + 1]);
    } else if (direction === 'prev' && currentIndex > 0) {
      setLightboxItem(filteredGalleryItems[currentIndex - 1]);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-rose-50">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="Salon Ambience" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-rose-50/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-8 pt-10 md:pt-0">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full text-rose-600 font-semibold text-sm border border-rose-200 animate-fade-in-up shadow-sm">
              <Star size={14} fill="currentColor" /> Winter Glam Season is Here
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] animate-fade-in-up [animation-delay:200ms]">
              Reveal Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-400 drop-shadow-sm">Inner Radiance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg font-light leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              Experience luxury care tailored just for you. From revitalizing facials to bridal makeovers, we bring out the pearl in you.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up [animation-delay:600ms]">
              <button 
                onClick={() => openBooking()}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 shadow-xl hover:shadow-2xl hover:shadow-gray-900/20 transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                Schedule Visit <ArrowRight size={18} />
              </button>
              <Link 
                to="/contact"
                className="bg-white text-rose-600 border border-rose-200 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Phone size={20} /> Call Us
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-fade-in-up [animation-delay:800ms] perspective-1000">
             <div className="relative group">
                <div className="absolute inset-0 bg-rose-300 rounded-[3rem] rotate-6 opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-700"></div>
                <img 
                  src={HERO_MODEL} 
                  alt="Beautiful Model" 
                  className="relative w-[320px] md:w-[420px] h-[480px] md:h-[600px] object-cover rounded-[3rem] shadow-2xl border-8 border-white animate-float transform transition-transform duration-700 hover:rotate-2"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-12 -left-8 bg-white/90 backdrop-blur p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-4 animate-bounce [animation-duration:4s]">
                   <div className="bg-rose-100 p-3 rounded-full text-rose-500">
                     <Sparkles size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Special Offer</p>
                     <p className="font-serif text-xl font-bold text-gray-900">Winter Package</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="text-center p-8 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose-500 mx-auto shadow-sm mb-4">
                    <Sparkles size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Premium Products</h3>
                  <p className="text-gray-600">We only use top-tier, international brands for your skin and hair.</p>
               </div>
               <div className="text-center p-8 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose-500 mx-auto shadow-sm mb-4">
                    <Star size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Expert Stylists</h3>
                  <p className="text-gray-600">Our team consists of certified professionals with years of experience.</p>
               </div>
               <div className="text-center p-8 rounded-2xl bg-rose-50/50 hover:bg-rose-50 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-rose-500 mx-auto shadow-sm mb-4">
                    <Heart size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Hygienic Care</h3>
                  <p className="text-gray-600">Your safety is our priority. We maintain strict hygiene protocols.</p>
               </div>
            </div>
         </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent"></div>
         <div className="absolute top-40 right-0 w-96 h-96 bg-rose-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

         <div className="container mx-auto px-4 relative z-10">
            <SectionHeader title="Exclusive Packages" subtitle="Curated For You" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {PACKAGES.map((pkg) => (
                  <div key={pkg.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-2">
                     <div className="h-56 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10"></div>
                        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
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
                              {pkg.originalPrice && <span className="text-gray-400 line-through text-sm">৳{pkg.originalPrice}</span>}
                           </div>
                           <button onClick={() => openBooking(pkg.title)} className="w-full py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-rose-500 transition-colors duration-300 flex justify-center items-center gap-2 shadow-lg hover:shadow-rose-500/30">
                              <Heart size={18} className="group-hover:fill-current" /> Book This Package
                           </button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="text-center mt-12">
               <Link to="/services" className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors">
                  View All Services <ArrowRight size={20} />
               </Link>
            </div>
         </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="Our Artistry" subtitle="Real Results" centered={true} />
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105' : 'bg-rose-50 text-rose-600 hover:bg-rose-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredGalleryItems.map((item) => (
              <div key={item.id} onClick={() => openLightbox(item)} className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
                <div className="aspect-[3/4]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
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
        </div>
      </section>
      
      <GalleryLightbox 
        item={lightboxItem} 
        onClose={closeLightbox}
        onNext={() => navigateLightbox('next')}
        onPrev={() => navigateLightbox('prev')}
        hasNext={lightboxItem ? filteredGalleryItems.findIndex(i => i.id === lightboxItem.id) < filteredGalleryItems.length - 1 : false}
        hasPrev={lightboxItem ? filteredGalleryItems.findIndex(i => i.id === lightboxItem.id) > 0 : false}
      />

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-rose-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Customer Love" subtitle="What They Say" centered={true} />
          
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

      {/* CONTACT SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-rose-100 flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-rose-50 via-white to-rose-50">
              <h4 className="font-script text-3xl text-rose-500 mb-2">Get in Touch</h4>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">Visit Our Parlour</h2>
              
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Located in the heart of the city, our salon offers a sanctuary of peace and beauty. Come visit us for a free consultation.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-white text-rose-500 rounded-2xl shadow-md group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Address</h4>
                      <p className="text-gray-600">House 12, Road 5, Dhanmondi, Dhaka</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-white text-rose-500 rounded-2xl shadow-md group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
                      <p className="text-gray-600">+880 1712 345 678</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-white text-rose-500 rounded-2xl shadow-md group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Email</h4>
                      <p className="text-gray-600">contact@pearlbypayel.com</p>
                    </div>
                </div>
                <div className="flex items-start gap-5 group">
                    <div className="p-4 bg-white text-rose-500 rounded-2xl shadow-md group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Opening Hours</h4>
                      <p className="text-gray-600">Daily: 10:00 AM - 9:00 PM</p>
                    </div>
                </div>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                  <a href="#" className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1">
                    <MessageCircle size={22} /> WhatsApp
                  </a>
                  <a href="#" className="flex-1 bg-[#1877F2] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">
                    <Facebook size={22} /> Facebook
                  </a>
              </div>
            </div>

            {/* Map Side */}
            <div className="w-full lg:w-1/2 bg-gray-200 relative min-h-[500px] lg:min-h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902373072212!2d90.39106031536268!3d23.750858094680077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3f986d%3A0x7125f67c5594d635!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1647856421234!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};