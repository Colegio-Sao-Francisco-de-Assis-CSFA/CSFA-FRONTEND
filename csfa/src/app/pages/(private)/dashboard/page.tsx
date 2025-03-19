import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  if (!session) return <p>Acesso negado</p>;

  return <h1>Bem-vindo, {session.user?.name}!</h1>;
}
