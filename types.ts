export interface Package {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  services: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  datetime: string;
}

export interface GalleryItem {
  id: number;
  category: 'Facial' | 'Hair' | 'Makeup' | 'Nails' | 'Ambience';
  image: string;
  title: string;
}

export enum ModalType {
  NONE,
  BOOKING,
  SUCCESS
}