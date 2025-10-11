import prisma from "@/lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const { email, nome, telefone, interesse, mensagem } = body;
  if (!email || !interesse) {
    return Response.json(
      { error: "email e interesse são obrigatórios" },
      { status: 400 },
    );
  }
  const rec = await prisma.contactInterest.create({
    data: {
      email,
      name: nome || null,
      phone: telefone || null,
      interest: interesse,
      message: mensagem || null,
    },
  });
  return Response.json({ ok: true, id: rec.id });
}
