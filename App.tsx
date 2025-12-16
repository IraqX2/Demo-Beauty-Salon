import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { BookingModal, SuccessModal } from './components/BookingModal';
import { ModalType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { Reviews } from './pages/Reviews';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [modalState, setModalState] = useState<ModalType>(ModalType.NONE);
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const openBooking = (pkgName?: string) => {
    setSelectedPackage(pkgName || '');
    setModalState(ModalType.BOOKING);
  };

  const handleBookingSuccess = () => {
    setModalState(ModalType.SUCCESS);
  };

  const closeModals = () => {
    setModalState(ModalType.NONE);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <ScrollToTop />
      
      {/* Shared Navigation */}
      <Navbar openBooking={() => openBooking()} />

      {/* Main Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home openBooking={() => openBooking()} />} />
          <Route path="/services" element={<Services openBooking={openBooking} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer openBooking={() => openBooking()} />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <a 
          href="tel:+8801712345678"
          className="bg-white text-rose-500 p-3 rounded-full shadow-lg border border-rose-100 hover:bg-rose-50 transition-transform hover:scale-110 flex items-center justify-center"
          title="Call Us"
        >
          <Phone size={24} />
        </a>
        <a 
          href="https://wa.me/8801000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-500/30 hover:scale-110 transition-transform flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Modals */}
      <BookingModal 
        isOpen={modalState === ModalType.BOOKING} 
        onClose={closeModals}
        preSelectedService={selectedPackage}
        onSuccess={handleBookingSuccess}
      />
      <SuccessModal 
        isOpen={modalState === ModalType.SUCCESS} 
        onClose={closeModals}
      />
      
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;