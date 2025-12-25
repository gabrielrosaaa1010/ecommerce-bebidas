'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductBySlug } from '@/lib/products';
import { Truck, Shield, ArrowLeft, ShoppingCart } from 'lucide-react';

// 🔥 MAPA DE LINKS PERFECTPAY POR SLUG
const PERFECTPAY_LINKS: Record<string, string> = {
  'black-label': 'https://go.perfectpay.com.br/PPU38CQ56EI',
  'jack-daniels': 'https://go.perfectpay.com.br/PPU38CQ56EQ',
  'chivas-regal': 'https://go.perfectpay.com.br/PPU38CQ56EU',
  'ballantines': 'https://go.perfectpay.com.br/PPU38CQ56F1',
  'tanqueray': 'https://go.perfectpay.com.br/PPU38CQ56F3',
  'bombay': 'https://go.perfectpay.com.br/PPU38CQ56F5',
  'beefeater': 'https://go.perfectpay.com.br/PPU38CQ56F8',
  'heineken': 'https://go.perfectpay.com.br/PPU38CQ56FB',
  'budweiser': 'https://go.perfectpay.com.br/PPU38CQ56FD',
  'stella': 'https://go.perfectpay.com.br/PPU38CQ56FI',
};

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#EAEDED]">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Produto não encontrado</h1>
          <Link href="/" className="text-[#C7511F] hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // 🔥 LINK FINAL DO CHECKOUT
  const checkoutLink = PERFECTPAY_LINKS[slug];

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="flex items-center gap-2 text-[#C7511F] hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagem */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-bold">
                -{product.discount}%
              </div>
            </div>

            {/* Infos */}
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {product.name}
              </h1>

              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Preço */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <span className="text-xl line-through text-gray-500">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
                <div className="text-4xl font-bold text-red-600">
                  R$ {product.promoPrice.toFixed(2).replace('.', ',')}
                </div>
              </div>

              {/* Benefícios */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  Entrega rápida
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Pagamento seguro
                </div>
              </div>

              {/* 🔥 BOTÃO FINAL — DIRECT CHECKOUT */}
              {checkoutLink && (
                <a
                  href={checkoutLink}
                  className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-bold py-4 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-3 text-lg"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Comprar Agora
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

