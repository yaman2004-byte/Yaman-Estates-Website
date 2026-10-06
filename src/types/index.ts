export type Page = 'home' | 'about' | 'services' | 'contact';

export interface Property {
  id: string;
  title: string;
  location: string;
  price?: string;
  type: 'Residential Villa' | 'Private Estate' | 'Prime Land' | 'Architectural Penthouse' | 'Development Site';
  status: 'Available' | 'Under Advisory' | 'Private Portfolio' | 'Acquired';
  bedrooms?: number;
  bathrooms?: number;
  area: string; // e.g. "8,500 sq ft" or "3.5 Acres"
  description: string;
  images: string[];
  featured: boolean;
  architecturalStyle?: string;
  yearCompleted?: string;
}

export type ServicePillarId = 'real-estate' | 'land' | 'investment' | 'interiors' | 'construction';

export interface ServicePillar {
  id: ServicePillarId;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  disclaimer?: string;
  image: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interest: 'Buying Property' | 'Selling Property' | 'Land' | 'Investment' | 'Interiors' | 'Construction' | 'General Enquiry' | '';
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
}
