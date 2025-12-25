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
  affiliateLink: string;
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx88pti0L9W4EFC1T-bhOl_t2Gzs3eNeQHHB7bVLFH9Q&s=10',
    description: 'Whisky escocês premium envelhecido por 12 anos',
    slug: 'johnnie-walker-black-label',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56EI'
  },
  {
    id: 'jack-daniels',
    name: "Jack Daniel's Old No.7",
    category: 'whisky',
    volume: '1L',
    originalPrice: 179.90,
    promoPrice: 53.97,
    discount: 70,
    image: 'https://cdn.dooca.store/141579/products/m0wl6chlqzzuvqcmm4khjc33zwuwqmzulqpy_640x640+fill_ffffff.jpg?v=1722282028&webp=0',
    description: 'Tennessee Whiskey autêntico e suave',
    slug: 'jack-daniels-old-no7',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56EQ'
  },
  {
    id: 'chivas-12',
    name: 'Chivas Regal 12 anos',
    category: 'whisky',
    volume: '750ml',
    originalPrice: 219.90,
    promoPrice: 65.97,
    discount: 70,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqjp88KDUq0uhJ7e9TL34irJhcP9XXXfJwE2kYbthxAg&s=10',
    description: 'Whisky escocês blend premium 12 anos',
    slug: 'chivas-regal-12-anos',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56EU'
  },
  {
    id: 'ballantines',
    name: "Ballantine's Finest",
    category: 'whisky',
    volume: '750ml',
    originalPrice: 149.90,
    promoPrice: 44.97,
    discount: 70,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDMLNQuskaeDBo6dfUd0J_-AJVSEsJK0Gg0Lf4JDWqTWSphOkUrX11Enwj&s=10',
    description: 'Whisky escocês blend suave e equilibrado',
    slug: 'ballantines-finest',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56F1'
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
    image: 'https://cdn.dooca.store/1793/products/273.png?v=1741724527',
    description: 'Gin premium com notas cítricas e botânicos',
    slug: 'tanqueray-london-dry',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56F3'
  },
  {
    id: 'bombay',
    name: 'Bombay Sapphire',
    category: 'gin',
    volume: '750ml',
    originalPrice: 129.90,
    promoPrice: 38.97,
    discount: 70,
    image: 'https://m.media-amazon.com/images/I/61UyC8OiP2L.jpg',
    description: 'Gin com 10 botânicos exóticos',
    slug: 'bombay-sapphire',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56F5'
  },
  {
    id: 'beefeater',
    name: 'Beefeater London Dry',
    category: 'gin',
    volume: '750ml',
    originalPrice: 119.90,
    promoPrice: 35.97,
    discount: 70,
    image: 'https://m.media-amazon.com/images/I/51F+xApIBmL.jpg',
    description: 'Gin clássico de Londres',
    slug: 'beefeater-london-dry',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56F8'
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_ZdGjd3-i9is20ygV43CJQE0Ht6qHcTVkzKGfnnWwrq6cwvqvT7gHesG&s=10',
    description: 'Cerveja premium holandesa',
    slug: 'heineken-lata',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56FB'
  },
  {
    id: 'budweiser',
    name: 'Budweiser Lata',
    category: 'cerveja',
    volume: '350ml',
    originalPrice: 4.79,
    promoPrice: 1.43,
    discount: 70,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHknI97Um_zYNrsJh5AWcMNG2R3tU0UIrD1_UBr-G15JjawDtAtm72gI&s=10',
    description: 'Cerveja americana clássica',
    slug: 'budweiser-lata',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56FD'
  },
  {
    id: 'stella',
    name: 'Stella Artois Long Neck',
    category: 'cerveja',
    volume: '330ml',
    originalPrice: 6.99,
    promoPrice: 2.09,
    discount: 70,
    image: 'https://deskontao.agilecdn.com.br/36254_1.jpg?v=17-1681752696',
    description: 'Cerveja belga premium',
    slug: 'stella-artois-long-neck',
    affiliateLink: 'https://go.perfectpay.com.br/PPU38CQ56FI'
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
