import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
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
  );
};