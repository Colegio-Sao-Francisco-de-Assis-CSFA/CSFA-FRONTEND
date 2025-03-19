import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  return <h1>Bem-vindo, usuario</h1>;
}
