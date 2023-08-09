import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "../apiWallet/user";
import { CurrentUser, IAuthCredentials } from "../types/user";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "email", type: "text", placeholder: "E-mail" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const userData: IAuthCredentials = {
          email: credentials?.email,
          password: credentials?.password,
        };

        const user = await login(userData);

        if (!user.user.email) {
          return null;
        }

        return { ...user, id: user.token };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }

      return token;
    },

    async session({ session, token }) {
      const currentUser = {
        token: token.token,
        user: token.user,
      } as CurrentUser;

      return { ...session, ...currentUser };
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },
};
