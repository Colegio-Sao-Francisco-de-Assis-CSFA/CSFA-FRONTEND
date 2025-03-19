import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function authMiddleware(req: NextRequest) {
  const token = await getToken({ req });

  const isOnSignInPage = req.nextUrl.pathname === "/sign-in";
  const isOnProtectedPage = req.nextUrl.pathname.startsWith("/dashboard");
  const isApiRoute = req.nextUrl.pathname.startsWith("/api/protected");

  // Se o usuário está autenticado e tenta acessar /sign-in, redireciona para /dashboard
  if (token && isOnSignInPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Se o usuário NÃO está autenticado e tenta acessar /dashboard ou APIs protegidas, redireciona para /sign-in
  if (!token && (isOnProtectedPage || isApiRoute)) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next(); // Permite a navegação normal
}
