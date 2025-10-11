import prisma from "@/lib/prisma";
import { mockCallbackApprove } from "@/lib/kyc/mock";

export async function POST(req) {
  const { email } = await req.json();
  if (!email)
    return Response.json({ error: "email obrigatório" }, { status: 400 });
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user)
    return Response.json({ error: "user não encontrado" }, { status: 404 });
  const r = await mockCallbackApprove({ userId: user.id });
  return Response.json(r);
}
