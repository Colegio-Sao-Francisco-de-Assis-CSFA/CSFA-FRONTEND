import { authMiddleware } from "@/middlewares/authMiddleware";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  return authMiddleware(req);
}

export const config = {
  matcher: ["/sign-in", "/dashboard/:path*", "/api/protected/:path*"],
};
