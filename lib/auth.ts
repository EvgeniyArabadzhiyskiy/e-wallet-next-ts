import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "email", type: "text", placeholder: "E-mail" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials as any;

        const res = await fetch(
          "https://wallet-backend-xmk0.onrender.com/api/users/login",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const user = await res.json();

        if (!res.ok || !user.user.email) {
          return null;
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      // console.log("user:", user);
      // console.log("token:", token);
      // console.log("user========================",user);
      return { ...token, ...user };

      // if (user) {
      //   const u = user as unknown as any;
      //   const result = {
      //     ...token,
      //     token: u.token,
      //     user: u.user,
      //   };
      //   console.log("result***********фффффффффф", result);
      //   return result
      // }
      //  else { return token; }
    },
    async session({ session, token }) {

      // const { iat, exp, jti, ...rest } = token as any;

      // session.user = rest;
      // return session;

      return {
        ...session,

        user: {
          ...session.user,
          token: token.token,
          user: token.user,
        },
      };
    },

 
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
};
