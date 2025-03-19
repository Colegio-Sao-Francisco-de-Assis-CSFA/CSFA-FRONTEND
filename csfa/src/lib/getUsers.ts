import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function getUser() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return null;
  }

  return session.user; // Retorna apenas os dados essenciais
}
