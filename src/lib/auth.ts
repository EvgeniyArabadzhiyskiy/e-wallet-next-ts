import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../apiWallet/user";
import { CurrentUser, IAuthCredentials } from "../types/user";
// import { User } from "next-auth";

export const authOptions: NextAuthOptions = {
  // secret: process.env.NEXTAUTH_SECRET,

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
    async jwt({ token, user, account }) {
      // console.log("user:", user);
      // console.log("token:", token);
      // console.log("user========================",user);
      // return { ...token, ...user };

      if (user) {
        const result = {
          ...token,
          token: user.token,
          user: user.user,
        };
        // console.log("result***********фффффффффф", result);
        return result;
      } else {
        return token;
      }
    },
    async session({ session, token }) {
      // const currentUser = {
      //   user: token.user,
      //   token: token.token,
      // } as CurrentUser;

      // return { ...session, ...currentUser };
      //=================================================

      // const { iat, exp, jti, ...rest } = token as any;

      // session.user = rest;
      // return session;

      // return {
      //   ...session,

      //   user: {
      //     ...session.user,
      //     token: token.token,
      //     user: token.user,
      //   },
      // };

      

      const currentUser = {
        user: token.user,
        token: token.token,
      } as CurrentUser;
   
      return {
        ...session,
        user: {
          ...currentUser.user,
          token: currentUser.token,
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
    // newUser: 'register'
  },
};
