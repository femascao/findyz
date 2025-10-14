import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const user = await currentUser();
  if (!user) return Response.json({ error: "unauthorized" }, { status: 401 });

  const p = await prisma.userProfile.findUnique({
    where: { userId: user.id },
  });

  return Response.json(p || null);
}

export async function POST(req) {
  const user = await currentUser();
  if (!user) return Response.json({ error: "unauthorized" }, { status: 401 });

  const body = await req.json();
  const data = {
    displayName: body.displayName ?? null,
    headline: body.headline ?? null,
    bio: body.bio ?? null,
    location: body.location ?? null,
    sectors: Array.isArray(body.sectors) ? body.sectors : [],
    regions: Array.isArray(body.regions) ? body.regions : [],
    sizeMin: body.sizeMin ?? null,
    sizeMax: body.sizeMax ?? null,
    public: typeof body.public === "boolean" ? body.public : true,
  };

  const saved = await prisma.userProfile.upsert({
    where: { userId: user.id },
    update: data,
    create: { userId: user.id, ...data },
  });

  return Response.json(saved);
}
