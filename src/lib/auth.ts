import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../apiWallet/user";
import { IAuthCredentials } from "../types/user";
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
        

        // console.log("authorize  credentials:==============================", credentials);
        // const { email, password,   } = credentials as any;

        // const res = await fetch(
        //   "https://wallet-backend-xmk0.onrender.com/api/users/login",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json" 
        //     },
        //     body: JSON.stringify({ email, password }),
        //   }
        // );
        // if (!res.ok) {
        //   throw new Error(`Request failed with status ${res.status}`);
        // }
        // const user = await res.json();
        // console.log("User:===============================================", user);

        // if (!res.ok || !user.user.email) {
        //   return null;
        // }

        // return user;


        const userData: IAuthCredentials = {
          email: credentials?.email,
          password: credentials?.password,
        }

        const user = await login(userData);
        // console.log("authorize  user:>>>>>>>>>>>>>>>>>>>>>", user);

        if (!user.user.email) {
          return null
        }

        return { ...user, id: user.token }
      },
    }),
  ],

  callbacks: {
    // async signIn({user}) {
    //   console.log("===================================user:", user);
    //   console.log("SIGN in");
      
    //   return true
    // },

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

      const { iat, exp, jti, ...rest } = token as any;

      session.user = rest;
      return session;
      

      // return {
      //   ...session,

      //   user: {
      //     ...session.user,
      //     token: token.token,
      //     user: token.user,
      //   },
      // };
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
