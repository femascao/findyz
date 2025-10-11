import prisma from "@/lib/prisma";

export async function GET() {
  const rows = await prisma.listing.findMany({
    where: { status: "APPROVED" },
    include: { company: true },
    orderBy: { createdAt: "desc" },
  });
  return Response.json(rows);
}

export async function POST(req) {
  const body = await req.json();
  const { ownerEmail, ownerName, companyName, title, teaser } = body;
  if (!ownerEmail || !companyName || !title) {
    return Response.json(
      { error: "Campos obrigatórios ausentes" },
      { status: 400 },
    );
  }
  // cria (ou encontra) o user
  const user = await prisma.user.upsert({
    where: { email: ownerEmail },
    update: { name: ownerName || undefined },
    create: { email: ownerEmail, name: ownerName || null, role: "SELLER" },
  });
  // cria a empresa
  const company = await prisma.company.create({
    data: { ownerId: user.id, name: companyName },
  });
  // cria o listing em PENDING
  const listing = await prisma.listing.create({
    data: {
      companyId: company.id,
      title,
      teaser: teaser || null,
      status: "PENDING",
    },
  });
  return Response.json({
    ok: true,
    listingId: listing.id,
    status: listing.status,
  });
}
