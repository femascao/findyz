import prisma from "@/lib/prisma";
import { Resend } from "resend";

// Instancia o Resend só se a env existir (não quebra o endpoint se não configurar e-mail)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req) {
  try {
    // 1) Ler JSON do corpo
    const body = await req.json().catch(() => null);
    if (!body) {
      return Response.json({ error: "JSON inválido" }, { status: 400 });
    }

    const { email, nome, telefone, interesse, mensagem } = body;

    // 2) Regras mínimas
    if (!email || !interesse) {
      return Response.json(
        { error: "Campos obrigatórios: email e interesse" },
        { status: 400 },
      );
    }

    // 3) Criar registo no banco
    const rec = await prisma.contactInterest.create({
      data: {
        email: String(email),
        name: nome ? String(nome) : null,
        phone: telefone ? String(telefone) : null,
        interest: String(interesse),
        message: mensagem ? String(mensagem) : null,
      },
    });

    // 4) (Opcional) Enviar notificação por e-mail com Resend
    //    - Configure no Vercel: RESEND_API_KEY (obrigatória), RESEND_FROM, RESEND_TO (opcionais)
    //    - O domínio do "from" precisa estar verificado no painel da Resend
    if (resend) {
      const FROM = process.env.RESEND_FROM || "Findyz <geral@findyz.pt>";
      const TO = process.env.RESEND_TO || "geral@findyz.pt";

      try {
        await resend.emails.send({
          from: FROM,
          to: TO,
          subject: "Novo interesse no Findyz",
          text:
            `Email: ${rec.email}\n` +
            `Nome: ${rec.name || "-"}\n` +
            `Tel: ${rec.phone || "-"}\n` +
            `Interesse: ${rec.interest}\n` +
            `Mensagem: ${rec.message || "-"}\n` +
            `Quando: ${rec.createdAt.toISOString?.() ?? String(rec.createdAt)}`,
        });
      } catch (e) {
        console.error("Resend error:", e);
        // Não falha a requisição por causa do e-mail
      }
    }

    // 5) Resposta de sucesso
    return Response.json({ ok: true, id: rec.id }, { status: 201 });
  } catch (e) {
    console.error("POST /api/register-interest error:", e);
    return Response.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}
