import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      setor: string;
      name: string;
      email: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    setor: string;
    name: string;
    email: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    setor: string;
    name: string;
    email: string;
  }
}
export default NextAuth(authOptions);