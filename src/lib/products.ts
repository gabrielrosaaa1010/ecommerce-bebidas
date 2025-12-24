export interface Product {
  id: string;
  name: string;
  category: 'whisky' | 'gin' | 'cerveja';
  volume: string;
  originalPrice: number;
  promoPrice: number;
  discount: number;
  image: string;
  description: string;
  slug: string;
}

export const products: Product[] = [
  // WHISKY
  {
    id: 'jw-black',
    name: 'Johnnie Walker Black Label',
    category: 'whisky',
    volume: '750ml',
    originalPrice: 199.90,
    promoPrice: 59.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=600&fit=crop',
    description: 'Whisky escocês premium envelhecido por 12 anos',
    slug: 'johnnie-walker-black-label'
  },
  {
    id: 'jack-daniels',
    name: "Jack Daniel's Old No.7",
    category: 'whisky',
    volume: '1L',
    originalPrice: 179.90,
    promoPrice: 53.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop',
    description: 'Tennessee Whiskey autêntico e suave',
    slug: 'jack-daniels-old-no7'
  },
  {
    id: 'chivas-12',
    name: 'Chivas Regal 12 anos',
    category: 'whisky',
    volume: '750ml',
    originalPrice: 219.90,
    promoPrice: 65.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=600&fit=crop',
    description: 'Whisky escocês blend premium 12 anos',
    slug: 'chivas-regal-12-anos'
  },
  {
    id: 'ballantines',
    name: "Ballantine's Finest",
    category: 'whisky',
    volume: '750ml',
    originalPrice: 149.90,
    promoPrice: 44.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1582818969857-caa0e3c9e738?w=400&h=600&fit=crop',
    description: 'Whisky escocês blend suave e equilibrado',
    slug: 'ballantines-finest'
  },
  // GIN
  {
    id: 'tanqueray',
    name: 'Tanqueray London Dry',
    category: 'gin',
    volume: '750ml',
    originalPrice: 139.90,
    promoPrice: 41.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop',
    description: 'Gin premium com notas cítricas e botânicos',
    slug: 'tanqueray-london-dry'
  },
  {
    id: 'bombay',
    name: 'Bombay Sapphire',
    category: 'gin',
    volume: '750ml',
    originalPrice: 129.90,
    promoPrice: 38.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1613588991426-9f0e4b4c2e2e?w=400&h=600&fit=crop',
    description: 'Gin com 10 botânicos exóticos',
    slug: 'bombay-sapphire'
  },
  {
    id: 'beefeater',
    name: 'Beefeater London Dry',
    category: 'gin',
    volume: '750ml',
    originalPrice: 119.90,
    promoPrice: 35.97,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1615332579937-4e1b6e6c9f2d?w=400&h=600&fit=crop',
    description: 'Gin clássico de Londres',
    slug: 'beefeater-london-dry'
  },
  // CERVEJAS
  {
    id: 'heineken',
    name: 'Heineken Lata',
    category: 'cerveja',
    volume: '350ml',
    originalPrice: 4.99,
    promoPrice: 1.49,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=600&fit=crop',
    description: 'Cerveja premium holandesa',
    slug: 'heineken-lata'
  },
  {
    id: 'budweiser',
    name: 'Budweiser Lata',
    category: 'cerveja',
    volume: '350ml',
    originalPrice: 4.79,
    promoPrice: 1.43,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400&h=600&fit=crop',
    description: 'Cerveja americana clássica',
    slug: 'budweiser-lata'
  },
  {
    id: 'stella',
    name: 'Stella Artois Long Neck',
    category: 'cerveja',
    volume: '330ml',
    originalPrice: 6.99,
    promoPrice: 2.09,
    discount: 70,
    image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&h=600&fit=crop',
    description: 'Cerveja belga premium',
    slug: 'stella-artois-long-neck'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
