'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Lock,
  Search,
  Banknote,
  Users,
  Shuffle,
  UserPlus,
  ArrowRight,
  Building2,
  Rocket,
  Sparkles,
  ShieldCheck,
  Calculator,
} from "lucide-react";

/**
 * Findyz landing page — versão JS (sem TypeScript) compatível com Next.js App Router
 * - Remove tipos TS e casts (ex.: useState<string>, e: React.FormEvent, "as any")
 * - Mantém logo e paleta (#3448C5 e tints)
 * - Usa CSS vars no inline style sem casts TS
 */
export default function Page() {
  const [valuation, setValuation] = useState(null);

  function handleValuationSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const receita = parseFloat(String(data.get("receita")));
    const lucro = parseFloat(String(data.get("lucro")));
    const tempo = parseFloat(String(data.get("tempo")));

    if (!isNaN(receita) && !isNaN(lucro) && !isNaN(tempo)) {
      const margemLucro = lucro / Math.max(receita, 1);
      const multiploLucro = margemLucro > 0.2 ? 4 : margemLucro > 0.1 ? 3.5 : 3;
      const multiploReceita = tempo > 5 ? 0.4 : 0.3;
      const baseValuation = lucro * multiploLucro + receita * multiploReceita;
      setValuation(baseValuation.toFixed(2));
    } else {
      setValuation("Dados inválidos");
    }
  }

  const brand = {
    primary: "#3448C5",
    tint1: "#CBD4F2",
    tint2: "#DDE1F9",
    paper: "#F6F7FB",
  };

  const Section = ({ id, className = "", children }) => (
    <section id={id} className={`scroll-mt-24 ${className}`}>{children}</section>
  );

  const Card = ({ children, className = "" }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl bg-white/90 shadow-sm ring-1 ring-black/5 ${className}`}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#F6F7FB] text-gray-900">
      {/* HERO + NAV */}
      <header
        className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 fixed top-0 left-0 w-full z-50 border-b border-black/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/findyz_logo_transparent.png"
              alt="Logo Findyz"
              width={150}
              height={60}
              priority
            />
          </div>
          <nav
            className="hidden md:flex items-center gap-6 font-semibold text-[15px] text-[color:var(--brand-primary)]"
            style={{ "--brand-primary": brand.primary }}
          >
            <a href="#como-funciona" className="hover:underline">Como Funciona</a>
            <a href="#capital-hub" className="hover:underline">Capital Hub</a>
            <a href="#analise-ia" className="hover:underline">Análise IA</a>
            <a href="#cadastro" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* HERO */}
        <Section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(1200px 600px at 50% -100px, rgba(52,72,197,0.25), transparent), linear-gradient(180deg, #CBD4F2, #F6F7FB)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 py-24 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold leading-tight text-[color:var(--brand-primary)]"
                style={{ "--brand-primary": brand.primary }}
              >
                Está a nascer o 1.º ecossistema digital de compra e venda de empresas em Portugal
              </motion.h1>
              <p className="mt-6 text-lg md:text-xl text-gray-700">
                Conectamos empreendedores com negócios reais e verificados. Se quer comprar ou vender uma empresa em Portugal, o Findyz é o seu ponto de partida.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cadastro"
                  className="inline-flex items-center gap-2 bg-[color:var(--brand-primary)] hover:brightness-110 text-white text-base px-6 py-3 rounded-xl shadow-md transition"
                  style={{ "--brand-primary": brand.primary }}
                  aria-label="Cadastrar para o pré-lançamento"
                >
                  Começar agora <ArrowRight size={18} />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl ring-1 ring-black/10 bg-white hover:bg-white/70"
                >
                  Ver como funciona
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <ShieldCheck size={18} className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />
                Perfis verificados | Pagamento escrow | Apoio jurídico
              </div>
            </div>

            {/* Right hero card */}
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />
                <h3 className="text-xl font-semibold text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>
                  Simulador rápido de valuation
                </h3>
              </div>
              <p className="mt-2 text-gray-700 text-sm">
                Preencha os campos e veja uma estimativa baseada em múltiplos médios do mercado.
              </p>
              <form onSubmit={handleValuationSubmit} className="mt-6 grid grid-cols-1 gap-3">
                <input name="colaboradores" type="number" placeholder="N.º de colaboradores" className="w-full border p-3 rounded-lg shadow-sm" aria-label="N.º de colaboradores" required />
                <textarea name="extra" rows={3} placeholder="Informações adicionais (ex: contratos, ativos, contexto)" className="w-full border p-3 rounded-lg shadow-sm" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input name="receita" type="number" placeholder="Receita anual (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Receita anual" required />
                  <input name="lucro" type="number" placeholder="Lucro líquido (€)" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Lucro líquido" required />
                  <input name="tempo" type="number" placeholder="Anos de operação" className="w-full border p-3 rounded-lg shadow-sm" aria-label="Tempo de operação" required />
                </div>
                <button type="submit" className="w-full bg-[color:var(--brand-primary)] hover:brightness-110 text-white py-3 rounded-lg flex items-center justify-center gap-2"
                  style={{ "--brand-primary": brand.primary }}
                  aria-label="Calcular Valuation"
                >
                  <Calculator size={18} /> Calcular
                </button>
              </form>
              {valuation && (
                <div className="mt-4 text-lg text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>
                  Valuation estimado: <strong>€ {valuation}</strong>
                </div>
              )}
            </Card>
          </div>
        </Section>

        {/* COMO FUNCIONA */}
        <Section id="como-funciona" className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-primary)] mb-6" style={{ "--brand-primary": brand.primary }}>Como funciona o Findyz?</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl">
              Simplificamos a compra e venda com verificação, análise e apoio a capital — tudo num só fluxo.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <UserPlus className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />, title: "Perfil verificado",
                  desc: "Compradores e empresas passam por verificação antes de irem ao ar."
                },
                {
                  icon: <Search className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />, title: "Validação do negócio",
                  desc: "Revisão de dados financeiros e critérios de qualidade."
                },
                {
                  icon: <Calculator className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />, title: "Simulação de valuation",
                  desc: "Estimativa automática com base em múltiplos."
                },
                {
                  icon: <Shuffle className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />, title: "Matching inteligente",
                  desc: "Conectamos perfis compatíveis conforme interesse e região."
                },
                {
                  icon: <Banknote className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />, title: "Capital Hub",
                  desc: "Investidores, sócios e financiamento bancário ao seu alcance."
                },
                {
                  icon: <Lock className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />, title: "Fecho seguro",
                  desc: "Escrow, apoio jurídico e acompanhamento até à assinatura."
                },
              ].map((item, i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h4 className="text-xl font-semibold text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>{item.title}</h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CAPITAL HUB */}
        <Section id="capital-hub" className="px-6 py-20 bg-[color:var(--tint1)]" style={{ "--tint1": brand.tint1 }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Banknote className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>Findyz Capital Hub</h2>
            </div>
            <p className="text-[color:var(--brand-primary)] text-lg max-w-4xl" style={{ "--brand-primary": brand.primary }}>
              Soluções financeiras e parcerias estratégicas para fechar o negócio com segurança, flexibilidade e agilidade.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                { icon: <Lock />, title: "Pagamento seguro (escrow)", text: "Valor retido até a confirmação de ambas as partes." },
                { icon: <Users />, title: "Busca por investidores", text: "Relação com investidores individuais e fundos." },
                { icon: <UserPlus />, title: "Sócios estratégicos", text: "Parceiros que complementam capital e experiência." },
                { icon: <Banknote />, title: "Financiamento bancário", text: "Parcerias com bancos portugueses para crédito." },
                { icon: <Briefcase />, title: "Leveraged Buyout", text: "Estrutura onde a empresa adquirida financia parte da compra." },
                { icon: <Shuffle />, title: "Modelo híbrido", text: "Misture fontes e simule a melhor estrutura." },
              ].map((f, i) => (
                <Card key={i} className="p-5">
                  <div className="flex gap-3 items-start">
                    <div className="mt-1 text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>{f.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>{f.title}</h4>
                      <p className="text-gray-700">{f.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* ANÁLISE IA */}
        <Section id="analise-ia" className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }} />
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>Análise com Inteligência Artificial</h2>
            </div>
            <p className="text-lg text-gray-800 mb-6 max-w-3xl">
              Algoritmos suportam vendedores e compradores na avaliação de negócios: valuation, riscos e estruturação da compra.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li><strong>Valuation automatizado:</strong> lucro, receita e tempo de operação.</li>
                  <li><strong>Modelos flexíveis:</strong> LBO, equity total ou híbrido.</li>
                  <li><strong>Análise de riscos:</strong> estabilidade, aspetos legais e operacionais.</li>
                  <li><strong>Comparação de múltiplos:</strong> benchmark com mercado português.</li>
                </ul>
              </Card>
              <Card className="p-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {["Due diligence", "Múltiplos", "Risco", "Estrutura"].map((k, i) => (
                    <div key={i} className="rounded-xl bg-[color:var(--tint2)] p-4 text-center text-[color:var(--brand-primary)] font-semibold" style={{ "--tint2": brand.tint2, "--brand-primary": brand.primary }}>
                      {k}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Intermédio */}
        <Section className="px-6 py-16" >
          <Card className="max-w-6xl mx-auto p-8 md:p-10 text-center bg-[color:var(--tint2)]" style={{ "--tint2": brand.tint2 }}>
            <div className="flex items-center justify-center gap-3 text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>
              <Building2 />
              <h3 className="text-2xl md:text-3xl font-bold">Tem uma empresa para vender? Ou quer comprar?</h3>
            </div>
            <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Registe o interesse e falamos consigo na abertura do pré‑lançamento.</p>
            <div className="mt-6">
              <a href="#cadastro" className="inline-flex items-center gap-2 bg-[color:var(--brand-primary)] hover:brightness-110 text-white px-6 py-3 rounded-xl" style={{ "--brand-primary": brand.primary }}>
                Registar interesse <ArrowRight size={18} />
              </a>
            </div>
          </Card>
        </Section>

        {/* FAQ */}
        <Section className="px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[color:var(--brand-primary)] mb-8" style={{ "--brand-primary": brand.primary }}>Perguntas Frequentes</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-800 text-base">
              {[
                { q: "Quem pode comprar uma empresa no Findyz?", a: "Qualquer empreendedor ou investidor verificado com interesse em adquirir negócios em funcionamento." },
                { q: "Como sei que os dados são confiáveis?", a: "Todos os perfis — tanto de empresas como de compradores — são verificados antes de serem publicados." },
                { q: "É possível simular o valor do meu negócio?", a: "Sim! Utilize o simulador para obter uma estimativa automática." },
                { q: "O Findyz cobra comissão?", a: "Durante o pré‑lançamento o acesso é gratuito. Depois, poderão existir planos e/ou comissão sobre transações concluídas." },
              ].map((item, i) => (
                <Card key={i} className="p-5">
                  <h3 className="font-semibold mb-1">{item.q}</h3>
                  <p>{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* FORM */}
        <Section id="cadastro" className="px-6 py-20 bg-[color:var(--paper)]" style={{ "--paper": brand.paper }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-6 text-[color:var(--brand-primary)]" style={{ "--brand-primary": brand.primary }}>
              Quer vender ou comprar uma empresa?
            </h3>
            <form action="https://formspree.io/f/mldbeqnd" method="POST" className="space-y-4">
              <input type="email" name="email" required placeholder="Seu e‑mail" className="w-full border p-3 rounded-lg shadow-sm" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input type="text" name="nome" placeholder="Nome" className="w-full border p-3 rounded-lg shadow-sm" />
                <input type="tel" name="telefone" placeholder="Telefone" className="w-full border p-3 rounded-lg shadow-sm" />
              </div>
              <select name="interesse" required className="w-full border p-3 rounded-lg shadow-sm">
                <option value="">Tenho interesse em...</option>
                <option value="comprar">Comprar uma empresa</option>
                <option value="vender">Vender minha empresa</option>
              </select>
              <textarea name="mensagem" rows={4} placeholder="Conte mais sobre o que procura ou oferece" className="w-full border p-3 rounded-lg shadow-sm" />
              <button type="submit" className="w-full bg-[color:var(--brand-primary)] hover:brightness-110 text-white py-3 rounded-lg" style={{ "--brand-primary": brand.primary }}>Enviar</button>
            </form>
          </div>
        </Section>
      </main>

      <footer className="px-6 py-10 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/findyz_logo_transparent.png" alt="Findyz" width={120} height={50} />
            <span className="text-sm text-gray-600">© {new Date().getFullYear()} Findyz. Todos os direitos reservados.</span>
          </div>
          <div className="text-sm text-gray-600 flex gap-4">
            <a href="#como-funciona" className="hover:underline">Como funciona</a>
            <a href="#capital-hub" className="hover:underline">Capital Hub</a>
            <a href="#analise-ia" className="hover:underline">Análise IA</a>
            <a href="#cadastro" className="hover:underline">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

