// middleware.js (JS)
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Estas rotas NÃO exigem login
  publicRoutes: [
    "/", // landing
    "/api/health",
    "/api/valuation",
    "/api/register-interest",
    "/admin/interests", // deixe público se quiser apenas token na chamada X-ADMIN-TOKEN
  ],
});

export const config = {
  // Padrão recomendado pela Clerk para App Router
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
