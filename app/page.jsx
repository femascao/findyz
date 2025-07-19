'use client';

import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Logo + Hero Section */}
      <section className="px-6 py-10 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/findyz_logo_transparent.png"
            alt="Logo Findyz"
            width={160}
            height={60}
          />
        </div>
        <h1 className="text-5xl font-bold leading-tight text-blue-900">
          O 1º ecossistema completo de M&A digital em Portugal
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Usamos tecnologia para transformar a sucessão empresarial: simplificamos, financiamos e conectamos oportunidades reais com novos empreendedores.
        </p>
        <a
          href="#cadastro"
          className="mt-8 inline-block bg-violet-700 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-violet-800 transition"
        >
          Cadastrar para o pré-lançamento
        </a>
      </section>

      {/* How It Works */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900">Como Funciona</h2>
        <ul className="mt-6 space-y-3 text-lg text-gray-800">
          <li>🔍 Publique a sua empresa com avaliação automática e confidencialidade garantida</li>
          <li>📊 Obtenha apoio em due diligence, análise financeira e estruturação jurídica</li>
          <li>🤝 Negocie diretamente com compradores qualificados dentro da plataforma</li>
          <li>💼 Conclua a venda com apoio de soluções de pagamento seguras, investidores e financiamento personalizado</li>
        </ul>
      </section>

      {/* Financing and Payment */}
      <section className="px-6 py-16 bg-gray-100 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900">Findyz Capital Hub</h2>
        <p className="mt-4 text-center text-gray-700 text-lg">
          Oferecemos soluções financeiras e parcerias estratégicas para facilitar o fecho do negócio — com segurança, flexibilidade e agilidade.
        </p>
        <ul className="mt-8 space-y-4 text-lg text-gray-800">
          <li>🔒 <strong>Pagamento seguro (escrow)</strong> — com integração Mangopay, o valor fica retido até ambas as partes confirmarem o negócio</li>
          <li>👥 <strong>Busca por investidores</strong> — conectamos com investidores individuais e fundos interessados em aquisições conjuntas</li>
          <li>🤝 <strong>Busca por sócios estratégicos</strong> — encontre parceiros que complementam capital e experiência</li>
          <li>🏦 <strong>Financiamento bancário</strong> — parceria com bancos portugueses para facilitar crédito empresarial</li>
          <li>💼 <strong>Leveraged Buyout</strong> — estrutura em que a própria empresa adquirida financia parte da compra</li>
          <li>🔀 <strong>Modelo híbrido</strong> — misture diferentes fontes e simule a melhor estrutura para o seu caso</li>
        </ul>
      </section>

      {/* Formulário */}
      <section id="cadastro" className="px-6 py-16 bg-violet-50">
        <h3 className="text-2xl font-semibold text-center mb-6 text-violet-900">
          Quer vender ou comprar uma empresa?
        </h3>
        <form
          action="https://formspree.io/f/mldbeqnd"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Seu e-mail"
            className="w-full border p-3 rounded-lg shadow-sm"
          />
          <select
            name="interesse"
            required
            className="w-full border p-3 rounded-lg shadow-sm"
          >
            <option value="">Tenho interesse em...</option>
            <option value="comprar">Comprar uma empresa</option>
            <option value="vender">Vender minha empresa</option>
          </select>
          <textarea
            name="mensagem"
            rows="4"
            placeholder="Conte mais sobre o que procura ou oferece"
            className="w-full border p-3 rounded-lg shadow-sm"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}




