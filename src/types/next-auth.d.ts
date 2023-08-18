import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    token?: string;

    user?: {
      email: string;
      firstName: string;
      balance: number;
    };
  }

  interface User {
    token: string;

    // user: {
    email: string;
    firstName: string;
    balance: number;
    // };
  }
}
