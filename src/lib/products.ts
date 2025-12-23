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
    image: 'https://casalisboa.com.br/produto/whisky-johny-walker-black-label-750ml/,
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
    image: 'https://www.costibebidas.com.br/whisky-jack-daniels-700ml?srsltid=AfmBOoq3TEQBsSPGPKRykcXP0WyW9h4OnXxx25G8filqrS2JD8NMOOZX,
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
    image: 'https://www.costibebidas.com.br/whisky-chivas-regal-12-anos-1l?srsltid=AfmBOooTZ2M06HwXjf6LaRLvEdFu5Pprj8ip9de9-XQY0gZ13Or7lPHJ,
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
    image: 'https://www.dinhobebidas.com.br/destilados/whisky/whisky-importado/whisky-ballantines-finest-1000ml?srsltid=AfmBOooPLJq-oiphp7vjbXjwhxa_KAxSqYM3b1BVIdm38NrQmv6qppth,
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
    image: 'https://mercado.carrefour.com.br/gin-tanqueray-london-dry-750ml-160210/p,
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
    image: 'https://www.ofertinha.com.br/gin-bombay-sapphire-dry-london-750-ml/,
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
    image: 'https://www.superkoch.com.br/gin-beefeater-london-dry-750ml-32886?srsltid=AfmBOorP7_oJIm1qjt5tEgktdfRqm6M7DM1BCovQxZ7CXoU3wCCMO8oZ,
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
    image: 'https://www.arenaatacado.com.br/Cerveja-Heineken-Lata-350ml-988391.html,
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
    image: 'https://www.amazon.com.br/Cerveja-Budweiser-Long-Neck-330ml/dp/B07Y29XWKT,
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
    image: 'https://www.armazemdamaria.com.br/loja-1/produto/m/cerveja-stella-artois-long-neck-330ml-pure-gold-124041?srsltid=AfmBOoqZR0jYQa82IIMDOepe_jF58Y8nyjmg6c9dx03s9qi3w-QeyJyz,
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
