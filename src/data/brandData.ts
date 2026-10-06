import { ServicePillar } from '../types';
import { ASSETS } from './assets';

export const BRAND_INFO = {
  name: 'YAMAN ESTATES',
  tagline: 'Luxury Real Estate • Land • Investment • Interiors • Construction',
  
  // Real Business & Operating Details
  contact: {
    primaryCity: 'Raipur',
    region: 'Chhattisgarh',
    country: 'India',
    location: 'Raipur, Chhattisgarh, India',
    officeAddress: 'VIP Road & Shankar Nagar Enclave, Raipur, Chhattisgarh 492001, India',
    email: 'yaman@yamanestates.com',
    phone: '+91 7400990070',
    phoneDisplay: '+91 7400990070',
    whatsapp: '+91 7400990070',
    whatsappUrl: 'https://wa.me/917400990070?text=Hello%20Yaman%20Estates%2C%20I%20am%20interested%20in%20property%20advisory%20in%20Raipur%2C%20Chhattisgarh.',
    founderName: 'Yaman Dewangan',
    founderRole: 'Founder & Principal Advisory Lead',
    experienceNote: 'Established property advisory anchored in Raipur with expansive network across Chhattisgarh.',
    portfolioCount: '2000+',
    portfolioStatement: 'We have more than 2000+ properties all over Chhattisgarh',
    social: {
      instagram: 'https://instagram.com/yamanestates',
      facebook: 'https://facebook.com/yamanestates',
      threads: 'https://threads.net/@yamanestates'
    }
  },

  hero: {
    eyebrow: 'YAMAN ESTATES · RAIPUR, CHHATTISGARH',
    headline: 'Where Exceptional Spaces Become Lasting Legacies.',
    subline: 'Real estate, land, investment, interiors and construction — thoughtfully brought together under one vision in Raipur & across Chhattisgarh.',
    primaryCta: 'Get in Touch',
    secondaryCta: 'Explore Our Services',
  },

  introduction: {
    label: 'OUR APPROACH',
    heading: 'Built Around Property. Guided by Vision.',
    paragraphs: [
      'At Yaman Estates, property is never regarded as a mere transaction. Established in Raipur, Chhattisgarh, we view property as an enduring dialogue between land, architecture, capital preservation, and client aspirations.',
      'While the majority of our curated portfolio is concentrated in Raipur’s most prestigious residential enclaves, commercial corridors, and development plots, our advisory network extends across Chhattisgarh to fulfill bespoke client requirements.',
      'We unite five essential disciplines under one singular standard: connecting discerning clients to remarkable spaces, identifying prime land, evaluating generational investment opportunities, refining interior sanctuaries, and executing construction with meticulous oversight.'
    ]
  },

  whyYaman: {
    label: 'DISTINCTION & VALUES',
    heading: 'Property Is More Than an Address.',
    subheading: 'A curated philosophy that prioritizes proportion, permanence, and authentic relationships over rapid turnover across Raipur & Chhattisgarh.',
    points: [
      {
        title: 'Thoughtful Guidance in Raipur',
        description: 'Impartial, consultative advisory shaped around your long-term legacy rather than transactional expediency, deeply attuned to Raipur’s prime neighborhoods.'
      },
      {
        title: 'Design-Led Perspective',
        description: 'Deep architectural appreciation for spatial flow, natural illumination, sustainable materiality, and structural balance in Central India’s evolving landscape.'
      },
      {
        title: 'Granular Local Intimacy',
        description: 'Nuanced familiarity with zoning dynamics, micro-climate orientation, development corridors, and master plans in Raipur and throughout Chhattisgarh.'
      },
      {
        title: 'Over 2,000+ Vetted Properties',
        description: 'Unmatched access to more than 2,000+ residential villas, development lands, and prime commercial plots throughout Chhattisgarh.'
      },
      {
        title: 'Direct Private Partner Service',
        description: 'A bespoke, private-client relationship model where every inquiry is handled directly by senior leadership with utmost discretion.'
      }
    ]
  },

  philosophy: {
    quote: 'Every property decision should be made with clarity, intention and a view toward what comes next.',
    pillars: [
      {
        word: 'PEOPLE',
        title: 'Understand the human intent',
        description: 'We listen intently to understand the person, family, or institution behind the property decision before recommending a single parcel in Raipur or beyond.'
      },
      {
        word: 'PLACE',
        title: 'Respect architecture & terrain',
        description: 'Every parcel of land and structure carries a unique micro-environment. We respect the dialogue between natural landscape and built form across Chhattisgarh.'
      },
      {
        word: 'PERSPECTIVE',
        title: 'Think beyond transactions',
        description: 'Immediate utility is only the beginning. We assess how every decision holds its value, beauty, and function across generations.'
      },
      {
        word: 'PRECISION',
        title: 'Honor the fine details',
        description: 'From title diligence and registry procedures to stone joinery and structural integrity, excellence lives in the millimeter.'
      }
    ]
  },

  teamMembers: [
    {
      id: 'yaman-dewangan',
      name: 'Yaman Dewangan',
      role: 'Founder & Principal Advisory Lead',
      bio: 'Pioneering luxury real estate, land assembly, and architectural advisory in Raipur. Dedicated to discreet private client representation and generational wealth creation across Chhattisgarh.'
    },
    {
      id: 'member-2',
      name: 'Architecture & Design Directorate',
      role: 'Head of Spatial Architecture & Interiors',
      bio: 'Specializing in residential flow, bespoke finishes, and contextual spaces tailored to the climate and cultural grace of Raipur.'
    },
    {
      id: 'member-3',
      name: 'Development & Construction Directorate',
      role: 'Director of Construction & Land Due Diligence',
      bio: 'Oversees site execution, master craft coordination, structural integrity, and timeline precision from blueprint to final registry.'
    }
  ]
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'real-estate',
    number: '01',
    title: 'Real Estate',
    shortDescription: 'Helping buyers and clients discover and navigate prime residential properties across Raipur and Chhattisgarh.',
    fullDescription: 'Whether seeking an architecturally significant private residence in Shankar Nagar, a luxury villa on VIP Road, or a contemporary penthouse in Naya Raipur, our advisory combines private off-market scouting, discreet representation, and rigorous spatial analysis.',
    features: [
      'Prime residential discovery across Raipur',
      'Buyer guidance & spatial suitability assessment',
      'Property valuation & appreciation review',
      'Discreet negotiation support & terms structuring',
      'End-to-end registry & transaction coordination'
    ],
    image: ASSETS.heroVilla
  },
  {
    id: 'land',
    number: '02',
    title: 'Land',
    shortDescription: 'Land opportunities selected with long-term potential, natural orientation, and development vision in mind.',
    fullDescription: 'Land is the irreplaceable foundation of every enduring estate. We advise on prime residential plots, commercial development acreage, and agricultural parcels in Raipur and growth corridors across Chhattisgarh.',
    features: [
      'Land identification & topographic screening',
      'Opportunity assessment & zoning verification in Chhattisgarh',
      'Access, water table & orientation analysis',
      'Development perspective & parcel optimization'
    ],
    image: ASSETS.landLandscape
  },
  {
    id: 'investment',
    number: '03',
    title: 'Investment',
    shortDescription: 'Property opportunities evaluated through a disciplined, long-term generational value perspective.',
    fullDescription: 'We help private clients, family offices, and discerning investors analyze real asset holdings across Raipur and Chhattisgarh without short-term speculation. Every prospective acquisition is vetted for defensive stability and high-appreciation corridors.',
    features: [
      'Opportunity evaluation & risk appraisal in Raipur',
      'Comparative market analysis & yield dynamics',
      'Long-term generational capital preservation',
      'Portfolio positioning & asset lifecycle planning'
    ],
    disclaimer: 'Investment information is provided for general informational purposes and should not be considered financial advice. All prospective investors should conduct independent financial and legal due diligence.',
    image: ASSETS.stoneStaircase
  },
  {
    id: 'interiors',
    number: '04',
    title: 'Interiors',
    shortDescription: 'Thoughtful spaces shaped around comfort, function, tactile materiality, and refined aesthetics.',
    fullDescription: 'Our interior practice believes true luxury is quiet, tactile, and deeply serene. We curate spaces utilizing honest natural stones, warm plasters, patinated bronzes, and customized millwork that soften and elevate daily living in Raipur’s residences.',
    features: [
      'Spatial planning & volumetric flow refinement',
      'Tactile material direction & stone/timber selection',
      'Custom architectural lighting & millwork design',
      'Curated furniture styling & artisanal art coordination',
      'End-to-end design coordination & installation'
    ],
    image: ASSETS.interiorSalon
  },
  {
    id: 'construction',
    number: '05',
    title: 'Construction',
    shortDescription: 'From concept and planning through execution, bringing property concepts into physical reality.',
    fullDescription: 'Bridging the delicate space between architectural drawings and physical reality requires unrelenting precision. We provide owner representation and construction coordination with master craftsmen and engineering specialists across Chhattisgarh.',
    features: [
      'Pre-construction planning & schedule articulation',
      'Specialist contractor & artisan coordination in Raipur',
      'Rigorous on-site quality oversight & milestone reviews',
      'Material provenance & structural detailing integrity'
    ],
    image: ASSETS.craftDetail
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'We learn about your goals, aesthetic inclinations, spatial prerequisites, and generational horizon.'
  },
  {
    number: '02',
    title: 'EXPLORE',
    description: 'We identify relevant opportunities, land parcels, or architectural properties across Raipur and Chhattisgarh.'
  },
  {
    number: '03',
    title: 'REFINE',
    description: 'We evaluate the fine details that matter: title verification, legal boundaries, materiality, and terms.'
  },
  {
    number: '04',
    title: 'EXECUTE',
    description: 'We coordinate the transaction, registry paperwork, or design workflows forward with calm discretion.'
  },
  {
    number: '05',
    title: 'DELIVER',
    description: 'We stay focused on a lasting outcome, overseeing delivery and ongoing support as your space comes to life.'
  }
];
