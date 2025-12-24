export interface Product {
  id: string;
  name: string;
  category: 'Subwoofer' | 'Mid-Bass';
  size: string;
  powerRMS: number;
  impedance: string;
  description: string;
  isNew?: boolean;
  isComingSoon?: boolean;
  imageUrl: string;
  specs: {
    fs: string;
    qts: string;
    vas: string;
    spl: string;
    xmax: string;
  };
}

export interface Reseller {
  id: string;
  name: string;
  city: string;
  state: string;
  phone: string;
  address: string;
  whatsapp?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  type: 'Project' | 'Championship';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
}

export const STATES_BR = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", 
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];