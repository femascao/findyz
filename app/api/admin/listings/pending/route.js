import prisma from "@/lib/prisma";
import { assertAdmin } from "@/lib/admin-auth";

export async function GET(req) {
  const guard = assertAdmin(req);
  if (guard) return guard;
  const rows = await prisma.listing.findMany({
    where: { status: "PENDING" },
    include: { company: true },
  });
  return Response.json(rows);
}
