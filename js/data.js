// ── Products Data ──
const products = [
  {
    id: 1,
    name: 'Sony WH-1000XM5',
    cat: 'audio',
    price: 24990,
    old: 34990,
    emoji: '🎧',
    rating: 4.9,
    reviews: 2400,
    badge: 'hot',
    desc: 'Industry-leading noise cancellation with 30-hour battery life. Crystal clear calls with precise voice pickup.'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    cat: 'phones',
    price: 134900,
    old: 149900,
    emoji: '📱',
    rating: 4.8,
    reviews: 5600,
    badge: 'new',
    desc: 'Titanium design, A17 Pro chip and a pro camera system that lets you shoot in 4K120fps ProRes.'
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    cat: 'laptops',
    price: 114900,
    old: 129900,
    emoji: '💻',
    rating: 4.9,
    reviews: 1200,
    badge: 'sale',
    desc: 'Supercharged by M3 chip. All-day 18-hour battery life, fanless design, and stunning Liquid Retina display.'
  },
  {
    id: 4,
    name: 'Apple Watch Ultra 2',
    cat: 'wearables',
    price: 89900,
    old: 99900,
    emoji: '⌚',
    rating: 4.7,
    reviews: 890,
    badge: 'hot',
    desc: 'The most rugged and capable Apple Watch. Built for endurance athletes and outdoor adventurers.'
  },
  {
    id: 5,
    name: 'Bose QuietComfort 45',
    cat: 'audio',
    price: 27990,
    old: 34000,
    emoji: '🎵',
    rating: 4.6,
    reviews: 1800,
    badge: 'sale',
    desc: 'Acclaimed noise-cancelling with high-fidelity audio. 24-hour battery life with quick charge support.'
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    cat: 'phones',
    price: 130999,
    old: 149999,
    emoji: '📲',
    rating: 4.8,
    reviews: 3200,
    badge: 'new',
    desc: 'Built-in S Pen, 200MP camera, Galaxy AI features and a 5000mAh battery for all-day performance.'
  },
  {
    id: 7,
    name: 'Logitech MX Keys S',
    cat: 'accessories',
    price: 11995,
    old: 15000,
    emoji: '⌨️',
    rating: 4.7,
    reviews: 720,
    badge: null,
    desc: 'Advanced illuminated keyboard with Smart Actions and perfectly shaped keys for fast, precise typing.'
  },
  {
    id: 8,
    name: 'GoPro Hero 12',
    cat: 'cameras',
    price: 34990,
    old: 39990,
    emoji: '📷',
    rating: 4.6,
    reviews: 980,
    badge: 'sale',
    desc: '5.3K60 + 4K120 video. HyperSmooth 6.0 stabilization. Waterproof to 10m without a housing.'
  },
  {
    id: 9,
    name: 'PS5 DualSense Controller',
    cat: 'gaming',
    price: 5990,
    old: 7490,
    emoji: '🎮',
    rating: 4.9,
    reviews: 4100,
    badge: 'hot',
    desc: 'Haptic feedback and adaptive triggers redefine how games feel. Built-in microphone and Create button.'
  },
  {
    id: 10,
    name: 'Anker 65W GaN Charger',
    cat: 'accessories',
    price: 2499,
    old: 3499,
    emoji: '🔌',
    rating: 4.5,
    reviews: 3300,
    badge: 'sale',
    desc: 'Ultra-compact GaN charger. Charge your laptop, phone and more simultaneously with 3 ports.'
  },
  {
    id: 11,
    name: 'Fitbit Charge 6',
    cat: 'wearables',
    price: 14999,
    old: 17999,
    emoji: '💪',
    rating: 4.4,
    reviews: 1400,
    badge: null,
    desc: 'Built-in GPS, heart rate & sleep tracking. Google Maps, Google Wallet integration on your wrist.'
  },
  {
    id: 12,
    name: 'Razer DeathAdder V3',
    cat: 'accessories',
    price: 7499,
    old: 9999,
    emoji: '🖱️',
    rating: 4.8,
    reviews: 2700,
    badge: 'new',
    desc: 'Ultra-lightweight 59g esports mouse. Focus Pro 30K optical sensor with 90-hour battery life.'
  },
];

// ── Sample Orders ──
const sampleOrders = [
  { id: 'TT-7823', name: 'Sony WH-1000XM5',  emoji: '🎧', date: 'Mar 01, 2025', status: 'delivered',  price: 24990  },
  { id: 'TT-7654', name: 'Logitech MX Keys S', emoji: '⌨️', date: 'Feb 18, 2025', status: 'delivered', price: 11995  },
  { id: 'TT-8012', name: 'iPhone 15 Pro',      emoji: '📱', date: 'Mar 05, 2025', status: 'shipping',  price: 134900 },
];
