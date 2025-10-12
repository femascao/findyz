import prisma from "@/lib/prisma";
import { assertAdmin } from "@/lib/admin-auth";

export async function GET(req) {
  const guard = assertAdmin(req);
  if (guard) return guard;

  try {
    const rows = await prisma.contactInterest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return Response.json(rows, {
      headers: { "content-type": "application/json" },
    });
  } catch (e) {
    console.error("GET /api/admin/interests error:", e);
    return Response.json(
      { error: "DB error", detail: e?.message || String(e) },
      { status: 500 },
    );
  }
}
