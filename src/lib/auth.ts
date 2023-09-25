import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "../apiWallet/user";
import { IAuthCredentials } from "../types/user";

export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    // }),
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

        try {
          const user = await login(userData);

          if (!user.user.email) {
            return null;
          }

          return {
            id: user.token,
            token: user.token,
            email: user.user.email,
            firstName: user.user.firstName,
            balance: user.user.balance,
          };
        } catch (error) {
          const message = (error as Error).message

          if(message === "404") {
            throw new Error("Route is Not Found");
          }

          if(message === "401") {
            throw new Error(`Invalid password or email`);
          }
          else {
            throw new Error("Server Error");
          }
        }
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
