'use client';

import Link from 'next/link';
import { Search, ShoppingCart, MapPin, User, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCartCount } from '@/lib/cart';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Atualiza contagem inicial
    setCartCount(getCartCount());

    // Escuta mudanças no carrinho
    const handleCartUpdate = () => {
      setCartCount(getCartCount());
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  return (
    <header className="bg-[#131921] text-white">
      {/* Barra superior */}
      <div className="bg-[#232F3E] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Enviar para Brasil</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">Olá, faça seu login</Link>
            <Link href="#" className="hover:underline">Devoluções e Pedidos</Link>
          </div>
        </div>
      </div>

      {/* Barra principal */}
      <div className="py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="text-2xl font-bold">
              <span className="text-white">amazon</span>
              <span className="text-[#FF9900]">.com.br</span>
            </div>
          </Link>

          {/* Barra de busca */}
          <div className="flex-1 max-w-3xl hidden md:flex">
            <div className="flex w-full">
              <select className="bg-[#F3F3F3] text-black px-3 py-2 rounded-l border-none outline-none text-sm">
                <option>Todas</option>
                <option>Whisky</option>
                <option>Gin</option>
                <option>Cerveja</option>
              </select>
              <input
                type="text"
                placeholder="Pesquisar bebidas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 text-black outline-none"
              />
              <button className="bg-[#FF9900] px-4 py-2 rounded-r hover:bg-[#F08000] transition-colors">
                <Search className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Ícones direita */}
          <div className="flex items-center gap-4">
            <Link href="/carrinho" className="flex items-center gap-2 hover:border border-white p-2 rounded transition-all relative">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF9900] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="hidden sm:block text-sm font-bold">Carrinho</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu de categorias */}
      <div className="bg-[#232F3E] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-sm overflow-x-auto">
          <button className="flex items-center gap-2 hover:border border-white px-2 py-1 rounded whitespace-nowrap">
            <Menu className="w-4 h-4" />
            <span className="font-bold">Todas as categorias</span>
          </button>
          <Link href="/#whisky" className="hover:border border-white px-2 py-1 rounded whitespace-nowrap">
            Whisky
          </Link>
          <Link href="/#gin" className="hover:border border-white px-2 py-1 rounded whitespace-nowrap">
            Gin
          </Link>
          <Link href="/#cerveja" className="hover:border border-white px-2 py-1 rounded whitespace-nowrap">
            Cervejas
          </Link>
          <Link href="/#sorteio" className="text-[#FF9900] font-bold hover:border border-[#FF9900] px-2 py-1 rounded whitespace-nowrap">
            🎁 Sorteio Royal Salute
          </Link>
        </div>
      </div>
    </header>
  );
}
