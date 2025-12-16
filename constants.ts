import { Package, Testimonial, GalleryItem } from './types';

// High-quality beauty salon images (Unsplash)
export const HERO_BG = "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop";
export const HERO_MODEL = "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885317/559268606_122178624026395820_3908300086794294223_n_fqh3qv.jpg";

export const PACKAGES: Package[] = [
  {
    id: 1,
    title: "Essential Glow",
    price: 1299,
    originalPrice: 1800,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Quick facial",
      "Face fair polish",
      "U cut / V cut",
      "Upper lip"
    ]
  },
  {
    id: 2,
    title: "Hair Indulgence",
    price: 2000,
    originalPrice: 2800,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop",
    services: [
      "Hair oil massage",
      "Hair wash & Dry",
      "Hair ozone treatment",
      "Hair spa"
    ]
  },
  {
    id: 3,
    title: "Royal Pampering",
    price: 2800,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
    services: [
      "Vitamin C facial",
      "Paraffin manicure",
      "Paraffin pedicure",
      "Eyebrow, Upper lips, Chin"
    ]
  },
  {
    id: 4,
    title: "Bridal Radiance",
    price: 3899,
    originalPrice: 5000,
    image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885318/571134090_122180096006395820_527348438150897303_n_aw1vgm.jpg",
    services: [
      "Green tea facial",
      "Regular manicure & pedicure",
      "Eyebrows, Upper lips, Chin",
      "Special whitening pack"
    ]
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: 1,
    name: "Anika Rahman",
    role: "Regular Customer",
    rating: 5,
    content: "The best salon experience I've had! The staff is so polite and the Green Tea facial was magical. Highly recommended!",
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2815d22?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Das",
    role: "Bride",
    rating: 5,
    content: "Payel made me look like a princess on my engagement. The makeup was subtle yet glowing. Loved it!",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sumi Akter",
    role: "Hair Spa Lover",
    rating: 5,
    content: "My hair was so frizzy, but after their Ozone treatment, it's so silky. The ambiance is very relaxing and pink!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: 'Facial', title: 'Deep Cleansing', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885316/525623582_122169389774395820_7776006943193781839_n_tkfci7.jpg" },
  { id: 2, category: 'Makeup', title: 'Bridal Glam', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885316/500323870_122157868868395820_7813220433345008030_n_vlusp8.jpg" },
  { id: 3, category: 'Nails', title: 'Gel Manicure', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885317/527385061_122169827888395820_4877257509937493938_n_gpbdev.jpg" },
  { id: 4, category: 'Hair', title: 'Luxury Spa', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885318/570290427_122180095922395820_5120835573099918614_n_o9qn4n.jpg" },
  { id: 5, category: 'Facial', title: 'Gold Mask', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885317/558244230_122177954612395820_6564655624444575437_n_gr76lv.jpg" },
  { id: 6, category: 'Ambience', title: 'Relaxation Zone', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885317/527290835_122169827498395820_159899473544733944_n_yknbgw.jpg" },
  { id: 7, category: 'Makeup', title: 'Party Look', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885318/560572758_122178624062395820_716286302716984463_n_hzrcx2.jpg" },
  { id: 8, category: 'Hair', title: 'Styling & Cut', image: "https://res.cloudinary.com/dx9efyuos/image/upload/v1765885316/500229121_122157868838395820_6600681154089032440_n_cg4n1q.jpg" },
];