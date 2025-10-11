// /lib/escrow/mock.js
import prisma from "../prisma";

export async function hold({ dealId, amount }) {
  const externalId = `mockescrow_${dealId}_${Date.now()}`;
  await prisma.escrowTransaction.upsert({
    where: { dealId },
    update: { amount, status: "HOLD", externalId },
    create: { dealId, amount, status: "HOLD", externalId },
  });
  return { externalId, status: "HOLD" };
}

export async function release({ dealId }) {
  const tx = await prisma.escrowTransaction.update({
    where: { dealId },
    data: { status: "RELEASED" },
  });
  return { externalId: tx.externalId, status: tx.status };
}
