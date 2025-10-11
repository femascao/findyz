import prisma from "@/lib/prisma";
import { assertAdmin } from "@/lib/admin-auth";

export async function POST(req, { params }) {
  const guard = assertAdmin(req);
  if (guard) return guard;
  const { id } = params;
  await prisma.listing.update({ where: { id }, data: { status: "APPROVED" } });
  return Response.json({ ok: true });
}
