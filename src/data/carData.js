export const CAR_DATA = {
  'mercedes-gt': {
    title: 'Silver Star GT',
    badge: 'Mercedes-Benz AMG',
    subtitle: '2024 AMG Edition',
    price: '$175,000',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    desc: 'The pinnacle of German engineering. A symphony of raw power and sophisticated luxury, the AMG GT defines the modern grand tourer.',
    spec1: '577 HP',
    spec2: '3.1s',
    spec3: 'V8 BITURBO',
    category: 'luxury',
  },
  'bmw-m8': {
    title: 'Bavarian Beast',
    badge: 'BMW M Division',
    subtitle: '2024 M Competition',
    price: '$162,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    desc: 'An uncompromising pursuit of performance. The M8 Competition is where precision meets power in a breathtaking package.',
    spec1: '617 HP',
    spec2: '3.0s',
    spec3: 'V8 TWINPOWER',
    category: 'performance',
  },
  'apex-predator': {
    title: 'Apex Predator',
    badge: 'V-Series Limited',
    subtitle: '2024 V-Series',
    price: '$245,000',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    desc: 'A track-focused weapon for the road. The Apex Predator uses obsessive weight-saving and advanced aero to dominate every corner.',
    spec1: '720 HP',
    spec2: '2.8s',
    spec3: 'V8 BI-TURBO',
    category: 'hypercars',
  },
  'midnight-gt': {
    title: 'Midnight GT',
    badge: 'GT-Spec Electric',
    subtitle: '2024 Electric',
    price: '$189,000',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800',
    desc: 'The future of performance is silent and violent. Instant torque and low center of gravity make the Midnight GT a street legal phantom.',
    spec1: '550 HP',
    spec2: '3.4s',
    spec3: 'GT-SPEC EV',
    category: 'hypercars',
  },
  'silver-arrow': {
    title: 'Silver Arrow',
    badge: '2025 Prototype',
    subtitle: '2025 Prototype',
    price: '$310,000',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    desc: 'A glimpse into the next decade. The Silver Arrow hybrid V12 combines heritage sound with futuristic electrical assistance.',
    spec1: '810 HP',
    spec2: '2.2s',
    spec3: 'HYBRID V12',
    category: 'hypercars',
  },
  'rosso-corsa': {
    title: 'Rosso Corsa',
    badge: 'Aero-X Performance',
    subtitle: '2024 Aero-X',
    price: '$295,000',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    desc: 'Italian passion refined. The Aero-X brings Formula engineering to the street with active aero and a screaming high-revving V8.',
    spec1: '690 HP',
    spec2: '2.9s',
    spec3: 'V8 AERO-X',
    category: 'performance',
  },
};

// Featured cars shown on homepage (first 3 desktop, all 5 on mobile carousel)
export const FEATURED_CAR_IDS = ['mercedes-gt', 'bmw-m8', 'apex-predator', 'midnight-gt', 'silver-arrow'];

// All cars for inventory page
export const ALL_CAR_IDS = Object.keys(CAR_DATA);

export const CATEGORIES = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'hypercars', label: 'Hypercars' },
  { key: 'luxury', label: 'Luxury Elite' },
  { key: 'performance', label: 'Performance' },
];
