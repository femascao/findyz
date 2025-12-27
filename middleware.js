import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRouteMatcher = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/u(.*)",

  // APIs públicas existentes
  "/api/health",
  "/api/valuation",
  "/api/register-interest",

  // manter interests público por enquanto
  "/admin/interests",
]);

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;

  // ✅ Root público (sem quebrar o matcher)
  const isPublic = pathname === "/" || isPublicRouteMatcher(req);

  if (!isPublic) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};







