
export type Page = 'home' | 'films' | 'services' | 'about' | 'booking' | 'blog' | 'portal' | 'reviews' | 'support';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: number;
  url: string;
  category: 'Wedding' | 'Portrait' | 'Event' | 'Commercial' | 'Celebrity' | 'Destination' | 'Cinematic' | 'Emotional';
  title: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  isCelebrity?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Branch {
  city: string;
  address: string;
  phone: string;
  mapUrl: string;
  isHeadOffice?: boolean;
}
