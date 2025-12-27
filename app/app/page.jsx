import { currentUser } from "@clerk/nextjs/server";

export default async function AppHome() {
  const user = await currentUser();

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600 }}>Área privada</h1>
      <p style={{ marginTop: 8 }}>
        Logado como: {user?.emailAddresses?.[0]?.emailAddress ?? "—"}
      </p>
    </div>
  );
}
