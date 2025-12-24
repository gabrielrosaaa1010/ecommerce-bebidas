"use client";

import { useState } from 'react';
import { Gift, ChevronDown, ChevronUp } from 'lucide-react';

export default function SorteioSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id="sorteio" className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-4 px-4 my-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Compacto - Clicável */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-4 hover:opacity-90 transition-opacity"
        >
          <div className="flex items-center gap-3">
            <Gift className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <h2 className="text-xl md:text-2xl font-bold">
                COMPRE E CONCORRA A UM BLACK LABEL
              </h2>
              <p className="text-sm md:text-base">
                Compre, indique um amigo e ambos concorrem ao prêmio
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/646ce6df-85f3-4bfb-84cd-012b0f2f8ac6.jpg" 
              alt="Johnnie Walker Black Label" 
              className="w-12 h-12 md:w-16 md:h-16 object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg flex-shrink-0"
            />
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-yellow-400" />
            ) : (
              <ChevronDown className="w-6 h-6 text-yellow-400" />
            )}
          </div>
        </button>

        {/* Regras Expandíveis */}
        {isExpanded && (
          <div className="mt-6 bg-purple-800/50 rounded-lg p-6 animate-in slide-in-from-top duration-300">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">📋 Regras do Sorteio</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">1.</span>
                <span>Válido para compras acima de R$ 150,00 realizadas durante a promoção</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">2.</span>
                <span>Cada compra gera 1 número da sorte automaticamente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">3.</span>
                <span>Indique um amigo que também compre e ambos ganham +2 números extras</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">4.</span>
                <span>Sorteio realizado em 15/01/2025 via transmissão ao vivo no Instagram</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">5.</span>
                <span>Prêmio: 1 garrafa de Johnnie Walker Black Label (valor R$ 150,00)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 font-bold">6.</span>
                <span>Ganhador será contatado por e-mail e terá 48h para responder</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-yellow-200">
              * Promoção válida apenas para maiores de 18 anos. Consulte regulamento completo no site.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
