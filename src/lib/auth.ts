import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "../apiWallet/user";
import { CurrentUser, IAuthCredentials } from "../types/user";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      // redirect console developer http://localhost:3000/api/auth/callback/google
    }),
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

        // return { ...user, id: user.token };
        return {
          id: "Test-ID",
          token: user.token,
          email: user.user.email,
          firstName: user.user.firstName,
          balance: user.user.balance,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {

      if (user) {
        token.token = user.token;
        token.email = user.email;
        token.firstName = user.firstName;
        token.balance = user.balance;
      }

      return token;
    },

    async session({ session, token }) {
      // const currentUser = {
      //   token: token.token,
      //   user: {
      //     email: token.email,
      //     firstName: token.firstName,
      //     balance: token.balance,
      //   },
      // } as CurrentUser;

      // return { ...session, ...currentUser };

      return {
        ...session,
        token: token.token,
        user: {
          ...session.user,
          email: token.email,
          firstName: token.firstName,
          balance: token.balance,
        },
      };
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
