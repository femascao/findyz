import prisma from "@/lib/prisma";
import { startVerification } from "@/lib/kyc/mock";

export async function POST(req) {
  const { email } = await req.json();
  if (!email)
    return Response.json({ error: "email obrigatório" }, { status: 400 });
  const user = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email },
  });
  const r = await startVerification({ userId: user.id });
  return Response.json(r);
}
