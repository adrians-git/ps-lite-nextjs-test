export interface ListingImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

export interface ListingAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  neighborhood: string;
}

export interface ListingAgent {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviewCount: number;
  experience: string;
  volume: string;
  phone: string;
  email: string;
  photo: string;
  bio: string;
}

export interface School {
  name: string;
  grades: string;
  rating: number;
  distance: string;
  type: 'Public' | 'Private' | 'Charter';
}

export interface ListingFeature {
  category: string;
  items: string[];
}

export interface Listing {
  id: string;
  address: ListingAddress;
  price: number;
  status: 'active' | 'pending' | 'sold';
  daysOnMarket: number;
  beds: number;
  baths: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: string;
  hoa: number;
  propertyTax: number;
  description: string;
  highlights: string[];
  features: ListingFeature[];
  images: ListingImage[];
  agent: ListingAgent;
  schools: School[];
  coordinates: {
    lat: number;
    lng: number;
  };
  virtualTourUrl?: string;
  openHouses?: Array<{
    date: string;
    startTime: string;
    endTime: string;
  }>;
}

export const sedonaListing: Listing = {
  id: '345-rim-shadows-dr-sedona',
  address: {
    street: '345 Rim Shadows Dr',
    city: 'Sedona',
    state: 'AZ',
    zip: '86336',
    neighborhood: 'Rim Shadows'
  },
  price: 1295000,
  status: 'active',
  daysOnMarket: 12,
  beds: 4,
  baths: 3.5,
  sqft: 3245,
  lotSize: '0.75 acres',
  yearBuilt: 2019,
  propertyType: 'Single Family',
  hoa: 125,
  propertyTax: 9713,
  description: "Stunning contemporary home perched in the heart of Sedona with breathtaking red rock views. This architectural masterpiece features soaring vaulted ceilings, floor-to-ceiling windows, and an open-concept design perfect for entertaining. The gourmet kitchen boasts top-of-the-line appliances and a massive quartz island. Step outside to your private oasis with heated pool, spa, outdoor kitchen, and multiple patios showcasing panoramic views. The home includes owned solar panels, smart home automation, and a rare 3-car garage. Located in the prestigious Rim Shadows community with easy access to hiking trails and downtown Sedona.",
  highlights: [
    'Breathtaking red rock views',
    'Heated pool & spa',
    'Owned solar panels',
    'Smart home system',
    '3-car garage',
    'Gourmet kitchen',
    'Wine cellar',
    'Outdoor kitchen & fire pit'
  ],
  features: [
    {
      category: 'Interior Features',
      items: [
        'Hardwood floors throughout',
        'Vaulted ceilings',
        'Floor-to-ceiling windows',
        'Gourmet kitchen with quartz countertops',
        'Top-of-the-line appliances',
        'Massive quartz island',
        'Wine cellar',
        'Home office',
        'Smart home automation',
        'Open-concept design',
        'Walk-in closets',
        'Dual vanities'
      ]
    },
    {
      category: 'Exterior Features',
      items: [
        'Heated pool',
        'Spa/hot tub',
        'Outdoor kitchen',
        'Fire pit',
        'Multiple patios',
        'Red rock views',
        'Landscaped yard',
        'Privacy fencing',
        '3-car garage',
        'Owned solar panels'
      ]
    },
    {
      category: 'Utilities & Systems',
      items: [
        'Energy-efficient solar panels (owned)',
        'Smart home system',
        'Central heating & cooling',
        'Tankless water heater',
        'Security system',
        'High-speed internet ready'
      ]
    },
    {
      category: 'Community',
      items: [
        'HOA: $125/month',
        'Access to hiking trails',
        'Close to downtown Sedona',
        'Gated community',
        'Low-maintenance landscaping'
      ]
    }
  ],
  images: [
    // Main exterior/view shots
    { id: '1', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&h=900&fit=crop', alt: 'Front exterior with red rock views', order: 1 },
    { id: '2', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop', alt: 'Rear exterior and pool area', order: 2 },
    { id: '3', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop', alt: 'Living room with vaulted ceilings', order: 3 },

    // Kitchen
    { id: '4', url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1600&h=900&fit=crop', alt: 'Gourmet kitchen with quartz island', order: 4 },
    { id: '5', url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop', alt: 'Kitchen dining area', order: 5 },

    // Living spaces
    { id: '6', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=900&fit=crop', alt: 'Open concept living area', order: 6 },
    { id: '7', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop', alt: 'Dining room with views', order: 7 },
    { id: '8', url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&h=900&fit=crop', alt: 'Home office with built-ins', order: 8 },

    // Bedrooms
    { id: '9', url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&h=900&fit=crop', alt: 'Master bedroom suite', order: 9 },
    { id: '10', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop', alt: 'Master bathroom with dual vanities', order: 10 },
    { id: '11', url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1600&h=900&fit=crop', alt: 'Guest bedroom', order: 11 },
    { id: '12', url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1600&h=900&fit=crop', alt: 'Guest bathroom', order: 12 },

    // Outdoor spaces
    { id: '13', url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600&h=900&fit=crop', alt: 'Heated pool with red rock views', order: 13 },
    { id: '14', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&h=900&fit=crop', alt: 'Spa and outdoor living area', order: 14 },
    { id: '15', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&h=900&fit=crop', alt: 'Outdoor kitchen and fire pit', order: 15 },
    { id: '16', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&h=900&fit=crop', alt: 'Patio with panoramic views', order: 16 },

    // Additional spaces
    { id: '17', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop', alt: 'Wine cellar', order: 17 },
    { id: '18', url: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1600&h=900&fit=crop', alt: '3-car garage', order: 18 },

    // Views and details
    { id: '19', url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&h=900&fit=crop', alt: 'Sunset views from patio', order: 19 },
    { id: '20', url: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1600&h=900&fit=crop', alt: 'Floor-to-ceiling windows', order: 20 },
    { id: '21', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&h=900&fit=crop', alt: 'Hardwood floors detail', order: 21 },
    { id: '22', url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1600&h=900&fit=crop', alt: 'Smart home controls', order: 22 },
    { id: '23', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop', alt: 'Evening exterior lighting', order: 23 },
    { id: '24', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&h=900&fit=crop', alt: 'Community entrance', order: 24 }
  ],
  agent: {
    id: 'jessica-martinez',
    name: 'Jessica Martinez',
    title: 'Realtor® | Luxury Home Specialist',
    rating: 4.9,
    reviewCount: 127,
    experience: '15+ years',
    volume: '$45M+ sold in 2024',
    phone: '(928) 555-0123',
    email: 'jessica@propertysimple.com',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'Jessica specializes in luxury properties in the Sedona area with over 15 years of experience. Her deep knowledge of the local market and dedication to client service have made her one of the top-producing agents in Northern Arizona.'
  },
  schools: [
    {
      name: 'West Sedona School',
      grades: 'K-8',
      rating: 8,
      distance: '1.2 mi',
      type: 'Public'
    },
    {
      name: 'Sedona Red Rock High School',
      grades: '9-12',
      rating: 7,
      distance: '2.1 mi',
      type: 'Public'
    }
  ],
  coordinates: {
    lat: 34.8597,
    lng: -111.7890
  },
  virtualTourUrl: 'https://www.example.com/virtual-tour',
  openHouses: [
    {
      date: '2025-11-22',
      startTime: '2:00 PM',
      endTime: '4:00 PM'
    },
    {
      date: '2025-11-23',
      startTime: '11:00 AM',
      endTime: '1:00 PM'
    }
  ]
};

// Mock similar listings for the "Similar Properties" section
export const similarListings: Listing[] = [
  {
    ...sedonaListing,
    id: '456-canyon-view-ln',
    address: {
      street: '456 Canyon View Ln',
      city: 'Sedona',
      state: 'AZ',
      zip: '86336',
      neighborhood: 'Thunder Mountain'
    },
    price: 1150000,
    beds: 3,
    baths: 2.5,
    sqft: 2890,
    daysOnMarket: 8,
    images: [
      { id: 's1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop', alt: 'Similar property 1', order: 1 }
    ]
  },
  {
    ...sedonaListing,
    id: '789-red-rock-way',
    address: {
      street: '789 Red Rock Way',
      city: 'Sedona',
      state: 'AZ',
      zip: '86336',
      neighborhood: 'Chapel Area'
    },
    price: 1425000,
    beds: 5,
    baths: 4,
    sqft: 3680,
    daysOnMarket: 21,
    images: [
      { id: 's2', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop', alt: 'Similar property 2', order: 1 }
    ]
  },
  {
    ...sedonaListing,
    id: '234-vista-heights',
    address: {
      street: '234 Vista Heights',
      city: 'Sedona',
      state: 'AZ',
      zip: '86336',
      neighborhood: 'Uptown Sedona'
    },
    price: 1375000,
    beds: 4,
    baths: 3,
    sqft: 3100,
    daysOnMarket: 15,
    images: [
      { id: 's3', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop', alt: 'Similar property 3', order: 1 }
    ]
  }
];
