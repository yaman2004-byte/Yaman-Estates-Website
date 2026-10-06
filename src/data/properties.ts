import { Property } from '../types';
import { ASSETS } from './assets';

/**
 * Property-Ready Architecture Model
 * Curated properties anchored in Raipur with wide coverage across Chhattisgarh.
 */
export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: 'prop-vip-road-villa',
    title: 'The Limestone Residence & Pavilion',
    location: 'VIP Road, Raipur, Chhattisgarh',
    type: 'Residential Villa',
    status: 'Private Portfolio',
    bedrooms: 5,
    bathrooms: 6,
    area: '9,200 sq ft',
    description: 'A monolithic luxury residence crafted from natural cut stone with dual landscaped courtyards, bronze-framed glazing, and reflecting pools in Raipur’s most prestigious residential avenue.',
    images: [ASSETS.heroVilla, ASSETS.interiorSalon, ASSETS.terraceDusk],
    featured: true,
    architecturalStyle: 'Contextual Modernism',
    yearCompleted: '2024'
  },
  {
    id: 'prop-naya-raipur-estate',
    title: 'Naya Raipur Prime Development Parcel',
    location: 'Sector 24, Atal Nagar (Naya Raipur), Chhattisgarh',
    type: 'Prime Land',
    status: 'Available',
    area: '4.8 Acres',
    description: 'Elevated south-facing private estate parcel situated in the planned green capital corridor of Atal Nagar (Naya Raipur), featuring clear title, wide road frontage, and master-planned infrastructure.',
    images: [ASSETS.landLandscape, ASSETS.architecturalPillars],
    featured: true,
    architecturalStyle: 'Master-Planned Capital Parcel',
    yearCompleted: 'Ready for Concept Design'
  },
  {
    id: 'prop-shankar-nagar-penthouse',
    title: 'The Travertine Sky Penthouse',
    location: 'Shankar Nagar, Raipur, Chhattisgarh',
    type: 'Architectural Penthouse',
    status: 'Under Advisory',
    bedrooms: 4,
    bathrooms: 4,
    area: '5,400 sq ft',
    description: 'Full-floor residence with bespoke fluted bronze detailing, bookmatched Italian travertine, private sky deck, and panoramic city vistas over central Raipur.',
    images: [ASSETS.interiorSalon, ASSETS.craftDetail, ASSETS.minimalistLiving],
    featured: true,
    architecturalStyle: 'Tactile Editorial Modernism',
    yearCompleted: '2025'
  }
];
