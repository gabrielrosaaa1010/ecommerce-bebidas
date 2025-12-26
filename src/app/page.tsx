'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

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

export default function EntregaPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('produto') || '';

  const checkoutLink = PERFECTPAY_LINKS[slug];

  const [form, setForm] = useState({
    nome: '',
    cpf: '',
    endereco: '',
  });

  const handleSubmit = () => {
    if (!form.nome || !form.cpf || !form.endereco) {
      alert('Preencha todos os campos');
      return;
    }

    // 👉 Aqui você pode salvar em backend depois (opcional)
    window.location.href = checkoutLink;
  };

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header />

      <main className="max-w-xl mx-auto bg-white p-6 mt-10 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4">
          Dados para Entrega
        </h1>

        <input
          className="w-full border p-3 rounded mb-3"
          placeholder="Nome completo"
          onChange={e => setForm({ ...form, nome: e.target.value })}
        />

        <input
          className="w-full border p-3 rounded mb-3"
          placeholder="CPF"
          onChange={e => setForm({ ...form, cpf: e.target.value })}
        />

        <textarea
          className="w-full border p-3 rounded mb-4"
          placeholder="Endereço completo"
          onChange={e => setForm({ ...form, endereco: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-[#FFD814] hover:bg-[#F7CA00] font-bold py-4 rounded"
        >
          Continuar para Pagamento
        </button>
      </main>

      <Footer />
    </div>
  );
}
