"use client";

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
 * - Simulador usa API /api/valuation
 * - Form de contato envia para /api/register-interest (salva no BD)
 * - Paleta e logo preservados
 */
export default function Page() {
  // --- ESTADOS DO SIMULADOR ---
  const [valuation, setValuation] = useState(null);
  const [valSending, setValSending] = useState(false);
  const [valError, setValError] = useState(null);

  async function handleValuationSubmit(e) {
    e.preventDefault();
    setValSending(true);
    setValError(null);

    const data = new FormData(e.currentTarget);
    const payload = {
      receita: Number(data.get("receita")),
      lucro: Number(data.get("lucro")),
      tempo: Number(data.get("tempo")),
    };

    try {
      const res = await fetch("/api/valuation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Erro ao calcular");
      setValuation(String(json.valuation));
    } catch (err) {
      setValError(err.message || "Erro inesperado");
      setValuation(null);
    } finally {
      setValSending(false);
    }
  }

  // --- ESTADOS DO FORM DE CONTATO ---
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [feedbackType, setFeedbackType] = useState("idle"); // "ok" | "error" | "idle"

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    setSending(true);
    setFeedback(null);
    setFeedbackType("idle");

    const form = new FormData(e.currentTarget);
    const payload = {
      email: form.get("email"),
      nome: form.get("nome"),
      telefone: form.get("telefone"),
      interesse: form.get("interesse"),
      mensagem: form.get("mensagem"),
    };

    try {
      const res = await fetch("/api/register-interest", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Tenta ler JSON, mas não falha se não vier
      let data = null;
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        try {
          data = await res.json();
        } catch {}
      }

      // Se salvou (2xx), tratamos como sucesso MESMO se o JSON falhar
      if (res.ok) {
        setFeedback("Recebido! Entraremos em contacto em breve.");
        setFeedbackType("ok");
        e.currentTarget.reset();
        return;
      }

      // Se não for 2xx, tenta mostrar mensagem do backend
      const msg = data?.error || `Erro ${res.status}`;
      throw new Error(msg);
    } catch (_err) {
      setFeedback(
        "Erro de rede. Se estiver num Preview protegido do Vercel, abra o preview e aplique o bypass ou desative a proteção temporariamente.",
      );
      setFeedbackType("error");
    } finally {
      setSending(false);
    }
  }

  // --- PALETA / BRAND ---
  const brand = {
    primary: "#3448C5",
    tint1: "#CBD4F2",
    tint2: "#DDE1F9",
    paper: "#F6F7FB",
  };

  // --- COMPONENTES AUXILIARES ---
  const Section = ({ id, className = "", children }) => (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
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
    <div
      className="min-h-screen bg-[#F6F7FB] text-gray-900"
      style={{
        "--brand-primary": "#3448C5",
        "--tint1": "#CBD4F2",
        "--tint2": "#DDE1F9",
        "--paper": "#F6F7FB",
      }}
    >
      {/* Top bar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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
            className="hidden items-center gap-6 text-[15px] font-semibold text-[color:var(--brand-primary)] md:flex"
            style={{ "--brand-primary": brand.primary }}
          >
            <a href="#como-funciona" className="hover:underline">
              Como Funciona
            </a>
            <a href="#capital-hub" className="hover:underline">
              Capital Hub
            </a>
            <a href="#analise-ia" className="hover:underline">
              Análise IA
            </a>
            <a href="#cadastro" className="hover:underline">
              Contato
            </a>
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

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-28">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold leading-tight text-[color:var(--brand-primary)] md:text-5xl"
                style={{ "--brand-primary": brand.primary }}
              >
                Está a nascer o 1.º ecossistema digital de compra e venda de
                empresas em Portugal
              </motion.h1>
              <p className="mt-6 text-lg text-gray-700 md:text-xl">
                Conectamos empreendedores com negócios reais e verificados. Se
                quer comprar ou vender uma empresa em Portugal, o Findyz é o seu
                ponto de partida.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#cadastro"
                  className="inline-flex items-center gap-2 rounded-xl bg-[color:var(--brand-primary)] px-6 py-3 text-base text-white shadow-md transition hover:brightness-110"
                  style={{ "--brand-primary": brand.primary }}
                  aria-label="Cadastrar para o pré-lançamento"
                >
                  Começar agora <ArrowRight size={18} />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 ring-1 ring-black/10 hover:bg-white/70"
                >
                  Ver como funciona
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <ShieldCheck
                  size={18}
                  className="text-[color:var(--brand-primary)]"
                  style={{ "--brand-primary": brand.primary }}
                />
                Perfis verificados | Pagamento escrow | Apoio jurídico
              </div>
            </div>

            {/* Right hero card — Simulador */}
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles
                  className="text-[color:var(--brand-primary)]"
                  style={{ "--brand-primary": brand.primary }}
                />
                <h3
                  className="text-xl font-semibold text-[color:var(--brand-primary)]"
                  style={{ "--brand-primary": brand.primary }}
                >
                  Simulador rápido de valuation
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Preencha os campos e veja uma estimativa baseada em múltiplos
                médios do mercado.
              </p>

              <form
                onSubmit={handleValuationSubmit}
                className="mt-6 grid grid-cols-1 gap-3"
              >
                <input
                  name="colaboradores"
                  type="number"
                  placeholder="N.º de colaboradores"
                  className="w-full rounded-lg border p-3 shadow-sm"
                  aria-label="N.º de colaboradores"
                />
                <textarea
                  name="extra"
                  rows={3}
                  placeholder="Informações adicionais (ex: contratos, ativos, contexto)"
                  className="w-full rounded-lg border p-3 shadow-sm"
                />
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <input
                    name="receita"
                    type="number"
                    placeholder="Receita anual (€)"
                    className="w-full rounded-lg border p-3 shadow-sm"
                    aria-label="Receita anual"
                    required
                  />
                  <input
                    name="lucro"
                    type="number"
                    placeholder="Lucro líquido (€)"
                    className="w-full rounded-lg border p-3 shadow-sm"
                    aria-label="Lucro líquido"
                    required
                  />
                  <input
                    name="tempo"
                    type="number"
                    placeholder="Anos de operação"
                    className="w-full rounded-lg border p-3 shadow-sm"
                    aria-label="Tempo de operação"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={valSending}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--brand-primary)] py-3 text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ "--brand-primary": brand.primary }}
                  aria-label="Calcular Valuation"
                >
                  <Calculator size={18} />{" "}
                  {valSending ? "Calculando..." : "Calcular"}
                </button>
              </form>

              {valuation && (
                <div
                  className="mt-4 text-lg text-[color:var(--brand-primary)]"
                  style={{ "--brand-primary": brand.primary }}
                >
                  Valuation estimado: <strong>€ {valuation}</strong>
                </div>
              )}
              {valError && (
                <p className="mt-2 text-sm text-red-600">{valError}</p>
              )}
            </Card>
          </div>
        </Section>

        {/* COMO FUNCIONA */}
        <Section id="como-funciona" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2
              className="mb-6 text-3xl font-bold text-[color:var(--brand-primary)] md:text-4xl"
              style={{ "--brand-primary": brand.primary }}
            >
              Como funciona o Findyz?
            </h2>
            <p className="mb-10 max-w-3xl text-lg text-gray-700">
              Simplificamos a compra e venda com verificação, análise e apoio a
              capital — tudo num só fluxo.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: (
                    <UserPlus
                      className="text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    />
                  ),
                  title: "Perfil verificado",
                  desc: "Compradores e empresas passam por verificação antes de irem ao ar.",
                },
                {
                  icon: (
                    <Search
                      className="text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    />
                  ),
                  title: "Validação do negócio",
                  desc: "Revisão de dados financeiros e critérios de qualidade.",
                },
                {
                  icon: (
                    <Calculator
                      className="text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    />
                  ),
                  title: "Simulação de valuation",
                  desc: "Estimativa automática com base em múltiplos.",
                },
                {
                  icon: (
                    <Shuffle
                      className="text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    />
                  ),
                  title: "Matching inteligente",
                  desc: "Conectamos perfis compatíveis conforme interesse e região.",
                },
                {
                  icon: (
                    <Banknote
                      className="text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    />
                  ),
                  title: "Capital Hub",
                  desc: "Investidores, sócios e financiamento bancário ao seu alcance.",
                },
                {
                  icon: (
                    <Lock
                      className="text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    />
                  ),
                  title: "Fecho seguro",
                  desc: "Escrow, apoio jurídico e acompanhamento até à assinatura.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-start gap-4">
                    {item.icon}
                    <div>
                      <h4
                        className="text-xl font-semibold text-[color:var(--brand-primary)]"
                        style={{ "--brand-primary": brand.primary }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CAPITAL HUB */}
        <Section
          id="capital-hub"
          className="bg-[color:var(--tint1)] px-6 py-20"
          style={{ "--tint1": brand.tint1 }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-2 flex items-center gap-3">
              <Banknote
                className="text-[color:var(--brand-primary)]"
                style={{ "--brand-primary": brand.primary }}
              />
              <h2
                className="text-3xl font-bold text-[color:var(--brand-primary)] md:text-4xl"
                style={{ "--brand-primary": brand.primary }}
              >
                Findyz Capital Hub
              </h2>
            </div>
            <p
              className="max-w-4xl text-lg text-[color:var(--brand-primary)]"
              style={{ "--brand-primary": brand.primary }}
            >
              Soluções financeiras e parcerias estratégicas para fechar o
              negócio com segurança, flexibilidade e agilidade.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: <Lock />,
                  title: "Pagamento seguro (escrow)",
                  text: "Valor retido até a confirmação de ambas as partes.",
                },
                {
                  icon: <Users />,
                  title: "Busca por investidores",
                  text: "Relação com investidores individuais e fundos.",
                },
                {
                  icon: <UserPlus />,
                  title: "Sócios estratégicos",
                  text: "Parceiros que complementam capital e experiência.",
                },
                {
                  icon: <Banknote />,
                  title: "Financiamento bancário",
                  text: "Parcerias com bancos portugueses para crédito.",
                },
                {
                  icon: <Briefcase />,
                  title: "Leveraged Buyout",
                  text: "Estrutura onde a empresa adquirida financia parte da compra.",
                },
                {
                  icon: <Shuffle />,
                  title: "Modelo híbrido",
                  text: "Misture fontes e simule a melhor estrutura.",
                },
              ].map((f, i) => (
                <Card key={i} className="p-5">
                  <div className="flex items-start gap-3">
                    <div
                      className="mt-1 text-[color:var(--brand-primary)]"
                      style={{ "--brand-primary": brand.primary }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h4
                        className="text-lg font-semibold text-[color:var(--brand-primary)]"
                        style={{ "--brand-primary": brand.primary }}
                      >
                        {f.title}
                      </h4>
                      <p className="text-gray-700">{f.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* ANÁLISE IA */}
        <Section id="analise-ia" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-2 flex items-center gap-3">
              <Rocket
                className="text-[color:var(--brand-primary)]"
                style={{ "--brand-primary": brand.primary }}
              />
              <h2
                className="text-3xl font-bold text-[color:var(--brand-primary)] md:text-4xl"
                style={{ "--brand-primary": brand.primary }}
              >
                Análise com Inteligência Artificial
              </h2>
            </div>
            <p className="mb-6 max-w-3xl text-lg text-gray-800">
              Algoritmos suportam vendedores e compradores na avaliação de
              negócios: valuation, riscos e estruturação da compra.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <ul className="list-disc space-y-2 pl-5 text-gray-800">
                  <li>
                    <strong>Valuation automatizado:</strong> lucro, receita e
                    tempo de operação.
                  </li>
                  <li>
                    <strong>Modelos flexíveis:</strong> LBO, equity total ou
                    híbrido.
                  </li>
                  <li>
                    <strong>Análise de riscos:</strong> estabilidade, aspetos
                    legais e operacionais.
                  </li>
                  <li>
                    <strong>Comparação de múltiplos:</strong> benchmark com
                    mercado português.
                  </li>
                </ul>
              </Card>
              <Card className="flex items-center justify-center p-6">
                <div className="grid w-full grid-cols-2 gap-4">
                  {["Due diligence", "Múltiplos", "Risco", "Estrutura"].map(
                    (k, i) => (
                      <div
                        key={i}
                        className="rounded-xl bg-[color:var(--tint2)] p-4 text-center font-semibold text-[color:var(--brand-primary)]"
                        style={{
                          "--tint2": brand.tint2,
                          "--brand-primary": brand.primary,
                        }}
                      >
                        {k}
                      </div>
                    ),
                  )}
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Intermédio */}
        <Section className="px-6 py-16">
          <Card
            className="mx-auto max-w-6xl bg-[color:var(--tint2)] p-8 text-center md:p-10"
            style={{ "--tint2": brand.tint2 }}
          >
            <div
              className="flex items-center justify-center gap-3 text-[color:var(--brand-primary)]"
              style={{ "--brand-primary": brand.primary }}
            >
              <Building2 />
              <h3 className="text-2xl font-bold md:text-3xl">
                Tem uma empresa para vender? Ou quer comprar?
              </h3>
            </div>
            <p className="mx-auto mt-3 max-w-2xl text-gray-700">
              Registe o interesse e falamos consigo na abertura do
              pré-lançamento.
            </p>
            <div className="mt-6">
              <a
                href="#cadastro"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white shadow-md transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ backgroundColor: "#3448C5" }}
              >
                Registar interesse <ArrowRight size={18} />
              </a>
            </div>
          </Card>
        </Section>

        {/* FAQ */}
        <Section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-8 text-center text-3xl font-bold text-[color:var(--brand-primary)]"
              style={{ "--brand-primary": brand.primary }}
            >
              Perguntas Frequentes
            </h2>
            <div className="grid gap-6 text-base text-gray-800 md:grid-cols-2">
              {[
                {
                  q: "Quem pode comprar uma empresa no Findyz?",
                  a: "Qualquer empreendedor ou investidor verificado com interesse em adquirir negócios em funcionamento.",
                },
                {
                  q: "Como sei que os dados são confiáveis?",
                  a: "Todos os perfis — tanto de empresas como de compradores — são verificados antes de serem publicados.",
                },
                {
                  q: "É possível simular o valor do meu negócio?",
                  a: "Sim! Utilize o simulador para obter uma estimativa automática.",
                },
                {
                  q: "O Findyz cobra comissão?",
                  a: "Durante o pré-lançamento o acesso é gratuito. Depois, poderão existir planos e/ou comissão sobre transações concluídas.",
                },
              ].map((item, i) => (
                <Card key={i} className="p-5">
                  <h3 className="mb-1 font-semibold">{item.q}</h3>
                  <p>{item.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* FORM (API própria) */}
        <Section
          id="cadastro"
          className="bg-[color:var(--paper)] px-6 py-20"
          style={{ "--paper": brand.paper }}
        >
          <div className="mx-auto max-w-2xl">
            <h3
              className="mb-6 text-center text-2xl font-semibold text-[color:var(--brand-primary)]"
              style={{ "--brand-primary": brand.primary }}
            >
              Quer vender ou comprar uma empresa?
            </h3>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Seu e-mail"
                className="w-full rounded-lg border p-3 shadow-sm"
              />
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  className="w-full rounded-lg border p-3 shadow-sm"
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  className="w-full rounded-lg border p-3 shadow-sm"
                />
              </div>
              <select
                name="interesse"
                required
                className="w-full rounded-lg border p-3 shadow-sm"
              >
                <option value="">Tenho interesse em...</option>
                <option value="comprar">Comprar uma empresa</option>
                <option value="vender">Vender minha empresa</option>
              </select>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Conte mais sobre o que procura ou oferece"
                className="w-full rounded-lg border p-3 shadow-sm"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-[color:var(--brand-primary)] py-3 text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                style={{ "--brand-primary": brand.primary }}
              >
                {sending ? "Enviando..." : "Enviar"}
              </button>
              {feedback && (
                <p
                  className={`mt-2 text-sm ${
                    feedbackType === "ok" ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </Section>
      </main>

      <footer className="border-t border-black/5 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/findyz_logo_transparent.png"
              alt="Findyz"
              width={120}
              height={50}
            />
            <span className="text-sm text-gray-600">
              © {new Date().getFullYear()} Findyz. Todos os direitos
              reservados.
            </span>
          </div>
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#como-funciona" className="hover:underline">
              Como funciona
            </a>
            <a href="#capital-hub" className="hover:underline">
              Capital Hub
            </a>
            <a href="#analise-ia" className="hover:underline">
              Análise IA
            </a>
            <a href="#cadastro" className="hover:underline">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
