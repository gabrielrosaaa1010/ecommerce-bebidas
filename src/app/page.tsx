'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import ProductCard from '@/components/ProductCard';
import SorteioSection from '@/components/SorteioSection';
import { getProductsByCategory } from '@/lib/products';

export default function Home() {
  const whiskys = getProductsByCategory('whisky');
  const gins = getProductsByCategory('gin');
  const cervejas = getProductsByCategory('cerveja');

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />
      <CountdownTimer />

      <div className="bg-gradient-to-r from-[#FF9900] to-[#FF6B00] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            QUEIMA DE ESTOQUE DE VIRADA DE ANO
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-2">
            70% DE DESCONTO - AMAZON BRASIL
          </p>
          <p className="text-lg md:text-xl">
            Promoção válida por tempo limitado. Entrega em até 3 dias.
          </p>
          <p className="text-sm mt-4 bg-red-600 inline-block px-4 py-2 rounded font-bold">
            ⚠️ OFERTA EXPIRA QUANDO O TEMPO ACABAR
          </p>
        </div>
      </div>

      <SorteioSection />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <section id="whisky" className="mb-12">
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Whisky Premium</h2>
            <p className="text-gray-600">As melhores marcas com até 70% de desconto</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whiskys.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="gin" className="mb-12">
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Gin Importado</h2>
            <p className="text-gray-600">Gins premium com preços imperdíveis</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gins.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="cerveja" className="mb-12">
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Cervejas Importadas</h2>
            <p className="text-gray-600">As melhores cervejas do mundo em promoção</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cervejas.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 text-center">
          <p className="text-lg font-bold text-gray-900 mb-2">⚠️ AVISO IMPORTANTE</p>
          <p className="text-gray-700">
            A venda de bebidas alcoólicas é proibida para menores de 18 anos.
            <br />
            Beba com moderação. Se beber, não dirija.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
