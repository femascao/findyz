// /lib/admin-auth.js
export function assertAdmin(req) {
  const header = req.headers.get("x-admin-token");
  if (!header || header !== process.env.ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
    });
  }
  return null; // ok
}
