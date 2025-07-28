'use client';

import Image from "next/image";
import { Briefcase, Lock, Search, Banknote, Users, Shuffle, UserPlus } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-gray-900">
      <head>
        <title>Findyz | Compre ou venda empresas verificados em Portugal</title>
        <meta name="google-site-verification" content="EdfXCh222S1MaK2DojP94z1dcDHFHMyV-hg05In1psY" />
        <meta name="description" content="O Findyz liga empreendedores a empresas validadas em Portugal. Compre ou venda negócios com segurança, análise IA e financiamento inteligente." />
        <meta property="og:title" content="Findyz - Empresas verificadas à venda em Portugal" />
        <meta property="og:description" content="Plataforma digital para compra e venda de empresas verificados. Registe-se para o pré-lançamento." />
        <meta property="og:image" content="/assets/findyz_logo_transparent.png" />
        <link rel="icon" href="/assets/findyz_logo_transparent.png" type="image/png" />
      </head>

      {/* Header */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50 text-primary">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <Image src="/assets/findyz_logo_transparent.png" alt="Logo Findyz" width={120} height={50} priority />
          <nav className="space-x-6 font-medium">
            <a href="#como-funciona" className="hover:underline">Como Funciona</a>
            <a href="#capital-hub" className="hover:underline">Capital Hub</a>
            <a href="#analise-ia" className="hover:underline">Análise IA</a>
            <a href="#cadastro" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">

        {/* Hero Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto bg-background text-center">
          <h1 className="text-5xl font-bold leading-tight text-primary">
            O 1.º ecossistema digital de compra e venda de empresas verificados — a nascer em Portugal
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            Conectamos empreendedores com negócios reais e validados. Se quer comprar ou vender uma empresa em Portugal, o Findyz é o seu ponto de partida.
          </p>
          <div className="mt-10">
            <a
              href="#cadastro"
              className="inline-block bg-primary hover:bg-secondary text-white text-lg px-8 py-3 rounded-xl shadow-lg transition"
              aria-label="Cadastrar para o pré-lançamento"
            >
              Cadastrar para o pré-lançamento
            </a>
          </div>
        </section>

        {/* Como Funciona */}
        <section id="como-funciona" className="px-6 py-24 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Como Funciona</h2>
          <ul className="space-y-4 text-lg text-gray-800 max-w-3xl mx-auto">
            <li className="flex items-start gap-2"><Search className="text-primary mt-1" size={20} /> Publique a sua empresa com avaliação automática e confidencialidade garantida</li>
            <li className="flex items-start gap-2"><Briefcase className="text-primary mt-1" size={20} /> Obtenha apoio em due diligence, análise financeira e estruturação jurídica</li>
            <li className="flex items-start gap-2"><UserPlus className="text-primary mt-1" size={20} /> Negocie diretamente com compradores qualificados dentro da plataforma</li>
            <li className="flex items-start gap-2"><Banknote className="text-primary mt-1" size={20} /> Conclua a venda com apoio de soluções de pagamento seguras, investidores e financiamento personalizado</li>
          </ul>
        </section>

        {/* Empreendedorismo por Aquisição */}
        <section className="px-6 py-24 bg-background text-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Empreendedorismo por Aquisição</h2>
            <p className="text-lg text-secondary mb-8">
              Comprar uma empresa existente é frequentemente uma decisão mais segura do que começar do zero.
            </p>
            <ul className="space-y-4 text-left text-lg text-gray-800">
              <li>✔️ Fluxo de caixa já existente e clientes fidelizados</li>
              <li>✔️ Estrutura operacional e equipa montada</li>
              <li>✔️ Menor risco do que lançar uma startup do zero</li>
              <li>✔️ Financiamento facilitado com ativos existentes</li>
              <li>✔️ Retorno mais rápido do investimento</li>
              <li>✔️ Acesso a setores com escassez de sucessão</li>
            </ul>
          </div>
        </section>

        {/* Oportunidades de Destaque */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Exemplos de Oportunidades</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
                titulo: "Loja de e-commerce lucrativa",
                setor: "Retalho Online",
                receita: "€220.000/ano",
                status: "A funcionar",
              }, {
                titulo: "Pequena fábrica de produção",
                setor: "Indústria alimentar",
                receita: "€390.000/ano",
                status: "Pronta para escalar",
              }, {
                titulo: "Empresa de software B2B",
                setor: "Tecnologia",
                receita: "€580.000/ano",
                status: "Com equipa completa",
              }].map((oportunidade, index) => (
                <div key={index} className="bg-background p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-primary mb-2">{oportunidade.titulo}</h3>
                  <p className="text-gray-700">Setor: {oportunidade.setor}</p>
                  <p className="text-gray-700">Receita: {oportunidade.receita}</p>
                  <p className="text-gray-600 italic">{oportunidade.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Simulador de Valuation */}
        <section className="bg-violet-50 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Simule o valor do seu negócio</h2>
            <p className="text-lg text-secondary mb-8">Preencha os dados abaixo e receba uma estimativa preliminar</p>
            <form className="space-y-4 text-left">
              <input type="number" placeholder="Receita anual (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Receita anual" />
              <input type="number" placeholder="Lucro líquido (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Lucro líquido" />
              <input type="number" placeholder="Tempo de operação (anos)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Tempo de operação" />
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg" aria-label="Calcular Valuation">Calcular</button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

