// /lib/kyc/mock.js
import prisma from "../prisma";

export async function startVerification({ userId }) {
  const externalId = `mockkyc_${userId}_${Date.now()}`;
  await prisma.kycCheck.upsert({
    where: { userId },
    update: { status: "PENDING", externalId },
    create: { userId, status: "PENDING", externalId },
  });
  return { verificationId: externalId, status: "PENDING" };
}

export async function mockCallbackApprove({ userId }) {
  await prisma.kycCheck.update({
    where: { userId },
    data: { status: "APPROVED" },
  });
  return { ok: true };
}
