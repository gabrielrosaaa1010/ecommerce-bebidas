'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#232F3E] text-white mt-12">
      {/* Voltar ao topo */}
      <div className="bg-[#37475A] py-4 text-center hover:bg-[#485769] cursor-pointer transition-colors">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-bold">
          Voltar ao topo
        </button>
      </div>

      {/* Links principais */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Conheça-nos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Sobre a Amazon</Link></li>
              <li><Link href="#" className="hover:underline">Carreiras</Link></li>
              <li><Link href="#" className="hover:underline">Sustentabilidade</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Ganhe Dinheiro</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Venda na Amazon</Link></li>
              <li><Link href="#" className="hover:underline">Seja um Afiliado</Link></li>
              <li><Link href="#" className="hover:underline">Anuncie seus produtos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Pagamento</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Formas de pagamento</Link></li>
              <li><Link href="#" className="hover:underline">Parcelamento</Link></li>
              <li><Link href="#" className="hover:underline">Cartão Amazon</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Deixe-nos ajudá-lo</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Sua conta</Link></li>
              <li><Link href="#" className="hover:underline">Frete e prazo de entrega</Link></li>
              <li><Link href="#" className="hover:underline">Devoluções e reembolsos</Link></li>
              <li><Link href="#" className="hover:underline">Ajuda</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-[#3a4553] py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Link href="#" className="hover:underline">Condições de Uso</Link>
            <span className="hidden sm:block">|</span>
            <Link href="#" className="hover:underline">Notificação de Privacidade</Link>
            <span className="hidden sm:block">|</span>
            <Link href="#" className="hover:underline">Cookies</Link>
            <span className="hidden sm:block">|</span>
            <Link href="#" className="hover:underline">Anúncios baseados em interesses</Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            © 2024 Amazon.com.br - Todos os direitos reservados
          </p>
          <p className="mt-2 text-xs text-yellow-500">
            ⚠️ Venda de bebidas alcoólicas proibida para menores de 18 anos
          </p>
        </div>
      </div>
    </footer>
  );
}
