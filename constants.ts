
import { PortfolioItem, Branch, Service, GalleryItem } from './types';

export const BRANCHES: Branch[] = [
  { 
    city: 'Delhi', 
    address: 'Lajpat Nagar', 
    phone: '+91 85272 74260',
    mapUrl: 'https://www.google.com/maps/search/Dipak+Studios+Lajpat+Nagar+Delhi'
  },
  { 
    city: 'Gurgaon', 
    address: 'Golf Course Road', 
    phone: '+91 98100 54321',
    mapUrl: 'https://www.google.com/maps/search/Dipak+Studios+Gurgaon+Golf+Course+Road'
  },
  { 
    city: 'Faridabad', 
    address: 'Neelam Chowk', 
    phone: '+91 129 4022666',
    mapUrl: 'https://www.google.com/maps/search/Dipak+Studios+Faridabad+Neelam+Chowk',
    isHeadOffice: true
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'Deepika & Ranveer', category: 'Celebrity Wedding', imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', isCelebrity: true },
  { id: '2', title: 'The Royal Jaipur Vows', category: 'Destination', imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
  { id: '3', title: 'Vicky & Katrina', category: 'Celebrity Wedding', imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800', isCelebrity: true },
  { id: '4', title: 'Modern Elegance in Delhi', category: 'Portrait', imageUrl: 'https://images.unsplash.com/photo-1595152230661-00f33923e9a7?auto=format&fit=crop&q=80&w=800' },
  { id: '5', title: 'Sunset at Udaipur', category: 'Cinematic', imageUrl: 'https://images.unsplash.com/photo-1546032996-6dfacbacbd3f?auto=format&fit=crop&q=80&w=800' },
  { id: '6', title: 'Candid Moments', category: 'Emotional', imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800' },
];

export const GALLERY: GalleryItem[] = PORTFOLIO.map((item, idx) => ({
  id: parseInt(item.id),
  url: item.imageUrl,
  category: (item.category as any),
  title: item.title
}));

export const SERVICES: Service[] = [
  {
    id: 'wed-01',
    title: 'The Heritage Collection',
    description: 'Capturing the timeless magic of your special day with cinematic storytelling.',
    price: 'Starting from ₹5,00,000',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    features: ['2 Photographers', 'High-res Edited Digital Photos', 'Cinematic Highlight Video', 'Premium Wedding Album']
  },
  {
    id: 'por-01',
    title: 'The Royal Portraiture',
    description: 'Bespoke corporate headshots and creative portfolios that define personality.',
    price: 'Starting from ₹50,000',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    features: ['Studio or Outdoor Location', 'Pro Lighting Setup', '3 Wardrobe Changes', 'Digital Retouching']
  },
  {
    id: 'eve-01',
    title: 'Cinematic Events',
    description: 'From birthdays to corporate gala nights, we capture the essence of every gathering.',
    price: 'Starting from ₹1,50,000',
    image: 'https://images.unsplash.com/photo-1519225495810-75178319a13b?auto=format&fit=crop&q=80&w=800',
    features: ['Candid Photography', 'Same-day Highlights', 'Live Screening Support', 'Unlimited High-res Photos']
  },
  {
    id: 'com-01',
    title: 'Commercial Masterclass',
    description: 'Boost your brand with high-impact visuals designed for advertising.',
    price: 'Starting from ₹2,00,000',
    image: 'https://images.unsplash.com/photo-1465495910483-0d6749838f59?auto=format&fit=crop&q=80&w=800',
    features: ['Product Catalogues', 'Flat-lays & Lifestyle', 'Creative Direction', 'Fast Turnaround']
  }
];
