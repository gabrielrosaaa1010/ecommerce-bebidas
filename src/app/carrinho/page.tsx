'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCart, updateQuantity, removeFromCart, getCartTotal, CartItem } from '@/lib/cart';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateCartState();

    const handleCartUpdate = () => {
      updateCartState();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const updateCartState = () => {
    setCartItems(getCart());
    setTotal(getCartTotal());
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#EAEDED]">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-gray-600 mb-6">
              Adicione produtos incríveis com até 70% de desconto!
            </p>
            <Link
              href="/"
              className="inline-block bg-[#FF9900] hover:bg-[#F08000] text-black font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Continuar Comprando
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Carrinho de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Lista de produtos */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow p-4 flex gap-4">
                <div className="relative w-24 h-32 flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <Link href={`/produto/${item.slug}`} className="font-bold text-gray-900 hover:text-[#C7511F] mb-1">
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">{item.volume}</p>
                  <p className="text-lg font-bold text-red-600 mb-2">
                    R$ {item.promoPrice.toFixed(2).replace('.', ',')}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    {/* Controle de quantidade */}
                    <div className="flex items-center gap-2 border rounded">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Botão remover */}
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Remover</span>
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Subtotal:</p>
                  <p className="text-xl font-bold text-gray-900">
                    R$ {(item.promoPrice * item.quantity).toFixed(2).replace('.', ',')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo do pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Resumo do Pedido</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} itens):</span>
                  <span>R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Frete:</span>
                  <span className="text-green-600 font-bold">GRÁTIS</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total:</span>
                  <span className="text-red-600">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-bold py-3 px-6 rounded-lg transition-colors text-center mb-3"
              >
                Finalizar Compra
              </Link>

              <Link
                href="/"
                className="block w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-6 rounded-lg border-2 border-gray-300 transition-colors text-center"
              >
                Continuar Comprando
              </Link>

              {/* Sorteio */}
              <div className="mt-6 bg-purple-50 border-2 border-purple-500 rounded-lg p-4">
                <p className="text-purple-900 font-bold text-center text-sm">
                  🎁 Você está concorrendo ao Royal Salute!
                </p>
              </div>

              {/* Segurança */}
              <div className="mt-4 text-center text-xs text-gray-600">
                <p>🔒 Compra 100% segura</p>
                <p>✓ Entrega garantida</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
