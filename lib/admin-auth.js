// lib/admin-auth.js
export function assertAdmin(req) {
  const tokenFromHeader = req.headers.get("x-admin-token");
  const tokenFromQuery = req.nextUrl?.searchParams?.get("token");
  const token = tokenFromHeader || tokenFromQuery;

  const expected = process.env.ADMIN_TOKEN;

  if (!expected) {
    return new Response(
      JSON.stringify({ error: "ADMIN_TOKEN not configured" }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      },
    );
  }

  if (!token || token !== expected) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }
  return null; // autorizado
}
