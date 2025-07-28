'use client';

import Image from "next/image";
import { useState } from "react";
import { Briefcase, Lock, Search, Banknote, Users, Shuffle, UserPlus } from "lucide-react";

export default function Page() {
  const [valuation, setValuation] = useState(null);

  function handleValuationSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const receita = parseFloat(data.get("receita"));
    const lucro = parseFloat(data.get("lucro"));
    const tempo = parseFloat(data.get("tempo"));

    if (!isNaN(receita) && !isNaN(lucro) && !isNaN(tempo)) {
      const baseValuation = lucro * 3 + receita * 0.3 + tempo * 5000;
      setValuation(baseValuation.toFixed(2));
    } else {
      setValuation("Dados inválidos");
    }
  }

  return (
    <div className="min-h-screen bg-background text-gray-900">
      <head>
        <title>Findyz | Compre ou venda empresas verificados em Portugal</title>
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
        <section id="como-funciona" className="px-6 py-24 max-w-7xl mx-auto bg-background">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Como Funciona</h2>
          <ul className="space-y-4 text-lg text-gray-800 max-w-3xl mx-auto">
            <li className="flex items-start gap-2"><Search className="text-primary mt-1" size={20} /> Publique a sua empresa com avaliação automática e confidencialidade garantida</li>
            <li className="flex items-start gap-2"><Briefcase className="text-primary mt-1" size={20} /> Obtenha apoio em due diligence, análise financeira e estruturação jurídica</li>
            <li className="flex items-start gap-2"><UserPlus className="text-primary mt-1" size={20} /> Negocie diretamente com compradores qualificados dentro da plataforma</li>
            <li className="flex items-start gap-2"><Banknote className="text-primary mt-1" size={20} /> Conclua a venda com apoio de soluções de pagamento seguras, investidores e financiamento personalizado</li>
          </ul>
        </section>

        {/* Simulador de Valuation com cálculo */}
        <section className="bg-violet-50 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Simule o valor do seu negócio</h2>
            <p className="text-lg text-secondary mb-8">Preencha os dados abaixo e receba uma estimativa preliminar</p>
            <form onSubmit={handleValuationSubmit} className="space-y-4 text-left">
              <input name="receita" type="number" placeholder="Receita anual (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Receita anual" />
              <input name="lucro" type="number" placeholder="Lucro líquido (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Lucro líquido" />
              <input name="tempo" type="number" placeholder="Tempo de operação (anos)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Tempo de operação" />
              <button type="submit" className="w-full bg-primary hover:bg-secondary text-white py-3 rounded-lg" aria-label="Calcular Valuation">Calcular</button>
            </form>
            {valuation && (
              <div className="mt-6 text-xl text-primary">
                Valuation estimado: <strong>€ {valuation}</strong>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

