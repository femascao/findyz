'use client';

import Image from "next/image";
import { Briefcase, Lock, Search, Banknote, Users, Shuffle, UserPlus } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <head>
        <title>Findyz - Ecossistema de M&A</title>
        <meta name="google-site-verification" content="EdfXCh222S1MaK2DojP94z1dcDHFHMyV-hg05In1psY" />
        <link rel="icon" href="/assets/findyz_logo_transparent.png" type="image/png" />
      </head>

      {/* Header */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <Image src="/assets/findyz_logo_transparent.png" alt="Logo Findyz" width={120} height={50} />
          <nav className="space-x-6 text-violet-900 font-medium">
            <a href="#como-funciona" className="hover:underline">Como Funciona</a>
            <a href="#capital-hub" className="hover:underline">Capital Hub</a>
            <a href="#analise-ia" className="hover:underline">Análise IA</a>
            <a href="#cadastro" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">

        {/* Hero Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto bg-violet-50 text-center">
          <h1 className="text-5xl font-bold leading-tight text-violet-900">
            O 1º ecossistema completo de M&A digital em Portugal
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            Usamos tecnologia para transformar a sucessão empresarial: simplificamos, financiamos e conectamos oportunidades reais com novos empreendedores.
          </p>
          <div className="mt-10">
            <a
              href="#cadastro"
              className="inline-block bg-violet-700 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-violet-800 transition"
            >
              Cadastrar para o pré-lançamento
            </a>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="px-6 py-24 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-violet-900 mb-6">Como Funciona</h2>
          <ul className="space-y-4 text-lg text-gray-800 max-w-3xl mx-auto">
            <li className="flex items-start gap-2"><Search className="text-violet-700 mt-1" size={20} /> Publique a sua empresa com avaliação automática e confidencialidade garantida</li>
            <li className="flex items-start gap-2"><Briefcase className="text-violet-700 mt-1" size={20} /> Obtenha apoio em due diligence, análise financeira e estruturação jurídica</li>
            <li className="flex items-start gap-2"><UserPlus className="text-violet-700 mt-1" size={20} /> Negocie diretamente com compradores qualificados dentro da plataforma</li>
            <li className="flex items-start gap-2"><Banknote className="text-violet-700 mt-1" size={20} /> Conclua a venda com apoio de soluções de pagamento seguras, investidores e financiamento personalizado</li>
          </ul>
        </section>

        {/* Capital Hub */}
        <section id="capital-hub" className="px-6 py-24 bg-violet-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-violet-900">Findyz Capital Hub</h2>
            <p className="mt-4 text-center text-gray-700 text-lg max-w-3xl mx-auto">
              Oferecemos soluções financeiras e parcerias estratégicas para facilitar o fecho do negócio — com segurança, flexibilidade e agilidade.
            </p>
            <ul className="mt-8 space-y-4 text-lg text-gray-800 max-w-3xl mx-auto">
              <li className="flex items-start gap-2"><Lock className="text-violet-700 mt-1" size={20} /> <strong>Pagamento seguro (escrow)</strong> — com integração Mangopay, o valor fica retido até ambas as partes confirmarem o negócio</li>
              <li className="flex items-start gap-2"><Users className="text-violet-700 mt-1" size={20} /> <strong>Busca por investidores</strong> — conectamos com investidores individuais e fundos interessados em aquisições conjuntas</li>
              <li className="flex items-start gap-2"><UserPlus className="text-violet-700 mt-1" size={20} /> <strong>Busca por sócios estratégicos</strong> — encontre parceiros que complementam capital e experiência</li>
              <li className="flex items-start gap-2"><Banknote className="text-violet-700 mt-1" size={20} /> <strong>Financiamento bancário</strong> — parceria com bancos portugueses para facilitar crédito empresarial</li>
              <li className="flex items-start gap-2"><Briefcase className="text-violet-700 mt-1" size={20} /> <strong>Leveraged Buyout</strong> — estrutura em que a própria empresa adquirida financia parte da compra</li>
              <li className="flex items-start gap-2"><Shuffle className="text-violet-700 mt-1" size={20} /> <strong>Modelo híbrido</strong> — misture diferentes fontes e simule a melhor estrutura para o seu caso</li>
            </ul>
          </div>
        </section>

        {/* Análise com IA */}
        <section id="analise-ia" className="px-6 py-24 bg-violet-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-violet-900">Análise inteligente com IA</h2>
            <p className="mt-4 text-gray-700 text-lg">
              Envie os dados financeiros da sua empresa e receba uma análise automatizada com:
            </p>
            <ul className="text-left mt-4 space-y-2 text-gray-800">
              <li>• Estimativa de valuation</li>
              <li>• Diagnóstico de maturidade</li>
              <li>• Nível de atratividade para investidores</li>
            </ul>
            <form action="https://formspree.io/f/mldbeqnd" method="POST" className="mt-8 space-y-4 text-left">
              <input type="text" name="empresa" placeholder="Nome da empresa" required className="w-full border p-3 rounded-lg shadow-sm" />
              <input type="text" name="receita" placeholder="Receita anual (€)" required className="w-full border p-3 rounded-lg shadow-sm" />
              <input type="text" name="lucro" placeholder="Lucro líquido anual (€)" required className="w-full border p-3 rounded-lg shadow-sm" />
              <input type="text" name="funcionarios" placeholder="Nº de funcionários" required className="w-full border p-3 rounded-lg shadow-sm" />
              <input type="text" name="setor" placeholder="Setor de atuação" required className="w-full border p-3 rounded-lg shadow-sm" />
              <input type="text" name="tempo" placeholder="Tempo de operação" required className="w-full border p-3 rounded-lg shadow-sm" />
              <textarea name="info" rows="4" placeholder="Outras informações relevantes" className="w-full border p-3 rounded-lg shadow-sm"></textarea>
              <button type="submit" className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition">Submeter</button>
            </form>
          </div>
        </section>

        {/* Formulário de contato */}
        <section id="cadastro" className="px-6 py-24 bg-gray-50">
          <h3 className="text-2xl font-semibold text-center mb-6 text-violet-900">
            Quer vender ou comprar uma empresa?
          </h3>
          <form action="https://formspree.io/f/mldbeqnd" method="POST" className="max-w-2xl mx-auto space-y-4">
            <input type="email" name="email" required placeholder="Seu e-mail" className="w-full border p-3 rounded-lg shadow-sm" />
            <select name="interesse" required className="w-full border p-3 rounded-lg shadow-sm">
              <option value="">Tenho interesse em...</option>
              <option value="comprar">Comprar uma empresa</option>
              <option value="vender">Vender minha empresa</option>
            </select>
            <textarea name="mensagem" rows="4" placeholder="Conte mais sobre o que procura ou oferece" className="w-full border p-3 rounded-lg shadow-sm"></textarea>
            <button type="submit" className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

