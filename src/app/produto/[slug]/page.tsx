'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProductBySlug } from '@/lib/products';
import { addToCart } from '@/lib/cart';
import { ShoppingCart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

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

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

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
            {/* Imagem do produto */}
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

            {/* Informações do produto */}
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">{product.volume}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Preços */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm text-gray-500">De:</span>
                  <span className="text-xl text-gray-500 line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm text-gray-700">Por:</span>
                  <span className="text-4xl font-bold text-red-600">
                    R$ {product.promoPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <p className="text-green-700 font-bold text-lg">
                  Economize R$ {(product.originalPrice - product.promoPrice).toFixed(2).replace('.', ',')} ({product.discount}%)
                </p>
              </div>

              {/* Benefícios */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span>Entrega em até 3 dias úteis</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span>Compra 100% segura</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                  <span>Frete grátis acima de R$ 100</span>
                </div>
              </div>

              {/* Botão adicionar ao carrinho */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-[#FF9900] hover:bg-[#F08000] text-black font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-3 text-lg mb-4"
              >
                <ShoppingCart className="w-6 h-6" />
                Adicionar ao Carrinho
              </button>

              <Link
                href="/carrinho"
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-bold py-4 px-6 rounded-lg transition-colors text-center"
              >
                Comprar Agora
              </Link>

              {/* Sorteio */}
              <div className="mt-6 bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
                <p className="text-purple-900 font-bold text-center">
                  🎁 Comprando este produto você concorre a um Royal Salute!
                </p>
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações do Produto</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Especificações</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Volume:</strong> {product.volume}</li>
                  <li><strong>Categoria:</strong> {product.category === 'whisky' ? 'Whisky' : product.category === 'gin' ? 'Gin' : 'Cerveja'}</li>
                  <li><strong>Origem:</strong> Importado</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Entrega e Garantia</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Entrega expressa em até 3 dias úteis</li>
                  <li>✓ Embalagem segura e lacrada</li>
                  <li>✓ Garantia de qualidade Amazon</li>
                  <li>✓ Devolução grátis em 30 dias</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aviso legal */}
          <div className="mt-8 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 text-center">
            <p className="text-gray-900 font-bold">
              ⚠️ Venda proibida para menores de 18 anos. Beba com moderação.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
