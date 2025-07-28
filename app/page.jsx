'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Lock, Search, Banknote, Users, Shuffle, UserPlus } from "lucide-react";

export default function Page() {
  const [valuation, setValuation] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  function handleValuationSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const receita = parseFloat(data.get("receita"));
    const lucro = parseFloat(data.get("lucro"));
    const tempo = parseFloat(data.get("tempo"));

    if (!isNaN(receita) && !isNaN(lucro) && !isNaN(tempo)) {
      // Fórmula mais robusta considerando múltiplos médios do mercado
      const margemLucro = lucro / receita;
      let multiploLucro = margemLucro > 0.2 ? 4 : margemLucro > 0.1 ? 3.5 : 3;
      let multiploReceita = tempo > 5 ? 0.4 : 0.3;
      const baseValuation = lucro * multiploLucro + receita * multiploReceita;
      setValuation(baseValuation.toFixed(2));
    } else {
      setValuation("Dados inválidos");
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F7FB] text-gray-900">
      <head>
        <meta name="google-site-verification" content="EdfXCh222S1MaK2DojP94z1dcDHFHMyV-hg05In1psY" />
        <title>Findyz | Compre ou venda empresas verificados em Portugal</title>
        <meta name="description" content="O Findyz liga empreendedores a empresas validadas em Portugal. Compre ou venda negócios com segurança, análise IA e financiamento inteligente." />
        <meta property="og:title" content="Findyz - Empresas verificadas à venda em Portugal" />
        <meta property="og:description" content="Plataforma digital para compra e venda de empresas verificados. Registe-se para o pré-lançamento." />
        <meta property="og:image" content="/assets/findyz_logo_transparent.png" />
        <link rel="icon" href="/assets/findyz_logo_transparent.png" type="image/png" />
      </head>

      {/* Header */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50 text-[#3448C5]">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center h-[80px]">
          <Image src="/assets/findyz_logo_transparent.png" alt="Logo Findyz" width={160} height={65} priority />
          <nav className="space-x-6 font-semibold text-base">
            <a href="#como-funciona" className="hover:underline">Como Funciona</a>
            <a href="#capital-hub" className="hover:underline">Capital Hub</a>
            <a href="#analise-ia" className="hover:underline">Análise IA</a>
            <a href="#cadastro" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">

        {/* Hero Section */}
        <section className="px-6 py-24 max-w-7xl mx-auto bg-[#F6F7FB] text-center">
          <h1 className="text-5xl font-bold leading-tight text-[#3448C5]">
            Está a nascer em Portugal o 1.º ecossistema digital de compra e venda de empresas
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            Conectamos empreendedores com negócios reais e verificados. Se quer comprar ou vender uma empresa em Portugal, o Findyz é o seu ponto de partida.
          </p>
          <div className="mt-10">
            <a
              href="#cadastro"
              className="inline-block bg-[#3448C5] hover:bg-[#A09CE5] text-white text-lg px-8 py-3 rounded-xl shadow-lg transition"
              aria-label="Cadastrar para o pré-lançamento"
            >
              Cadastrar para o pré-lançamento
            </a>
          </div>
        </section>

        {/* Facts Section */}
        <section className="bg-white py-20 text-gray-800">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl font-bold text-[#3448C5] mb-6">Porquê a Findyz?</h2>
            <p className="text-lg mb-4">Somos a primeira plataforma em Portugal a unir tecnologia, confiança e acesso a capital para facilitar a compra e venda de empresas.</p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
  {[
    {
      icon: <Search className="text-[#3448C5]" size={24} />,
      title: "Empresas e compradores verificados",
      desc: "Confiança em cada negócio."
    },
    {
      icon: <Lock className="text-[#3448C5]" size={24} />,
      title: "Valuation e diagnóstico com IA",
      desc: "Análise inteligente do negócio."
    },
    {
      icon: <Banknote className="text-[#3448C5]" size={24} />,
      title: "Parcerias com investidores",
      desc: "Conectamos com capital estratégico."
    },
    {
      icon: <Shuffle className="text-[#3448C5]" size={24} />,
      title: "Modelos financeiros flexíveis",
      desc: "Equity, LBO, híbrido — escolha o melhor."
    },
    {
    icon: <Briefcase className="text-[#3448C5]" size={24} />, title: "Suporte jurídico e estratégico", desc: "Do início ao fecho do negócio."
  },
  {
    icon: <Users className="text-[#3448C5]" size={24} />, title: "Apoio a searchers", desc: "Busca por investidores, estrutura de capital e due diligence."
  }]} className="mt-8 space-y-4 text-left text-lg"
>
{[
  {
    icon: <Users className="text-[#3448C5] mt-1" size={20} />,
    text: "A sucessão empresarial é um desafio urgente para milhares de PMEs."
  },
  {
    icon: <Briefcase className="text-[#3448C5] mt-1" size={20} />,
    text: "Empreender comprando uma empresa é até 80% menos arriscado do que começar do zero."
  },
  {
    icon: <Banknote className="text-[#3448C5] mt-1" size={20} />,
    text: "Há incentivos e financiamento disponíveis para aquisições empresariais."
  },
  {
    icon: <UserPlus className="text-[#3448C5] mt-1" size={20} />,
    text: "Muitas empresas familiares precisam de sucessores externos."
  },
  {
    icon: <Lock className="text-[#3448C5] mt-1" size={20} />,
    text: "Transparência e verificação são essenciais para garantir negócios seguros."
  },
  {
    icon: <Search className="text-[#3448C5] mt-1" size={20} />,
    text: "A procura por negócios rentáveis está a crescer entre jovens empreendedores."
  },
  {
    icon: <Shuffle className="text-[#3448C5] mt-1" size={20} />,
    text: "O modelo LBO permite comprar empresas usando o próprio fluxo de caixa do negócio."
  }
].map((item, i) => (
  <motion.div
    key={i}
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    transition={{ duration: 0.4 }}
    className="flex items-start gap-2"
  >
    {item.icon}
    <p>{item.text}</p>
  </motion.div>
))}

</motion.div>
          </div>
        </section>

        {/* Simulador com lógica avançada */}
        <section id="capital-hub" className="px-4 md:px-10 py-20 bg-[#F6F7FB]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-left text-[#3448C5]">Findyz Capital Hub</h2>
            <p className="mt-4 text-left text-[#3448C5] text-lg max-w-5xl">
              Oferecemos soluções financeiras e parcerias estratégicas para facilitar o fecho do negócio — com segurança, flexibilidade e agilidade.
           </p>

            <ul className="mt-8 space-y-4 text-lg text-gray-800 max-w-6xl mx-auto">
              <li className="flex items-start gap-2"><Lock className="text-[#3448C5] mt-1" size={20} /> <strong>Pagamento seguro (escrow)</strong> — com integração Mangopay, o valor fica retido até ambas as partes confirmarem o negócio</li>
              <li className="flex items-start gap-2"><Users className="text-[#3448C5] mt-1" size={20} /> <strong>Busca por investidores</strong> — conectamos com investidores individuais e fundos interessados em aquisições conjuntas</li>
              <li className="flex items-start gap-2"><UserPlus className="text-[#3448C5] mt-1" size={20} /> <strong>Busca por sócios estratégicos</strong> — encontre parceiros que complementam capital e experiência</li>
              <li className="flex items-start gap-2"><Banknote className="text-[#3448C5] mt-1" size={20} /> <strong>Financiamento bancário</strong> — parceria com bancos portugueses para facilitar crédito empresarial</li>
              <li className="flex items-start gap-2"><Briefcase className="text-[#3448C5] mt-1" size={20} /> <strong>Leveraged Buyout</strong> — estrutura em que a própria empresa adquirida financia parte da compra</li>
              <li className="flex items-start gap-2"><Shuffle className="text-[#3448C5] mt-1" size={20} /> <strong>Modelo híbrido</strong> — misture diferentes fontes e simule a melhor estrutura para o seu caso</li>
            </ul>
          </div>
        </section>

        <section className="bg-[#F6F7FB] py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#3448C5] mb-6">Simule o valor do seu negócio</h2>
            <p className="text-lg text-[#3448C5] mb-8">Preencha os dados abaixo e receba uma estimativa baseada no mercado</p>
            <form onSubmit={handleValuationSubmit} className="space-y-4 text-left">
              <input name="colaboradores" type="number" placeholder="N.º de colaboradores" className="w-full border p-3 rounded-lg shadow-sm" aria-label="N.º de colaboradores" required />
              <textarea name="extra" rows="3" placeholder="Informações adicionais relevantes (ex: contratos, ativos, contexto da venda)" className="w-full border p-3 rounded-lg shadow-sm"></textarea>
              <input name="receita" type="number" placeholder="Receita anual (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Receita anual" required />
              <input name="lucro" type="number" placeholder="Lucro líquido (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Lucro líquido" required />
              <input name="tempo" type="number" placeholder="Tempo de operação (anos)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Tempo de operação" required />
              <button type="submit" className="w-full bg-[#3448C5] hover:bg-[#A09CE5] text-white py-3 rounded-lg" aria-label="Calcular Valuation">Calcular</button>
            </form>
            {valuation && (
              <div className="mt-6 text-xl text-[#3448C5]">
                Valuation estimado: <strong>€ {valuation}</strong>
              </div>
            )}
          </div>
        </section>
        {/* FAQ Section */}
        <section className="px-6 py-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#3448C5] mb-10">Perguntas Frequentes</h2>
            <div className="space-y-6 text-gray-800 text-lg">
              <div>
                <h3 className="font-semibold">Quem pode comprar uma empresa no Findyz?</h3>
                <p>Qualquer empreendedor ou investidor verificado com interesse em adquirir negócios em funcionamento.</p>
              </div>
              <div>
                <h3 className="font-semibold">Como sei que os dados são confiáveis?</h3>
                <p>Todos os perfis — tanto de empresas como de compradores — são verificados antes de serem publicados.</p>
              </div>
              <div>
                <h3 className="font-semibold">É possível simular o valor do meu negócio?</h3>
                <p>Sim! Aceda à secção de simulação e insira os dados financeiros para obter uma estimativa automática.</p>
              </div>
              <div>
                <h3 className="font-semibold">O Findyz cobra comissão?</h3>
                <p>Durante o pré-lançamento, o acesso é gratuito. Após isso, poderá haver planos comissões apenas sobre transações bem-sucedidas.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Formulário de pré-cadastro */}
        <section id="cadastro" className="px-6 py-24 bg-gray-50">
          <h3 className="text-2xl font-semibold text-center mb-6 text-[#3448C5]">
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
            <button type="submit" className="w-full bg-[#3448C5] hover:bg-[#A09CE5] text-white py-3 rounded-lg">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

