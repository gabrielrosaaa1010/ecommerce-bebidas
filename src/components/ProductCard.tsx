'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow p-4 flex flex-col h-full">
      <Link href={`/produto/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            -{product.discount}%
          </div>
        </div>
      </Link>

      <div className="flex-1 flex flex-col">
        <Link href={`/produto/${product.slug}`}>
          <h3 className="font-bold text-gray-900 mb-1 hover:text-[#C7511F] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{product.volume}</p>

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xs text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
            <span className="text-2xl font-bold text-red-600">
              R$ {product.promoPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <p className="text-xs text-green-700 mb-3">
            ✓ Entrega em até 3 dias úteis
          </p>

          {/* Observação sobre limite de compra */}
          <div className="bg-yellow-50 border border-yellow-300 rounded p-2 mb-3">
            <p className="text-xs text-gray-700 text-center">
              ⚠️ Limite de 1 produto por compra
              <br />
              <span className="text-[10px] text-gray-600">
                (É possível fazer várias compras)
              </span>
            </p>
          </div>

          <Link
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#FF9900] hover:bg-[#F08000] text-black font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Comprar Agora
          </Link>
        </div>
      </div>
    </div>
  );
}
