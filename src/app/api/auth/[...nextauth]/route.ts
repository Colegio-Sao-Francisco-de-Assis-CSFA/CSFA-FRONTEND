import {Account, Session} from "next-auth";
import NextAuth from "next-auth/next";
import {JWT} from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 12 * 60 * 60, // 12 horas
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, account }: {token: JWT; account: Account | null}) {
      if (account?.provider === "google" && account?.id_token) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idToken: account.id_token,
            }),
          });

          const user = await res.json();

          if (res.ok && user) {
            token.id = user.id;
            token.setor = user.setor;
            token.name = user.name;
            token.email = user.email;
          }
        } catch (error) {
          console.error("Erro ao autenticar com o backend:", error);
        }
      }

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.setor = token.setor as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions as any);

export { handler as GET, handler as POST };
